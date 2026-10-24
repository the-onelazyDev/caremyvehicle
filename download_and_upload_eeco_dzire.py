import os
import urllib.request
import requests
from concurrent.futures import ThreadPoolExecutor

PRIVATE_KEY = "private_eJrRIeRW3SUSsmIl2pW+XKX3qCU="
IK_ENDPOINT = "https://ik.imagekit.io/2908vvlod"

eeco_colors = [
    {
        "id": "bluish-black",
        "name": "Pearl Midnight Black",
        "hex": "#141414",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.07.02_14.10.37_Eeco_360_Blue_PathTracer_",
        "digits": 4
    },
    {
        "id": "brisk-blue",
        "name": "Metallic Brisk Blue",
        "hex": "#0D6DC3",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.06.21_12.18.21_Eeco_360_Blue_PathTracer_",
        "digits": 4
    },
    {
        "id": "silky-silver",
        "name": "Metallic Silky Silver",
        "hex": "#737373",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.07.02_13.55.47_Eeco_360_Silver_PathTracer_",
        "digits": 4
    },
    {
        "id": "solid-white",
        "name": "Solid White",
        "hex": "#F3F3F3",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.07.02_13.48.15_Eeco_360_Blue_PathTracer_",
        "digits": 4
    },
    {
        "id": "glistening-grey",
        "name": "Metallic Glistening Grey",
        "hex": "#4A4A4A",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.07.02_14.02.51_Eeco_360_Blue_PathTracer_",
        "digits": 4
    }
]

dzire_colors = [
    {
        "id": "pearl-arctic-white",
        "name": "Pearl Arctic White",
        "hex": "#F3F3F3",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.03.24_20.10.25_Dzire_360_White_PathTracer_",
        "digits": 4
    },
    {
        "id": "splendid-silver",
        "name": "Splendid Silver",
        "hex": "#737373",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.03.24_19.58.34_Dzire_360_Silver_PathTracer_",
        "digits": 4
    },
    {
        "id": "alluring-blue",
        "name": "Alluring Blue",
        "hex": "#415159",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.03.24_19.03.09_Dzire_360_Blue_PathTracer_",
        "digits": 4
    },
    {
        "id": "bluish-black",
        "name": "Bluish Black",
        "hex": "#141414",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.03.24_19.14.28_Dzire_360_BluishBlack_PathTracer_",
        "digits": 4
    },
    {
        "id": "nutmeg-brown",
        "name": "Nutmeg Brown",
        "hex": "#54473C",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.03.24_19.24.56_Dzire_360_Brown_PathTracer_",
        "digits": 4
    },
    {
        "id": "gallant-red",
        "name": "Gallant Red",
        "hex": "#D2232B",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.05.20_15.04.35_Dzire_360_Red_",
        "digits": 5
    },
    {
        "id": "magma-grey",
        "name": "Magma Grey",
        "hex": "#2B2C31",
        "base": "https://marutisuzuki.scene7.com/is/image/maruti/2025.03.24_19.36.38_Dzire_360_Grey_PathTracer_",
        "digits": 4
    }
]

headers = {'User-Agent': 'Mozilla/5.0'}

def prepare_and_process(car_id, color_list):
    local_base = rf"d:\caremyvehicle\assets\cars\{car_id}\360"
    web_base = rf"d:\caremyvehicle\web\assets\cars\{car_id}\360"
    os.makedirs(local_base, exist_ok=True)
    os.makedirs(web_base, exist_ok=True)
    
    download_tasks = []
    for c in color_list:
        c_dir = os.path.join(local_base, c["id"])
        w_dir = os.path.join(web_base, c["id"])
        os.makedirs(c_dir, exist_ok=True)
        os.makedirs(w_dir, exist_ok=True)
        
        for frame_no in range(1, 25):
            orig_idx = frame_no - 1
            filename = f"{frame_no}.webp"
            filepath = os.path.join(c_dir, filename)
            webpath = os.path.join(w_dir, filename)
            
            padded = f"{orig_idx:0{c['digits']}d}"
            url = f"{c['base']}{padded}?wid=1000&fmt=webp-alpha"
            download_tasks.append((url, filepath, webpath, car_id, c["id"], filename))
            
    print(f"\n=================== {car_id.upper()} ===================")
    print(f"1. Downloading {len(download_tasks)} frames for {car_id}...")
    
    def download_one(task):
        url, filepath, webpath, car_name, color_id, filename = task
        if os.path.exists(filepath) and os.path.getsize(filepath) > 5000:
            if not os.path.exists(webpath):
                with open(filepath, "rb") as f_src, open(webpath, "wb") as f_dst:
                    f_dst.write(f_src.read())
            return True, filepath, car_name, color_id, filename
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=12) as resp:
                data = resp.read()
                with open(filepath, "wb") as f:
                    f.write(data)
                with open(webpath, "wb") as f_w:
                    f_w.write(data)
            return True, filepath, car_name, color_id, filename
        except Exception as e:
            return False, f"{url} -> {e}", car_name, color_id, filename
            
    with ThreadPoolExecutor(max_workers=10) as ex:
        dl_results = list(ex.map(download_one, download_tasks))
        
    success_dl = [r for r in dl_results if r[0]]
    failed_dl = [r for r in dl_results if not r[0]]
    print(f"Downloaded {len(success_dl)}/{len(download_tasks)} frames successfully.")
    if failed_dl:
        for f in failed_dl[:5]:
            print(f"  Fail: {f[1]}")
            
    # 2. Upload to ImageKit
    print(f"2. Uploading {len(success_dl)} frames to ImageKit (/cars/{car_id}/360/)...")
    
    def upload_one(item):
        _, filepath, car_name, color_id, filename = item
        folder = f"/cars/{car_name}/360/{color_id}/"
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
    print(f"Uploaded {len(success_up)}/{len(success_dl)} frames to ImageKit for {car_id}!")

if __name__ == "__main__":
    prepare_and_process("eeco", eeco_colors)
    prepare_and_process("dzire", dzire_colors)
    print("\nALL EECO & DZIRE FRAMES DOWNLOADED AND UPLOADED TO IMAGEKIT!")
