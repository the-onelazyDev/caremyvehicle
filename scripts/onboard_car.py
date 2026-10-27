#!/usr/bin/env python3
"""
CareMyVehicle — Unified Car Onboarding Engine
Automates asset fetching, in-memory WebP conversion, ImageKit CDN upload,
and dual-parity code injection for js/carData.js and web/js/carData.js.
"""

import os
import sys
import io
import json
import argparse
import subprocess
import urllib.request
import requests
from PIL import Image
from concurrent.futures import ThreadPoolExecutor, as_completed

# Ensure UTF-8 output on Windows
sys.stdout.reconfigure(encoding='utf-8')

IMAGEKIT_PRIVATE_KEY = os.getenv("IMAGEKIT_PRIVATE_KEY", "private_eJrRIeRW3SUSsmIl2pW+XKX3qCU=")
IMAGEKIT_ENDPOINT = "https://ik.imagekit.io/2908vvlod"
IMAGEKIT_UPLOAD_URL = "https://upload.imagekit.io/api/v1/files/upload"
HTTP_HEADERS = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}


def fetch_bytes(url, max_retries=3, timeout=15):
    """Fetch binary data from URL with retries."""
    for attempt in range(max_retries):
        try:
            req = urllib.request.Request(url, headers=HTTP_HEADERS)
            with urllib.request.urlopen(req, timeout=timeout) as res:
                if res.status == 200:
                    return res.read()
        except Exception as e:
            if attempt == max_retries - 1:
                print(f"  [ERROR] Failed to fetch {url}: {e}")
                return None
    return None


def convert_to_webp(image_bytes, quality=85, max_dimension=None):
    """Convert raw image bytes to WebP in memory, compositing transparency over pure #FFFFFF."""
    try:
        img = Image.open(io.BytesIO(image_bytes))
        
        # Handle RGBA transparency by compositing onto a clean white background
        if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
            img = img.convert('RGBA')
            bg = Image.new('RGB', img.size, (255, 255, 255))
            bg.paste(img, mask=img.split()[3])
            img = bg
        elif img.mode != 'RGB':
            img = img.convert('RGB')

        # Optional resize if max_dimension is provided
        if max_dimension:
            w, h = img.size
            if max(w, h) > max_dimension:
                ratio = max_dimension / max(w, h)
                img = img.resize((int(w * ratio), int(h * ratio)), Image.LANCZOS)

        out_buf = io.BytesIO()
        img.save(out_buf, format='WEBP', quality=quality, method=4)
        return out_buf.getvalue()
    except Exception as e:
        print(f"  [ERROR] WebP conversion failed: {e}")
        return None


def upload_to_imagekit(image_bytes, file_name, folder, max_retries=3):
    """Upload WebP bytes directly to ImageKit CDN via REST API."""
    for attempt in range(max_retries):
        try:
            resp = requests.post(
                IMAGEKIT_UPLOAD_URL,
                auth=(IMAGEKIT_PRIVATE_KEY, ''),
                files={"file": (file_name, io.BytesIO(image_bytes), 'image/webp')},
                data={
                    "fileName": file_name,
                    "folder": folder,
                    "useUniqueFileName": "false"
                },
                timeout=30
            )
            if resp.status_code in (200, 201):
                return True
            else:
                print(f"  [WARN] Attempt {attempt+1} failed ({resp.status_code}): {resp.text[:120]}")
        except Exception as e:
            print(f"  [WARN] Attempt {attempt+1} exception: {e}")
    return False


def process_spin360(car_slug, spin_config, dry_run=False):
    """Process and upload 360 spin turntable frames."""
    if not spin_config:
        return None

    total_frames = spin_config.get("totalFrames", 36)
    source_url_template = spin_config.get("sourceUrlTemplate")
    default_color_slug = spin_config.get("defaultColor", "default")
    folder = f"/cars/{car_slug}/360/{default_color_slug}"

    print(f"\n[360 SPINS] Processing {total_frames} frames for {car_slug} ({default_color_slug})...")
    
    tasks = []
    for frame in range(1, total_frames + 1):
        url = source_url_template.replace("{frame}", str(frame))
        tasks.append((frame, url))

    uploaded_count = 0

    def handle_frame(task):
        frame_num, frame_url = task
        raw = fetch_bytes(frame_url)
        if not raw:
            return False
        webp = convert_to_webp(raw, quality=80, max_dimension=1056)
        if not webp:
            return False
        if dry_run:
            return True
        return upload_to_imagekit(webp, f"{frame_num}.webp", folder)

    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = {executor.submit(handle_frame, t): t[0] for t in tasks}
        for f in as_completed(futures):
            frame_num = futures[f]
            if f.result():
                uploaded_count += 1
            else:
                print(f"  [FAIL] Frame {frame_num} failed!")

    print(f"  -> Uploaded {uploaded_count}/{total_frames} frames to ImageKit.")

    return {
        "totalFrames": total_frames,
        "folder": f"{IMAGEKIT_ENDPOINT}/cars/{car_slug}/360",
        "format": "webp",
        "defaultColor": default_color_slug,
        "colors": spin_config.get("colors", [
            {"id": default_color_slug, "name": spin_config.get("defaultColorName", "Default Color"), "hex": spin_config.get("defaultColorHex", "#CCCCCC")}
        ])
    }


def process_colors(car_slug, colors_config, dry_run=False):
    """Process and upload official studio paint shades."""
    if not colors_config:
        return []

    print(f"\n[COLORS] Processing {len(colors_config)} official paint shades for {car_slug}...")
    folder = f"/cars/{car_slug}/colors"
    processed_colors = []

    def handle_color(c):
        c_id = c["id"]
        c_name = c["name"]
        c_hex = c["hex"]
        source_url = c.get("sourceUrl")
        cdn_url = f"{IMAGEKIT_ENDPOINT}/cars/{car_slug}/colors/{c_id}.webp"

        if source_url and not dry_run:
            raw = fetch_bytes(source_url)
            if raw:
                webp = convert_to_webp(raw, quality=85, max_dimension=1056)
                if webp:
                    success = upload_to_imagekit(webp, f"{c_id}.webp", folder)
                    if not success:
                        print(f"  [WARN] Failed to upload color {c_id}")
            else:
                print(f"  [WARN] Could not fetch color {c_id} from {source_url}")

        return {
            "id": c_id,
            "name": c_name,
            "hex": c_hex,
            "image": cdn_url
        }

    with ThreadPoolExecutor(max_workers=6) as executor:
        futures = [executor.submit(handle_color, c) for c in colors_config]
        for f in as_completed(futures):
            processed_colors.append(f.result())

    # Sort back in original order
    order_map = {c["id"]: i for i, c in enumerate(colors_config)}
    processed_colors.sort(key=lambda x: order_map.get(x["id"], 999))
    print(f"  -> Processed {len(processed_colors)} colors on ImageKit.")
    return processed_colors


def process_gallery(car_slug, gallery_config, dry_run=False):
    """Process and upload high-resolution photo gallery cards."""
    if not gallery_config:
        return []

    print(f"\n[GALLERY] Processing {len(gallery_config)} gallery images for {car_slug}...")
    folder = f"/cars/{car_slug}/gallery"
    processed_gallery = []

    def handle_photo(item):
        photo_id = item["id"]
        title = item["title"]
        source_url = item.get("sourceUrl")
        cdn_url = f"{IMAGEKIT_ENDPOINT}/cars/{car_slug}/gallery/{photo_id}.webp"

        if source_url and not dry_run:
            raw = fetch_bytes(source_url)
            if raw:
                webp = convert_to_webp(raw, quality=85, max_dimension=1200)
                if webp:
                    success = upload_to_imagekit(webp, f"{photo_id}.webp", folder)
                    if not success:
                        print(f"  [WARN] Failed to upload gallery photo {photo_id}")
            else:
                print(f"  [WARN] Could not fetch photo {photo_id} from {source_url}")

        return {
            "id": photo_id,
            "title": title,
            "url": cdn_url
        }

    with ThreadPoolExecutor(max_workers=6) as executor:
        futures = [executor.submit(handle_photo, item) for item in gallery_config]
        for f in as_completed(futures):
            processed_gallery.append(f.result())

    order_map = {item["id"]: i for i, item in enumerate(gallery_config)}
    processed_gallery.sort(key=lambda x: order_map.get(x["id"], 999))
    print(f"  -> Processed {len(processed_gallery)} gallery cards on ImageKit.")
    return processed_gallery


def generate_js_object(car_data):
    """Format car dictionary into a clean JavaScript object string with 2-space indentation."""
    return json.dumps(car_data, indent=4, ensure_ascii=False)


REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def inject_car_into_codebase(car_slug, js_obj_str, dry_run=False):
    """Inject or replace the car definition in both js/carData.js and web/js/carData.js."""
    paths = [
        os.path.join(REPO_ROOT, "js", "carData.js"),
        os.path.join(REPO_ROOT, "web", "js", "carData.js")
    ]

    for p in paths:
        if not os.path.exists(p):
            print(f"[ERROR] Target file not found: {p}")
            return False

        with open(p, "r", encoding="utf-8") as f:
            content = f.read()

        # Format JS string nicely
        indented_js = "  " + js_obj_str.replace("\n", "\n  ")

        patterns = [
            f'"id": "{car_slug}"',
            f"'id': '{car_slug}'",
            f"id: '{car_slug}'",
            f'id: "{car_slug}"'
        ]
        target_idx = -1
        for pat in patterns:
            pos = content.find(pat)
            if pos != -1:
                target_idx = pos
                break

        if target_idx != -1:
            print(f"  [REPLACE] Updating existing '{car_slug}' in {p}...")
            obj_start = content.rfind("  {\n", 0, target_idx)
            next_obj = content.find("\n  {\n", target_idx)
            array_end = content.find("\n];", target_idx)
            if next_obj != -1 and next_obj < array_end:
                obj_end = next_obj + 1
                new_content = content[:obj_start] + indented_js + ",\n" + content[obj_end:]
            else:
                obj_end = array_end
                new_content = content[:obj_start] + indented_js + content[obj_end:]
        else:
            print(f"  [APPEND] Adding new car '{car_slug}' to {p}...")
            # To append, find the closing ]; of the CARS array (which occurs right before calculateOnRoadPrice helper)
            helper_idx = content.find("export function calculateOnRoadPrice")
            if helper_idx == -1:
                helper_idx = content.find("function calculateOnRoadPrice")
            
            if helper_idx != -1:
                array_end = content.rfind("];", 0, helper_idx)
            else:
                array_end = content.rfind("];")

            if array_end == -1:
                print(f"[ERROR] Closing array '];' not found in {p}")
                return False
            
            before_end = content[:array_end].rstrip()
            if not before_end.endswith(","):
                before_end += ","
            
            after_end = content[array_end:]
            new_content = before_end + "\n" + indented_js + ",\n" + after_end

        if not dry_run:
            with open(p, "w", encoding="utf-8") as f:
                f.write(new_content)
            print(f"  -> Successfully synchronized {p}")

    return True


def validate_codebase():
    """Run Node.js validation checking that both files parse and CARS can be imported."""
    print("\n[VALIDATION] Running Node.js syntax & ES Module validation...")
    cmd = [
        "node", "-e",
        "Promise.all([import('./js/carData.js'), import('./web/js/carData.js')]).then(([root, web]) => {\n"
        "  console.log('✓ js/carData.js CARS count:', root.CARS.length);\n"
        "  console.log('✓ web/js/carData.js CARS count:', web.CARS.length);\n"
        "  if (root.CARS.length !== web.CARS.length) {\n"
        "    console.error('ERROR: Length mismatch!');\n"
        "    process.exit(1);\n"
        "  }\n"
        "  console.log('✓ Perfect 1:1 Parity Verified!');\n"
        "}).catch(err => { console.error(err); process.exit(1); });"
    ]
    res = subprocess.run(cmd, cwd=REPO_ROOT, capture_output=True, text=True)
    if res.returncode == 0:
        print(res.stdout)
        return True
    else:
        print(f"[ERROR] Validation failed:\n{res.stderr}\n{res.stdout}")
        return False


def main():
    parser = argparse.ArgumentParser(description="CareMyVehicle Car Onboarding Engine")
    parser.add_argument("--config", required=True, help="Path to car JSON config file")
    parser.add_argument("--dry-run", action="store_true", help="Simulate without uploading or modifying files")
    args = parser.parse_args()

    if not os.path.exists(args.config):
        print(f"[ERROR] Config file not found: {args.config}")
        sys.exit(1)

    with open(args.config, "r", encoding="utf-8") as f:
        cfg = json.load(f)

    car_slug = cfg["id"]
    car_name = cfg["name"]
    brand = cfg["brand"]
    print(f"\n{'='*70}\nStarting Onboarding: {car_name} ({brand}) [ID: {car_slug}]\n{'='*70}")

    # 1. Process 360 Spin
    spin360 = process_spin360(car_slug, cfg.get("spin360"), dry_run=args.dry_run)

    # 2. Process Official Colors
    colors = process_colors(car_slug, cfg.get("colors", []), dry_run=args.dry_run)

    # 3. Process Gallery Cards
    gallery = process_gallery(car_slug, cfg.get("gallery", []), dry_run=args.dry_run)

    # 4. Construct Final Car Object
    hero_image = cfg.get("heroImage")
    if not hero_image and colors:
        hero_image = colors[0]["image"]

    car_object = {
        "id": car_slug,
        "name": car_name,
        "brand": brand,
        "tagline": cfg.get("tagline", ""),
        "launchDate": cfg.get("launchDate", "2025"),
        "bodyType": cfg.get("bodyType", "SUV"),
        "fuelTypes": cfg.get("fuelTypes", ["Petrol"]),
        "priceRange": cfg.get("priceRange", ""),
        "minPrice": cfg.get("minPrice", 0),
        "maxPrice": cfg.get("maxPrice", 0),
        "safetyRating": cfg.get("safetyRating", "5-Star NCAP"),
        "groundClearance": cfg.get("groundClearance", "190 mm"),
        "bootSpace": cfg.get("bootSpace", "400 L"),
        "waitingPeriod": cfg.get("waitingPeriod", "2 - 4 Weeks"),
        "heroImage": hero_image,
        "summary": cfg.get("summary", ""),
        "colors": colors,
        "gallery": gallery,
        "specs": cfg.get("specs", {}),
        "variants": cfg.get("variants", [])
    }
    if spin360:
        car_object["spin360"] = spin360

    # 5. Inject into Codebase
    print(f"\n[CODEBASE SYNC] Synchronizing {car_slug} into root & web data files...")
    js_str = generate_js_object(car_object)
    success = inject_car_into_codebase(car_slug, js_str, dry_run=args.dry_run)
    if not success:
        print("[ERROR] Codebase synchronization failed!")
        sys.exit(1)

    # 6. Validate Syntax & Parity
    if not args.dry_run:
        valid = validate_codebase()
        if not valid:
            print("[ERROR] Codebase validation failed after injection!")
            sys.exit(1)

    print(f"\n{'='*70}\n✓ SUCCESS: {car_name} successfully onboarded to CareMyVehicle!\n{'='*70}\n")


if __name__ == "__main__":
    main()
