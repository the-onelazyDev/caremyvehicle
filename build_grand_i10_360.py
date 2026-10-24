import urllib.request, io, os
from PIL import Image, ImageDraw, ImageFont

# 24 frames evenly spaced from 1 to 72
frames_idx = [int(1 + i * 71 / 23) for i in range(24)]
print("24 frame indices:", frames_idx)

colors = {
    'fiery-red': '9f1414',
    'teal-blue': '153854',
    'typhoon-silver': 'dfe1e3',
    'titan-grey': '4e5359'
}

base_url = 'https://imgd.aeplcdn.com/1056x594/cw/360/hyundai/2177/14549/closed-door/'

output_base_dirs = ['assets/cars/grand-i10-nios/360', 'web/assets/cars/grand-i10-nios/360']

for out_base in output_base_dirs:
    for color_name, hex_code in colors.items():
        color_dir = os.path.join(out_base, color_name)
        os.makedirs(color_dir, exist_ok=True)

try:
    font = ImageFont.truetype('arialbd.ttf', 12)
except:
    font = ImageFont.load_default()

for color_name, hex_code in colors.items():
    print(f"\nProcessing color: {color_name} ({hex_code})...")
    for seq_num, f_idx in enumerate(frames_idx, start=1):
        img_url = f"{base_url}{hex_code}/{f_idx}.jpg"
        try:
            req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            data = urllib.request.urlopen(req, timeout=10).read()
            im = Image.open(io.BytesIO(data))
            
            # If front frame (f_idx == 1), cleanly brand the number plate
            if f_idx == 1:
                draw = ImageDraw.Draw(im)
                draw.rounded_rectangle([460, 396, 592, 428], radius=3, fill='#FFFFFF', outline='#0F172A', width=2)
                draw.text((472, 404), 'CARE MY VEHICLE', fill='#0F172A', font=font)
            
            # Save optimized JPEG
            for out_base in output_base_dirs:
                save_path = os.path.join(out_base, color_name, f"{seq_num}.jpg")
                im.save(save_path, 'JPEG', quality=85, optimize=True)
                
            print(f"  Frame {seq_num}/24 (src #{f_idx}) saved", end='\r')
        except Exception as e:
            print(f"  Error on frame {seq_num} (#{f_idx}):", e)

print("\nAll 4 colors downloaded and branded successfully!")
