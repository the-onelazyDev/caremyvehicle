import fitz
import os
from PIL import Image

pdf_path = r"C:\Users\the.oneManLazy\Downloads\Arena-Alto-K10-Brochure.pdf"
base_out = r"d:\caremyvehicle\assets\cars\alto-k10\official"

dirs = {
    "exterior": os.path.join(base_out, "exterior"),
    "interior": os.path.join(base_out, "interior"),
    "performance_safety": os.path.join(base_out, "performance_safety"),
    "specs": os.path.join(base_out, "specs")
}
for d in dirs.values():
    os.makedirs(d, exist_ok=True)

doc = fitz.open(pdf_path)

# Render pages at 300 DPI for high precision crops
p1 = doc[0].get_pixmap(dpi=300)
p2 = doc[1].get_pixmap(dpi=300)
p3 = doc[2].get_pixmap(dpi=300)
p4 = doc[3].get_pixmap(dpi=300)
p5 = doc[4].get_pixmap(dpi=300)

im1 = Image.open(fitz.io.BytesIO(p1.tobytes()))
im2 = Image.open(fitz.io.BytesIO(p2.tobytes()))
im3 = Image.open(fitz.io.BytesIO(p3.tobytes()))
im4 = Image.open(fitz.io.BytesIO(p4.tobytes()))
im5 = Image.open(fitz.io.BytesIO(p5.tobytes()))

w1, h1 = im1.size
w2, h2 = im2.size
w3, h3 = im3.size
w4, h4 = im4.size
w5, h5 = im5.size

# --- Page 1: Hero shot ---
# Main front 3/4 hero car
hero_front = im1.crop((int(w1 * 0.15), int(h1 * 0.33), int(w1 * 0.85), int(h1 * 0.86)))
hero_front.save(os.path.join(dirs["exterior"], "hero_front_three_quarter.jpg"), quality=95)

# Full poster Page 1
im1.save(os.path.join(dirs["exterior"], "launch_hero_banner.jpg"), quality=92)

# --- Page 2: Exterior features ---
# Side angle car hero
car_side = im2.crop((int(w2 * 0.03), int(h2 * 0.15), int(w2 * 0.62), int(h2 * 0.63)))
car_side.save(os.path.join(dirs["exterior"], "hero_side_profile.jpg"), quality=95)

# Honeycomb Grille
grille = im2.crop((int(w2 * 0.08), int(h2 * 0.66), int(w2 * 0.31), int(h2 * 0.89)))
grille.save(os.path.join(dirs["exterior"], "honeycomb_front_grille.jpg"), quality=95)

# Headlamps
headlamps = im2.crop((int(w2 * 0.30), int(h2 * 0.66), int(w2 * 0.52), int(h2 * 0.89)))
headlamps.save(os.path.join(dirs["exterior"], "peppy_headlamps.jpg"), quality=95)

# Tail lamps
tail_lamps = im2.crop((int(w2 * 0.50), int(h2 * 0.66), int(w2 * 0.72), int(h2 * 0.89)))
tail_lamps.save(os.path.join(dirs["exterior"], "rear_combination_lamps.jpg"), quality=95)

# Wheels & tyres
wheels = im2.crop((int(w2 * 0.70), int(h2 * 0.66), int(w2 * 0.94), int(h2 * 0.89)))
wheels.save(os.path.join(dirs["exterior"], "r13_honeycomb_wheels.jpg"), quality=95)

# --- Page 3: Interior features ---
# Full Cabin view
cabin = im3.crop((0, 0, w3, int(h3 * 0.67)))
cabin.save(os.path.join(dirs["interior"], "lively_cabin_seating.jpg"), quality=95)

# Touchscreen
touchscreen = im3.crop((int(w3 * 0.07), int(h3 * 0.66), int(w3 * 0.31), int(h3 * 0.90)))
touchscreen.save(os.path.join(dirs["interior"], "smartplay_7inch_touchscreen.jpg"), quality=95)

# Steering mounted controls
steering = im3.crop((int(w3 * 0.28), int(h3 * 0.66), int(w3 * 0.51), int(h3 * 0.90)))
steering.save(os.path.join(dirs["interior"], "steering_mounted_controls.jpg"), quality=95)

# Digital speedometer
speedo = im3.crop((int(w3 * 0.50), int(h3 * 0.66), int(w3 * 0.72), int(h3 * 0.90)))
speedo.save(os.path.join(dirs["interior"], "digital_speedometer_display.jpg"), quality=95)

# 4 Speakers bird eye layout
speakers = im3.crop((int(w3 * 0.70), int(h3 * 0.66), int(w3 * 0.94), int(h3 * 0.90)))
speakers.save(os.path.join(dirs["interior"], "four_speakers_cabin_layout.jpg"), quality=95)

# --- Page 4: Safety & Performance ---
# 6 Airbags cutaway
airbags = im4.crop((0, int(h4 * 0.25), int(w4 * 0.50), int(h4 * 0.67)))
airbags.save(os.path.join(dirs["performance_safety"], "six_airbags_standard.jpg"), quality=95)

# K-Series 1.0L Engine
engine = im4.crop((int(w4 * 0.67), int(h4 * 0.22), int(w4 * 0.98), int(h4 * 0.60)))
engine.save(os.path.join(dirs["performance_safety"], "kseries_dualjet_1_0l_engine.jpg"), quality=95)

# AGS Gear Shift Technology
ags = im4.crop((int(w4 * 0.06), int(h4 * 0.67), int(w4 * 0.30), int(h4 * 0.90)))
ags.save(os.path.join(dirs["performance_safety"], "ags_automatic_shifter.jpg"), quality=95)

# ESP Electronic Stability Program
esp = im4.crop((int(w4 * 0.28), int(h4 * 0.67), int(w4 * 0.50), int(h4 * 0.90)))
esp.save(os.path.join(dirs["performance_safety"], "esp_stability_program.jpg"), quality=95)

# Reverse Parking Sensors
sensors = im4.crop((int(w4 * 0.50), int(h4 * 0.67), int(w4 * 0.72), int(h4 * 0.90)))
sensors.save(os.path.join(dirs["performance_safety"], "reverse_parking_sensors.jpg"), quality=95)

# ABS with EBD
abs_ebd = im4.crop((int(w4 * 0.70), int(h4 * 0.67), int(w4 * 0.94), int(h4 * 0.90)))
abs_ebd.save(os.path.join(dirs["performance_safety"], "abs_with_ebd.jpg"), quality=95)

# --- Page 5: Blueprint & Specs ---
# Dimensions Blueprint
blueprint = im5.crop((int(w5 * 0.18), int(h5 * 0.72), int(w5 * 0.49), int(h5 * 0.84)))
blueprint.save(os.path.join(dirs["specs"], "chassis_dimensions_blueprint.jpg"), quality=95)

# Technical Specs Table
tech_specs = im5.crop((int(w5 * 0.03), int(h5 * 0.02), int(w5 * 0.50), int(h5 * 0.65)))
tech_specs.save(os.path.join(dirs["specs"], "technical_specifications_table.jpg"), quality=95)

# Variant Feature List Table
variants = im5.crop((int(w5 * 0.51), int(h5 * 0.02), int(w5 * 0.98), int(h5 * 0.90)))
variants.save(os.path.join(dirs["specs"], "variant_feature_matrix.jpg"), quality=95)

# Mileage badge
mileage = im5.crop((int(w5 * 0.03), int(h5 * 0.72), int(w5 * 0.17), int(h5 * 0.83)))
mileage.save(os.path.join(dirs["specs"], "official_arai_mileage.jpg"), quality=95)

print("\nAll 20 official assets generated successfully!")
for cat, path in dirs.items():
    files = os.listdir(path)
    print(f"[{cat.upper()}] - {len(files)} items:")
    for f in files:
        sz = os.path.getsize(os.path.join(path, f)) // 1024
        print(f"  - {f} ({sz} KB)")
