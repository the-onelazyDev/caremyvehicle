import os
import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
import time

PRIVATE_KEY = "private_eJrRIeRW3SUSsmIl2pW+XKX3qCU="
BASE_DIR = r"d:\caremyvehicle\assets\cars"
IK_BASE_URL = "https://ik.imagekit.io/2908vvlod"

# Collect all files to upload
files_to_upload = []

for root, dirs, files in os.walk(BASE_DIR):
    for f in files:
        if f.lower().endswith(('.webp', '.jpg', '.jpeg', '.png')):
            full_path = os.path.join(root, f)
            rel_path = os.path.relpath(full_path, BASE_DIR).replace('\\', '/')
            # Target folder in ImageKit: e.g. /cars/swift/360/sizzling-red-bluish-black/
            folder_parts = rel_path.split('/')[:-1]
            folder = '/cars/' + '/'.join(folder_parts)
            if not folder.endswith('/'):
                folder += '/'
            
            files_to_upload.append({
                "local_path": full_path,
                "file_name": f,
                "folder": folder,
                "ik_path": f"/cars/{rel_path}"
            })

print(f"Found {len(files_to_upload)} car image files to upload to ImageKit.")

def upload_file(item):
    try:
        with open(item["local_path"], "rb") as f_obj:
            resp = requests.post(
                "https://upload.imagekit.io/api/v1/files/upload",
                auth=(PRIVATE_KEY, ''),
                files={"file": f_obj},
                data={
                    "fileName": item["file_name"],
                    "folder": item["folder"],
                    "useUniqueFileName": "false"
                },
                timeout=20
            )
            if resp.status_code == 200:
                return (True, item["ik_path"], resp.json().get("url"))
            else:
                return (False, item["ik_path"], f"Status {resp.status_code}: {resp.text}")
    except Exception as e:
        return (False, item["ik_path"], str(e))

success_count = 0
fail_count = 0

start_time = time.time()
print(f"Uploading files with 6 concurrent threads...")

with ThreadPoolExecutor(max_workers=6) as executor:
    futures = {executor.submit(upload_file, item): item for item in files_to_upload}
    for i, fut in enumerate(as_completed(futures), start=1):
        success, path, res = fut.result()
        if success:
            success_count += 1
            if i % 15 == 0 or i == len(files_to_upload):
                print(f"[{i}/{len(files_to_upload)}] Uploaded: {path}")
        else:
            fail_count += 1
            print(f"[FAIL] {path}: {res}")

duration = time.time() - start_time
print(f"\n==========================================")
print(f"Finished in {duration:.1f}s!")
print(f"Successfully uploaded: {success_count}/{len(files_to_upload)}")
print(f"Failures: {fail_count}")
print(f"ImageKit CDN Base: {IK_BASE_URL}/cars/")
print(f"==========================================")
