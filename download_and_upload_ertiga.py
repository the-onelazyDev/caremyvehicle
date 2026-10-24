import os
import urllib.request
import requests
import time
from concurrent.futures import ThreadPoolExecutor

PRIVATE_KEY = "private_eJrRIeRW3SUSsmIl2pW+XKX3qCU="
IK_ENDPOINT = "https://ik.imagekit.io/2908vvlod"

ertiga_colors = [
    {
        "id": "oxford-blue",
        "name": "Pearl Metallic Oxford Blue",
        "hex": "#40519C",
        "prefix": "ertiga_360_V1_blue_"
    },
    {
        "id": "pearl-arctic-white",
        "name": "Pearl Arctic White",
        "hex": "#F3F3F3",
        "prefix": "ertiga_360_V1_white_"
    },
    {
        "id": "splendid-silver",
        "name": "Splendid Silver",
        "hex": "#737373",
        "prefix": "ertiga_360_V1_silver_"
    },
    {
        "id": "magma-grey",
        "name": "Magma Grey",
        "hex": "#2B2C31",
        "prefix": "ertiga_360_V1_grey_"
    },
    {
        "id": "auburn-red",
        "name": "Auburn Red",
        "hex": "#732112",
        "prefix": "ertiga_360_V1_red_"
    },
    {
        "id": "dignity-brown",
        "name": "Dignity Brown",
        "hex": "#1F1412",
        "prefix": "ertiga_360_V1_brown_"
    },
    {
        "id": "bluish-black",
        "name": "Pearl Midnight Black",
        "hex": "#141414",
        "prefix": "ertiga_360_V1_bluishblack_"
    }
]

local_base = r"d:\caremyvehicle\assets\cars\ertiga\360"
web_base = r"d:\caremyvehicle\web\assets\cars\ertiga\360"
os.makedirs(local_base, exist_ok=True)
os.makedirs(web_base, exist_ok=True)

# 24 frames sampled across 72 frames: 0, 3, 6, ... 69
frame_indices = [i * 3 for i in range(24)]
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

download_tasks = []
for c in ertiga_colors:
    c_dir = os.path.join(local_base, c["id"])
    w_dir = os.path.join(web_base, c["id"])
    os.makedirs(c_dir, exist_ok=True)
    os.makedirs(w_dir, exist_ok=True)
    
    for frame_no, orig_idx in enumerate(frame_indices, start=1):
        filename = f"{frame_no}.webp"
        filepath = os.path.join(c_dir, filename)
        webpath = os.path.join(w_dir, filename)
        padded = f"{orig_idx:05d}"
        url = f"https://marutisuzuki.scene7.com/is/image/maruti/{c['prefix']}{padded}?wid=1000&fmt=webp-alpha"
        download_tasks.append((url, filepath, webpath, c["id"], filename))

print(f"1. Downloading {len(download_tasks)} frames for Maruti Suzuki Ertiga...")

def download_one(task):
    url, filepath, webpath, color_id, filename = task
    if os.path.exists(filepath) and os.path.getsize(filepath) > 5000:
        if not os.path.exists(webpath):
            with open(filepath, "rb") as f_s, open(webpath, "wb") as f_d:
                f_d.write(f_s.read())
        return True, filepath, color_id, filename
    for attempt in range(3):
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
            time.sleep(1)
    return False, f"{url} -> {e}", color_id, filename

with ThreadPoolExecutor(max_workers=10) as ex:
    dl_results = list(ex.map(download_one, download_tasks))

success_dl = [r for r in dl_results if r[0]]
print(f"Downloaded {len(success_dl)}/{len(download_tasks)} Ertiga frames.")

# 2. Upload to ImageKit
print(f"\n2. Uploading {len(success_dl)} frames to ImageKit (/cars/ertiga/360/)...")

def upload_one(item):
    _, filepath, color_id, filename = item
    folder = f"/cars/ertiga/360/{color_id}/"
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
print(f"Uploaded {len(success_up)}/{len(success_dl)} frames to ImageKit for Ertiga!")
