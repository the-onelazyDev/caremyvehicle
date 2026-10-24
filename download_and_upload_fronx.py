import os
import urllib.request
import requests
import time
import shutil
from concurrent.futures import ThreadPoolExecutor

PRIVATE_KEY = "private_eJrRIeRW3SUSsmIl2pW+XKX3qCU="
IK_ENDPOINT = "https://ik.imagekit.io/2908vvlod"

fronx_colors = [
    {
        "id": "nexa-blue",
        "name": "Nexa Blue (Celestial)",
        "hex": "#163472",
        "prefix": "2025.05.26_11.42.51_Fronx_360_Blue_PathTracer_"
    },
    {
        "id": "opulent-red-black-roof",
        "name": "Opulent Red with Bluish Black Roof",
        "hex": "#AC0F0F",
        "prefix": "2025.03.13_05.43.48_Fronx_360_RedBlack_PathTracer_"
    },
    {
        "id": "earthen-brown-black-roof",
        "name": "Earthen Brown with Bluish Black Roof",
        "hex": "#95897B",
        "prefix": "2025.03.13_05.17.06_Fronx_360_BrownBluishBlack_PathTracer_"
    },
    {
        "id": "splendid-silver-black-roof",
        "name": "Splendid Silver with Bluish Black Roof",
        "hex": "#B6BABD",
        "prefix": "2025.03.13_06.01.39_Fronx_360_SilverBluishBlack_PathTracer_"
    },
    {
        "id": "arctic-white",
        "name": "Arctic White",
        "hex": "#F9F9F9",
        "prefix": "2025.03.13_06.10.30_Fronx_360_White_PathTracer_"
    },
    {
        "id": "bluish-black",
        "name": "Bluish Black",
        "hex": "#171717",
        "prefix": "2025.03.13_04.59.26_Fronx_360_BluishBlack_PathTracer_"
    },
    {
        "id": "grandeur-grey",
        "name": "Grandeur Grey",
        "hex": "#464848",
        "prefix": "2025.03.13_05.26.01_Fronx_360_Grey_PathTracer_"
    },
    {
        "id": "earthen-brown",
        "name": "Earthen Brown",
        "hex": "#95897B",
        "prefix": "2025.03.13_05.08.17_Fronx_360_Brown_PathTracer_"
    },
    {
        "id": "opulent-red",
        "name": "Opulent Red",
        "hex": "#AC0F0F",
        "prefix": "2025.03.13_05.34.54_Fronx_360_Red_PathTracer_"
    },
    {
        "id": "splendid-silver",
        "name": "Splendid Silver",
        "hex": "#B6BABD",
        "prefix": "2025.03.13_05.52.41_Fronx_360_Silver_PathTracer_"
    }
]

local_base = r"d:\caremyvehicle\assets\cars\fronx\360"
web_base = r"d:\caremyvehicle\web\assets\cars\fronx\360"
os.makedirs(local_base, exist_ok=True)
os.makedirs(web_base, exist_ok=True)

# 24 frames sampled across 72 frames: 0, 3, 6, ... 69
frame_indices = [i * 3 for i in range(24)]
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

download_tasks = []
for c in fronx_colors:
    c_dir = os.path.join(local_base, c["id"])
    w_dir = os.path.join(web_base, c["id"])
    os.makedirs(c_dir, exist_ok=True)
    os.makedirs(w_dir, exist_ok=True)
    
    for frame_no, orig_idx in enumerate(frame_indices, start=1):
        filename = f"{frame_no}.webp"
        filepath = os.path.join(c_dir, filename)
        webpath = os.path.join(w_dir, filename)
        padded = f"{orig_idx:04d}"
        url = f"https://marutisuzuki.scene7.com/is/image/maruti/{c['prefix']}{padded}?wid=1000&fmt=webp-alpha"
        download_tasks.append((url, filepath, webpath, c["id"], filename, frame_no))

print(f"1. Downloading {len(download_tasks)} frames for Maruti Suzuki Fronx...")

def download_one(task):
    url, filepath, webpath, color_id, filename, frame_no = task
    if os.path.exists(filepath) and os.path.getsize(filepath) > 5000:
        if not os.path.exists(webpath):
            with open(filepath, "rb") as f_s, open(webpath, "wb") as f_d:
                f_d.write(f_s.read())
        return True, filepath, color_id, filename
    
    last_err = None
    for attempt in range(4):
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=12) as resp:
                data = resp.read()
                with open(filepath, "wb") as f:
                    f.write(data)
                with open(webpath, "wb") as f_w:
                    f_w.write(data)
            return True, filepath, color_id, filename
        except Exception as e:
            last_err = e
            time.sleep(1 + attempt)
            
    # Fallback: copy adjacent frame if available
    prev_no = frame_no - 1 if frame_no > 1 else frame_no + 1
    prev_path = os.path.join(os.path.dirname(filepath), f"{prev_no}.webp")
    if os.path.exists(prev_path):
        shutil.copyfile(prev_path, filepath)
        shutil.copyfile(prev_path, webpath)
        print(f"Fallback used for {color_id}/{filename} from {prev_no}.webp")
        return True, filepath, color_id, filename
        
    return False, f"{url} -> {last_err}", color_id, filename

with ThreadPoolExecutor(max_workers=6) as ex:
    dl_results = list(ex.map(download_one, download_tasks))

success_dl = [r for r in dl_results if r[0]]
print(f"Downloaded/resolved {len(success_dl)}/{len(download_tasks)} Fronx frames.")

# 2. Upload to ImageKit
print(f"\n2. Uploading {len(success_dl)} frames to ImageKit (/cars/fronx/360/)...")

def upload_one(item):
    _, filepath, color_id, filename = item
    folder = f"/cars/fronx/360/{color_id}/"
    try:
        with open(filepath, "rb") as f_obj:
            resp = requests.post(
                "https://upload.imagekit.io/api/v1/files/upload",
                auth=(PRIVATE_KEY, ''),
                files={"file": f_obj},
                data={
                    "fileName": filename,
                    "folder": folder,
                    "useUniqueFileName": "false"
                },
                timeout=20
            )
            if resp.status_code == 200:
                return True, f"{color_id}/{filename}"
            else:
                return False, f"{color_id}/{filename}: {resp.status_code}"
    except Exception as e:
        return False, f"{color_id}/{filename}: {e}"

with ThreadPoolExecutor(max_workers=8) as ex:
    up_results = list(ex.map(upload_one, success_dl))

success_up = [r for r in up_results if r[0]]
print(f"Uploaded {len(success_up)}/{len(success_dl)} frames to ImageKit for Fronx!")
