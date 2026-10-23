# 📋 Product Requirements Document (PRD)
# Project: Care My Vehicle (CMV)
> **Author:** Creative Direction & Tech Architecture  
> **Status:** Active / In Development  
> **Domain Registrar:** Hostinger (Domain Purchased)  
> **Target Audience:** Indian car & bike buyers, automobile enthusiasts, first-time buyers  
> **Primary Platform Priority:** **Mobile-First Web App (Responsive PWA)**

---

## 1. Executive Summary & Vision
**Care My Vehicle** is a high-speed, consumer-first automotive intelligence platform designed to replace ad-cluttered, spam-heavy legacy portals (CarDekho, CarWale, 91Wheels). 

The platform focuses on **unmatched speed, zero phone-number spam, and transparent, granular details for newly launched cars and variants**.

---

## 2. Domain & Infrastructure Assets
- **Domain Registrar:** Hostinger (`caremyvehicle.in` / `caremyvehicle.com`).
- **Hosting Target:** Vercel / Cloudflare Pages (Free Tier, Unlimited Bandwidth, Global CDN).
- **Image Architecture:** Cloudflare R2 (10 GB free object storage, $0 egress fees) + ImageKit.io (Real-time WebP compression).
- **Database:** Supabase (PostgreSQL, 500 MB free tier, storing models, variants, specs, and city RTO pricing).

---

## 3. Legal & Compliance Framework (Official Assessment)

### Q: Is it legal to create this website and use newly launched car images & specs?
### ✅ Answer: **YES, 100% LEGAL**, provided standard editorial and fair-dealing practices are followed.

### The Legal Grounds:
1. **Public Facts & Specifications (Non-Copyrightable):**
   - Under Section 13 & 52 of the **Indian Copyright Act (1957)** and global intellectual property laws, factual data (ex-showroom prices, engine displacement, dimensions, horsepower, ARAI mileage, variant names) are **public facts**. Facts cannot be copyrighted.
2. **OEM Press Kits & Media Releases:**
   - When car manufacturers (Tata Motors, Mahindra, Maruti Suzuki, Hyundai, Kia, etc.) launch new cars, their corporate communications departments release **Official Media Kits & Press Releases** (e.g. `tatamotors.com/media/press-releases/`).
   - These images are distributed specifically for journalists, reviewers, aggregators, and digital media to report, showcase, and educate the public.
3. **Doctrine of Fair Dealing (Section 52):**
   - Using automotive images for the purpose of **criticism, review, public education, and reporting** is legally protected under Fair Dealing.

### Mandatory Compliance Rules for Care My Vehicle:
- ❌ **Do NOT scrape or steal watermarked photos from competitor portals** (e.g. never take photos bearing CarWale, Autocar, or ZigWheels watermarks). Use official OEM press images or original photography.
- ❌ **Do NOT claim to be an authorized dealer:** Never state or imply that you are an official showroom or authorized dealership of any brand.
- ✅ **Include Editorial Disclaimer in Footer:**
  > *"Care My Vehicle is an independent automotive research and consumer guide platform. All brand names, model names, trademarks, and vehicle images belong to their respective manufacturers and are used here under fair dealing for educational, review, and informational purposes."*

---

## 4. Brand Identity System (Approved Assets)

- **Color Palette:**
  - **Pure Crisp White (`#FFFFFF`):** 60% — Clean, transparent, welcoming foundation.
  - **Electric Royal Blue (`#2563EB`):** 25% — Automotive trust, authority, and primary accents.
  - **Sunrise Coral Red (`#EF4444`):** 10% — Energy, speed, and CTA highlight.
  - **Sky Blue Tint (`#BAE6FD`):** 5% — Automotive glass and detailing accents.
  - **Deep Navy Charcoal (`#0F172A`):** Typography & high-contrast chassis elements.
- **Approved Logo:** Standalone modern aerodynamic car silhouette in Electric Blue with Sunrise Coral road curve on a pure white circular background.
  - Active File: [`d:\caremyvehicle\profile_image.jpg`](file:///d:/caremyvehicle/profile_image.jpg)
  - SVG Header: [`d:\caremyvehicle\brand_identity\svg\logo-primary-horizontal-light.svg`](file:///d:/caremyvehicle/brand_identity/svg/logo-primary-horizontal-light.svg)
- **Official Tagline:** *"Care Better. Drive Longer."*

---

## 5. Mobile-First Web Architecture Requirements

### 5.1 Why Mobile-First?
In India, **over 88% of car discovery and variant comparison occurs on mobile phones** (via Instagram links, WhatsApp shares, and mobile Google searches). 

### 5.2 Performance Benchmarks:
- **First Contentful Paint (FCP):** < 0.6 seconds.
- **Largest Contentful Paint (LCP):** < 1.2 seconds.
- **Mobile PageSpeed Score:** 95–100/100.
- **No Cumulative Layout Shift (CLS):** 0.00.

### 5.3 Core User Journeys (Phase 1):
1. **Instant Search & Filter:** Filter newly launched cars by Budget (Under 10L, 10-15L, 15-25L, 25L+), Fuel (Petrol, Diesel, EV, CNG), and Body Type (SUV, Sedan, Hatchback).
2. **Granular Variant Matrix:** A clean, swipeable mobile card showing what every variant adds over the previous one.
3. **The Zero-Spam On-Road Price Calculator:** Instant city-wise breakdown (Delhi, Mumbai, Bengaluru, Hyderabad, etc.) with **NO mobile number required**.
4. **The Value-For-Money (VFM) Badge:** Tells the user mathematically which variant to book.
