import os
import urllib.request
import time

out_base = r"d:\caremyvehicle\upload_to_imagekit\brezza\360"
os.makedirs(out_base, exist_ok=True)

# 6 primary official Maruti Brezza colors
brezza_colors = [
    {
        "id": "sizzling-red-bluish-black",
        "name": "Sizzling Red with Bluish Black",
        "hex": "#990000",
        "prefix": "BB_00"
    },
    {
        "id": "lustrous-beige",
        "name": "Lustrous Beige / Brave Khaki",
        "hex": "#9F957A",
        "prefix": "LB_00"
    },
    {
        "id": "pearl-arctic-white",
        "name": "Pearl Arctic White",
        "hex": "#F3F3F3",
        "prefix": "PAW_00"
    },
    {
        "id": "magma-gray",
        "name": "Magma Gray",
        "hex": "#555347",
        "prefix": "MG_00"
    },
    {
        "id": "splendid-silver",
        "name": "Splendid Silver",
        "hex": "#A5AFB1",
        "prefix": "SS_00"
    },
    {
        "id": "pearl-bluish-black",
        "name": "Pearl Bluish Black",
        "hex": "#0C0D11",
        "prefix": "PBB_00"
    }
]

# 24 frames sampled across 72 frames (0, 3, 6, ... 69)
frame_indices = [i * 3 for i in range(24)]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

print(f"Downloading Brezza 360 frames ({len(brezza_colors)} colors x 24 frames = 144 files)...")

for c in brezza_colors:
    c_dir = os.path.join(out_base, c["id"])
    os.makedirs(c_dir, exist_ok=True)
    print(f"\n--- Downloading Brezza: {c['name']} ({c['id']}) ---")
    
    for frame_no, orig_idx in enumerate(frame_indices, start=1):
        filename = f"{frame_no}.webp"
        filepath = os.path.join(c_dir, filename)
        
        if os.path.exists(filepath) and os.path.getsize(filepath) > 5000:
            continue
            
        padded = f"{orig_idx:02d}"
        url = f"https://marutisuzuki.scene7.com/is/image/maruti/{c['prefix']}{padded}?wid=1000&fmt=webp-alpha"
        
        try:
            req = urllib.request.Request(url, headers=headers)
            with urllib.request.urlopen(req, timeout=10) as resp:
                data = resp.read()
                with open(filepath, "wb") as f:
                    f.write(data)
                print(f"  Frame {frame_no:02d}/24 -> {len(data)//1024} KB")
        except Exception as e:
            print(f"  Frame {frame_no:02d} FAILED: {e}")
        time.sleep(0.04)

print("\nBrezza frames ready for ImageKit upload!")
