import urllib.request
import os
import requests
import time
import shutil

PRIVATE_KEY = "private_eJrRIeRW3SUSsmIl2pW+XKX3qCU="
IK_ENDPOINT = "https://ik.imagekit.io/2908vvlod"

missing = [
    ("pearl-arctic-white", 10, "https://marutisuzuki.scene7.com/is/image/maruti/2025.03.24_20.10.25_Dzire_360_White_PathTracer_0009?wid=1000&fmt=webp-alpha"),
    ("bluish-black", 16, "https://marutisuzuki.scene7.com/is/image/maruti/2025.03.24_19.14.28_Dzire_360_BluishBlack_PathTracer_0015?wid=1000&fmt=webp-alpha"),
    ("magma-grey", 3, "https://marutisuzuki.scene7.com/is/image/maruti/2025.03.24_19.36.38_Dzire_360_Grey_PathTracer_0002?wid=1000&fmt=webp-alpha"),
    ("magma-grey", 18, "https://marutisuzuki.scene7.com/is/image/maruti/2025.03.24_19.36.38_Dzire_360_Grey_PathTracer_0017?wid=1000&fmt=webp-alpha")
]

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

for color_id, frame_no, url in missing:
    local_path = rf"d:\caremyvehicle\assets\cars\dzire\360\{color_id}\{frame_no}.webp"
    web_path = rf"d:\caremyvehicle\web\assets\cars\dzire\360\{color_id}\{frame_no}.webp"
    filename = f"{frame_no}.webp"
    
    # Try downloading with backoff
    downloaded = False
    for attempt in range(3):
        time.sleep(1)
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = resp.read()
                with open(local_path, "wb") as f:
                    f.write(data)
                with open(web_path, "wb") as f_w:
                    f_w.write(data)
                downloaded = True
                print(f"Retried and downloaded {color_id} frame {frame_no} successfully!")
                break
        except Exception as e:
            print(f"Attempt {attempt+1} failed for {color_id} frame {frame_no}: {e}")
            
    if not downloaded:
        # Fallback to copy adjacent frame (frame_no - 1)
        prev_frame = frame_no - 1 if frame_no > 1 else frame_no + 1
        src_path = rf"d:\caremyvehicle\assets\cars\dzire\360\{color_id}\{prev_frame}.webp"
        if os.path.exists(src_path):
            shutil.copyfile(src_path, local_path)
            shutil.copyfile(src_path, web_path)
            print(f"Copied adjacent frame {prev_frame} as fallback for {color_id} frame {frame_no}")
            
    # Upload to ImageKit
    folder = f"/cars/dzire/360/{color_id}/"
    with open(local_path, "rb") as f_obj:
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
        print(f"ImageKit upload for {color_id}/{filename}: status={resp.status_code}")
