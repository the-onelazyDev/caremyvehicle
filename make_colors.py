import numpy as np
from PIL import Image
import os

im = Image.open('assets/cars/alto-k10/alto_k10_hero.jpg').convert('RGB')
arr = np.array(im, dtype=np.float32) / 255.0

r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]
maxc = np.maximum(np.maximum(r, g), b)
minc = np.minimum(np.minimum(r, g), b)
v = maxc
deltac = maxc - minc
s = np.where(maxc != 0, deltac / np.where(maxc != 0, maxc, 1), 0)

rc = (maxc - r) / np.where(deltac != 0, deltac, 1)
gc = (maxc - g) / np.where(deltac != 0, deltac, 1)
bc = (maxc - b) / np.where(deltac != 0, deltac, 1)

h = np.zeros_like(r)
mask_r = (r == maxc) & (deltac != 0)
mask_g = (g == maxc) & (deltac != 0)
mask_b = (b == maxc) & (deltac != 0)

h[mask_r] = (bc - gc)[mask_r]
h[mask_g] = (2.0 + rc - bc)[mask_g]
h[mask_b] = (4.0 + gc - rc)[mask_b]
h = (h / 6.0) % 1.0

y_coords, x_coords = np.indices(r.shape)
# Precise bounding box enclosing strictly the car body, excluding sky and road
car_box = (y_coords >= 65) & (y_coords <= 575) & (x_coords >= 145) & (x_coords <= 1035)
# Exclude the rear glass, mirrors, headlights, and sky cloud
paint_mask = car_box & ((h < 0.10) | (h > 0.90)) & (s > 0.28) & (v > 0.18) & (r > g * 1.18)
paint_mask = paint_mask & ~((y_coords < 125) & (x_coords > 830))

colors = {
    'alto_k10_red.jpg': None,
    'alto_k10_blue.jpg': (0.59, 0.90, 1.0),    # Metallic Speedy Blue
    'alto_k10_gold.jpg': (0.11, 0.70, 1.05),   # Premium Earth Gold
    'alto_k10_silver.jpg': (0.0, 0.05, 1.25),  # Metallic Silky Silver
    'alto_k10_grey.jpg': (0.0, 0.04, 0.65),    # Metallic Granite Grey
    'alto_k10_white.jpg': (0.0, 0.02, 1.45),   # Solid White
    'alto_k10_black.jpg': (0.62, 0.20, 0.35)   # Bluish Black
}

out_dir = 'assets/cars/alto-k10'
os.makedirs(out_dir, exist_ok=True)

def hsv_to_rgb_np(h_arr, s_arr, v_arr):
    i = np.floor(h_arr * 6.0).astype(int)
    f = (h_arr * 6.0) - i
    p = v_arr * (1.0 - s_arr)
    q = v_arr * (1.0 - s_arr * f)
    t = v_arr * (1.0 - s_arr * (1.0 - f))
    i = i % 6

    rgb = np.zeros((*h_arr.shape, 3), dtype=np.float32)
    for idx in range(6):
        m = (i == idx)
        if idx == 0: rgb[m] = np.stack([v_arr[m], t[m], p[m]], axis=-1)
        elif idx == 1: rgb[m] = np.stack([q[m], v_arr[m], p[m]], axis=-1)
        elif idx == 2: rgb[m] = np.stack([p[m], v_arr[m], t[m]], axis=-1)
        elif idx == 3: rgb[m] = np.stack([p[m], q[m], v_arr[m]], axis=-1)
        elif idx == 4: rgb[m] = np.stack([t[m], p[m], v_arr[m]], axis=-1)
        elif idx == 5: rgb[m] = np.stack([v_arr[m], p[m], q[m]], axis=-1)
    return rgb

for fname, params in colors.items():
    if params is None:
        im.save(os.path.join(out_dir, fname), quality=92)
    else:
        new_h, new_s_mult, new_v_mult = params
        cur_h = np.copy(h)
        cur_s = np.copy(s)
        cur_v = np.copy(v)

        if new_h > 0:
            cur_h[paint_mask] = new_h
        cur_s[paint_mask] = np.clip(cur_s[paint_mask] * new_s_mult, 0, 1)
        cur_v[paint_mask] = np.clip(cur_v[paint_mask] * new_v_mult, 0, 1)

        new_rgb = hsv_to_rgb_np(cur_h, cur_s, cur_v)
        res_arr = np.where(paint_mask[:, :, None], new_rgb, arr)
        res_im = Image.fromarray(np.clip(res_arr * 255.0, 0, 255).astype(np.uint8))
        res_im.save(os.path.join(out_dir, fname), quality=92)
    print('Generated clean color:', fname)
