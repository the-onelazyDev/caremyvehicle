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
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">

  <!-- Main Stylesheet -->
  <link rel="stylesheet" href="/css/style.css">

  <style>
    .car-page-container {
      max-width: 1100px;
      margin: 0 auto;
      padding: 20px 16px 80px;
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
    .car-hero-main-img {
      max-width: 85%;
      max-height: 260px;
      object-fit: contain;
      mix-blend-mode: multiply;
      filter: drop-shadow(0 12px 24px rgba(15, 23, 42, 0.12));
      transition: transform 0.3s ease;
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

  <!-- Top Sticky Navigation Bar -->
  <header class="site-header">
    <div class="header-inner">
      <div class="brand-lockup">
        <a href="/" style="display:flex; align-items:center; gap:10px; text-decoration:none;">
          <img src="/assets/logo.png" alt="Care My Vehicle Logo" class="brand-icon" style="width:38px; height:38px; object-fit:contain;">
          <div>
            <div class="brand-name" style="font-size:18px;">Care My <span>Vehicle</span></div>
            <div class="brand-tagline" style="font-size:11px;">Care Better. Drive Longer.</div>
          </div>
        </a>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <a href="https://www.instagram.com/caremyvehicle/" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:5px; background:linear-gradient(45deg, #F58529, #DD2A7B, #8134AF); color:#FFF; padding:6px 12px; border-radius:20px; font-size:12px; font-weight:800; text-decoration:none; box-shadow:0 2px 6px rgba(221,42,123,0.3);">
          <span>📸</span> Instagram
        </a>
        <a href="/" class="cta-btn-secondary" style="padding:6px 12px; font-size:12px; font-weight:700;">
          &larr; All Cars
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
          <span class="card-badge badge-launch">${formatLaunchBadge(car.launchDate)}</span>
          <span class="card-badge badge-safety">${formatSafetyBadge(car.safetyRating)}</span>
        </div>
        <img id="mainHeroImage" src="${car.heroImage}" alt="${escapeHtml(car.name)}" class="car-hero-main-img">
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
          <span style="font-size:12px; font-weight:800; color:var(--text-muted); text-transform:uppercase;">Select City for Accurate On-Road Pricing:</span>
          <div class="city-picker-row">
            ${CITIES.map((c, i) => `
              <button type="button" class="city-pill-btn ${i === 0 ? 'active' : ''}" data-city-id="${c.id}" onclick="switchCity('${c.id}', '${c.name}')">
                📍 ${c.name}
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
  <!-- Dedicated Car Page Footer with Instagram -->
  <footer class="site-footer" style="margin-top:40px; padding:32px 16px; background:#FFF; border-top:1px solid #E2E8F0; text-align:center;">
    <div style="max-width:800px; margin:0 auto;">
      <div class="brand-name" style="font-size:20px; margin-bottom:8px;">Care My <span>Vehicle</span></div>
      <p style="font-size:13px; color:#64748B; margin-bottom:16px;">
        India's modern, zero-spam automotive radar for new car launches, variants, and honest ownership care.
      </p>

      <!-- Official Social Channels -->
      <div style="display:flex; align-items:center; justify-content:center; gap:12px; margin-bottom:20px;">
        <a href="https://www.instagram.com/caremyvehicle/" target="_blank" rel="noopener" style="display:inline-flex; align-items:center; gap:6px; background:#FFF; border:1px solid #CBD5E1; color:#0F172A; padding:8px 16px; border-radius:24px; font-size:13px; font-weight:800; text-decoration:none; box-shadow:0 2px 6px rgba(0,0,0,0.05);">
          <span style="font-size:16px;">📸</span> Follow @caremyvehicle on Instagram
        </a>
      </div>

      <p style="font-size:11.5px; color:#94A3B8; line-height:1.5;">
        &copy; 2024–2026 Care My Vehicle. All manufacturer names and logos are properties of their respective OEMs under Indian Fair Dealing copyright laws.
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

