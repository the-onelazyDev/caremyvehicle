import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { CARS, CITIES, calculateOnRoadPrice, formatINR, formatLakh } from '../js/carData.js';
import { ARTICLES } from '../js/newsData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const webDir = path.resolve(rootDir, 'web');

// Ensure output folders exist
const carsDir = path.join(rootDir, 'cars');
const webCarsDir = path.join(webDir, 'cars');
fs.mkdirSync(carsDir, { recursive: true });
fs.mkdirSync(webCarsDir, { recursive: true });

function formatSafetyBadge(s) {
  if (!s) return '⭐ High Safety';
  if (/5-Star|5\.0|5\s*⭐/i.test(s)) {
    if (/Bharat|B-NCAP/i.test(s)) return '⭐ 5-Star B-NCAP';
    if (/Global|G-NCAP/i.test(s)) return '⭐ 5-Star G-NCAP';
    if (/Euro/i.test(s)) return '⭐ 5-Star Euro NCAP';
    return '⭐ 5-Star Safety';
  }
  if (/4-Star|4\.0|4\s*⭐/i.test(s)) {
    if (/Bharat|B-NCAP/i.test(s)) return '⭐ 4-Star B-NCAP';
    if (/Global|G-NCAP/i.test(s)) return '⭐ 4-Star G-NCAP';
    return '⭐ 4-Star Safety';
  }
  if (/11\s*Airbag/i.test(s)) return '🛡️ 11 Airbags Std';
  if (/9\s*Airbag/i.test(s)) return '🛡️ 9 Airbags Std';
  if (/7\s*Airbag/i.test(s)) return '🛡️ 7 Airbags Std';
  if (/6\s*Airbag/i.test(s)) return '🛡️ 6 Airbags Std';
  if (/ADAS/i.test(s)) return '🛡️ Level 2 ADAS';
  if (/Dual\s*Airbag/i.test(s)) return '🛡️ Dual Airbags Std';
  return '🛡️ Standard Safety';
}

function formatLaunchBadge(d) {
  if (!d) return '🚀 New Launch';
  if (/2026/i.test(d)) return '🔥 2026 Model';
  if (/2025/i.test(d)) return '🔥 2025 Model';
  if (/Facelift|Updated/i.test(d)) return '✨ New Facelift';
  if (/September|October|August|November|December/i.test(d)) return '🔥 Just Launched';
  if (/2024/i.test(d)) return '🚀 2024 Model';
  return '🚀 New Launch';
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const currentDate = new Date().toISOString().split('T')[0];

console.log(`Generating programmatic SEO landing pages for ${CARS.length} cars...`);

CARS.forEach(car => {
  const pageUrl = `https://www.caremyvehicle.in/cars/${car.id}`;
  const metaTitle = `${car.name} Price (${car.priceRange}), Variants, Real On-Road Price & Specs | Care My Vehicle`;
  const metaDescription = `Explore ${car.name} on-road prices in Delhi, Mumbai, Bengaluru, Bharat NCAP safety rating (${car.safetyRating}), variant price breakup, official colors & specs. 100% spam-free.`;
  const safeSummary = escapeHtml(car.summary || car.tagline);
  const defaultOnRoad = calculateOnRoadPrice(car.minPrice, 'delhi');

  const variantsList = car.variants || [];
  const colorsList = car.colors || [];
  const galleryList = car.gallery || [];
  const anglesList = car.angles || [];

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0">
  <title>${escapeHtml(metaTitle)}</title>
  <meta name="description" content="${escapeHtml(metaDescription)}">
  <meta name="theme-color" content="#2563EB">

  <!-- Canonical & Search Engine Robots -->
  <link rel="canonical" href="${pageUrl}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
  <meta name="keywords" content="${car.name} price, ${car.name} on road price, ${car.name} variants, ${car.brand} ${car.name} specs, ${car.name} safety rating, ${car.name} mileage">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:url" content="${pageUrl}">
  <meta property="og:title" content="${escapeHtml(metaTitle)}">
  <meta property="og:description" content="${escapeHtml(metaDescription)}">
  <meta property="og:image" content="${car.heroImage}">
  <meta property="og:site_name" content="Care My Vehicle">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${pageUrl}">
  <meta name="twitter:title" content="${escapeHtml(metaTitle)}">
  <meta name="twitter:description" content="${escapeHtml(metaDescription)}">
  <meta name="twitter:image" content="${car.heroImage}">

  <!-- Favicons & Search Engine Icons -->
  <link rel="icon" href="/favicon.ico" sizes="48x48">
  <link rel="icon" type="image/png" sizes="48x48" href="/assets/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="96x96" href="/assets/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="192x192" href="/assets/favicon-192x192.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png">
  <link rel="icon" type="image/svg+xml" href="/assets/logo.svg">

  <!-- Google Fonts: Plus Jakarta Sans -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&family=Overlock:wght@700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Main Stylesheet -->
  <link rel="stylesheet" href="/css/style.css">

  <style>
    .car-page-container {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
      padding: 16px 14px 60px;
      box-sizing: border-box;
    }
    *, *::before, *::after {
      box-sizing: border-box;
    }
    .car-breadcrumb {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      font-weight: 700;
      color: var(--text-muted);
      margin-bottom: 20px;
    }
    .car-breadcrumb a {
      color: var(--primary);
    }
    .car-hero-card {
      background: #FFFFFF;
      border: 1px solid var(--border);
      border-radius: 20px;
      overflow: hidden;
      box-shadow: var(--shadow-md);
      margin-bottom: 32px;
    }
    .car-hero-media-box {
      position: relative;
      background: radial-gradient(ellipse at center 60%, #FFFFFF 40%, #F8FAFC 100%);
      padding: 30px 20px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 280px;
    }
    .car-hero-img-wrap {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 220px;
      padding: 10px 0;
    }
    .car-hero-main-img {
      max-width: 90%;
      height: auto;
      max-height: 260px;
      object-fit: contain;
      mix-blend-mode: multiply;
      filter: drop-shadow(0 12px 24px rgba(15, 23, 42, 0.12));
      transition: transform 0.3s ease;
      display: block;
    }
    .car-hero-main-img:hover {
      transform: scale(1.03);
    }
    .car-hero-details {
      padding: 28px;
      border-top: 1px solid var(--border);
    }
    .car-hero-brand {
      font-size: 13px;
      font-weight: 800;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
    .car-hero-title {
      font-size: 32px;
      font-weight: 900;
      letter-spacing: -0.8px;
      color: var(--text-main);
      margin: 4px 0 8px;
    }
    .car-hero-tagline {
      font-size: 16px;
      color: var(--text-secondary);
      line-height: 1.5;
      margin-bottom: 24px;
      max-width: 800px;
    }
    .price-box-card {
      background: #F8FAFC;
      border: 1.5px solid #E2E8F0;
      border-radius: 16px;
      padding: 20px 24px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      margin-bottom: 24px;
    }
    .price-main-val {
      font-size: 28px;
      font-weight: 900;
      color: var(--text-main);
      letter-spacing: -0.5px;
    }
    .price-label {
      font-size: 12px;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .onroad-badge {
      background: #EFF6FF;
      color: var(--primary);
      border: 1px solid #BFDBFE;
      padding: 8px 16px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 800;
    }
    .city-picker-row {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 10px;
    }
    .city-pill-btn {
      padding: 6px 14px;
      background: #FFFFFF;
      border: 1px solid var(--border);
      border-radius: 9999px;
      font-size: 12px;
      font-weight: 700;
      color: var(--text-secondary);
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .city-pill-btn.active {
      background: var(--primary);
      color: #FFFFFF;
      border-color: var(--primary);
    }
    .specs-grid-seo {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 16px;
      margin-bottom: 36px;
    }
    .spec-seo-card {
      background: #FFFFFF;
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 16px;
      display: flex;
      flex-direction: column;
    }
    .spec-seo-label {
      font-size: 11px;
      font-weight: 700;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .spec-seo-value {
      font-size: 15px;
      font-weight: 800;
      color: var(--text-main);
    }
    .section-heading-seo {
      font-size: 22px;
      font-weight: 900;
      color: var(--text-main);
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .variants-seo-table-container {
      background: #FFFFFF;
      border: 1px solid var(--border);
      border-radius: 18px;
      overflow-x: auto;
      margin-bottom: 36px;
      box-shadow: var(--shadow-sm);
    }
    .variants-seo-table {
      width: 100%;
      border-collapse: collapse;
      text-align: left;
      min-width: 650px;
    }
    .variants-seo-table th {
      background: #F8FAFC;
      padding: 14px 18px;
      font-size: 12px;
      font-weight: 800;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1px solid var(--border);
    }
    .variants-seo-table td {
      padding: 16px 18px;
      border-bottom: 1px solid #F1F5F9;
      font-size: 14px;
      color: var(--text-main);
    }
    .variants-seo-table tr:last-child td {
      border-bottom: none;
    }
    .vfm-chip {
      background: #FEF3C7;
      color: #92400E;
      font-size: 10px;
      font-weight: 800;
      padding: 2px 6px;
      border-radius: 6px;
      margin-left: 6px;
      text-transform: uppercase;
    }
    .swatches-seo-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-top: 14px;
    }
    .swatch-item-btn {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #FFFFFF;
      border: 1px solid var(--border);
      border-radius: 9999px;
      padding: 6px 14px 6px 8px;
      cursor: pointer;
      font-size: 12px;
      font-weight: 700;
      transition: all 0.2s ease;
    }
    .swatch-item-btn.active, .swatch-item-btn:hover {
      border-color: var(--primary);
      box-shadow: 0 2px 8px rgba(37, 99, 235, 0.15);
    }
    .swatch-color-dot {
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,0.15);
    }
    .editorial-box {
      background: #FFFFFF;
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 24px;
      margin-bottom: 36px;
      line-height: 1.7;
      color: var(--text-secondary);
      font-size: 15px;
    }
    .editorial-box strong {
      color: var(--text-main);
    }
    .cta-seo-bar {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      margin-top: 30px;
    }
    .cta-btn-primary {
      padding: 12px 24px;
      background: var(--primary);
      color: #FFFFFF;
      border-radius: 9999px;
      font-weight: 800;
      font-size: 14px;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .cta-btn-primary:hover {
      background: var(--primary-hover);
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.3);
    }
    .cta-btn-secondary {
      padding: 12px 24px;
      background: #FFFFFF;
      color: var(--text-main);
      border: 1.5px solid var(--border);
      border-radius: 9999px;
      font-weight: 800;
      font-size: 14px;
      transition: all 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .cta-btn-secondary:hover {
      border-color: #94A3B8;
      background: #F8FAFC;
    }
    @media (max-width: 640px) {
      .car-hero-title { font-size: 26px; }
      .price-main-val { font-size: 22px; }
      .car-hero-details { padding: 20px 16px; }
      .car-hero-media-box { min-height: 220px; padding: 20px 10px 10px; }
      .car-hero-main-img { max-width: 95%; max-height: 200px; }
    }
    @media (max-width: 768px) {
      .car-hero-media-box {
        padding: 16px 10px 12px;
        min-height: auto;
      }
      .car-hero-img-wrap {
        min-height: 180px;
        padding: 4px 0;
      }
      .car-hero-main-img {
        max-width: 96%;
        max-height: 200px;
      }
      .car-hero-details {
        padding: 18px 14px;
      }
      .car-hero-title {
        font-size: 24px;
      }
      .price-box-card {
        flex-direction: column;
        gap: 12px;
        align-items: flex-start;
      }
      .cta-seo-bar {
        flex-direction: column;
      }
      .specs-grid-seo {
        grid-template-columns: 1fr;
      }
      .gallery-cards-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>

  <!-- Structured Data (JSON-LD) for Google Search Rich Snippet -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.caremyvehicle.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "${escapeHtml(car.brand)}",
            "item": "https://www.caremyvehicle.in/?brand=${encodeURIComponent(car.brand)}"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${escapeHtml(car.name)}",
            "item": "${pageUrl}"
          }
        ]
      },
      {
        "@type": "Car",
        "@id": "${pageUrl}#car",
        "name": "${escapeHtml(car.name)}",
        "image": "${car.heroImage}",
        "description": "${safeSummary}",
        "brand": {
          "@type": "Brand",
          "name": "${escapeHtml(car.brand)}"
        },
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": ${car.minPrice},
          "highPrice": ${car.maxPrice},
          "price": "${car.minPrice}",
          "offerCount": ${variantsList.length || 1}
        },
        "vehicleConfiguration": "${escapeHtml(car.bodyType)}",
        "fuelType": ${JSON.stringify(car.fuelTypes)},
        "bodyType": "${escapeHtml(car.bodyType)}"
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Top Utility Bar (Travomint style) -->
  <div class="top-utility-bar">
    <div>
      ✉️ support@caremyvehicle.in &bull; 100% Spam-Free Automotive Radar
    </div>
    <div class="top-utility-links">
      <a href="/#trendingSection">⭐ Trending Launches</a>
      <a href="/#compareSection">⚖️ Compare Rivals</a>
      <a href="https://www.instagram.com/caremyvehicle/" target="_blank" rel="noopener" style="color:var(--primary); font-weight:800;">
        📸 @caremyvehicle
      </a>
    </div>
  </div>

  <!-- Top Sticky Navigation Bar -->
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <a href="/" style="display:flex; align-items:center; gap:10px; text-decoration:none;">
          <img src="/assets/logo.png" alt="Care My Vehicle Logo" class="brand-icon" style="width:38px; height:38px; border-radius:50%;">
          <div>
            <div class="brand-name brand-font" style="font-size:22px; font-weight:900; color:var(--primary); line-height:1;">Care My <span style="color:#1E293B;">Vehicle</span></div>
            <div class="brand-tagline" style="font-size:10px; font-weight:700; color:var(--text-muted);">100% Spam-Free Vehicle Radar</div>
          </div>
        </a>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <a href="/" class="btn-orange-pill" style="padding:7px 16px; font-size:12.5px; text-decoration:none;">
          &larr; All Cars Radar
        </a>
      </div>
    </div>
  </header>

  <main class="car-page-container">
    <!-- Breadcrumb -->
    <nav class="car-breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a> &rsaquo;
      <a href="/?brand=${encodeURIComponent(car.brand)}">${escapeHtml(car.brand)}</a> &rsaquo;
      <span>${escapeHtml(car.name)}</span>
    </nav>

    <!-- Hero Card -->
    <article class="car-hero-card">
      <div class="car-hero-media-box">
        <div class="card-badge-row">
          <span class="card-badge badge-safety">${formatSafetyBadge(car.safetyRating)}</span>
        </div>
        <div class="car-hero-img-wrap">
          <img id="mainHeroImage" src="${car.heroImage}" alt="${escapeHtml(car.name)}" class="car-hero-main-img">
        </div>
        
        ${galleryList.length > 0 ? `
        <!-- CarWale-style Quick Photo Strip under Hero Image -->
        <div class="hero-gallery-strip">
          <div class="strip-header">
            <span>📸 Official Exterior & Interior Showcase (${galleryList.length} HD Photos)</span>
            <a href="#gallerySection" class="view-all-link">View All ${galleryList.length} &rarr;</a>
          </div>
          <div class="gallery-thumbnails-scroll">
            ${galleryList.slice(0, 8).map((item, gIdx) => `
              <button type="button" class="thumb-pill-btn ${gIdx === 0 ? 'active' : ''}" onclick="switchHeroPhoto('${item.url}', '${escapeHtml(item.title)}', this)">
                <img src="${item.url}" alt="${escapeHtml(item.title)}" loading="lazy">
                <span>${escapeHtml(item.title.split(' ')[0] + ' ' + (item.title.split(' ')[1] || ''))}</span>
              </button>
            `).join('')}
          </div>
        </div>
        ` : ''}
      </div>

      <div class="car-hero-details">
        <span class="car-hero-brand">${escapeHtml(car.brand)} &bull; ${escapeHtml(car.bodyType)}</span>
        <h1 class="car-hero-title">${escapeHtml(car.name)}</h1>
        <p class="car-hero-tagline">${escapeHtml(car.tagline)}</p>

        <!-- Price Box -->
        <div class="price-box-card">
          <div>
            <div class="price-label">Ex-Showroom Price Range</div>
            <div class="price-main-val">${escapeHtml(car.priceRange)}</div>
          </div>
          <div>
            <div class="price-label">Estimated On-Road Price (<span id="selectedCityLabel">Delhi NCR</span>)</div>
            <div id="onRoadDisplay" class="onroad-badge">Est. ${formatLakh(defaultOnRoad.total)}</div>
          </div>
        </div>

        <!-- City Selector -->
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px; flex-wrap:wrap; gap:6px;">
            <span style="font-size:12px; font-weight:800; color:var(--text-muted); text-transform:uppercase;">Select City for Accurate On-Road Pricing:</span>
            <button type="button" class="btn-cell-detect" onclick="detectCarPageLocation()" style="font-size:11px; padding:3px 9px;">🎯 Detect My Location</button>
          </div>
          <div class="city-picker-row">
            ${CITIES.map((c, i) => `
              <button type="button" class="city-pill-btn ${i === 0 ? 'active' : ''}" data-city-id="${c.id}" onclick="switchCity('${c.id}', '${c.name}')">
                📍 ${c.name} (${Math.round(c.rtoRate * 100)}% RTO)
              </button>
            `).join('')}
          </div>
        </div>

        ${colorsList.length > 0 ? `
          <!-- Colors -->
          <div style="margin-top:24px;">
            <span style="font-size:12px; font-weight:800; color:var(--text-muted); text-transform:uppercase;">Official Colors (<span id="colorNameDisplay">${colorsList[0].name}</span>):</span>
            <div class="swatches-seo-row">
              ${colorsList.map((col, idx) => `
                <button type="button" class="swatch-item-btn ${idx === 0 ? 'active' : ''}" onclick="switchColor('${col.image}', '${col.name.replace(/'/g, "\\'")}', this)">
                  <span class="swatch-color-dot" style="background:${col.hex};"></span>
                  <span>${col.name}</span>
                </button>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="cta-seo-bar">
          <a href="/?compare=${car.id}" class="cta-btn-primary">
            ⚖️ Compare ${escapeHtml(car.name)} with Rivals
          </a>
          <a href="/?brand=${encodeURIComponent(car.brand)}" class="cta-btn-secondary">
            🏢 More ${escapeHtml(car.brand)} Cars
          </a>
        </div>
      </div>
    </article>

    ${galleryList.length > 0 ? `
    <!-- CarWale-style Full Photo Gallery Grid (Exterior, Cabin, Technology, Engine) -->
    <section id="gallerySection" class="car-gallery-section">
      <div class="section-title-wrap">
        <h2 class="section-heading-seo">📸 ${escapeHtml(car.name)} HD Photo Gallery (${galleryList.length} Images)</h2>
        <span class="section-badge-pill">100% Official OEM High-Res Renders</span>
      </div>
      <div class="gallery-cards-grid">
        ${galleryList.map((item, idx) => `
          <figure class="gallery-photo-card" onclick="openLightbox('${item.url}', '${escapeHtml(item.title)}')">
            <div class="photo-img-wrap">
              <img src="${item.url}" alt="${escapeHtml(item.title)}" loading="lazy">
              <span class="photo-zoom-badge">🔍 Zoom</span>
            </div>
            <figcaption class="photo-caption">
              <strong>#${idx + 1}</strong> ${escapeHtml(item.title)}
            </figcaption>
          </figure>
        `).join('')}
      </div>
    </section>
    ` : ''}

    <!-- Key Specifications Grid -->
    <section>
      <h2 class="section-heading-seo">📊 Key Specifications & Dimensions</h2>
      <div class="specs-grid-seo">
        <div class="spec-seo-card">
          <span class="spec-seo-label">Fuel Types</span>
          <span class="spec-seo-value">⛽ ${(car.fuelTypes || []).join(', ')}</span>
        </div>
        <div class="spec-seo-card">
          <span class="spec-seo-label">Ground Clearance</span>
          <span class="spec-seo-value">📐 ${car.groundClearance || 'N/A'}</span>
        </div>
        <div class="spec-seo-card">
          <span class="spec-seo-label">Boot Space</span>
          <span class="spec-seo-value">🧳 ${car.bootSpace || 'N/A'}</span>
        </div>
        <div class="spec-seo-card">
          <span class="spec-seo-label">Safety Rating</span>
          <span class="spec-seo-value">🛡️ ${car.safetyRating || 'High Safety'}</span>
        </div>
        <div class="spec-seo-card">
          <span class="spec-seo-label">Waiting Period</span>
          <span class="spec-seo-value">⏳ ${car.waitingPeriod || '1 - 4 Weeks'}</span>
        </div>
        <div class="spec-seo-card">
          <span class="spec-seo-label">Body Style</span>
          <span class="spec-seo-value">🚗 ${car.bodyType || 'SUV'}</span>
        </div>
        ${car.specs && car.specs.seatingCapacity ? `
          <div class="spec-seo-card">
            <span class="spec-seo-label">Seating Capacity</span>
            <span class="spec-seo-value">👥 ${car.specs.seatingCapacity}</span>
          </div>
        ` : ''}
        ${car.specs && car.specs.transmissions ? `
          <div class="spec-seo-card">
            <span class="spec-seo-label">Transmission</span>
            <span class="spec-seo-value">⚙️ ${car.specs.transmissions}</span>
          </div>
        ` : ''}
      </div>
    </section>

    <!-- Variants Breakdown Table -->
    ${variantsList.length > 0 ? `
      <section>
        <h2 class="section-heading-seo">📋 ${escapeHtml(car.name)} Variant-by-Variant Price List</h2>
        <div class="variants-seo-table-container">
          <table class="variants-seo-table">
            <thead>
              <tr>
                <th>Variant Name</th>
                <th>Powertrain</th>
                <th>Ex-Showroom</th>
                <th>Est. On-Road (<span class="tableCityHeader">Delhi NCR</span>)</th>
                <th>Key Features</th>
              </tr>
            </thead>
            <tbody>
              ${variantsList.map(v => {
                const varOnRoad = calculateOnRoadPrice(v.exShowroom, 'delhi');
                return `
                  <tr data-base-price="${v.exShowroom}">
                    <td>
                      <strong>${escapeHtml(v.name)}</strong>
                      ${v.isVFM ? '<span class="vfm-chip">⭐ Best VFM</span>' : ''}
                    </td>
                    <td>${escapeHtml(v.fuel || '')} ${escapeHtml(v.trans ? '• ' + v.trans : '')}</td>
                    <td><strong>${formatINR(v.exShowroom)}</strong></td>
                    <td class="variant-onroad-cell"><strong>${formatLakh(varOnRoad.total)}</strong></td>
                    <td style="font-size:12px; color:var(--text-secondary); max-width:280px;">
                      ${(v.keyFeatures || []).slice(0, 3).map(f => `&check; ${escapeHtml(f)}`).join('<br>')}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </section>
    ` : ''}

    <!-- Editorial Overview -->
    <section>
      <h2 class="section-heading-seo">📝 Expert Review & Technical Overview</h2>
      <div class="editorial-box">
        <p>${safeSummary}</p>
        ${car.specs && car.specs.engineOptions ? `<p style="margin-top:12px;"><strong>Engine Options & Performance:</strong> ${escapeHtml(car.specs.engineOptions)}</p>` : ''}
        ${car.specs && car.specs.dimensions ? `<p style="margin-top:8px;"><strong>Dimensions & Wheelbase:</strong> ${escapeHtml(car.specs.dimensions)} (Wheelbase: ${escapeHtml(car.specs.wheelbase || 'N/A')})</p>` : ''}
      </div>
    </section>

  </main>

  <!-- Interactive Client-side Script for City and Color Switching -->
  <!-- Exact Travomint Footer (Matching User Screenshot) -->
  <footer class="travomint-footer">
    <div class="footer-container">
      <div class="footer-top-grid">
        
        <!-- Col 1: About Us -->
        <div>
          <div class="footer-col-title">About Us</div>
          <ul class="footer-links-list">
            <li><a href="/#heroSection">About Care My Vehicle</a></li>
            <li><a href="/#trendingSection">Our Research & Methodology</a></li>
            <li><a href="/#compareSection">Editorial Team</a></li>
            <li><a href="mailto:support@caremyvehicle.in">Contact Us</a></li>
            <li><a href="/#newsSection">Media & Press</a></li>
            <li><a href="/#brandsSection">Automotive Directory</a></li>
          </ul>
        </div>

        <!-- Col 2: Vehicle Radar -->
        <div>
          <div class="footer-col-title">Vehicle Radar</div>
          <ul class="footer-links-list">
            <li><a href="/">New Car Launches (2024–2026)</a></li>
            <li><a href="/">City On-Road Price Calculator</a></li>
            <li><a href="/#compareSection">Compare Car Specs Side-by-Side</a></li>
            <li><a href="/#catalogSection">Electric Vehicles (EV) Hub</a></li>
            <li><a href="/#trendingSection">Value For Money (VFM) Variant Radar</a></li>
            <li><a href="/#popularUsedCarsSection">Used Car Valuation Hub</a></li>
          </ul>
        </div>

        <!-- Col 3: Newsletter, 100% Transparent, App & Social Icons -->
        <div>
          <div class="footer-col-title">Stay Updated</div>
          
          <div class="newsletter-input-box">
            <input type="email" placeholder="Enter your email address">
            <button class="newsletter-btn" type="button" onclick="alert('Thank you for subscribing to Care My Vehicle radar updates!')">✈️</button>
          </div>

          <div class="secure-pay-banner">
            <div>
              <div class="secure-pay-title">100% Transparent</div>
              <div class="secure-pay-sub">- Zero Dealer Spam Guaranteed</div>
            </div>
            <div style="font-size:22px;">🛡️</div>
          </div>

          <!-- App Badges & QR Code -->
          <div class="app-download-card">
            <div class="app-badges-col">
              <a href="#" class="app-badge-btn" onclick="alert('Care My Vehicle Mobile App coming soon to Apple App Store!')">
                <span style="font-size:16px;">🍏</span>
                <div>
                  <div style="font-size:8px; opacity:0.8;">Download on the</div>
                  <div>App Store</div>
                </div>
              </a>
              <a href="#" class="app-badge-btn" onclick="alert('Care My Vehicle Mobile App coming soon to Google Play Store!')">
                <span style="font-size:14px;">▶</span>
                <div>
                  <div style="font-size:8px; opacity:0.8;">GET IT ON</div>
                  <div>Google Play</div>
                </div>
              </a>
            </div>

            <div style="font-size:11px; font-weight:800; color:#64748B;">OR</div>

            <div class="qr-box">
              <div class="qr-code-img">📱</div>
              <div>Scan for Radar</div>
            </div>
          </div>

          <!-- 5 Square Social Buttons (Travomint exact colors) -->
          <div class="social-icons-row">
            <a href="https://www.facebook.com" target="_blank" rel="noopener" class="social-sq-btn soc-fb" title="Facebook">f</a>
            <a href="https://www.instagram.com/caremyvehicle/" target="_blank" rel="noopener" class="social-sq-btn soc-insta" title="Instagram @caremyvehicle">📸</a>
            <a href="https://twitter.com" target="_blank" rel="noopener" class="social-sq-btn soc-x" title="X (Twitter)">𝕏</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener" class="social-sq-btn soc-in" title="LinkedIn">in</a>
            <a href="https://youtube.com" target="_blank" rel="noopener" class="social-sq-btn soc-yt" title="YouTube">▶</a>
          </div>

        </div>

      </div>

      <!-- Mid Brand Logo & Copyright -->
      <div class="footer-mid-brand">
        <div class="footer-brand-logo brand-font">Care My <span style="color:#FFF;">Vehicle</span></div>
        <div class="footer-copyright">&copy; 2024–2026 Care My Vehicle. All Rights Reserved.</div>
      </div>

      <!-- Contact Pill Strip (Helpline, Email, Instagram) -->
      <div class="footer-contact-pill">
        <div class="contact-item">
          <span>📞</span> Helpline: +91-120-4814492
        </div>
        <div>or, simply</div>
        <div class="contact-item">
          <span>✉️</span> Email: contact@caremyvehicle.in
        </div>
        <div class="contact-item">
          <span>📸</span> Instagram: <a href="https://www.instagram.com/caremyvehicle/" target="_blank" rel="noopener" style="color:#FFF; text-decoration:underline;">@caremyvehicle</a>
        </div>
      </div>

      <!-- Legal Disclaimer -->
      <p class="footer-disclaimer-text">
        Legal & Editorial Disclaimer: Care My Vehicle is an independent automotive research, variant analysis, and consumer education platform. All brand names, model trademarks, logos, and vehicle photographs belong to their respective automotive manufacturers (OEMs) and are utilized here strictly under Indian Fair Dealing copyright laws (Section 52 of the Indian Copyright Act, 1957) for editorial reporting, vehicle comparison, and consumer awareness.
      </p>

    </div>
  </footer>

  <script>
    const CITIES = ${JSON.stringify(CITIES)};
    const minPrice = ${car.minPrice};

    function calculateOnRoad(exShowroom, cityId) {
      const city = CITIES.find(c => c.id === cityId) || CITIES[0];
      const rto = Math.round(exShowroom * city.rtoRate);
      const insurance = Math.round(exShowroom * 0.038);
      const tcs = exShowroom > 1000000 ? Math.round(exShowroom * 0.01) : 0;
      const total = exShowroom + rto + insurance + tcs + (city.cess || 0) + (city.fastag || 500);
      return total;
    }

    function formatLakh(amt) {
      const lakh = (amt / 100000).toFixed(2);
      return '₹' + lakh + ' Lakh';
    }

    function detectCarPageLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          let closest = CITIES[0];
          let minD = Infinity;
          for (const c of CITIES) {
            if (!c.lat || !c.lon) continue;
            const d = Math.hypot(c.lat - pos.coords.latitude, c.lon - pos.coords.longitude);
            if (d < minD) { minD = d; closest = c; }
          }
          switchCity(closest.id, closest.name);
          alert('🎯 Located: ' + closest.name + ' (' + Math.round(closest.rtoRate * 100) + '% State RTO)');
        }, () => {
          fetch('https://ipapi.co/json/').then(r => r.json()).then(data => {
            if (data && data.city) {
              const matched = CITIES.find(c => c.name.toLowerCase().includes(data.city.toLowerCase()));
              if (matched) {
                switchCity(matched.id, matched.name);
                alert('🎯 Located via Network: ' + matched.name);
              }
            }
          }).catch(() => {});
        }, { timeout: 5000 });
      }
    }

    function switchCity(cityId, cityName) {
      document.querySelectorAll('.city-pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.cityId === cityId);
      });
      document.getElementById('selectedCityLabel').textContent = cityName;
      document.querySelectorAll('.tableCityHeader').forEach(el => el.textContent = cityName);

      const totalHero = calculateOnRoad(minPrice, cityId);
      document.getElementById('onRoadDisplay').textContent = 'Est. ' + formatLakh(totalHero);

      document.querySelectorAll('tr[data-base-price]').forEach(row => {
        const base = parseInt(row.getAttribute('data-base-price'), 10);
        if (!isNaN(base)) {
          const varTotal = calculateOnRoad(base, cityId);
          const cell = row.querySelector('.variant-onroad-cell');
          if (cell) cell.innerHTML = '<strong>' + formatLakh(varTotal) + '</strong>';
        }
      });
    }

    function switchHeroPhoto(imgUrl, title, btn) {
      const hero = document.getElementById('mainHeroImage');
      if (hero) {
        hero.style.opacity = '0.3';
        setTimeout(() => {
          hero.src = imgUrl;
          hero.style.opacity = '1';
        }, 120);
      }
      document.querySelectorAll('.thumb-pill-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
    }

    function openLightbox(imgUrl, caption) {
      let lb = document.getElementById('cmvLightbox');
      if (!lb) {
        lb = document.createElement('div');
        lb.id = 'cmvLightbox';
        lb.className = 'cmv-lightbox-modal';
        lb.innerHTML = '<div class="lightbox-overlay" onclick="closeLightbox()"></div>' +
          '<div class="lightbox-content">' +
            '<button class="lightbox-close-btn" onclick="closeLightbox()">&times;</button>' +
            '<img id="lightboxImg" src="" alt="">' +
            '<div id="lightboxCaption" class="lightbox-caption"></div>' +
          '</div>';
        document.body.appendChild(lb);
      }
      document.getElementById('lightboxImg').src = imgUrl;
      document.getElementById('lightboxCaption').textContent = caption;
      lb.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      const lb = document.getElementById('cmvLightbox');
      if (lb) lb.classList.remove('active');
      document.body.style.overflow = '';
    }

    function switchColor(imgUrl, colorName, btn) {
      document.getElementById('mainHeroImage').src = imgUrl;
      const nameEl = document.getElementById('colorNameDisplay');
      if (nameEl) nameEl.textContent = colorName;
      document.querySelectorAll('.swatch-item-btn').forEach(b => b.classList.remove('active'));
      if (btn) btn.classList.add('active');
    }
  </script>
</body>
</html>`;

  // Write to both root and web copies
  fs.writeFileSync(path.join(carsDir, `${car.id}.html`), html, 'utf-8');
  fs.writeFileSync(path.join(webCarsDir, `${car.id}.html`), html, 'utf-8');
});

console.log(`Successfully generated 91 car landing pages in /cars/!`);

// 2. Generate Master sitemap.xml
console.log('Generating comprehensive sitemap.xml...');

const POPULAR_COMPARISONS = [
  'nissan-magnite-vs-tata-punch',
  'tata-curvv-vs-citroen-basalt',
  'hyundai-creta-vs-kia-seltos',
  'skoda-kylaq-vs-maruti-brezza',
  'thar-roxx-vs-maruti-jimny',
  'tata-curvv-ev-vs-mg-windsor-ev',
  'toyota-innova-hycross-vs-mahindra-xuv700'
];

let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>https://www.caremyvehicle.in/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

// Add 91 Cars
CARS.forEach(car => {
  sitemapXml += `  <url>
    <loc>https://www.caremyvehicle.in/cars/${car.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
});

// Add News & Guides Articles
ARTICLES.forEach(art => {
  sitemapXml += `  <url>
    <loc>https://www.caremyvehicle.in/?article=${art.id}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
});

sitemapXml += `</urlset>`;

fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf-8');
fs.writeFileSync(path.join(webDir, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log(`Generated sitemap.xml with ${1 + CARS.length + ARTICLES.length} indexed URLs.`);

// 3. Generate vercel.json for Clean URLs
const vercelConfig = JSON.stringify({
  cleanUrls: true,
  trailingSlash: false
}, null, 2);

fs.writeFileSync(path.join(rootDir, 'vercel.json'), vercelConfig, 'utf-8');
fs.writeFileSync(path.join(webDir, 'vercel.json'), vercelConfig, 'utf-8');
console.log('Created vercel.json with cleanUrls: true.');

