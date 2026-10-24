import os
import urllib.request
import time

base_out = r"d:\caremyvehicle\assets\cars\swift\360"
os.makedirs(base_out, exist_ok=True)

# 6 key official colors with their Scene7 prefix
colors = [
    {
        "id": "sizzling-red-bluish-black",
        "name": "Sizzling Red with Bluish Black",
        "hex": "#DC2626",
        "prefix": "SUZUKI_SWIFT_EXT_360_RED_BLUISH_BKACK_DUAL_TONE_V-1_revised_000"
    },
    {
        "id": "luster-blue",
        "name": "Luster Blue",
        "hex": "#1F47C2",
        "prefix": "SUZUKI_SWIFT_EXT_360_BLUE_V-1_revised_000"
    },
    {
        "id": "pearl-arctic-white",
        "name": "Pearl Arctic White",
        "hex": "#F8FAFC",
        "prefix": "SUZUKI_SWIFT_EXT_360_WHITE_V-2_revised_000"
    },
    {
        "id": "magma-grey",
        "name": "Magma Grey",
        "hex": "#475569",
        "prefix": "SUZUKI_SWIFT_EXT_360_GREY_V-3_revised_000"
    },
    {
        "id": "splendid-silver",
        "name": "Splendid Silver",
        "hex": "#CBD5E1",
        "prefix": "SUZUKI_SWIFT_EXT_360_SILVER_V-4_2_revised_000"
    },
    {
        "id": "novel-orange",
        "name": "Novel Orange",
        "hex": "#B33316",
        "prefix": "SUZUKI_SWIFT_EXT_360_ORAGNE_V-1_revised_000"
    }
]

# We sample 24 evenly spaced frames from the 72 frames (steps of 3) for lightning-fast 60 FPS rotation and minimal bandwidth
# Frame 0 to 71: indices 0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69
frame_indices = [i * 3 for i in range(24)]

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
}

print(f"Starting download for {len(colors)} colors x 24 frames = {len(colors)*24} total frames...")

for c in colors:
    color_dir = os.path.join(base_out, c["id"])
    os.makedirs(color_dir, exist_ok=True)
    print(f"\n--- Downloading: {c['name']} ({c['id']}) ---")
    
    for frame_no, orig_idx in enumerate(frame_indices, start=1):
        filename = f"{frame_no}.webp"
        filepath = os.path.join(color_dir, filename)
        
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
                print(f"  Frame {frame_no:02d}/24 (orig {orig_idx:02d}) -> {len(data)//1024} KB")
        except Exception as e:
            print(f"  Frame {frame_no:02d} FAILED: {e}")
        time.sleep(0.05)

print("\nAll Swift 360 frames downloaded successfully!")
