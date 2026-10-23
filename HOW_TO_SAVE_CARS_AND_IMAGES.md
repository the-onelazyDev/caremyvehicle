# 📝 How to Save Car Details & Images: The Complete Step-by-Step Guide
> **The exact 2-minute routine for adding any newly launched car to Care My Vehicle.**

---

## 🚗 The 3-Step Routine Whenever a Car Launches

```
Step 1: Download Photos from Official Press Releases
                         │
                         ▼
Step 2: Upload to ImageKit / Cloudflare R2 (Copy Image Link)
                         │
                         ▼
Step 3: Open admin.html, Fill Form, Click "Save"
                         │
                         ▼
         [Live On Website Instantly! 🎉]
```

---

## 📸 Step 1: Where to Get Newly Launched Car Images

When a car launches, you do **not** take photos from Google images or competitor sites. You get original, high-resolution photos straight from the **Official Manufacturer Media Portals**:

| Brand | Official Media Website to Download Launch Photos |
|---|---|
| **Tata Motors** | `tatamotors.com/media/press-releases/` |
| **Mahindra** | `mahindra.com/news-room/press-releases` |
| **Maruti Suzuki** | `marutisuzuki.com/corporate/media/press-releases` |
| **Hyundai India** | `hyundai.com/in/en/hyundai-story/media-center` |
| **Kia India** | `kia.com/in/media/press-releases.html` |
| **Skoda / VW** | `skoda-storyboard.com/en/` |

> 💡 **Tip:** Download the front 3/4th angle shot (`hero.jpg`) and 1 interior dashboard shot.

---

## ☁️ Step 2: Where to Save the Images & Get the Link

### Method A: Using ImageKit.io (Recommended — Easiest & 100% Free)
1. Go to [imagekit.io](https://imagekit.io) and create a free account.
2. In the **Media Library**, click **"Create Folder"** ➔ Name it `cars` (e.g. `cars/skoda-kylaq`).
3. Drag & drop your downloaded car photos into this folder.
4. Click on the photo ➔ Click **"Copy URL"**.
   - Your link looks like:  
     `https://ik.imagekit.io/caremyvehicle/cars/skoda-kylaq/hero.jpg`
5. That's it! ImageKit automatically compresses it into an ultra-fast WebP image whenever a user visits.

---

## 💻 Step 3: How to Enter the Car Details (Visual Admin Panel)

You don't need to write code. We built a dedicated **Visual Admin Form** right inside your website:

👉 Open **[`d:\caremyvehicle\web\admin.html`](file:///d:/caremyvehicle/web/admin.html)** in your browser!

### How to use the Admin Panel:
1. **Enter Car Basics:**
   - Car Name: `Skoda Kylaq`
   - Brand: `Skoda`
   - Tagline: `Sub-4M Compact German SUV with 5-Star Safety`
   - Price Range: `₹7.89 - ₹14.39 Lakh`
   - Launch Month: `November 2024`
2. **Paste the Image Link:**
   - Paste the ImageKit URL you copied in Step 2.
3. **Add Variants:**
   - Click **"+ Add Variant Row"** to add each variant (Base, Mid, Top).
   - Type variant name, ex-showroom price, engine, and tick **⭐ "Value-For-Money"** on the best variant.
4. **Click "Save & Generate":**
   - Click **"Copy JSON"**.
   - Paste into [`d:\caremyvehicle\web\js\carData.js`](file:///d:/caremyvehicle/web/js/carData.js).
   - Refresh your website ➔ Your new car is **LIVE with city-wise on-road prices calculated automatically!**

---

## 🗄️ When You Grow: Moving to Supabase (Automated Database)
When you have more than 50 cars, you can connect **Supabase**:
1. Run our [`data_schema.sql`](file:///d:/caremyvehicle/data_schema.sql) in Supabase SQL editor.
2. The Admin Form (`admin.html`) will send a direct `POST` request to Supabase to insert the car automatically with zero copy-pasting.
