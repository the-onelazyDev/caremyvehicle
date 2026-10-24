import os
import urllib.request
import requests
import time
from concurrent.futures import ThreadPoolExecutor

PRIVATE_KEY = "private_eJrRIeRW3SUSsmIl2pW+XKX3qCU="
IK_ENDPOINT = "https://ik.imagekit.io/2908vvlod"

local_base = r"d:\caremyvehicle\assets\cars\wagon-r\360"
os.makedirs(local_base, exist_ok=True)

wagon_r_colors = [
    {
        "id": "gallant-red-black-roof",
        "name": "Gallant Red with Black Roof",
        "hex": "#D2232B",
        "prefix": "WagonR_360_RedBluishBlack_000"
    },
    {
        "id": "poolside-blue",
        "name": "Poolside Blue",
        "hex": "#1188C5",
        "prefix": "WagonR_360_Blue_000"
    },
    {
        "id": "solid-white",
        "name": "Solid White",
        "hex": "#F3F3F3",
        "prefix": "WagonR_360_White_000"
    },
    {
        "id": "magma-grey",
        "name": "Magma Grey",
        "hex": "#2B2C31",
        "prefix": "WagonR_360_Grey_000"
    },
    {
        "id": "silky-silver",
        "name": "Silky Silver",
        "hex": "#737373",
        "prefix": "WagonR_360_Silver_000"
    },
    {
        "id": "nutmeg-brown",
        "name": "Nutmeg Brown",
        "hex": "#54473C",
        "prefix": "WagonR_360_Brown_000"
    }
]

# 24 frames sampled across 72 frames (0, 3, 6, ... 69)
frame_indices = [i * 3 for i in range(24)]
headers = {'User-Agent': 'Mozilla/5.0'}

# 1. Download all frames
download_tasks = []
for c in wagon_r_colors:
    c_dir = os.path.join(local_base, c["id"])
    os.makedirs(c_dir, exist_ok=True)
    
    for frame_no, orig_idx in enumerate(frame_indices, start=1):
        filename = f"{frame_no}.webp"
        filepath = os.path.join(c_dir, filename)
        padded = f"{orig_idx:02d}"
        url = f"https://marutisuzuki.scene7.com/is/image/maruti/{c['prefix']}{padded}?wid=1000&fmt=webp-alpha"
        download_tasks.append((url, filepath, c["id"], filename))

print(f"1. Downloading {len(download_tasks)} Wagon R frames...")

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
print(f"\n2. Uploading {len(success_dl)} frames to ImageKit CDN ({IK_ENDPOINT}/cars/wagon-r/360/)...")

def upload_one(item):
    _, filepath, color_id, filename = item
    folder = f"/cars/wagon-r/360/{color_id}/"
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
print(f"ImageKit Wagon R Base URL: {IK_ENDPOINT}/cars/wagon-r/360/")
