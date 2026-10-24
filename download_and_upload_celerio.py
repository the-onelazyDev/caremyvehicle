import os
import urllib.request
import requests
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

PRIVATE_KEY = "private_eJrRIeRW3SUSsmIl2pW+XKX3qCU="
IK_ENDPOINT = "https://ik.imagekit.io/2908vvlod"

local_base = r"d:\caremyvehicle\assets\cars\celerio\360"
os.makedirs(local_base, exist_ok=True)

celerio_colors = [
    {
        "id": "solid-fire-red",
        "name": "Solid Fire Red",
        "hex": "#8E0D0F",
        "prefix": "2025.05.15_14.52.55_Celerio_360_Red_PathTracer_00"
    },
    {
        "id": "speedy-blue",
        "name": "Speedy Blue",
        "hex": "#1F47C2",
        "prefix": "2025.05.15_14.11.03_Celerio_360_Blue_PathTracer_00"
    },
    {
        "id": "arctic-white",
        "name": "Pearl Arctic White",
        "hex": "#F3F3F3",
        "prefix": "2025.05.15_15.39.30_Celerio_360_White_PathTracer_00"
    },
    {
        "id": "glistening-grey",
        "name": "Glistening Grey",
        "hex": "#4A4A4A",
        "prefix": "2025.05.15_15.46.47_Celerio_360_Grey_PathTracer_00"
    },
    {
        "id": "silky-silver",
        "name": "Silky Silver",
        "hex": "#737373",
        "prefix": "2025.05.15_15.14.12_Celerio_360_Silver_PathTracer_00"
    },
    {
        "id": "caffeine-brown",
        "name": "Caffeine Brown",
        "hex": "#28201D",
        "prefix": "2025.05.15_14.35.09_Celerio_360_Brown_PathTracer_00"
    }
]

# 24 frames sampled across 72 frames (steps of 3)
frame_indices = [i * 3 for i in range(24)]
headers = {'User-Agent': 'Mozilla/5.0'}

# 1. Download all frames locally
download_tasks = []
for c in celerio_colors:
    c_dir = os.path.join(local_base, c["id"])
    os.makedirs(c_dir, exist_ok=True)
    
    for frame_no, orig_idx in enumerate(frame_indices, start=1):
        filename = f"{frame_no}.webp"
        filepath = os.path.join(c_dir, filename)
        padded = f"{orig_idx:02d}"
        url = f"https://marutisuzuki.scene7.com/is/image/maruti/{c['prefix']}{padded}?wid=1000&fmt=webp-alpha"
        download_tasks.append((url, filepath, c["id"], filename))

print(f"1. Downloading {len(download_tasks)} Celerio frames...")

def download_one(task):
    url, filepath, color_id, filename = task
    if os.path.exists(filepath) and os.path.getsize(filepath) > 5000:
        return True, filepath, color_id, filename
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = resp.read()
            with open(filepath, "wb") as f:
                f.write(data)
        return True, filepath, color_id, filename
    except Exception as e:
        return False, str(e), color_id, filename

with ThreadPoolExecutor(max_workers=8) as ex:
    dl_results = list(ex.map(download_one, download_tasks))

success_dl = [r for r in dl_results if r[0]]
print(f"Downloaded {len(success_dl)}/{len(download_tasks)} frames successfully.")

# 2. Upload all to ImageKit
print(f"\n2. Uploading {len(success_dl)} frames to ImageKit CDN ({IK_ENDPOINT}/cars/celerio/360/)...")

def upload_one(item):
    _, filepath, color_id, filename = item
    folder = f"/cars/celerio/360/{color_id}/"
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
print(f"Uploaded {len(success_up)}/{len(success_dl)} frames to ImageKit!")
print(f"ImageKit Celerio Base URL: {IK_ENDPOINT}/cars/celerio/360/")
