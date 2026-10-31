
// Direct Dedicated Car Landing Page Navigation (CarWale Style)
window.navigateToCar = function(carId, hash) {
  const isBuiltIn = Array.isArray(CARS) && CARS.some(c => c.id === carId);
  if (!isBuiltIn && typeof window.openCarModal === 'function') {
    window.openCarModal(carId);
    return;
  }
  const targetUrl = '/cars/' + encodeURIComponent(carId) + '.html' + (hash ? '#' + hash : '');
  window.location.href = targetUrl;
};

import { CARS, CITIES, calculateOnRoadPrice, formatINR, formatLakh } from './carData.js';
import { ARTICLES, POPULAR_USED_CARS as DEFAULT_POPULAR_USED_CARS } from './newsData.js';

// Official Brand Logos Mapping (Mass-Market + Luxury & Global OEMs)
export const BRAND_LOGOS = {
  'Maruti Suzuki': 'assets/brands/maruti-suzuki.png',
  'Hyundai': 'assets/brands/hyundai.png',
  'Tata': 'assets/brands/tata.png',
  'Mahindra': 'assets/brands/mahindra.png',
  'Kia': 'assets/brands/kia.png',
  'Toyota': 'assets/brands/toyota.png',
  'MG Motor': 'assets/brands/mg-motor.png',
  'Honda': 'assets/brands/honda.png',
  'Skoda': 'assets/brands/skoda.png',
  'Volkswagen': 'assets/brands/volkswagen.png',
  'Renault': 'assets/brands/renault.png',
  'Citroën': 'assets/brands/citroen.png',
  'Citroen': 'assets/brands/citroen.png',
  'BYD': 'assets/brands/byd.png',
  'Nissan': 'assets/brands/nissan.png',
  'Land Rover': 'assets/brands/land-rover.svg',
  'Range Rover': 'assets/brands/range-rover.svg',
  'Maserati': 'assets/brands/maserati.svg',
  'Mercedes-Benz': 'assets/brands/mercedes-benz.svg',
  'Mercedes': 'assets/brands/mercedes-benz.svg',
  'BMW': 'assets/brands/bmw.svg',
  'Audi': 'assets/brands/audi.svg',
  'Porsche': 'assets/brands/porsche.svg',
  'Volvo': 'assets/brands/volvo.svg',
  'Lexus': 'assets/brands/lexus.svg',
  'Jeep': 'assets/brands/jeep.svg',
  'Jaguar': 'assets/brands/jaguar.svg',
  'Ferrari': 'assets/brands/ferrari.svg',
  'Lamborghini': 'assets/brands/lamborghini.svg'
};

export function createBrandFallbackSvg(brandName) {
  const clean = (brandName || 'OEM').toUpperCase().replace(/[^A-Z0-9 -]/g, '').slice(0, 12);
  const fontSize = clean.length > 7 ? 20 : 26;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 110"><rect x="8" y="14" width="204" height="82" rx="18" fill="#0F172A" stroke="#CBD5E1" stroke-width="4"/><text x="110" y="64" text-anchor="middle" fill="#FFFFFF" font-family="Arial Black, sans-serif" font-weight="900" font-size="${fontSize}" letter-spacing="2">${clean}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}

export function resolveBrandLogoUrl(brandName, allCarsList) {
  const b = brandKey(brandName);
  try {
    const customBrandLogos = JSON.parse(localStorage.getItem('cmv_custom_brand_logos') || '{}');
    if (customBrandLogos[b]) return customBrandLogos[b];
  } catch (e) {}

  if (Array.isArray(allCarsList)) {
    const carWithLogo = allCarsList.find(c => brandKey(c.brand) === b && c.brandLogo);
    if (carWithLogo && carWithLogo.brandLogo) return carWithLogo.brandLogo;
  }

  if (BRAND_LOGOS[b]) return BRAND_LOGOS[b];

  const lowerMatch = Object.keys(BRAND_LOGOS).find(k => k.toLowerCase() === b.toLowerCase());
  if (lowerMatch) return BRAND_LOGOS[lowerMatch];

  return createBrandFallbackSvg(b);
}

// Multi-Facet Filter State
let filters = {
  category: 'all',
  brand: 'all',
  fuel: 'all',
  price: 'all',
  search: '',
  sort: 'newest'
};

let selectedCityId = 'delhi';
let compareList = []; // Up to 4 car IDs for side-by-side comparison

const POPULAR_COMPARISONS = [
  { label: 'Magnite vs Punch', ids: ['nissan-magnite', 'tata-punch'] },
  { label: 'Curvv vs Basalt', ids: ['tata-curvv', 'citroen-basalt'] },
  { label: 'Creta vs Seltos', ids: ['hyundai-creta', 'kia-seltos'] },
  { label: 'Kylaq vs Brezza', ids: ['skoda-kylaq', 'maruti-brezza'] },
  { label: 'Thar Roxx vs Jimny', ids: ['thar-roxx', 'maruti-jimny'] },
  { label: 'Curvv EV vs Windsor EV', ids: ['tata-curvv-ev', 'mg-windsor-ev'] },
  { label: 'Innova Hycross vs XUV700', ids: ['toyota-innova-hycross', 'mahindra-xuv700'] }
];
let currentModalCar = null;

// DOM Elements
const carsContainer = document.getElementById('carsContainer');
const citySelectorBtn = document.getElementById('citySelectorBtn');
const cityNameDisplay = document.getElementById('cityNameDisplay');
const cityModal = document.getElementById('cityModal');
const carDetailModal = document.getElementById('carDetailModal');
const articleModal = document.getElementById('articleModal');
const compareModal = document.getElementById('compareModal');
const compareDock = document.getElementById('compareDock');
const globalSearchInput = document.getElementById('globalSearchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');

function safeExec(fn, label) {
  try {
    fn();
  } catch (err) {
    console.error('[CMV Render Warning]', label || fn.name, err);
  }
}

// Initialize Application (Fault-Tolerant Per-Section Rendering)
document.addEventListener('DOMContentLoaded', () => {
  safeExec(applyHomepageLayoutConfig, 'applyHomepageLayoutConfig');
  safeExec(renderBrandsShelf, 'renderBrandsShelf');
  safeExec(renderRecentlyViewed, 'renderRecentlyViewed');
  safeExec(renderRecommendedShelf, 'renderRecommendedShelf');
  safeExec(renderTrendingShelf, 'renderTrendingShelf');
  safeExec(renderUnder10LShelf, 'renderUnder10LShelf');
  safeExec(renderAbove10LShelf, 'renderAbove10LShelf');
  safeExec(renderOffersShelf, 'renderOffersShelf');
  safeExec(renderUpcomingLaunchedShelf, 'renderUpcomingLaunchedShelf');
  safeExec(renderFuelTypeShelf, 'renderFuelTypeShelf');
  safeExec(renderTrendingLaunches, 'renderTrendingLaunches');
  safeExec(renderCompareShelf, 'renderCompareShelf');
  safeExec(renderCars, 'renderCars');
  safeExec(renderPopularUsedCars, 'renderPopularUsedCars');
  safeExec(renderUsedCarsByCity, 'renderUsedCarsByCity');
  safeExec(renderNewsSection, 'renderNewsSection');
  safeExec(applyHomepageLayoutConfig, 'applyHomepageLayoutConfigPost');
  safeExec(setupEventListeners, 'setupEventListeners');
  safeExec(initHeaderScrollSpy, 'initHeaderScrollSpy');
  safeExec(checkDeepLink, 'checkDeepLink');
});

const DEFAULT_HOMEPAGE_SECTIONS = [
  { key: 'recentlyViewed', domId: 'recentlyViewedSection', title: 'Recently Viewed Cars', visible: true, cardStyle: 'compact', layout: 'carousel' },
  { key: 'recommended', domId: 'recommendedSection', title: 'Recommended For You', visible: true, cardStyle: 'compact', layout: 'carousel' },
  { key: 'trending', domId: 'trendingSection', title: 'Trending Cars (2024–2026)', visible: true, cardStyle: 'big', layout: 'carousel' },
  { key: 'popularBudget', domId: 'popularBudgetSection', title: 'Popular Cars By Budget', visible: true, cardStyle: 'compact', layout: 'carousel', showUnder10L: true, showAbove10L: true, under10LCardStyle: 'compact', under10LLayout: 'carousel', above10LCardStyle: 'compact', above10LLayout: 'carousel' },
  { key: 'offers', domId: 'offersSection', title: 'Get Offers on Popular Cars', visible: true, cardStyle: 'medium', layout: 'carousel' },
  { key: 'brands', domId: 'brandsSection', title: 'All Brands', visible: true, cardStyle: 'compact', layout: 'grid' },
  { key: 'onRoadChecker', domId: 'onRoadCheckerSection', title: 'Check New Car On-Road Price', visible: true, cardStyle: 'big', layout: 'grid' },
  { key: 'choiceFinder', domId: 'choiceFinderSection', title: 'Find The Cars Of Your Choice', visible: true, cardStyle: 'medium', layout: 'grid' },
  { key: 'upcomingLaunched', domId: 'upcomingLaunchedSection', title: 'Upcoming and Recently Launched Cars', visible: true, cardStyle: 'compact', layout: 'carousel' },
  { key: 'fuelType', domId: 'fuelTypeSection', title: 'Cars by Fuel Type', visible: true, cardStyle: 'compact', layout: 'carousel' },
  { key: 'compare', domId: 'compareSection', title: 'Compare Cars', visible: true, cardStyle: 'medium', layout: 'carousel' },
  { key: 'usedCarsByCity', domId: 'usedCarsByCitySection', title: 'Used Cars By City', visible: true, cardStyle: 'compact', layout: 'carousel' },
  { key: 'popularUsedCars', domId: 'popularUsedCarsSection', title: 'Popular Used Cars in India', visible: true, cardStyle: 'medium', layout: 'grid' },
  { key: 'news', domId: 'newsSection', title: 'Latest Car Updates & Expert Reviews', visible: true, cardStyle: 'medium', layout: 'grid' }
];

function getHomepageConfig() {
  try {
    const raw = JSON.parse(localStorage.getItem('cmv_homepage_config') || 'null');
    if (raw && typeof raw === 'object') {
      const savedSections = Array.isArray(raw.sections) ? raw.sections : [];
      const mergedSections = [];
      const seen = new Set();
      savedSections.forEach(s => {
        const def = DEFAULT_HOMEPAGE_SECTIONS.find(d => d.key === s.key || d.domId === s.domId);
        if (def && !seen.has(def.key)) {
          seen.add(def.key);
          mergedSections.push(Object.assign({}, def, s, { key: def.key, domId: def.domId }));
        }
      });
      DEFAULT_HOMEPAGE_SECTIONS.forEach(def => {
        if (!seen.has(def.key)) {
          mergedSections.push(Object.assign({}, def));
        }
      });
      return {
        sections: mergedSections,
        carOrders: (raw.carOrders && typeof raw.carOrders === 'object') ? raw.carOrders : {},
        excludedFromSection: (raw.excludedFromSection && typeof raw.excludedFromSection === 'object') ? raw.excludedFromSection : {}
      };
    }
  } catch (e) {}
  return {
    sections: DEFAULT_HOMEPAGE_SECTIONS.map(d => Object.assign({}, d)),
    carOrders: {},
    excludedFromSection: {}
  };
}

function getHomepageSectionConfig(sectionKey) {
  const cfg = getHomepageConfig();
  return cfg.sections.find(s => s.key === sectionKey) || DEFAULT_HOMEPAGE_SECTIONS.find(d => d.key === sectionKey) || { visible: true, cardStyle: 'compact', layout: 'carousel' };
}

function getOrderedCarsForSection(orderKey, defaultCars, allowAnyPinned = true) {
  const cfg = getHomepageConfig();
  const excluded = new Set((cfg.excludedFromSection && Array.isArray(cfg.excludedFromSection[orderKey])) ? cfg.excludedFromSection[orderKey] : []);
  const customOrder = (cfg.carOrders && Array.isArray(cfg.carOrders[orderKey])) ? cfg.carOrders[orderKey] : [];
  const allCars = getAllCars();

  if (!customOrder.length && !excluded.size) {
    return defaultCars;
  }

  const result = [];
  const seen = new Set();

  customOrder.forEach(id => {
    if (excluded.has(id) || seen.has(id)) return;
    const found = defaultCars.find(c => c.id === id) || (allowAnyPinned ? allCars.find(c => c.id === id) : null);
    if (found) {
      seen.add(found.id);
      result.push(found);
    }
  });

  defaultCars.forEach(car => {
    if (!car || excluded.has(car.id) || seen.has(car.id)) return;
    seen.add(car.id);
    result.push(car);
  });

  return result;
}

function applyShelfLayoutClasses(containerEl, layoutMode, cardStyle) {
  if (!containerEl) return;
  containerEl.classList.remove('shelf-layout-grid', 'grid-cards-compact', 'grid-cards-big');
  const secEl = containerEl.closest('section');
  const controlsEl = secEl ? secEl.querySelector('.shelf-controls') : null;
  if (layoutMode === 'grid') {
    containerEl.classList.add('shelf-layout-grid');
    if (cardStyle === 'compact') containerEl.classList.add('grid-cards-compact');
    if (cardStyle === 'big') containerEl.classList.add('grid-cards-big');
    if (controlsEl) controlsEl.style.display = 'none';
  } else {
    if (controlsEl) controlsEl.style.display = '';
  }
}

function applyHomepageLayoutConfig() {
  const cfg = getHomepageConfig();
  const footer = document.querySelector('footer.travomint-footer');
  if (!footer || !footer.parentElement) return;
  const parent = footer.parentElement;

  cfg.sections.forEach(secCfg => {
    const el = document.getElementById(secCfg.domId);
    if (!el) return;

    // 1. Move section in DOM order right before footer
    parent.insertBefore(el, footer);

    // 2. Apply visibility
    if (secCfg.visible === false) {
      el.style.display = 'none';
      el.setAttribute('data-admin-hidden', 'true');
    } else {
      el.removeAttribute('data-admin-hidden');
      if (secCfg.key !== 'recentlyViewed') {
        el.style.display = '';
      }
    }

    // 3. Apply custom section heading title if customized
    if (secCfg.title && secCfg.title.trim()) {
      const heading = el.querySelector('.section-main-title') || el.querySelector('h3.brand-font');
      if (heading) {
        if (secCfg.key === 'popularUsedCars' && heading.querySelector('.used-soon-pill')) {
          heading.innerHTML = `${secCfg.title.trim()} <span class="used-soon-pill">Coming Soon</span>`;
        } else {
          heading.textContent = secCfg.title.trim();
        }
      }
    }

    // 4. Sub-sections inside Popular Cars By Budget
    if (secCfg.key === 'popularBudget') {
      const u10 = document.getElementById('carsUnder10LSection');
      const a10 = document.getElementById('carsAbove10LSection');
      if (u10) u10.style.display = secCfg.showUnder10L === false ? 'none' : '';
      if (a10) a10.style.display = secCfg.showAbove10L === false ? 'none' : '';
    }
  });
}

function normalizeCarRecord(car) {
  if (!car || typeof car !== 'object') return car;
  const minP = Number(car.minPrice) || 1000000;
  const maxP = Number(car.maxPrice) || minP || 1500000;
  const fuels = Array.isArray(car.fuelTypes) && car.fuelTypes.length > 0
    ? car.fuelTypes.map(f => String(f || 'Petrol'))
    : (typeof car.fuelTypes === 'string' && car.fuelTypes.trim() ? car.fuelTypes.split(',').map(s => s.trim()) : ['Petrol']);
  const summaryText = car.summary || car.description || car.tagline || car.uspHighlight || `${car.name || 'New Car'} official India specifications and on-road price.`;
  const taglineText = car.tagline || car.uspHighlight || car.description || summaryText;
  const launchStr = String(car.launchDate || car.launchTag || (car.launchYear ? `${car.launchYear} Launched` : '2026 Launched'));
  const specsObj = Object.assign({
    engineOptions: car.engineOptions || '2.0L Turbo Powertrain',
    transmissions: Array.isArray(car.transmissions) ? car.transmissions.join(', ') : (car.transmissions || 'Automatic'),
    dimensions: car.dimensions || '4500 mm × 1850 mm × 1630 mm',
    wheelbase: car.wheelbase || '2700 mm',
    fuelTank: '60 Litres',
    seatingCapacity: '5 Passengers'
  }, car.specs || {});

  const variantsArr = Array.isArray(car.variants) && car.variants.length > 0
    ? car.variants.map(v => ({
        ...v,
        name: v.name || (car.name + ' Standard'),
        fuel: v.fuel || fuels[0] || 'Petrol',
        trans: v.trans || v.transmission || 'Automatic',
        transmission: v.transmission || v.trans || 'Automatic',
        exShowroom: Number(v.exShowroom || v.price) || minP,
        mileage: v.mileage || car.mileage || '15.0 kmpl',
        engine: v.engine || specsObj.engineOptions || '2.0L Turbo',
        vfmBadge: v.vfmBadge || 'Best Value Pick',
        keyFeatures: Array.isArray(v.keyFeatures)
          ? v.keyFeatures
          : (typeof v.features === 'string' ? v.features.split(',').map(s => s.trim()).filter(Boolean) : ['6 Airbags Standard', 'Touchscreen Infotainment'])
      }))
    : [{
        name: (car.name || 'Car') + ' Standard',
        fuel: fuels[0] || 'Petrol',
        trans: 'Automatic',
        transmission: 'Automatic',
        exShowroom: minP,
        isVFM: true,
        vfmBadge: 'Best Value Pick',
        mileage: car.mileage || '15.0 kmpl',
        engine: specsObj.engineOptions,
        keyFeatures: ['6 Airbags Standard', 'Touchscreen Infotainment', 'Alloy Wheels']
      }];

  return Object.assign({}, car, {
    id: car.id || 'custom-car',
    name: car.name || 'New Car',
    brand: car.brand || 'Luxury',
    brandLogo: car.brandLogo || BRAND_LOGOS[brandKey(car.brand)] || '',
    bodyType: car.bodyType || 'SUV',
    heroImage: car.heroImage || 'assets/logo.png',
    minPrice: minP,
    maxPrice: maxP,
    priceRange: car.priceRange || `${formatLakh(minP)} – ${formatLakh(maxP)}`,
    fuelTypes: fuels,
    launchDate: launchStr,
    safetyRating: String(car.safetyRating || '5-Star Safety'),
    groundClearance: String(car.groundClearance || '195 mm'),
    bootSpace: String(car.bootSpace || '420 Litres'),
    waitingPeriod: String(car.waitingPeriod || '4 - 6 Weeks'),
    tagline: String(taglineText),
    summary: String(summaryText),
    specs: specsObj,
    variants: variantsArr,
    colors: Array.isArray(car.colors) ? car.colors.map(col => ({
      ...col,
      name: col.name || 'Official Finish',
      hex: col.hex || '#1E293B',
      image: col.image || col.url || car.heroImage || 'assets/logo.png'
    })) : [],
    gallery: Array.isArray(car.gallery) ? car.gallery.map(g => ({
      ...g,
      url: g.url || g.image || car.heroImage || 'assets/logo.png',
      title: g.title || g.caption || car.name || 'Photo'
    })) : []
  });
}

// Helper to retrieve both built-in dataset and locally added custom cars with visibility filters
function getAllCars() {
  try {
    const hiddenCars = new Set(JSON.parse(localStorage.getItem('cmv_hidden_cars') || '[]'));
    const hiddenBrands = new Set(JSON.parse(localStorage.getItem('cmv_hidden_brands') || '[]'));
    const custom = JSON.parse(localStorage.getItem('cmv_custom_cars') || '[]');
    const customizations = JSON.parse(localStorage.getItem('cmv_car_customizations') || '{}');
    const customIds = new Set(custom.map(c => c.id));
    const base = CARS.filter(c => !customIds.has(c.id));
    const all = [...custom, ...base].map(rawCar => {
      const car = normalizeCarRecord(rawCar);
      const ov = customizations[car.id];
      if (!ov) return car;
      return normalizeCarRecord(Object.assign({}, car, {
        heroImage: ov.heroImage || car.heroImage,
        gallery: ov.gallery || car.gallery,
        variants: ov.variants || car.variants,
        colors: ov.colors || car.colors,
        pros: ov.pros || car.pros,
        cons: ov.cons || car.cons,
        brandLogo: ov.brandLogo || car.brandLogo
      }));
    });
    return all.filter(c => !hiddenCars.has(c.id) && !hiddenBrands.has(c.brand));
  } catch (e) {
    return CARS.map(normalizeCarRecord);
  }
}

// Deep Linking for SEO & Social Sharing (?car=id)
function checkDeepLink() {
  const params = new URLSearchParams(window.location.search);
  const carId = params.get('car');
  if (carId) {
    const car = getAllCars().find(c => c.id === carId || (carId === 'hyundai-creta-facelift' && c.id === 'hyundai-creta'));
    if (car) {
      setTimeout(() => window.openCarModal(car.id), 150);
    }
  }
  const compareParam = params.get('compare');
  if (compareParam) {
    const ids = compareParam.split(',').filter(Boolean);
    if (ids.length >= 2) {
      setTimeout(() => window.openCompareModal(ids), 200);
    }
  }
}

// 1. 🏢 Render Explore by Popular Brands Shelf
function brandKey(b) {
  return (b || '').replace(/\s*\(Nexa\)\s*$/i, '').trim();
}

function renderBrandsShelf() {
  const container = document.getElementById('brandsShelfContainer');
  if (!container) return;

  const allCarsList = getAllCars();
  const cfg = getHomepageConfig();
  const customBrandOrder = (cfg.carOrders && Array.isArray(cfg.carOrders.brands) && cfg.carOrders.brands.length > 0)
    ? cfg.carOrders.brands
    : ['Hyundai','Tata','Maruti Suzuki','Mahindra','Toyota','Kia','Skoda','MG Motor','Renault','Honda','Volkswagen','Citroën','Nissan','BYD','Land Rover','Maserati','Mercedes-Benz','BMW','Audi','Porsche','Volvo','Lexus','Jeep'];
  const excludedBrands = new Set((cfg.excludedFromSection && Array.isArray(cfg.excludedFromSection.brands)) ? cfg.excludedFromSection.brands : []);
  const uniqueBrands = [...new Set(allCarsList.map(c => brandKey(c.brand)))].filter(b => b && !excludedBrands.has(b)).sort((a, b) => {
    const ia = customBrandOrder.indexOf(a), ib = customBrandOrder.indexOf(b);
    return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib) || a.localeCompare(b);
  });

  container.innerHTML = uniqueBrands.map(b => {
    const logoUrl = resolveBrandLogoUrl(b, allCarsList);
    const fallbackSvgUri = createBrandFallbackSvg(b).replace(/'/g, "\\'");
    const isActive = filters.brand === b;
    return `
      <button class="brand-pill-card ${isActive ? 'active' : ''}" onclick="window.selectBrand('${b.replace(/'/g, "\\'")}')" title="${b}">
        <img src="${logoUrl}" alt="${b} Logo" class="brand-pill-logo" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src='${fallbackSvgUri}'">
        <div class="brand-pill-name">${b}</div>
      </button>
    `;
  }).join('');

  const clearBtn = document.getElementById('clearBrandBtn');
  if (clearBtn) {
    clearBtn.style.display = filters.brand !== 'all' ? 'inline-block' : 'none';
  }
}

window.selectBrand = function(brandName) {
  filters.brand = brandName;
  renderBrandsShelf();
  renderCars();
  const catSec = document.getElementById('catalogSection');
  if (catSec && brandName !== 'all') {
    catSec.scrollIntoView({ behavior: 'smooth' });
  }
};

// 2. 🔥 Render Trending 2024-2026 Launches

export function formatSafetyBadge(s) {
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

export function formatLaunchBadge(d) {
  if (!d) return '🚀 New Launch';
  if (/2026/i.test(d)) return '🔥 2026 Model';
  if (/2025/i.test(d)) return '🔥 2025 Model';
  if (/Facelift|Updated/i.test(d)) return '✨ New Facelift';
  if (/September|October|August|November|December/i.test(d)) return '🔥 Just Launched';
  if (/2024/i.test(d)) return '🚀 2024 Model';
  return '🚀 New Launch';
}

function renderTrendingLaunches() {
  const container = document.getElementById('trendingShelfContainer');
  if (!container) return;

  const allCars = getAllCars();
  let customIds = [];
  try {
    customIds = JSON.parse(localStorage.getItem('cmv_custom_cars') || '[]').map(c => c.id);
  } catch (e) {}

  const trendingIds = [
    ...customIds,
    'nissan-magnite',
    'tata-curvv',
    'thar-roxx',
    'skoda-kylaq',
    'hyundai-creta',
    'mg-windsor-ev',
    'nissan-tekton',
    'toyota-innova-hycross',
    'maruti-swift'
  ];

  const trendingCars = [];
  const seenIds = new Set();
  trendingIds.forEach(id => {
    if (seenIds.has(id)) return;
    const found = allCars.find(c => c.id === id);
    if (found) {
      seenIds.add(id);
      trendingCars.push(found);
    }
  });

  const baseList = trendingCars.length >= 4 ? trendingCars : allCars.slice(0, 8);
  const displayList = getOrderedCarsForSection('trending', baseList, true);
  const secCfg = getHomepageSectionConfig('trending');
  const cardStyle = secCfg.cardStyle || 'big';
  applyShelfLayoutClasses(container, secCfg.layout || 'carousel', cardStyle);

  let html = displayList.map(car => createShelfCarCard(car, cardStyle)).join('');
  if (cardStyle !== 'big') {
    html += createShelfViewMoreCard('/cars.html?sort=newest', 'View All Launches');
  }
  container.innerHTML = html;
}

// 3. Multi-Facet Filtering Engine
function getFilteredCars() {
  const allCars = getAllCars();
  return allCars.filter(car => {
    // Category / Body Type
    if (filters.category !== 'all') {
      const cat = filters.category.toLowerCase();
      const body = (car.bodyType || '').toLowerCase();
      if (cat === 'suv' && !body.includes('suv')) return false;
      if (cat === 'sedan' && !body.includes('sedan')) return false;
      if (cat === 'hatchback' && !body.includes('hatchback')) return false;
      if (cat === 'mpv' && !body.includes('mpv') && !body.includes('muv') && !(car.specs?.seatingCapacity && car.specs.seatingCapacity.includes('7'))) return false;
      if (cat === 'ev' && !car.fuelTypes.includes('EV')) return false;
      if (cat === 'luxury' && car.minPrice < 2500000) return false;
    }

    // Brand Filter
    if (filters.brand !== 'all' && brandKey(car.brand) !== filters.brand) {
      return false;
    }

    // Fuel Filter
    if (filters.fuel !== 'all') {
      if (filters.fuel === 'EV' && !car.fuelTypes.includes('EV')) return false;
      if (filters.fuel === 'Petrol' && !car.fuelTypes.includes('Petrol')) return false;
      if (filters.fuel === 'Diesel' && !car.fuelTypes.includes('Diesel')) return false;
      if (filters.fuel === 'CNG' && !car.fuelTypes.includes('CNG')) return false;
      if (filters.fuel === 'Hybrid' && !car.fuelTypes.includes('Hybrid') && !(car.tagline && car.tagline.toLowerCase().includes('hybrid'))) return false;
    }

    // Price Budget Filter
    if (filters.price !== 'all') {
      if (filters.price === 'under-6l' && car.minPrice >= 600000) return false;
      if (filters.price === '6-10l' && (car.minPrice < 600000 || car.minPrice > 1000000)) return false;
      if (filters.price === '10-15l' && (car.minPrice < 1000000 || car.minPrice > 1500000)) return false;
      if (filters.price === '15-25l' && (car.minPrice < 1500000 || car.minPrice > 2500000)) return false;
      if (filters.price === 'above-25l' && car.minPrice < 2500000) return false;
    }

    // Search Query Text
    if (filters.search) {
      const q = filters.search.toLowerCase().trim();
      const matchName = car.name.toLowerCase().includes(q);
      const matchBrand = car.brand.toLowerCase().includes(q);
      const matchTag = (car.tagline || '').toLowerCase().includes(q);
      const matchBody = (car.bodyType || '').toLowerCase().includes(q);
      const matchFuel = (car.fuelTypes || []).some(f => f.toLowerCase().includes(q));
      if (!matchName && !matchBrand && !matchTag && !matchBody && !matchFuel) return false;
    }

    return true;
  }).sort((a, b) => {
    if (filters.sort === 'price-asc') return a.minPrice - b.minPrice;
    if (filters.sort === 'price-desc') return b.minPrice - a.minPrice;
    if (filters.sort === 'safety') {
      const getRating = s => (s && (s.includes('5.0') || s.includes('5-Star') || s.includes('5 ★'))) ? 5 : 4;
      return getRating(b.safetyRating) - getRating(a.safetyRating);
    }
    return 0; // Default newest
  });
}

function renderActiveFilterTags() {
  const bar = document.getElementById('activeFiltersBar');
  const list = document.getElementById('activeTagsList');
  if (!bar || !list) return;

  const tags = [];
  if (filters.category !== 'all') {
    tags.push({ key: 'category', label: `Category: ${filters.category.toUpperCase()}` });
  }
  if (filters.brand !== 'all') {
    tags.push({ key: 'brand', label: `Brand: ${filters.brand}` });
  }
  if (filters.fuel !== 'all') {
    tags.push({ key: 'fuel', label: `Fuel: ${filters.fuel}` });
  }
  if (filters.price !== 'all') {
    const priceLabels = {
      'under-6l': 'Under ₹6 Lakh',
      '6-10l': '₹6 – ₹10 Lakh',
      '10-15l': '₹10 – ₹15 Lakh',
      '15-25l': '₹15 – ₹25 Lakh',
      'above-25l': 'Above ₹25 Lakh'
    };
    tags.push({ key: 'price', label: `Budget: ${priceLabels[filters.price] || filters.price}` });
  }
  if (filters.search) {
    tags.push({ key: 'search', label: `Search: "${filters.search}"` });
  }

  if (tags.length === 0) {
    bar.style.display = 'none';
    list.innerHTML = '';
  } else {
    bar.style.display = 'flex';
    list.innerHTML = tags.map(t => `
      <span class="active-tag-chip">
        ${t.label}
        <button type="button" class="active-tag-remove" onclick="window.removeFilter('${t.key}')" title="Remove filter">&times;</button>
      </span>
    `).join('');
  }
}

window.removeFilter = function(facetKey) {
  if (facetKey === 'category') {
    filters.category = 'all';
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
  } else if (facetKey === 'brand') {
    filters.brand = 'all';
    renderBrandsShelf();
  } else if (facetKey === 'fuel') {
    filters.fuel = 'all';
    document.querySelectorAll('.facet-pill').forEach(p => p.classList.toggle('active', p.dataset.fuel === 'all'));
  } else if (facetKey === 'price') {
    filters.price = 'all';
    const sel = document.getElementById('priceSelectFilter');
    if (sel) sel.value = 'all';
  } else if (facetKey === 'search') {
    window.clearSearch();
    return;
  }
  renderCars();
};

window.resetAllFilters = function() {
  filters.category = 'all';
  filters.brand = 'all';
  filters.fuel = 'all';
  filters.price = 'all';
  filters.search = '';
  filters.sort = 'newest';

  document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'all'));
  document.querySelectorAll('.facet-pill').forEach(p => p.classList.toggle('active', p.dataset.fuel === 'all'));
  const pSel = document.getElementById('priceSelectFilter');
  if (pSel) pSel.value = 'all';
  const sSel = document.getElementById('sortSelect');
  if (sSel) sSel.value = 'newest';
  if (globalSearchInput) globalSearchInput.value = '';
  if (clearSearchBtn) clearSearchBtn.style.display = 'none';

  renderBrandsShelf();
  renderCars();
};

// 4. Render Main Car Catalog
function renderCars() {
  const filteredCars = getFilteredCars();
  const allCars = getAllCars();

  const countDisplay = document.getElementById('resultsCountDisplay');
  if (countDisplay) {
    countDisplay.innerHTML = `Showing <strong>${filteredCars.length}</strong> of <strong>${allCars.length}</strong> new car models`;
  }

  renderActiveFilterTags();

  const isUsedSearch = filters.category === 'used' || (filters.search && /used|second\s*hand|pre-?owned|purani/i.test(filters.search));
  if (isUsedSearch) {
    if (countDisplay) {
      countDisplay.innerHTML = `Certified Used Cars &bull; <strong>Marketplace Launching Soon</strong>`;
    }
    carsContainer.innerHTML = `
      <div class="used-cars-coming-soon-card">
        <span class="coming-soon-badge">🚀 LAUNCHING SOON</span>
        <div style="font-size: 52px; margin: 14px 0 8px;">🏷️🚗</div>
        <h3 class="brand-font" style="font-size: 26px; color: #0F172A; margin-bottom: 8px;">Certified Used Cars Marketplace is Coming Soon!</h3>
        <p style="font-size: 14px; color: var(--text-muted); max-width: 540px; margin: 0 auto 20px; line-height: 1.6;">
          Looking for verified pre-owned cars? We are building India's 100% spam-free used car platform with 200+ point inspection records and zero dealer spam calls.
        </p>
        <div class="coming-soon-subscribe">
          <input type="email" id="usedCarNotifyEmail" placeholder="Enter your email to get early access...">
          <button type="button" class="btn-orange-pill" onclick="window.subscribeUsedCars('usedCarNotifyEmail')">Notify Me</button>
        </div>
        <div style="margin-top: 14px; font-size: 12px; color: #64748B;">
          🛡️ Guaranteed: Zero dealer spam &bull; First priority when launched in your city
        </div>
      </div>
    `;
    return;
  }

  if (filteredCars.length === 0) {
    carsContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #FFFFFF; border-radius: 20px; border: 1.5px dashed var(--border); margin: 20px 0;">
        <div style="font-size: 48px; margin-bottom: 12px;">🚗</div>
        <h3 style="font-size: 19px; font-weight: 800; color: var(--text-main); margin-bottom: 6px;">No Cars Match Your Filters</h3>
        <p style="font-size: 13px; color: var(--text-secondary); max-width: 440px; margin: 0 auto 16px;">
          Try adjusting your price range, fuel type, or clear some filters to see available car models.
        </p>
        <button class="filter-chip active" onclick="window.resetAllFilters()">✕ Clear All Filters</button>
      </div>
    `;
    return;
  }

  carsContainer.innerHTML = filteredCars.map(car => {
    const onRoadEstimate = calculateOnRoadPrice(car.minPrice, selectedCityId);
    const colorCount = car.colors ? car.colors.length : 0;
    
    return `
      <article class="car-card" data-car-id="${car.id}" onclick="window.navigateToCar('${car.id}')" title="Click anywhere on card for full 360° studio & variants">
        <div class="card-media">
          <div class="card-badge-row">
            <span class="card-badge badge-launch">${formatLaunchBadge(car.launchDate)}</span>
            <span class="card-badge badge-safety">${formatSafetyBadge(car.safetyRating)}</span>
          </div>
          <img src="${car.heroImage}" alt="${car.name}" class="card-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.src='assets/logo.png'">
        </div>

        <div class="card-body">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:2px;">
            <span class="card-brand">${car.brand} • ${car.bodyType}</span>
            <button type="button" class="btn-card-compare ${compareList.includes(car.id) ? 'active' : ''}" onclick="event.stopPropagation(); window.toggleCarCompare('${car.id}')" title="Compare this car">
              ${compareList.includes(car.id) ? '✓ Compare' : '⚖️ Compare'}
            </button>
          </div>
          <h3 class="card-title"><a href="javascript:void(0)" onclick="event.stopPropagation(); window.navigateToCar('${car.id}')" class="car-seo-title-link">${car.name}</a></h3>
          <p class="card-tagline">${car.tagline}</p>

          <div class="card-specs-row">
            <div class="spec-item">
              <div class="spec-label">Fuel</div>
              <div class="spec-val">${car.fuelTypes.join('/')}</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Ground Clr.</div>
              <div class="spec-val">${car.groundClearance}</div>
            </div>
            <div class="spec-item">
              <div class="spec-label">Boot Space</div>
              <div class="spec-val">${car.bootSpace}</div>
            </div>
          </div>

          <!-- Color Swatches Preview on Card -->
          ${car.colors && car.colors.length > 0 ? `
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:12px; padding:6px 10px; background:#F8FAFC; border-radius:10px; border:1px solid #E2E8F0;">
              <span style="font-size:11px; font-weight:700; color:var(--text-muted);">🎨 ${colorCount} Colors Available:</span>
              <div style="display:flex; gap:6px;">
                ${car.colors.slice(0, 5).map(c => `
                  <span style="width:14px; height:14px; border-radius:50%; background:${c.hex}; border:1px solid #CBD5E1; display:inline-block;" title="${c.name}"></span>
                `).join('')}
                ${colorCount > 5 ? `<span style="font-size:10px; font-weight:800; color:var(--text-muted)">+${colorCount - 5}</span>` : ''}
              </div>
            </div>
          ` : ''}

          <div class="card-price-block">
            <div>
              <div class="price-sub">Est. On-Road (${onRoadEstimate.cityName})</div>
              <div class="price-main">${formatLakh(onRoadEstimate.total)} <span style="font-size:12px; font-weight:600; color:var(--text-muted)">onwards</span></div>
              <div style="font-size:11px; color:var(--text-muted); font-weight:600; margin-top:2px;">Ex-Showroom: ${car.priceRange}</div>
            </div>
          </div>

          <!-- CarWale Action Buttons -->
          <div class="card-actions-carwale">
      <button type="button" class="btn-price-breakup" onclick="event.stopPropagation(); window.navigateToCar('${car.id}')" title="View variant price breakup">
        View Price Breakup
      </button>
    </div>
        </div>
      </article>
    `;
  }).join('');
}

// 5. 📰 Render Automotive Reviews & News Section
function getActiveArticles() {
  try {
    const custom = JSON.parse(localStorage.getItem('cmv_custom_articles') || 'null');
    if (Array.isArray(custom) && custom.length > 0) return custom;
  } catch (e) {}
  return ARTICLES;
}

window.swapNewsCardImg = function(event, articleId, imgUrl, thumbBtn) {
  if (event) event.stopPropagation();
  const imgEl = document.getElementById('newsHeroImg_' + articleId);
  if (imgEl) imgEl.src = imgUrl;
  if (thumbBtn && thumbBtn.parentElement) {
    thumbBtn.parentElement.querySelectorAll('.news-mini-thumb').forEach(b => {
      b.style.borderColor = '#E2E8F0';
    });
    thumbBtn.style.borderColor = 'var(--primary)';
  }
};

function renderNewsSection() {
  const container = document.getElementById('newsContainer');
  if (!container) return;

  const secCfg = getHomepageSectionConfig('news');
  container.classList.remove('card-style-compact', 'card-style-big');
  if (secCfg.cardStyle === 'compact') container.classList.add('card-style-compact');
  if (secCfg.cardStyle === 'big') container.classList.add('card-style-big');
  if (secCfg.layout === 'carousel') {
    container.style.display = 'flex';
    container.style.overflowX = 'auto';
    container.style.gap = '20px';
    container.style.paddingBottom = '12px';
  } else {
    container.style.display = '';
    container.style.overflowX = '';
    container.style.gap = '';
    container.style.paddingBottom = '';
  }

  const list = getActiveArticles().filter(a => a.enabled !== false);

  container.innerHTML = list.map(article => {
    const heroUrl = article.heroImage || article.image || 'assets/logo.png';
    const otherImgs = Array.isArray(article.gallery) ? article.gallery.filter(g => g && g.url) : [];
    const allPhotos = [{ url: heroUrl, caption: 'Hero Image' }, ...otherImgs];

    return `
    <article class="news-card" onclick="window.openArticleModal('${article.id}')">
      <div class="news-card-media" style="position:relative;">
        <img id="newsHeroImg_${article.id}" src="${heroUrl}" alt="${article.title}" class="news-card-img" loading="lazy" onerror="this.src='assets/logo.png'">
        <span class="news-cat-badge ${article.badgeClass || 'badge-review'}">${article.category || 'EXPERT REVIEW'}</span>
        ${otherImgs.length > 0 ? `<span style="position:absolute; bottom:10px; right:10px; background:rgba(15,23,42,0.82); color:#FFF; font-size:10.5px; font-weight:800; padding:3px 9px; border-radius:20px; backdrop-filter:blur(4px);">📷 ${allPhotos.length} Photos</span>` : ''}
      </div>
      ${otherImgs.length > 0 ? `
      <div style="display:flex; gap:6px; padding:8px 14px 0; overflow-x:auto; scrollbar-width:none;" onclick="event.stopPropagation()">
        ${allPhotos.map((p, idx) => `
          <button type="button" class="news-mini-thumb" onclick="window.swapNewsCardImg(event, '${article.id}', '${p.url.replace(/'/g, "\\'")}', this)" style="border:2px solid ${idx === 0 ? 'var(--primary)' : '#E2E8F0'}; border-radius:6px; padding:1px; background:#FFF; cursor:pointer; flex-shrink:0; width:44px; height:30px; overflow:hidden;" title="${p.caption || ''}">
            <img src="${p.url}" alt="${p.caption || ''}" style="width:100%; height:100%; object-fit:cover; border-radius:4px;">
          </button>
        `).join('')}
      </div>
      ` : ''}
      <div class="news-card-body">
        <h3 class="news-card-title">${article.title}</h3>
        <p class="news-card-excerpt">${article.excerpt}</p>
        <div class="news-card-footer">
          <span>${article.author} • ${article.readTime}</span>
          <span class="news-read-more">Read Review ➔</span>
        </div>
      </div>
    </article>
  `;
  }).join('');
}

window.swapArticleModalPhoto = function(imgUrl, captionText, btnEl) {
  const mainImg = document.getElementById('articleModalMainImg');
  const capEl = document.getElementById('articleModalImgCaption');
  if (mainImg) mainImg.src = imgUrl;
  if (capEl) capEl.textContent = captionText || '';
  if (btnEl && btnEl.parentElement) {
    btnEl.parentElement.querySelectorAll('button').forEach(b => {
      b.style.borderColor = '#E2E8F0';
    });
    btnEl.style.borderColor = '#FF5100';
  }
};

window.openArticleModal = function(articleId) {
  const list = getActiveArticles();
  const article = list.find(a => a.id === articleId);
  if (!article) return;

  const modal = document.getElementById('articleModal');
  const content = document.getElementById('articleModalContent');
  if (!modal || !content) return;

  const heroUrl = article.heroImage || article.image || 'assets/logo.png';
  const otherImgs = Array.isArray(article.gallery) ? article.gallery.filter(g => g && g.url) : [];
  const allPhotos = [{ url: heroUrl, caption: article.title + ' (Hero Image)' }, ...otherImgs];

  content.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="news-cat-badge ${article.badgeClass || 'badge-review'}" style="position:static;">${article.category || 'EXPERT REVIEW'}</span>
        <h2 style="font-size:21px; font-weight:900; margin-top:8px; line-height:1.35; color:var(--text-main);">${article.title}</h2>
        <div style="font-size:12px; color:var(--text-muted); margin-top:6px;">
          By <strong>${article.author}</strong> • ${article.date} • ⏱️ ${article.readTime}
        </div>
      </div>
      <button class="modal-close-btn" onclick="window.closeArticleModal()">&times;</button>
    </div>

    <div style="padding:16px 0; border-bottom:1px solid var(--border); margin-bottom:20px;">
      <img id="articleModalMainImg" src="${heroUrl}" alt="${article.title}" onerror="this.src='assets/logo.png'" style="width:100%; max-height:380px; object-fit:cover; border-radius:14px;">
      <div id="articleModalImgCaption" style="font-size:12px; font-weight:700; color:#64748B; margin-top:6px; text-align:center;">${allPhotos[0].caption || ''}</div>
      ${allPhotos.length > 1 ? `
        <div style="display:flex; gap:10px; overflow-x:auto; margin-top:12px; padding-bottom:4px;">
          ${allPhotos.map((p, idx) => `
            <button type="button" onclick="window.swapArticleModalPhoto('${p.url.replace(/'/g, "\\'")}', '${(p.caption || '').replace(/'/g, "\\'")}', this)" style="border:2.5px solid ${idx === 0 ? '#FF5100' : '#E2E8F0'}; border-radius:10px; padding:2px; background:#FFF; cursor:pointer; flex-shrink:0; width:82px; height:56px; overflow:hidden;">
              <img src="${p.url}" alt="${p.caption || ''}" style="width:100%; height:100%; object-fit:cover; border-radius:7px;">
            </button>
          `).join('')}
        </div>
      ` : ''}
    </div>

    <div style="font-size:15px; line-height:1.75; color:var(--text-main);" class="article-body-text">
      ${article.content}
    </div>

    <div style="margin-top:28px; padding-top:20px; border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:12px; color:var(--text-muted);">Care My Vehicle Editorial Reviews</span>
      <button class="city-selector-btn" onclick="navigator.clipboard.writeText(window.location.href); alert('Review Link Copied!');">
        🔗 Share Article
      </button>
    </div>
  `;

  modal.classList.add('active');
};

window.closeArticleModal = function() {
  const modal = document.getElementById('articleModal');
  if (modal) modal.classList.remove('active');
};

// Filter Interaction Handlers
window.handlePriceSelect = function(val) {
  filters.price = val;
  renderCars();
};

window.handleSortSelect = function(val) {
  filters.sort = val;
  renderCars();
};

window.clearSearch = function() {
  filters.search = '';
  if (globalSearchInput) globalSearchInput.value = '';
  if (clearSearchBtn) clearSearchBtn.style.display = 'none';
  renderCars();
};

// Event Listeners Setup
function setupEventListeners() {
  // Category Segmented Tabs
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      filters.category = chip.dataset.category || 'all';
      renderCars();
    });
  });

  // Fuel Facet Pills
  document.querySelectorAll('.facet-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.facet-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      filters.fuel = pill.dataset.fuel || 'all';
      renderCars();
    });
  });

  // Live Search Input with Debounce
  if (globalSearchInput) {
    let debounceTimer;
    globalSearchInput.addEventListener('input', (e) => {
      clearTimeout(debounceTimer);
      const val = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = val ? 'flex' : 'none';
      }
      debounceTimer = setTimeout(() => {
        filters.search = val;
        renderCars();
      }, 150);
    });
  }

  // City Modal Trigger
  if (citySelectorBtn) {
    citySelectorBtn.addEventListener('click', () => {
      if (cityModal) cityModal.classList.add('active');
    });
  }

  // Close modals on overlay backdrop click
  window.addEventListener('click', (e) => {
    if (e.target === cityModal) cityModal.classList.remove('active');
    if (e.target === carDetailModal) window.closeModal('carDetailModal');
    if (e.target === articleModal) window.closeArticleModal();
    if (e.target === compareModal) window.closeCompareModal();
  });
}



// 7. City Selection & Auto-Detect Location Engine
function renderCityModalList(filterText = '') {
  const container = document.getElementById('citiesListContainer');
  if (!container) return;

  const q = (filterText || '').toLowerCase().trim();
  const matched = CITIES.filter(c => c.name.toLowerCase().includes(q) || c.id.includes(q));

  if (matched.length === 0) {
    container.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:20px; color:var(--text-muted); font-size:13px;">No city found matching "' + filterText.replace(/</g, '&lt;') + '"</div>';
    return;
  }

  container.innerHTML = matched.map(c => {
    const isSel = c.id === selectedCityId;
    const rtoPct = Math.round(c.rtoRate * 100);
    return '<button type="button" class="city-select-card ' + (isSel ? 'active' : '') + '" data-city-id="' + c.id + '" onclick="window.selectCity(\'' + c.id + '\')">' +
      '<div class="city-name-text">' + c.name + (isSel ? ' ✓' : '') + '</div>' +
      '<div class="city-rto-tag">' + rtoPct + '% State RTO + Cess</div>' +
    '</button>';
  }).join('');
}

window.filterCitiesList = function(val) {
  renderCityModalList(val);
};

window.openCityModal = function() {
  const modal = document.getElementById('cityModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCityModalList();
    const input = document.getElementById('citySearchInput');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 120);
    }
  }
};

window.selectCity = function(cityId) {
  selectedCityId = cityId;
  const city = CITIES.find(c => c.id === cityId) || CITIES[0];
  try {
    localStorage.setItem('cmv_user_city', cityId);
  } catch(e) {}

  if (cityNameDisplay) cityNameDisplay.textContent = city.name;
  const heroCity = document.getElementById('heroCityName');
  if (heroCity && city) {
    heroCity.textContent = city.name + ' (' + Math.round(city.rtoRate * 100) + '% RTO)';
  }

  const cityModal = document.getElementById('cityModal');
  if (cityModal) cityModal.classList.remove('active');
  document.body.style.overflow = '';

  renderTrendingLaunches();
  renderCompareShelf();
  renderCars();
  renderUsedCarsByCity();
  if (currentModalCar) {
    window.openCarModal(currentModalCar.id);
  }
};

window.detectUserLocation = async function() {
  const detectBtn = document.getElementById('detectLocationBtn');
  const detectSpinner = document.getElementById('detectSpinner');
  const detectIcon = document.getElementById('detectIcon');
  const detectLabel = document.getElementById('detectLabel');

  function setDetecting(loading) {
    if (detectSpinner) detectSpinner.style.display = loading ? 'inline-block' : 'none';
    if (detectIcon) detectIcon.style.display = loading ? 'none' : 'inline-block';
    if (detectLabel) detectLabel.textContent = loading ? 'Detecting your city & RTO...' : 'Detect My Location (Auto RTO)';
    if (detectBtn) detectBtn.disabled = loading;
  }

  setDetecting(true);

  function findClosestCity(lat, lon) {
    let closest = CITIES[0];
    let minDistance = Infinity;
    for (const city of CITIES) {
      if (!city.lat || !city.lon) continue;
      const d = Math.hypot(city.lat - lat, city.lon - lon);
      if (d < minDistance) {
        minDistance = d;
        closest = city;
      }
    }
    return closest;
  }

  // 1. Try Browser HTML5 Geolocation (GPS)
  if (navigator.geolocation) {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 6000,
          enableHighAccuracy: false
        });
      });

      const { latitude, longitude } = position.coords;
      const matchedCity = findClosestCity(latitude, longitude);
      window.selectCity(matchedCity.id);
      window.showToast('🎯 Auto-Detected: ' + matchedCity.name + ' (' + Math.round(matchedCity.rtoRate * 100) + '% RTO)');
      setDetecting(false);
      return;
    } catch (geoError) {
      console.log('GPS Geolocation declined or timed out, trying IP fallback...', geoError);
    }
  }

  // 2. Fallback to IP Geolocation
  try {
    const res = await fetch('https://ipapi.co/json/');
    if (res.ok) {
      const data = await res.json();
      let matchedCity = null;
      if (data && data.city) {
        const qCity = data.city.toLowerCase();
        matchedCity = CITIES.find(c => c.name.toLowerCase().includes(qCity) || qCity.includes(c.id));
      }
      if (!matchedCity && data && data.latitude && data.longitude) {
        matchedCity = findClosestCity(data.latitude, data.longitude);
      }
      if (matchedCity) {
        window.selectCity(matchedCity.id);
        window.showToast('🎯 Located via Network: ' + matchedCity.name + ' (' + Math.round(matchedCity.rtoRate * 100) + '% RTO)');
        setDetecting(false);
        return;
      }
    }
  } catch (ipError) {
    console.log('IP location fallback error:', ipError);
  }

  setDetecting(false);
  window.selectCity('delhi');
  window.showToast('📍 Defaulted to Delhi NCR. Tap any city below to switch.');
};

// Modal Tab Navigation
window.switchModalTab = function(tabName) {
  document.querySelectorAll('.modal-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabName);
  });
  document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.classList.toggle('active', pane.id === `tab-pane-${tabName}`);
  });

  if (tabName === 'colors' && currentModalCar && currentModalCar.spin360) {
    setTimeout(() => {
      window.initSpin360(currentModalCar.spin360);
    }, 50);
  } else if (spinState.autoSpinInterval) {
    window.toggleAutoSpin();
  }
};

// ==========================================================================
// 360° SPIN TURNTABLE ENGINE (Touch, Mouse Drag, Auto-Spin & Color Sync)
// ==========================================================================
let spinState = {
  active: false,
  totalFrames: 24,
  currentFrame: 1,
  currentColor: 'teal-blue',
  folder: '',
  isDragging: false,
  startX: 0,
  autoSpinInterval: null,
  imageCache: {}
};

window.initSpin360 = function(spinConfig) {
  if (!spinConfig) return;
  
  if (spinState.autoSpinInterval) {
    clearInterval(spinState.autoSpinInterval);
    spinState.autoSpinInterval = null;
  }

  spinState.active = true;
  spinState.totalFrames = spinConfig.totalFrames || 24;
  spinState.currentFrame = 1;
  spinState.folder = spinConfig.folder;
  spinState.format = spinConfig.format || spinConfig.fileExtension || 'jpg';
  const cList = (spinConfig.colors && spinConfig.colors.length > 0)
    ? spinConfig.colors
    : (currentModalCar && currentModalCar.colors ? currentModalCar.colors : []);
  spinState.currentColor = spinConfig.defaultColor || (cList.length > 0 ? (cList[0].folderName || cList[0].id) : 'default');

  const canvas = document.getElementById('spin360Canvas');
  const container = document.getElementById('spin360Container');
  if (!canvas || !container) return;

  preloadSpinFrames(spinState.currentColor);
  renderSpinFrame();

  // Pointer drag events (touch + mouse unified)
  // Track whether user is doing horizontal (spin) vs vertical (scroll) drag
  let _spinStartY = 0;
  let _spinAxis = null; // 'h' = horizontal spin, 'v' = vertical scroll, null = undecided

  container.onpointerdown = function(e) {
    spinState.isDragging = false; // not confirmed horizontal yet
    spinState.startX = e.clientX;
    _spinStartY = e.clientY;
    _spinAxis = null;
    // Don't capture yet — wait until we know axis
    if (spinState.autoSpinInterval) {
      window.toggleAutoSpin();
    }
  };

  container.onpointermove = function(e) {
    const dx = e.clientX - spinState.startX;
    const dy = e.clientY - _spinStartY;

    if (_spinAxis === null) {
      // Determine axis on first meaningful move
      if (Math.abs(dx) > 4 || Math.abs(dy) > 4) {
        if (Math.abs(dx) >= Math.abs(dy)) {
          _spinAxis = 'h'; // horizontal drag → spin
          spinState.isDragging = true;
          try { container.setPointerCapture(e.pointerId); } catch(err) {}
        } else {
          _spinAxis = 'v'; // vertical drag → allow native scroll
          spinState.isDragging = false;
        }
      }
      return;
    }

    if (_spinAxis !== 'h' || !spinState.isDragging) return;
    e.preventDefault(); // only prevent default for confirmed horizontal drag
    const sensitivity = 8;
    const deltaX = e.clientX - spinState.startX;
    if (Math.abs(deltaX) >= sensitivity) {
      const frameStep = Math.floor(deltaX / sensitivity);
      let newFrame = spinState.currentFrame - frameStep;
      while (newFrame < 1) newFrame += spinState.totalFrames;
      while (newFrame > spinState.totalFrames) newFrame -= spinState.totalFrames;
      spinState.currentFrame = newFrame;
      spinState.startX = e.clientX;
      renderSpinFrame();
    }
  };

  container.onpointerup = function(e) {
    spinState.isDragging = false;
    _spinAxis = null;
    try { container.releasePointerCapture(e.pointerId); } catch(err) {}
  };

  container.onpointercancel = function() {
    spinState.isDragging = false;
    _spinAxis = null;
  };
};

function preloadSpinFrames(colorName) {
  if (!spinState.imageCache[colorName]) {
    spinState.imageCache[colorName] = {};
  }
  const ext = spinState.format || 'jpg';
  for (let i = 1; i <= spinState.totalFrames; i++) {
    if (!spinState.imageCache[colorName][i]) {
      const img = new Image();
      img.src = `${spinState.folder}/${colorName}/${i}.${ext}`;
      img.onload = function() {
        if (!spinState.imageCache[colorName]) spinState.imageCache[colorName] = {};
        spinState.imageCache[colorName][i] = img;
        if (spinState.currentFrame === i && spinState.currentColor === colorName) {
          renderSpinFrame();
        }
      };
    }
  }
}

function renderSpinFrame() {
  const canvas = document.getElementById('spin360Canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const frame = spinState.currentFrame;
  const color = spinState.currentColor;
  const ext = spinState.format || 'jpg';

  function drawCarImage(img) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Proportional containment & centering for perfect aspect ratio
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.min(hRatio, vRatio, 1);
    const drawWidth = img.width * ratio;
    const drawHeight = img.height * ratio;
    const drawX = (canvas.width - drawWidth) / 2;
    const drawY = (canvas.height - drawHeight) / 2;

    // Ground shadow tailored to image position
    ctx.save();
    ctx.beginPath();
    const shadowY = drawY + drawHeight * 0.94;
    const grad = ctx.createRadialGradient(canvas.width / 2, shadowY, 20, canvas.width / 2, shadowY, drawWidth * 0.40);
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.35)');
    grad.addColorStop(0.5, 'rgba(0, 0, 0, 0.12)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.ellipse(canvas.width / 2, shadowY, drawWidth * 0.38, drawHeight * 0.08, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();

    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }

  const cached = spinState.imageCache[color] && spinState.imageCache[color][frame];
  if (cached && cached.complete) {
    drawCarImage(cached);
  } else {
    const img = new Image();
    img.src = `${spinState.folder}/${color}/${frame}.${ext}`;
    img.onload = function() {
      if (!spinState.imageCache[color]) spinState.imageCache[color] = {};
      spinState.imageCache[color][frame] = img;
      if (spinState.currentFrame === frame && spinState.currentColor === color) {
        drawCarImage(img);
      }
    };
  }

  const range = document.getElementById('spinRange');
  if (range) range.value = frame;
  const angleBadge = document.getElementById('spinAngleBadge');
  if (angleBadge) {
    const deg = Math.round(((frame - 1) / spinState.totalFrames) * 360);
    angleBadge.textContent = `${deg}°`;
  }
}

window.setSpinFrame = function(frameNum) {
  spinState.currentFrame = parseInt(frameNum, 10);
  renderSpinFrame();
};

window.selectSpinColor = function(colorFolder, colorIdx) {
  if (!currentModalCar || !currentModalCar.spin360) return;
  const colObj = (currentModalCar.spin360.colors && currentModalCar.spin360.colors[colorIdx]) || (currentModalCar.colors && currentModalCar.colors[colorIdx]);
  if (!colObj) return;

  spinState.currentColor = colorFolder;
  preloadSpinFrames(colorFolder);
  renderSpinFrame();

  const nameBadge = document.getElementById('colorNameBadge');
  const colorDot = document.getElementById('colorDot');
  if (nameBadge) nameBadge.textContent = colObj.name;
  if (colorDot) {
    colorDot.style.display = 'inline-block';
    colorDot.style.backgroundColor = colObj.hex;
  }

  document.querySelectorAll('.color-swatch-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === colorIdx);
  });
};

window.selectUniversalColor = function(colorIdx) {
  if (!currentModalCar) return;
  const colorsList = (currentModalCar.colors && currentModalCar.colors.length > 0)
    ? currentModalCar.colors
    : (currentModalCar.spin360 ? (currentModalCar.spin360.colors || []) : []);
  const colObj = colorsList[colorIdx];
  if (!colObj) return;

  const canvas = document.getElementById('spin360Canvas');
  const spinColorStage = document.getElementById('spinColorStage');
  const displayImg = document.getElementById('spinColorDisplayImg');
  const nameBadge = document.getElementById('colorNameBadge');
  const colorDot = document.getElementById('colorDot');
  const spin360Controls = document.getElementById('spin360Controls');
  const spin2dControls = document.getElementById('spin2dControls');
  const btnReturnToSpin = document.getElementById('btnReturnToSpin');
  const spin360Badge = document.getElementById('spin360Badge');

  // Check if this color has a matching 360 spin set
  let spinMatch = null;
  let spinMatchIdx = -1;
  if (currentModalCar.spin360) {
    const sColors = (currentModalCar.spin360.colors && currentModalCar.spin360.colors.length > 0)
      ? currentModalCar.spin360.colors
      : (currentModalCar.colors || []);
    for (let i = 0; i < sColors.length; i++) {
      const sc = sColors[i];
      const scKey = (sc.folderName || sc.id || '').toLowerCase();
      const colKey = (colObj.folderName || colObj.id || '').toLowerCase();
      if ((scKey && colKey && scKey === colKey) ||
          (sc.name && colObj.name && sc.name.toLowerCase() === colObj.name.toLowerCase()) ||
          (sColors.length === colorsList.length && i === colorIdx)) {
        spinMatch = sc;
        spinMatchIdx = i;
        break;
      }
    }
  }

  if (spinMatch && canvas) {
    canvas.style.display = 'block';
    if (spinColorStage) spinColorStage.style.display = 'none';
    if (spin360Controls) spin360Controls.style.display = 'flex';
    if (spin2dControls) spin2dControls.style.display = 'none';
    if (btnReturnToSpin) btnReturnToSpin.style.display = 'none';
    if (spin360Badge) spin360Badge.style.display = 'inline-flex';
    window.selectSpinColor(spinMatch.folderName || spinMatch.id, spinMatchIdx);
  } else if (spinColorStage && displayImg) {
    canvas.style.display = 'none';
    spinColorStage.style.display = 'flex';
    if (spin360Controls) spin360Controls.style.display = 'none';
    if (spin2dControls) spin2dControls.style.display = 'flex';
    if (btnReturnToSpin) btnReturnToSpin.style.display = 'inline-flex';
    if (spin360Badge) spin360Badge.style.display = 'none';
    if (spinState.autoSpinInterval) {
      clearInterval(spinState.autoSpinInterval);
      spinState.autoSpinInterval = null;
      const btn = document.getElementById('btnAutoSpin');
      if (btn) {
        btn.innerHTML = '▶ Auto-Spin';
        btn.classList.remove('active');
      }
    }
    displayImg.style.opacity = '0.3';
    setTimeout(() => {
      displayImg.src = colObj.image || colObj.url || currentModalCar.heroImage;
      displayImg.style.opacity = '1';
    }, 60);
  }

  if (nameBadge) nameBadge.textContent = colObj.name;
  if (colorDot) {
    colorDot.style.display = 'inline-block';
    colorDot.style.backgroundColor = colObj.hex;
  }

  document.querySelectorAll('.color-swatch-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === colorIdx);
  });
};

window.returnTo360Spin = function() {
  if (!currentModalCar || !currentModalCar.spin360) return;
  window.selectUniversalColor(0);
};

window.toggleAutoSpin = function() {
  const btn = document.getElementById('btnAutoSpin');
  if (spinState.autoSpinInterval) {
    clearInterval(spinState.autoSpinInterval);
    spinState.autoSpinInterval = null;
    if (btn) {
      btn.innerHTML = '▶ Auto-Spin';
      btn.classList.remove('active');
    }
  } else {
    if (btn) {
      btn.innerHTML = '⏸️ Pause';
      btn.classList.add('active');
    }
    spinState.autoSpinInterval = setInterval(() => {
      let nextFrame = spinState.currentFrame + 1;
      if (nextFrame > spinState.totalFrames) nextFrame = 1;
      spinState.currentFrame = nextFrame;
      renderSpinFrame();
    }, 70);
  }
};

// Interactive Color Switcher Handler
window.selectCarColor = function(colorIndex) {
  if (!currentModalCar || !currentModalCar.colors) return;
  const color = currentModalCar.colors[colorIndex];
  if (!color) return;

  const displayImg = document.getElementById('colorDisplayImg');
  const nameBadge = document.getElementById('colorNameBadge');
  const colorDot = document.getElementById('colorDot');

  if (displayImg) {
    displayImg.style.opacity = '0.3';
    setTimeout(() => {
      displayImg.src = color.image;
      displayImg.style.opacity = '1';
    }, 100);
  }

  if (nameBadge) nameBadge.textContent = color.name;
  if (colorDot) {
    colorDot.style.display = 'inline-block';
    colorDot.style.backgroundColor = color.hex;
  }

  document.querySelectorAll('.color-swatch-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === colorIndex);
  });

  // Switch angle selector back to exterior (first button)
  document.querySelectorAll('.angle-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === 0);
  });
};

// 360° Studio Angle Selector Handler
window.selectCarAngle = function(angleIndex) {
  if (!currentModalCar || !currentModalCar.angles) return;
  const ang = currentModalCar.angles[angleIndex];
  if (!ang) return;

  const displayImg = document.getElementById('colorDisplayImg');
  const nameBadge = document.getElementById('colorNameBadge');
  const colorDot = document.getElementById('colorDot');
  
  if (displayImg) {
    displayImg.style.opacity = '0.3';
    setTimeout(() => {
      // If angle 0 (Exterior Front 3/4th), show the currently active color shade
      if (angleIndex === 0 && currentModalCar.colors && currentModalCar.colors.length > 0) {
        const activeSwatch = document.querySelector('.color-swatch-btn.active');
        const colorIdx = activeSwatch ? parseInt(activeSwatch.getAttribute('data-color-index') || '0') : 0;
        const col = currentModalCar.colors[colorIdx] || currentModalCar.colors[0];
        displayImg.src = col.image;
        if (nameBadge) nameBadge.textContent = col.name;
        if (colorDot) {
          colorDot.style.display = 'inline-block';
          colorDot.style.backgroundColor = col.hex;
        }
      } else {
        displayImg.src = ang.url;
        if (nameBadge) nameBadge.textContent = ang.label;
        if (colorDot) colorDot.style.display = 'none';
      }
      displayImg.style.opacity = '1';
    }, 100);
  }

  document.querySelectorAll('.angle-btn').forEach((btn, idx) => {
    btn.classList.toggle('active', idx === angleIndex);
  });
};

// Share Car Link
window.shareCarLink = function(carId) {
  const shareUrl = `${window.location.origin}${window.location.pathname}?car=${carId}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(shareUrl);
    alert(`🔗 Direct Link Copied!\n\n${shareUrl}\n\nShare this on WhatsApp, Twitter, or Instagram to take buyers straight to this car!`);
  } else {
    prompt('Copy direct link:', shareUrl);
  }
};

// Close Any Modal Drawer
window.closeModal = function(modalId) {
  if (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  } else {
    document.querySelectorAll('.modal-overlay.active, .modal.active').forEach(m => m.classList.remove('active'));
  }
  if (modalId === 'carDetailModal') {
    currentModalCar = null;
    try {
      history.pushState(null, '', window.location.pathname);
    } catch(e) {}
  }
  // UNCONDITIONALLY restore body scroll on any modal close
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
};

// Global Toast Notification Helper
window.showToast = function(msg) {
  let toast = document.getElementById('cmvToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cmvToast';
    toast.style.cssText = 'position:fixed; bottom:28px; left:50%; transform:translateX(-50%); background:#0F172A; color:#FFFFFF; padding:12px 22px; border-radius:30px; font-size:13px; font-weight:700; z-index:9999; box-shadow:0 12px 28px rgba(0,0,0,0.28); display:flex; align-items:center; gap:8px; transition:opacity 0.25s ease, transform 0.25s ease; opacity:0; pointer-events:none;';
    document.body.appendChild(toast);
  }
  toast.innerHTML = msg;
  toast.style.opacity = '1';
  toast.style.transform = 'translateX(-50%) translateY(0)';
  clearTimeout(window._toastTimeout);
  window._toastTimeout = setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(10px)';
  }, 2600);
};

// Open Car Detail Modal Drawer
window.openCarModal = function(carId) {
  const car = getAllCars().find(c => c.id === carId);
  if (!car) return;
  currentModalCar = car;

  // Update URL for SEO & deep linking
  history.pushState(null, '', `?car=${car.id}`);

  // Lock body scroll while modal is open (prevents page scroll bleed)
  document.body.style.overflow = 'hidden';
  document.body.style.position = 'fixed';
  document.body.style.width = '100%';

  const modalBody = document.getElementById('carModalContent');
  // Show skeleton immediately so modal opens fast
  modalBody.innerHTML = '<div style="padding:24px;text-align:center;color:#94A3B8;font-size:14px;font-weight:600;">⏳ Loading...</div>';
  const overlay = document.getElementById('carDetailModal');
  if (overlay) overlay.classList.add('active');
  // Defer heavy render to next animation frame to unblock main thread
  requestAnimationFrame(() => { _renderCarModalContent(car, modalBody); });
};

function _renderCarModalContent(car, modalBody) {
  const city = CITIES.find(c => c.id === selectedCityId);
  const colors = car.colors || [];
  const angles = car.angles || [];
  const spin360 = car.spin360 || null;
  const gallery = car.gallery || [];
  const specs = car.specs || {};
  const activePalette = (colors.length > 0) ? colors : (spin360 ? spin360.colors : []);
  const heroImg = car.heroImage || (colors.length > 0 ? colors[0].image : '');

  modalBody.innerHTML = `
    <!-- Premium CarWale/CarDekho Mobile Hero Showcase -->
    <div class="modal-hero-showcase">
      <div class="modal-hero-topbar">
        <span class="modal-hero-badge">⭐ ${car.safetyRating || '5-Star Safety'}</span>
        <div style="display:flex; align-items:center; gap:8px;">
          <button class="modal-pill-btn" onclick="window.shareCarLink('${car.id}')" title="Share direct link">
            🔗 Share
          </button>
          <button class="modal-close-circle" onclick="closeModal('carDetailModal')" title="Close">&times;</button>
        </div>
      </div>

      <div class="modal-hero-media">
        <img id="modalHeroImg" src="${heroImg}" alt="${car.name}" class="modal-hero-car-img">
      </div>

      <!-- Quick Action Pills over Car Photo -->
      <div class="modal-hero-chips">
        ${spin360 ? `<button type="button" class="hero-chip-pill" onclick="switchModalTab('colors')">🔄 360° Studio</button>` : ''}
        ${colors.length > 0 ? `<button type="button" class="hero-chip-pill" onclick="switchModalTab('colors')">🎨 ${colors.length} Colors</button>` : ''}
        ${gallery.length > 0 ? `<button type="button" class="hero-chip-pill" onclick="switchModalTab('gallery')">📸 ${gallery.length} Photos</button>` : ''}
        <button type="button" class="hero-chip-pill" onclick="switchModalTab('specs')">⚙️ Specs</button>
      </div>
    </div>

    <!-- Car Identity & Price Header -->
    <div class="modal-title-header">
      <div class="modal-brand-tag">${car.brand} • ${car.bodyType}</div>
      <div class="modal-car-name-row">
        <h2 class="modal-car-name">${car.name}</h2>
        <div class="modal-car-price">${car.priceRange}</div>
      </div>
      <p class="modal-car-tagline">${car.tagline || car.summary}</p>

      <!-- Key Highlights Pills Row -->
      <div class="modal-quick-specs-row">
        <div class="quick-spec-item">
          <span class="qspec-label">Ground Clr.</span>
          <span class="qspec-val">${car.groundClearance}</span>
        </div>
        <div class="quick-spec-item">
          <span class="qspec-label">Boot Space</span>
          <span class="qspec-val">${car.bootSpace}</span>
        </div>
        <div class="quick-spec-item">
          <span class="qspec-label">Wait Period</span>
          <span class="qspec-val">${car.waitingPeriod}</span>
        </div>
        <div class="quick-spec-item">
          <span class="qspec-label">Variants</span>
          <span class="qspec-val">${car.variants.length} Options</span>
        </div>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="modal-nav-tabs">
      <button class="modal-tab-btn active" data-tab="variants" onclick="switchModalTab('variants')">
        🏷️ Variants & Price (${car.variants.length})
      </button>
      ${(spin360 || colors.length > 0 || angles.length > 0) ? `
        <button class="modal-tab-btn" data-tab="colors" onclick="switchModalTab('colors')">
          ${spin360 ? '🎨 Colors & 360° Studio 🔄' : `🎨 Colors (${colors.length})`}
        </button>
      ` : ''}
      ${gallery.length > 0 ? `
        <button class="modal-tab-btn" data-tab="gallery" onclick="switchModalTab('gallery')">
          📸 Photos (${gallery.length})
        </button>
      ` : ''}
      <button class="modal-tab-btn" data-tab="specs" onclick="switchModalTab('specs')">
        ⚙️ Specs & Dimensions
      </button>
    </div>

    <!-- TAB 1: VARIANTS & ON-ROAD PRICES -->
    <div id="tab-pane-variants" class="tab-pane active">
      <!-- City Pricing Selector -->
      <div class="modal-city-box">
        <div>
          <div style="font-size:11px; font-weight:800; color:#64748B; text-transform:uppercase; letter-spacing:0.5px;">Selected City</div>
          <div style="font-size:14px; font-weight:800; color:#0F172A;">On-Road Price in ${city.name}</div>
        </div>
        <select onchange="window.selectCity(this.value)" class="modal-city-dropdown">
          ${CITIES.map(c => `<option value="${c.id}" ${c.id === selectedCityId ? 'selected' : ''}>${c.name}</option>`).join('')}
        </select>
      </div>

      <div class="variants-list">
        ${car.variants.map(v => {
          const quote = calculateOnRoadPrice(v.exShowroom, selectedCityId);

          return `
            <div class="variant-card ${v.isVFM ? 'vfm' : ''}">
              ${v.isVFM ? `<span class="vfm-chip">⭐ ${v.vfmBadge}</span>` : ''}
              
              <div class="variant-title-row">
                <div class="variant-name">${v.name}</div>
                <div class="variant-price">${formatLakh(quote.total)}</div>
              </div>

              <div class="variant-chips-bar">
                <span class="vchip">⛽ ${v.fuel}</span>
                <span class="vchip">⚙️ ${v.trans}</span>
                <span class="vchip">⚡ ${v.mileage}</span>
                <span class="vchip">🔧 ${v.engine}</span>
              </div>

              <!-- Itemized Price Transparency Breakdown -->
              <div class="price-breakdown-card">
                <div class="pbreak-row">
                  <span>Ex-Showroom Price</span>
                  <span class="pbreak-val">${formatINR(quote.exShowroom)}</span>
                </div>
                <div class="pbreak-row">
                  <span>State RTO & Road Tax</span>
                  <span class="pbreak-val">${formatINR(quote.rto)}</span>
                </div>
                <div class="pbreak-row">
                  <span>Zero-Dep Insurance (Fair Est.)</span>
                  <span class="pbreak-val">${formatINR(quote.insurance)}</span>
                </div>
                ${quote.tcs > 0 ? `
                <div class="pbreak-row">
                  <span>1% TCS Tax</span>
                  <span class="pbreak-val">${formatINR(quote.tcs)}</span>
                </div>` : ''}
                <div class="pbreak-row pbreak-total">
                  <span>Total On-Road (${city.name})</span>
                  <span>${formatINR(quote.total)}</span>
                </div>
              </div>

              <div class="feature-bullets">
                ${(Array.isArray(v.keyFeatures) ? v.keyFeatures : (typeof v.features === 'string' ? v.features.split(',').map(s => s.trim()) : (Array.isArray(v.features) ? v.features : []))).map(f => `<span class="feat-tag">✓ ${f}</span>`).join('')}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    <!-- TAB 2: INTERACTIVE COLOR STUDIO & 360° VIEWER -->
    ${(spin360 || colors.length > 0 || angles.length > 0) ? `
      <div id="tab-pane-colors" class="tab-pane">
        <div class="color-studio">
          ${spin360 ? `
            <!-- 360 Interactive Drag & Spin Turntable & Unified Studio Stage -->
            <div class="spin360-container" id="spin360Container">
              <div class="spin360-badge" id="spin360Badge">
                <span>🔄</span>
                <span id="spin360BadgeText">Swipe horizontally to Spin 360°</span>
              </div>

              <button type="button" id="btnReturnToSpin" class="spin-return-pill" onclick="window.returnTo360Spin()" style="display:none;" title="Switch back to 360° Turntable">
                🔄 360° Spin Studio
              </button>

              <canvas id="spin360Canvas" width="1056" height="594" class="spin360-canvas"></canvas>

              <div id="spinColorStage" class="spin2d-stage" style="display:none;">
                <img id="spinColorDisplayImg" src="" alt="${car.name}" class="spin2d-img">
              </div>

              <div class="spin360-controls" id="spin360Controls">
                <button type="button" id="btnAutoSpin" class="spin-ctrl-btn" onclick="window.toggleAutoSpin()">
                  ▶ Auto-Spin
                </button>
                <div style="display:flex; align-items:center; gap:8px; flex:1; max-width:280px;">
                  <span style="font-size:11px; font-weight:700; color:var(--text-muted);">0°</span>
                  <input type="range" id="spinRange" min="1" max="${spin360.totalFrames}" value="1" oninput="window.setSpinFrame(this.value)" class="spin-range-slider">
                  <span style="font-size:11px; font-weight:700; color:var(--text-muted);">360°</span>
                </div>
                <span id="spinAngleBadge" style="font-size:12px; font-weight:800; color:var(--text-main); min-width:40px; text-align:right;">0°</span>
              </div>

              <div class="spin360-controls" id="spin2dControls" style="display:none; justify-content:space-between; align-items:center;">
                <span style="font-size:12px; font-weight:700; color:var(--text-secondary); display:inline-flex; align-items:center; gap:6px;">
                  <span>🎨</span> Official Paint Shade (Studio View)
                </span>
                <button type="button" class="spin-ctrl-btn" onclick="window.returnTo360Spin()" style="background:var(--primary); color:#FFF; border-color:var(--primary);">
                  🔄 Return to 360° Spin
                </button>
              </div>
            </div>

            <div class="color-name-badge">
              <span id="colorDot" class="color-dot" style="background-color:${activePalette[0].hex};"></span>
              <span id="colorNameBadge">${activePalette[0].name}</span>
            </div>

            <div class="colors-section" style="margin-top:4px;">
              <p style="font-size:12px; color:var(--text-muted); margin-bottom:8px;">
                Official Paint Shades (${activePalette.length} Available) • Tap to switch shade:
              </p>

              <div class="color-swatches">
                ${activePalette.map((c, idx) => `
                  <button 
                    type="button" 
                    class="color-swatch-btn ${idx === 0 ? 'active' : ''}" 
                    data-color-index="${idx}"
                    style="background-color:${c.hex};" 
                    onclick="window.selectUniversalColor(${idx})"
                    title="${c.name}"
                    aria-label="${c.name}"
                  ></button>
                `).join('')}
              </div>
            </div>
          ` : `
            ${angles.length > 0 ? `
              <div style="margin-bottom:16px;">
                <div style="font-size:11px; font-weight:800; letter-spacing:0.5px; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px;">
                  🔄 Multi-Angle Studio View
                </div>
                <div class="studio-angle-bar">
                  ${angles.map((ang, aIdx) => `
                    <button 
                      type="button" 
                      class="angle-btn ${aIdx === 0 ? 'active' : ''}" 
                      onclick="window.selectCarAngle(${aIdx})"
                    >
                      ${aIdx === 0 ? '🔄' : aIdx === 1 ? '🚘' : aIdx === 2 ? '🚗' : aIdx === 3 ? '💺' : '🛡️'} ${ang.label}
                    </button>
                  `).join('')}
                </div>
              </div>
            ` : ''}

            <div class="color-stage">
              <img id="colorDisplayImg" src="${colors.length > 0 ? colors[0].image : (angles.length > 0 ? angles[0].url : car.heroImage)}" alt="${car.name}" class="color-display-img">
            </div>

            <div class="color-name-badge">
              ${colors.length > 0 ? `<span id="colorDot" class="color-dot" style="background-color:${colors[0].hex};"></span>` : ''}
              <span id="colorNameBadge">${colors.length > 0 ? colors[0].name : (angles.length > 0 ? angles[0].label : car.name)}</span>
            </div>

            ${colors.length > 0 ? `
              <div class="colors-section" style="margin-top:4px;">
                <p style="font-size:12px; color:var(--text-muted); margin-bottom:8px;">
                  Tap any color swatch below to view <strong>${car.name}</strong> in that official shade:
                </p>

                <div class="color-swatches">
                  ${colors.map((c, idx) => `
                    <button 
                      type="button" 
                      class="color-swatch-btn ${idx === 0 ? 'active' : ''}" 
                      data-color-index="${idx}"
                      style="background-color:${c.hex};" 
                      onclick="window.selectCarColor(${idx})"
                      title="${c.name}"
                      aria-label="${c.name}"
                    ></button>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          `}
        </div>
      </div>
    ` : ''}

    <!-- TAB 3: PHOTO GALLERY -->
    ${gallery.length > 0 ? `
      <div id="tab-pane-gallery" class="tab-pane">
        <div class="gallery-grid">
          ${gallery.map(item => `
            <div class="gallery-card">
              <img src="${item.url}" alt="${item.title}" loading="lazy">
              <div class="gallery-caption">${item.title}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <!-- TAB 4: SPECIFICATIONS & DIMENSIONS -->
    <div id="tab-pane-specs" class="tab-pane">
      <div style="background:#F8FAFC; border:1px solid var(--border); border-radius:14px; padding:14px 16px; margin-bottom:16px;">
        <h4 style="font-size:13px; font-weight:800; color:var(--text-main); margin-bottom:6px;">📖 Complete Vehicle Overview</h4>
        <p style="font-size:13px; line-height:1.6; color:var(--text-secondary); margin:0;">${car.summary}</p>
      </div>
      <table class="specs-table">
        <tbody>
          <tr>
            <td class="spec-col-label">Body Type</td>
            <td class="spec-col-val">${car.bodyType}</td>
          </tr>
          <tr>
            <td class="spec-col-label">Safety Rating</td>
            <td class="spec-col-val">${car.safetyRating}</td>
          </tr>
          <tr>
            <td class="spec-col-label">Ground Clearance</td>
            <td class="spec-col-val">${car.groundClearance}</td>
          </tr>
          <tr>
            <td class="spec-col-label">Boot Capacity</td>
            <td class="spec-col-val">${car.bootSpace}</td>
          </tr>
          <tr>
            <td class="spec-col-label">Waiting Period</td>
            <td class="spec-col-val">${car.waitingPeriod}</td>
          </tr>
          ${specs.engineOptions ? `
          <tr>
            <td class="spec-col-label">Engine Powertrains</td>
            <td class="spec-col-val">${specs.engineOptions}</td>
          </tr>` : ''}
          ${specs.transmissions ? `
          <tr>
            <td class="spec-col-label">Transmissions</td>
            <td class="spec-col-val">${specs.transmissions}</td>
          </tr>` : ''}
          ${specs.dimensions ? `
          <tr>
            <td class="spec-col-label">Dimensions (L × W × H)</td>
            <td class="spec-col-val">${specs.dimensions}</td>
          </tr>` : ''}
          ${specs.wheelbase ? `
          <tr>
            <td class="spec-col-label">Wheelbase</td>
            <td class="spec-col-val">${specs.wheelbase}</td>
          </tr>` : ''}
          ${specs.fuelTank ? `
          <tr>
            <td class="spec-col-label">Fuel Tank Capacity</td>
            <td class="spec-col-val">${specs.fuelTank}</td>
          </tr>` : ''}
          ${specs.seatingCapacity ? `
          <tr>
            <td class="spec-col-label">Seating Capacity</td>
            <td class="spec-col-val">${specs.seatingCapacity}</td>
          </tr>` : ''}
        </tbody>
      </table>
    </div>
  `;

    // Scroll sheet to top so user sees header first
  const sheet = document.querySelector('#carDetailModal .modal-sheet');
  if (sheet) { sheet.scrollTop = 0; }

  // Init 360 spin after render
  if (spin360) {
    setTimeout(() => window.initSpin360(spin360), 80);
  }
}


// ==========================================================================
// ⚖️ CAR COMPARISON ENGINE & SIDE-BY-SIDE SPEC EVALUATOR
// ==========================================================================

window.toggleCarCompare = function(carId) {
  const idx = compareList.indexOf(carId);
  if (idx !== -1) {
    compareList.splice(idx, 1);
  } else {
    if (compareList.length >= 4) {
      alert('You can compare up to 4 cars side-by-side. Click "Compare Now" or remove a car first.');
      return;
    }
    compareList.push(carId);
  }

  updateCompareDock();
  renderCars();
};

window.clearCompareList = function() {
  compareList = [];
  updateCompareDock();
  renderCars();
};

function updateCompareDock() {
  const dock = document.getElementById('compareDock');
  const container = document.getElementById('compareDockCars');
  const countSpan = document.getElementById('dockCompareCount');
  const navBadge = document.getElementById('navCompareCount');
  if (!dock) return;

  if (navBadge) {
    if (compareList.length > 0) {
      navBadge.style.display = 'inline-block';
      navBadge.textContent = compareList.length;
    } else {
      navBadge.style.display = 'none';
    }
  }

  if (compareList.length === 0) {
    dock.classList.remove('active');
    return;
  }

  dock.classList.add('active');
  if (countSpan) countSpan.textContent = `(${compareList.length})`;

  const allCars = getAllCars();
  container.innerHTML = compareList.map(id => {
    const car = allCars.find(c => c.id === id);
    if (!car) return '';
    return `
      <div class="compare-dock-chip">
        <img src="${car.heroImage}" alt="${car.name}" class="compare-dock-thumb">
        <span>${car.name.replace(car.brand, '').trim() || car.name}</span>
        <button type="button" class="compare-dock-chip-remove" onclick="event.stopPropagation(); window.toggleCarCompare('${car.id}')" title="Remove">&times;</button>
      </div>
    `;
  }).join('');
}

window.openCompareModal = function(presetIds) {
  if (presetIds && Array.isArray(presetIds)) {
    compareList = [...presetIds];
    updateCompareDock();
    renderCars();
  }

  const modal = document.getElementById('compareModal');
  const content = document.getElementById('compareModalContent');
  if (!modal || !content) return;

  const allCars = getAllCars();

  // If fewer than 2 cars selected, show the selection builder
  if (compareList.length < 2) {
    content.innerHTML = `
      <div class="modal-header">
        <div>
          <span class="section-badge" style="background:#EFF6FF; color:var(--primary);">⚖️ CAR COMPARISON ENGINE</span>
          <h2 style="font-size:22px; font-weight:900; margin-top:6px; color:var(--text-main);">Compare Any 2 to 4 Cars Side-by-Side</h2>
          <p style="font-size:13px; color:var(--text-secondary); margin-top:2px;">
            Select at least 2 cars below to compare granular dimensions, real on-road pricing, crash test ratings, and engine performance.
          </p>
        </div>
        <button class="modal-close-btn" onclick="window.closeCompareModal()">&times;</button>
      </div>

      <!-- Quick Rival Presets -->
      <div style="margin:20px 0 10px;">
        <span style="font-size:12px; font-weight:800; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.5px;">🔥 Popular Head-to-Head Comparisons:</span>
        <div class="compare-presets-row" style="margin-top:8px;">
          ${POPULAR_COMPARISONS.map(p => `
            <button type="button" class="compare-preset-pill" onclick="window.openCompareModal(['${p.ids[0]}', '${p.ids[1]}'])">
              ${p.label}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Car Pickers -->
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:18px; margin:24px 0;">
        <div style="background:#F8FAFC; border:1.5px solid var(--border); border-radius:16px; padding:18px;">
          <label style="font-size:13px; font-weight:800; color:var(--primary); display:block; margin-bottom:8px;">Select Car #1</label>
          <select id="compareSelect1" class="form-control" style="width:100%; padding:10px; border-radius:10px; font-weight:700;">
            ${allCars.map(c => `<option value="${c.id}" ${compareList[0] === c.id ? 'selected' : ''}>${c.brand} - ${c.name}</option>`).join('')}
          </select>
        </div>

        <div style="background:#F8FAFC; border:1.5px solid var(--border); border-radius:16px; padding:18px;">
          <label style="font-size:13px; font-weight:800; color:var(--primary); display:block; margin-bottom:8px;">Select Car #2</label>
          <select id="compareSelect2" class="form-control" style="width:100%; padding:10px; border-radius:10px; font-weight:700;">
            ${allCars.map((c, i) => `<option value="${c.id}" ${(compareList[1] === c.id || (!compareList[1] && i === 1)) ? 'selected' : ''}>${c.brand} - ${c.name}</option>`).join('')}
          </select>
        </div>
      </div>

      <div style="text-align:center; margin-top:20px;">
        <button type="button" class="btn-dock-launch" style="padding:12px 30px; font-size:15px;" onclick="
          const c1 = document.getElementById('compareSelect1').value;
          const c2 = document.getElementById('compareSelect2').value;
          if (c1 === c2) { alert('Please select two different cars to compare.'); return; }
          window.openCompareModal([c1, c2]);
        ">
          Launch Side-by-Side Comparison ➔
        </button>
      </div>
    `;
    modal.classList.add('active');
    return;
  }

  // Render Full Side-by-Side Comparison Table
  const cars = compareList.map(id => allCars.find(c => c.id === id)).filter(Boolean);
  
  // Calculate advantages
  const minPrices = cars.map(c => c.minPrice);
  const minPriceLowest = Math.min(...minPrices);

  const getNum = str => {
    if (!str) return 0;
    const m = str.match(/([0-9.]+)/);
    return m ? parseFloat(m[1]) : 0;
  };

  const groundClearances = cars.map(c => getNum(c.groundClearance));
  const maxGC = Math.max(...groundClearances);

  const bootSpaces = cars.map(c => getNum(c.bootSpace));
  const maxBoot = Math.max(...bootSpaces);

  const shareCompareUrl = `${window.location.origin}${window.location.pathname}?compare=${compareList.join(',')}`;

  content.innerHTML = `
    <div class="modal-header">
      <div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="section-badge" style="background:#EFF6FF; color:var(--primary); margin:0;">⚖️ SIDE-BY-SIDE COMPARISON</span>
          <span style="font-size:12px; color:var(--text-muted);">Comparing <strong>${cars.length}</strong> Car Models</span>
        </div>
        <h2 style="font-size:22px; font-weight:900; margin-top:6px; color:var(--text-main);">
          ${cars.map(c => c.name).join(' vs ')}
        </h2>
      </div>
      <div style="display:flex; align-items:center; gap:8px;">
        <button class="city-selector-btn" style="padding:6px 12px; font-size:12px;" onclick="navigator.clipboard.writeText('${shareCompareUrl}'); alert('🔗 Comparison Direct Link Copied to Clipboard!');" title="Share comparison">
          🔗 Share
        </button>
        <button class="modal-close-btn" onclick="window.closeCompareModal()">&times;</button>
      </div>
    </div>

    <!-- Quick Rival Presets -->
    <div style="margin:12px 0 6px;">
      <div class="compare-presets-row">
        <span style="font-size:12px; font-weight:800; color:var(--text-muted); align-self:center; margin-right:4px;">Popular:</span>
        ${POPULAR_COMPARISONS.map(p => `
          <button type="button" class="compare-preset-pill" onclick="window.openCompareModal(['${p.ids[0]}', '${p.ids[1]}'])">
            ${p.label}
          </button>
        `).join('')}
      </div>
    </div>

    <!-- Comparison Table -->
    <div class="compare-table-wrapper">
      <table class="compare-table">
        <!-- Header: Vehicle Photos & Names -->
        <thead>
          <tr>
            <th class="compare-col-header" style="width:160px; min-width:140px; background:#F8FAFC;">
              <span style="font-size:12px; font-weight:800; color:var(--text-muted); text-transform:uppercase;">Vehicle Model</span>
            </th>
            ${cars.map(car => {
              const onRoadEstimate = calculateOnRoadPrice(car.minPrice, selectedCityId);
              return `
                <th class="compare-col-header">
                  <button type="button" style="float:right; background:none; border:none; color:#EF4444; font-size:16px; cursor:pointer;" onclick="window.toggleCarCompare('${car.id}'); window.openCompareModal();" title="Remove">&times;</button>
                  <img src="${car.heroImage}" alt="${car.name}" class="compare-car-thumb">
                  <div class="compare-car-name">${car.name}</div>
                  <div class="compare-car-price">${car.priceRange}</div>
                  <div style="font-size:11px; font-weight:700; color:var(--text-muted); margin-top:2px;">
                    Est. On-Road (${onRoadEstimate.cityName}): <strong>${formatLakh(onRoadEstimate.total)}</strong>
                  </div>
                  <button class="trending-btn" style="margin-top:8px; padding:6px 10px; font-size:11px;" onclick="window.closeCompareModal(); window.openCarModal('${car.id}');">
                    View 360 & Variants ➔
                  </button>
                </th>
              `;
            }).join('')}
          </tr>
        </thead>
        <tbody>
          <!-- 1. PRICING & ESSENTIALS -->
          <tr class="compare-category-row">
            <td colspan="${cars.length + 1}">💰 Pricing & Ownership</td>
          </tr>
          <tr>
            <td class="compare-cell-title">Price Range (Ex-Showroom)</td>
            ${cars.map(c => `
              <td class="compare-cell-value ${c.minPrice === minPriceLowest ? 'compare-advantage' : ''}">
                ${c.priceRange} ${c.minPrice === minPriceLowest ? '⭐ Lowest Entry' : ''}
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="compare-cell-title">Est. On-Road Price (${CITIES.find(c => c.id === selectedCityId)?.name || 'Delhi'})</td>
            ${cars.map(c => {
              const quote = calculateOnRoadPrice(c.minPrice, selectedCityId);
              return `<td class="compare-cell-value"><strong>${formatLakh(quote.total)}</strong> onwards</td>`;
            }).join('')}
          </tr>
          <tr>
            <td class="compare-cell-title">Waiting Period</td>
            ${cars.map(c => `<td class="compare-cell-value">${c.waitingPeriod || '2 - 4 Weeks'}</td>`).join('')}
          </tr>

          <!-- 2. SAFETY & CRASH TEST -->
          <tr class="compare-category-row">
            <td colspan="${cars.length + 1}">🛡️ Crash Safety & Structural Rating</td>
          </tr>
          <tr>
            <td class="compare-cell-title">Safety Rating</td>
            ${cars.map(c => `
              <td class="compare-cell-value">
                <span class="badge-safety" style="position:static; display:inline-block; font-size:11px;">🛡️ ${c.safetyRating}</span>
              </td>
            `).join('')}
          </tr>
          <tr>
            <td class="compare-cell-title">Airbags & Standard Safety</td>
            ${cars.map(c => {
              const is6Airbags = c.safetyRating && c.safetyRating.includes('6 Airbags');
              return `<td class="compare-cell-value">${is6Airbags ? '6 Airbags Standard Across All Variants' : 'Dual / 6 Airbags (Variant Dependent)'}</td>`;
            }).join('')}
          </tr>

          <!-- 3. POWERTRAINS & FUEL -->
          <tr class="compare-category-row">
            <td colspan="${cars.length + 1}">⚙️ Powertrains & Performance</td>
          </tr>
          <tr>
            <td class="compare-cell-title">Fuel Options</td>
            ${cars.map(c => `<td class="compare-cell-value"><strong>${(c.fuelTypes || []).join(', ')}</strong></td>`).join('')}
          </tr>
          <tr>
            <td class="compare-cell-title">Engine Options</td>
            ${cars.map(c => {
              const eng = c.specs?.engine || c.specs?.engineOptions || (c.variants && c.variants[0] ? c.variants[0].engine : 'Standard Engine');
              return `<td class="compare-cell-value">${eng}</td>`;
            }).join('')}
          </tr>
          <tr>
            <td class="compare-cell-title">Transmissions</td>
            ${cars.map(c => {
              const tr = c.specs?.transmission || c.specs?.transmissions || [...new Set((c.variants || []).map(v => v.trans))].join(', ');
              return `<td class="compare-cell-value">${tr || 'Manual / Automatic'}</td>`;
            }).join('')}
          </tr>
          <tr>
            <td class="compare-cell-title">Claimed ARAI Mileage / Range</td>
            ${cars.map(c => {
              const mil = c.specs?.mileage || (c.variants && c.variants[0] ? c.variants[0].mileage : '18.5 kmpl');
              return `<td class="compare-cell-value">${mil}</td>`;
            }).join('')}
          </tr>

          <!-- 4. DIMENSIONS & PRACTICALITY -->
          <tr class="compare-category-row">
            <td colspan="${cars.length + 1}">📐 Dimensions & Space</td>
          </tr>
          <tr>
            <td class="compare-cell-title">Ground Clearance</td>
            ${cars.map(c => {
              const val = getNum(c.groundClearance);
              const isWin = val > 0 && val === maxGC;
              return `<td class="compare-cell-value ${isWin ? 'compare-advantage' : ''}">${c.groundClearance || '190 mm'} ${isWin ? '🏆 Highest GC' : ''}</td>`;
            }).join('')}
          </tr>
          <tr>
            <td class="compare-cell-title">Boot Space</td>
            ${cars.map(c => {
              const val = getNum(c.bootSpace);
              const isWin = val > 0 && val === maxBoot;
              return `<td class="compare-cell-value ${isWin ? 'compare-advantage' : ''}">${c.bootSpace || '350 L'} ${isWin ? '🏆 Largest Boot' : ''}</td>`;
            }).join('')}
          </tr>
          <tr>
            <td class="compare-cell-title">Body Type</td>
            ${cars.map(c => `<td class="compare-cell-value">${c.bodyType}</td>`).join('')}
          </tr>
          <tr>
            <td class="compare-cell-title">Available Official Colors</td>
            ${cars.map(c => {
              const colorList = c.colors || [];
              return `
                <td class="compare-cell-value">
                  <div style="font-weight:700; margin-bottom:4px;">${colorList.length} Shades</div>
                  <div style="display:flex; gap:4px; flex-wrap:wrap;">
                    ${colorList.slice(0, 6).map(col => `<span style="width:14px; height:14px; border-radius:50%; background:${col.hex}; border:1px solid #CBD5E1; display:inline-block;" title="${col.name}"></span>`).join('')}
                  </div>
                </td>
              `;
            }).join('')}
          </tr>

          <!-- 5. VALUE FOR MONEY PICK -->
          <tr class="compare-category-row">
            <td colspan="${cars.length + 1}">🏆 Recommended Value-For-Money (VFM) Variant</td>
          </tr>
          <tr>
            <td class="compare-cell-title">Recommended Pick</td>
            ${cars.map(c => {
              const vfmVar = (c.variants || []).find(v => v.isVFM) || (c.variants && c.variants[1]) || (c.variants && c.variants[0]);
              if (!vfmVar) return '<td class="compare-cell-value">Standard Trim</td>';
              const quote = calculateOnRoadPrice(vfmVar.exShowroom, selectedCityId);
              return `
                <td class="compare-cell-value" style="background:#FFFDF5;">
                  <div style="font-weight:800; color:var(--primary); font-size:14px;">${vfmVar.name}</div>
                  <div style="font-size:12px; font-weight:700; color:var(--text-main); margin:3px 0;">On-Road: ${formatLakh(quote.total)}</div>
                  <div style="font-size:11px; color:var(--text-secondary);">${(vfmVar.keyFeatures || []).slice(0, 3).join(', ')}</div>
                </td>
              `;
            }).join('')}
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Bottom Actions -->
    <div style="margin-top:20px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px;">
      <button type="button" class="btn-text-action" onclick="window.clearCompareList(); window.closeCompareModal();">
        🗑️ Clear All & Close
      </button>
      <button type="button" class="btn-dock-launch" onclick="window.closeCompareModal();">
        ✓ Done Comparing
      </button>
    </div>
  `;

  modal.classList.add('active');
};

window.closeCompareModal = function() {
  const modal = document.getElementById('compareModal');
  if (modal) modal.classList.remove('active');
};


// ==========================================================================
// 2B. ⚖️ CARWALE-STYLE COMPARE CARS SHELF (HEAD-TO-HEAD MATCHUPS)
// ==========================================================================
const POPULAR_COMPARE_MATCHUPS = [
  {
    car1Id: 'hyundai-bayon',
    car2Id: 'hyundai-venue',
    tag: 'Compact Crossover Rivals'
  },
  {
    car1Id: 'maruti-brezza',
    car2Id: 'xuv-3xo',
    tag: 'Sub-4M SUV Clash'
  },
  {
    car1Id: 'tata-altroz',
    car2Id: 'maruti-dzire',
    tag: 'Safe Hatch vs Value Sedan'
  },
  {
    car1Id: 'hyundai-creta',
    car2Id: 'kia-seltos',
    tag: 'Midsize SUV Titans'
  },
  {
    car1Id: 'tata-curvv',
    car2Id: 'citroen-basalt',
    tag: 'New-Age SUV-Coupe War'
  },
  {
    car1Id: 'thar-roxx',
    car2Id: 'maruti-jimny',
    tag: '4x4 Off-Road Showdown'
  },
  {
    car1Id: 'skoda-kylaq',
    car2Id: 'maruti-fronx',
    tag: 'Turbo SUV Faceoff'
  },
  {
    car1Id: 'nissan-magnite',
    car2Id: 'tata-punch',
    tag: 'Value Urban Compacts'
  }
];

function renderCompareShelf() {
  const container = document.getElementById('compareShelfContainer');
  if (!container) return;

  const allCars = getAllCars();

  container.innerHTML = POPULAR_COMPARE_MATCHUPS.map(m => {
    const car1 = allCars.find(c => c.id === m.car1Id);
    const car2 = allCars.find(c => c.id === m.car2Id);
    if (!car1 || !car2) return '';

    const name1 = car1.name.replace(car1.brand, '').trim() || car1.name;
    const name2 = car2.name.replace(car2.brand, '').trim() || car2.name;

    return `
      <div class="compare-match-card">
        <div class="compare-match-header">
          <span>${m.tag}</span>
          <span style="font-size:10px; color:#94A3B8;">VS Battle</span>
        </div>
        <div class="compare-cars-battle">
          <div class="compare-side-car">
            <img src="${car1.heroImage}" alt="${car1.name}" class="compare-side-img" loading="lazy">
            <div class="compare-side-name" title="${car1.name}">${car1.brand}<br><strong>${name1}</strong></div>
            <div class="compare-side-price">${car1.priceRange}</div>
          </div>
          <div class="compare-vs-badge-circle">vs</div>
          <div class="compare-side-car">
            <img src="${car2.heroImage}" alt="${car2.name}" class="compare-side-img" loading="lazy">
            <div class="compare-side-name" title="${car2.name}">${car2.brand}<br><strong>${name2}</strong></div>
            <div class="compare-side-price">${car2.priceRange}</div>
          </div>
        </div>
        <button type="button" class="btn-shelf-compare-now" onclick="window.launchHeadToHeadCompare('${car1.id}', '${car2.id}')">
          Compare Now
        </button>
      </div>
    `;
  }).filter(Boolean).join('');
}

window.launchHeadToHeadCompare = function(car1Id, car2Id) {
  window.openCompareModal([car1Id, car2Id]);
};

window.scrollShelf = function(containerId, offset) {
  const el = document.getElementById(containerId);
  if (el) {
    el.scrollBy({ left: offset, behavior: 'smooth' });
  }
};

// ==========================================================================
// 3B. 🚗 CARWALE-STYLE "POPULAR USED CARS IN INDIA"
// ==========================================================================
const POPULAR_USED_CARS = [
  {
    id: 'maruti-swift',
    name: 'Maruti Suzuki Swift',
    brand: 'Maruti Suzuki',
    image: 'https://ik.imagekit.io/2908vvlod/cars/swift/360/sizzling-red-bluish-black/4.webp',
    usedPriceRange: '₹2.50 – ₹7.20 Lakh',
    retentionScore: '⭐ 4.9/5 Resale Demand',
    fuelTypes: ['Petrol', 'CNG', 'Diesel'],
    bodyType: 'Hatchback',
    mileage: '22.56 – 32.85 km/l',
    topYears: '2018 – 2024',
    badge: 'India’s #1 Resale Hatchback',
    highlight: 'Lowest cost per km, ubiquitous spare parts, instant buyer liquidity across India.'
  },
  {
    id: 'honda-city',
    name: 'Honda City',
    brand: 'Honda',
    image: 'https://ik.imagekit.io/2908vvlod/cars/honda-city/colors/obsidian-blue-pearl.webp',
    usedPriceRange: '₹3.20 – ₹9.80 Lakh',
    retentionScore: '⭐ 4.8/5 Resale Demand',
    fuelTypes: ['Petrol', 'Diesel'],
    bodyType: 'Executive Sedan',
    mileage: '17.8 – 24.1 km/l',
    topYears: '2016 – 2023',
    badge: 'Timeless Japanese Reliability',
    highlight: 'Legendary 1.5L i-VTEC engine easily exceeds 250,000 km without major overhaul.'
  },
  {
    id: 'hyundai-i20',
    name: 'Hyundai i20',
    brand: 'Hyundai',
    image: 'https://ik.imagekit.io/2908vvlod/cars/i20/360/starry-night/1.webp',
    usedPriceRange: '₹2.80 – ₹7.50 Lakh',
    retentionScore: '⭐ 4.7/5 Resale Demand',
    fuelTypes: ['Petrol', 'Diesel'],
    bodyType: 'Premium Hatchback',
    mileage: '19.8 – 25.2 km/l',
    topYears: '2017 – 2024',
    badge: 'Feature-Rich Premium Cabin',
    highlight: 'High quality European fit & finish, sunroof, touchscreen, and great city driveability.'
  },
  {
    id: 'mahindra-scorpio-n',
    name: 'Mahindra Scorpio',
    brand: 'Mahindra',
    image: 'https://ik.imagekit.io/2908vvlod/cars/scorpio-n/colors/deep-forest.webp',
    usedPriceRange: '₹4.50 – ₹12.00 Lakh',
    retentionScore: '⭐ 4.9/5 Resale Demand',
    fuelTypes: ['Diesel'],
    bodyType: 'Rugged 7-Seater SUV',
    mileage: '15.0 – 16.5 km/l',
    topYears: '2016 – 2023',
    badge: 'Unstoppable Resale Retention',
    highlight: 'Commanding road presence, indestructible ladder chassis, and massive rural + tier-2 demand.'
  },
  {
    id: 'toyota-innova-hycross',
    name: 'Toyota Innova / Crysta',
    brand: 'Toyota',
    image: 'https://ik.imagekit.io/2908vvlod/cars/toyota-innova-hycross/colors/platinum-white-pearl.webp?v=2',
    usedPriceRange: '₹5.50 – ₹16.50 Lakh',
    retentionScore: '⭐ 5.0/5 The Resale King',
    fuelTypes: ['Diesel', 'Petrol'],
    bodyType: '7-Seater MPV',
    mileage: '14.5 – 21.1 km/l',
    topYears: '2015 – 2024',
    badge: 'Highest Value Retention in India',
    highlight: 'Often sells at near original invoice price after 5 years. Renowned for 500,000+ km longevity.'
  },
  {
    id: 'hyundai-creta',
    name: 'Hyundai Creta',
    brand: 'Hyundai',
    image: 'https://ik.imagekit.io/2908vvlod/cars/creta/360/robust-emerald-pearl/1.webp',
    usedPriceRange: '₹6.50 – ₹13.50 Lakh',
    retentionScore: '⭐ 4.9/5 Resale Demand',
    fuelTypes: ['Petrol', 'Diesel'],
    bodyType: 'Midsize SUV',
    mileage: '17.4 – 21.8 km/l',
    topYears: '2018 – 2024',
    badge: 'India’s #1 Used SUV',
    highlight: 'Dominates the used SUV market with rapid turnover and premium resale value in all cities.'
  },
  {
    id: 'maruti-baleno',
    name: 'Maruti Suzuki Baleno',
    brand: 'Maruti Suzuki',
    image: 'https://ik.imagekit.io/2908vvlod/cars/baleno/360/nexa-blue/4.webp',
    usedPriceRange: '₹3.80 – ₹7.40 Lakh',
    retentionScore: '⭐ 4.8/5 Resale Demand',
    fuelTypes: ['Petrol', 'CNG'],
    bodyType: 'Premium Hatchback',
    mileage: '22.35 – 30.61 km/kg',
    topYears: '2019 – 2024',
    badge: 'Best Family Commuter Value',
    highlight: 'Extremely spacious rear legroom, 22+ km/l real-world mileage, hassle-free maintenance.'
  },
  {
    id: 'maruti-dzire',
    name: 'Maruti Suzuki Dzire',
    brand: 'Maruti Suzuki',
    image: 'https://ik.imagekit.io/2908vvlod/cars/dzire/360/alluring-blue/4.webp',
    usedPriceRange: '₹3.10 – ₹7.20 Lakh',
    retentionScore: '⭐ 4.8/5 Resale Demand',
    fuelTypes: ['Petrol', 'CNG'],
    bodyType: 'Compact Sedan',
    mileage: '22.61 – 31.12 km/kg',
    topYears: '2018 – 2024',
    badge: 'Most Economical Boot Sedan',
    highlight: '378L boot space, unmatched fuel efficiency, and lowest depreciation rate in the compact sedan class.'
  }
];

function getActivePopularUsedCars() {
  try {
    const custom = JSON.parse(localStorage.getItem('cmv_popular_used_cars') || 'null');
    if (Array.isArray(custom) && custom.length > 0) return custom;
  } catch (e) {}
  return typeof DEFAULT_POPULAR_USED_CARS !== 'undefined' ? DEFAULT_POPULAR_USED_CARS : POPULAR_USED_CARS;
}

window.swapUsedCardImg = function(event, carId, imgUrl, thumbBtn) {
  if (event) event.stopPropagation();
  const imgEl = document.getElementById('usedHeroImg_' + carId);
  if (imgEl) imgEl.src = imgUrl;
  if (thumbBtn && thumbBtn.parentElement) {
    thumbBtn.parentElement.querySelectorAll('.used-mini-thumb').forEach(b => {
      b.style.borderColor = '#E2E8F0';
    });
    thumbBtn.style.borderColor = 'var(--primary)';
  }
};

function renderPopularUsedCars() {
  const container = document.getElementById('popularUsedGridContainer');
  if (!container) return;

  const secCfg = getHomepageSectionConfig('popularUsedCars');
  container.classList.remove('card-style-compact', 'card-style-big');
  if (secCfg.cardStyle === 'compact') container.classList.add('card-style-compact');
  if (secCfg.cardStyle === 'big') container.classList.add('card-style-big');
  if (secCfg.layout === 'carousel') {
    container.style.display = 'flex';
    container.style.overflowX = 'auto';
    container.style.gap = '18px';
    container.style.paddingBottom = '12px';
  } else {
    container.style.display = '';
    container.style.overflowX = '';
    container.style.gap = '';
    container.style.paddingBottom = '';
  }

  const list = getActivePopularUsedCars().filter(c => c.enabled !== false);

  container.innerHTML = list.map(car => {
    const heroUrl = car.heroImage || car.image || 'assets/logo.png';
    const otherImgs = Array.isArray(car.gallery) ? car.gallery.filter(g => g && g.url) : [];
    const allPhotos = [{ url: heroUrl, caption: car.name + ' Hero' }, ...otherImgs];
    const fuels = Array.isArray(car.fuelTypes) ? car.fuelTypes.join('/') : (car.fuelTypes || 'Petrol');

    return `
    <article class="popular-used-card" onclick="window.showUsedCarsComingSoon(event)">
      <div class="popular-used-media" style="position:relative;">
        <div class="popular-used-badge-row">
          <span class="popular-used-demand-badge" style="background:#FEF3C7; color:#B45309; border:1px solid #FDE68A;">🚀 COMING SOON</span>
          <span class="popular-used-years-badge">📅 ${car.topYears || '2018 – 2024'}</span>
        </div>
        <img id="usedHeroImg_${car.id}" src="${heroUrl}" alt="${car.name}" class="popular-used-img" loading="lazy" onerror="this.src='assets/logo.png'">
        ${otherImgs.length > 0 ? `<span style="position:absolute; bottom:8px; right:10px; background:rgba(15,23,42,0.78); color:#FFF; font-size:10px; font-weight:800; padding:2px 8px; border-radius:16px;">📷 ${allPhotos.length} Photos</span>` : ''}
      </div>
      ${otherImgs.length > 0 ? `
      <div style="display:flex; gap:6px; padding:8px 14px 2px; overflow-x:auto; scrollbar-width:none; background:#F8FAFC; border-bottom:1px solid #F1F5F9;" onclick="event.stopPropagation()">
        ${allPhotos.map((p, idx) => `
          <button type="button" class="used-mini-thumb" onclick="window.swapUsedCardImg(event, '${car.id}', '${p.url.replace(/'/g, "\\'")}', this)" style="border:2px solid ${idx === 0 ? 'var(--primary)' : '#E2E8F0'}; border-radius:6px; padding:1px; background:#FFF; cursor:pointer; flex-shrink:0; width:44px; height:30px; overflow:hidden;" title="${p.caption || ''}">
            <img src="${p.url}" alt="${p.caption || ''}" style="width:100%; height:100%; object-fit:contain; border-radius:4px;">
          </button>
        `).join('')}
      </div>
      ` : ''}
      <div class="popular-used-body">
        <span class="popular-used-brand">${car.brand} • ${car.bodyType || 'SUV'}</span>
        <h3 class="popular-used-title">${car.name}</h3>
        <div class="popular-used-price-tag">
          <span class="popular-used-price-val">${car.usedPriceRange}</span>
          <span class="popular-used-price-lbl">(Est. Used Benchmark)</span>
        </div>
        <div class="popular-used-specs-mini">
          <span class="used-spec-chip">⛽ ${fuels}</span>
          <span class="used-spec-chip">⚡ ${car.mileage || '18+ km/l'}</span>
        </div>
        <p class="popular-used-highlight">${car.highlight || ''}</p>
        <button type="button" class="btn-explore-used" onclick="window.showUsedCarsComingSoon(event)">
          <span>🚀 Used Marketplace: Coming Soon &rsaquo;</span>
        </button>
      </div>
    </article>
  `;
  }).join('');
}

window.exploreUsedCarModel = function(carId) {
  window.showUsedCarsComingSoon();
};

// ==========================================================================
// 3C. 🏙️ CARWALE-STYLE "USED CARS BY CITY"
// ==========================================================================
const USED_CARS_CITIES = [
  {
    id: 'delhi',
    name: 'Delhi',
    count: '10,700+ Cars',
    fromPrice: 'From Rs. 45,000',
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 56h40M16 56V26h32v30M24 26V18h16v8M28 18V12h8v6M26 56V38a6 6 0 0 1 12 0v18M14 26h36M18 20h28"/>
    </svg>`
  },
  {
    id: 'mumbai',
    name: 'Mumbai',
    count: '9,200+ Cars',
    fromPrice: 'From Rs. 45,000',
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 56h44M16 56V30l6-4v-8l4-4 4 4v8l6 4v26M24 56V38a8 8 0 0 1 16 0v18M42 30v-8l4-4 4 4v8l6 4v26M12 30h40M22 18h20"/>
    </svg>`
  },
  {
    id: 'bengaluru',
    name: 'Bangalore',
    count: '5,400+ Cars',
    fromPrice: 'From Rs. 50,000',
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 56h44M14 56V32h36v24M22 32V22c0-5.5 4.5-10 10-10s10 4.5 10 10v10M32 8v4M26 56V42a6 6 0 0 1 12 0v14M12 32h40M18 40h4M42 40h4"/>
    </svg>`
  },
  {
    id: 'pune',
    name: 'Pune',
    count: '4,200+ Cars',
    fromPrice: 'From Rs. 30,000',
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 56h44M14 56V30c0-6 5-11 11-11h14c6 0 11 5 11 11v26M25 56V40a7 7 0 0 1 14 0v16M14 26l6-6h24l6 6M20 34h6M38 34h6"/>
    </svg>`
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    count: '4,200+ Cars',
    fromPrice: 'From Rs. 35,000',
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 56h44M14 56V18l4-4 4 4v38M42 56V18l4-4 4 4v38M20 32c0-7 5.4-12 12-12s12 5 12 12v24M26 56V42a6 6 0 0 1 12 0v14M20 28h24M28 20h8"/>
    </svg>`
  },
  {
    id: 'ahmedabad',
    name: 'Ahmedabad',
    count: '3,900+ Cars',
    fromPrice: 'From Rs. 30,000',
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 56h40M18 56V32c0-8 6.3-14 14-14s14 6 14 14v24M26 56V42a6 6 0 0 1 12 0v14M16 26l16-12 16 12M32 10v4M22 36a10 10 0 0 1 20 0"/>
    </svg>`
  },
  {
    id: 'chennai',
    name: 'Chennai',
    count: '3,500+ Cars',
    fromPrice: 'From Rs. 40,000',
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M10 56h44M16 56V28h32v28M24 28V16h16v12M28 16V10h8v6M26 56V42a6 6 0 0 1 12 0v14M14 28h36M32 20v4"/>
    </svg>`
  },
  {
    id: 'kolkata',
    name: 'Kolkata',
    count: '2,800+ Cars',
    fromPrice: 'From Rs. 35,000',
    iconSvg: `<svg viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M8 52h48M14 52V20l18 14 18-14v32M14 20h36M14 36l18-12 18 12M24 52V36M40 52V36M8 56h48"/>
    </svg>`
  }
];

function renderUsedCarsByCity() {
  const container = document.getElementById('usedCityShelfContainer');
  if (!container) return;

  container.innerHTML = USED_CARS_CITIES.map(c => `
    <div class="used-city-card ${c.id === selectedCityId ? 'active' : ''}" onclick="window.showUsedCarsComingSoon(event)">
      <div class="used-city-icon-wrap">${c.iconSvg}</div>
      <div class="used-city-name">${c.name}</div>
    </div>
  `).join('');
}

window.selectUsedCity = function(cityId, cityName) {
  window.showUsedCarsComingSoon();
};

// CarWale Card Action Helpers
window.openCarPriceBreakup = function(carId) {
  window.openCarModal(carId);
  setTimeout(() => {
    const table = document.querySelector('.variants-list') || document.querySelector('.variant-card');
    if (table) table.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, 250);
};

window.checkOnRoadPrice = function(carId) {
  window.openCarModal(carId);
  setTimeout(() => {
    const badge = document.querySelector('.on-road-city-badge');
    if (badge) {
      badge.style.transition = 'all 0.3s ease';
      badge.style.transform = 'scale(1.05)';
      badge.style.background = '#EFF6FF';
      setTimeout(() => {
        badge.style.transform = 'scale(1)';
        badge.style.background = '';
      }, 1200);
    }
  }, 250);
};

// Travomint Hero Search & Navigation Helpers
window.selectHeroType = function(type) {
  if (type === 'used') {
    filters.category = 'used';
    document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.category === 'used'));
    renderCars();
    const catalog = document.getElementById('catalogSection');
    if (catalog) catalog.scrollIntoView({ behavior: 'smooth' });
    window.showUsedCarsComingSoon();
    return;
  }
  filters.category = type;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.category === type));
  renderCars();
  const catalog = document.getElementById('catalogSection');
  if (catalog && type !== 'all') {
    catalog.scrollIntoView({ behavior: 'smooth' });
  }
};

window.showUsedCarsComingSoon = function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const modal = document.getElementById('usedCarsModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    const input = document.getElementById('usedCarModalEmail');
    if (input) setTimeout(() => input.focus(), 120);
  }
};

window.subscribeUsedCars = function(inputId = 'usedCarModalEmail') {
  const input = document.getElementById(inputId) || document.getElementById('usedCarModalEmail');
  const email = (input ? input.value : '').trim();
  if (!email || !email.includes('@')) {
    window.showToast('⚠️ Please enter a valid email address.');
    return;
  }
  window.showToast('🎉 You are on the VIP Early Access list for Used Cars!');
  if (input) input.value = '';
  setTimeout(() => {
    window.closeModal('usedCarsModal');
  }, 1200);
};

window.selectHeroPrice = function(val) {
  filters.price = val;
  const sel = document.getElementById('priceSelectFilter');
  if (sel) sel.value = val;
  renderCars();
  const catalog = document.getElementById('catalogSection');
  if (catalog && val !== 'all') {
    catalog.scrollIntoView({ behavior: 'smooth' });
  }
};

window.triggerHeroSearch = function() {
  const query = (document.getElementById('globalSearchInput')?.value || '').trim();
  if (query) {
    window.location.href = 'cars.html?q=' + encodeURIComponent(query);
    return;
  }
  const catalog = document.getElementById('catalogSection') || document.getElementById('popularBudgetSection');
  if (catalog) {
    catalog.scrollIntoView({ behavior: 'smooth' });
  }
};

window.selectCategory = function(cat) {
  filters.category = cat;
  document.querySelectorAll('.filter-chip').forEach(c => c.classList.toggle('active', c.dataset.category === cat));
  renderCars();
  const catalog = document.getElementById('catalogSection');
  if (catalog) {
    catalog.scrollIntoView({ behavior: 'smooth' });
  }
};

// Restore saved city from previous session
try {
  const savedCity = localStorage.getItem('cmv_user_city');
  if (savedCity && CITIES.some(c => c.id === savedCity)) {
    window.selectCity(savedCity);
  }
} catch(e) {}

// ==========================================================================
// MODULAR HOMEPAGE HORIZONTAL SHELVES ENGINE
// ==========================================================================

function createShelfCarCard(car, cardStyle = 'compact') {
  const priceDisplay = car.priceRange ? car.priceRange.replace('₹', 'Rs. ') : ('Rs. ' + car.minPrice + ' - ' + car.maxPrice + ' Lakh');
  const onRoadEstimate = calculateOnRoadPrice(car.minPrice, selectedCityId);

  if (cardStyle === 'big') {
    return `
      <div class="trending-card card-size-big" onclick="window.navigateToCar('${car.id}')" style="cursor:pointer;">
        <div class="trending-card-media">
          <div class="trending-badge-row">
            <span class="trending-hot-badge">${formatLaunchBadge(car.launchDate)}</span>
            <span class="trending-safety-badge">${formatSafetyBadge(car.safetyRating)}</span>
          </div>
          <img src="${car.heroImage}" alt="${car.name}" class="trending-card-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.src='assets/logo.png'">
        </div>
        <div class="trending-card-body">
          <span class="trending-brand">${car.brand} • ${car.bodyType}</span>
          <h3 class="trending-title"><a href="javascript:void(0)" onclick="event.stopPropagation(); window.navigateToCar('${car.id}')" class="car-seo-title-link">${car.name}</a></h3>
          <div class="trending-specs-mini">
            <span>⛽ ${(car.fuelTypes || []).join('/')}</span>
            <span>•</span>
            <span>📐 ${car.groundClearance}</span>
          </div>
          <div class="trending-price">
            ${car.priceRange}
            <div style="font-size:11px; font-weight:600; color:var(--text-muted); margin-top:2px;">Est. On-Road (${onRoadEstimate.cityName}): ${formatLakh(onRoadEstimate.total)}</div>
          </div>
          <div class="trending-actions-carwale">
            <button type="button" class="btn-price-breakup" onclick="event.stopPropagation(); window.navigateToCar('${car.id}')" title="View variant price breakup">
              View Price Breakup
            </button>
          </div>
        </div>
      </div>
    `;
  }

  if (cardStyle === 'medium') {
    return `
      <article class="shelf-car-card card-size-medium" onclick="window.navigateToCar('${car.id}')" title="${car.name}">
        <div class="shelf-car-media" style="position:relative;">
          <span style="position:absolute; top:8px; right:8px; background:rgba(255,255,255,0.94); color:#0F172A; font-size:10px; font-weight:800; padding:3px 8px; border-radius:20px; border:1px solid #E2E8F0; z-index:2;">${formatSafetyBadge(car.safetyRating)}</span>
          <img src="${car.heroImage}" alt="${car.name}" class="shelf-car-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.src='assets/logo.png'">
        </div>
        <div style="font-size:10.5px; font-weight:800; color:#64748B; text-transform:uppercase; letter-spacing:0.4px; margin-bottom:2px;">${car.brand} • ${car.bodyType}</div>
        <h4 class="shelf-car-name">${car.name}</h4>
        <div style="font-size:11.5px; color:#475569; font-weight:600; margin-bottom:6px;">⛽ ${(car.fuelTypes || []).join('/')} • 📐 ${car.groundClearance}</div>
        <div class="shelf-car-price">${priceDisplay}</div>
        <div style="font-size:11px; color:#64748B; font-weight:600; margin-bottom:8px;">Est. On-Road (${onRoadEstimate.cityName}): ${formatLakh(onRoadEstimate.total)}</div>
        <div class="shelf-car-action">
          <span class="view-breakup-link">View Price Breakup &rsaquo;</span>
        </div>
      </article>
    `;
  }

  return `
    <article class="shelf-car-card card-size-compact" onclick="window.navigateToCar('${car.id}')" title="${car.name}">
      <div class="shelf-car-media">
        <img src="${car.heroImage}" alt="${car.name}" class="shelf-car-img" loading="lazy" referrerpolicy="no-referrer" onerror="this.src='assets/logo.png'">
      </div>
      <h4 class="shelf-car-name">${car.name}</h4>
      <div class="shelf-car-price">${priceDisplay}</div>
      <div class="shelf-car-action">
        <span class="view-breakup-link">View Price Breakup</span>
      </div>
    </article>
  `;
}

function createShelfViewMoreCard(href, title) {
  return `
    <a href="${href}" class="shelf-view-more-card" title="${title || 'View More'}">
      <div class="view-more-circle">&rarr;</div>
      <div class="view-more-title">${title || 'View More'}</div>
      <div class="view-more-count">View More &rsaquo;</div>
    </a>
  `;
}

// 1. Recently Viewed Cars
function renderRecentlyViewed() {
  const container = document.getElementById('recentlyViewedShelf');
  const section = document.getElementById('recentlyViewedSection');
  if (!container || !section) return;

  const secCfg = getHomepageSectionConfig('recentlyViewed');
  if (secCfg.visible === false) {
    section.style.display = 'none';
    return;
  }

  let viewedIds = [];
  try {
    viewedIds = JSON.parse(localStorage.getItem('cmv_recently_viewed') || '[]');
  } catch(e) {}

  if (viewedIds.length === 0) {
    viewedIds = ['tata-curvv', 'hyundai-creta', 'skoda-kylaq', 'mahindra-thar-roxx'];
  }

  section.style.display = 'block';
  const all = getAllCars();
  const matched = viewedIds.map(id => all.find(c => c.id === id)).filter(Boolean);
  const cardStyle = secCfg.cardStyle || 'compact';
  applyShelfLayoutClasses(container, secCfg.layout || 'carousel', cardStyle);

  let html = matched.map(car => createShelfCarCard(car, cardStyle)).join('');
  html += createShelfViewMoreCard('/cars.html', 'View All Cars');
  container.innerHTML = html;
}

// 2. Recommended For You
function renderRecommendedShelf() {
  const container = document.getElementById('recommendedShelf');
  if (!container) return;

  let customIds = [];
  try {
    customIds = JSON.parse(localStorage.getItem('cmv_custom_cars') || '[]').map(c => c.id);
  } catch (e) {}

  const recIds = [...new Set([...customIds, 'tata-curvv', 'hyundai-creta', 'skoda-kylaq', 'mahindra-thar-roxx', 'maruti-brezza', 'mg-windsor-ev', 'tata-punch', 'nissan-magnite'])];
  const all = getAllCars();
  const baseMatched = recIds.map(id => all.find(c => c.id === id)).filter(Boolean);
  const matched = getOrderedCarsForSection('recommended', baseMatched, true);

  const secCfg = getHomepageSectionConfig('recommended');
  const cardStyle = secCfg.cardStyle || 'compact';
  applyShelfLayoutClasses(container, secCfg.layout || 'carousel', cardStyle);

  let html = matched.map(car => createShelfCarCard(car, cardStyle)).join('');
  html += createShelfViewMoreCard('/cars.html?category=recommended', 'View Recommended');
  container.innerHTML = html;
}

// 3. Trending 2024-2026 Launches Shelf
function renderTrendingShelf() {
  renderTrendingLaunches();
}

// 4A. Popular Cars Under 10 Lakh
let currentUnder10LFilter = 'all';

function renderUnder10LShelf() {
  const container = document.getElementById('under10LShelf');
  if (!container) return;

  const all = getAllCars().filter(c => c.minPrice < 1000000);
  let filtered = all;

  if (currentUnder10LFilter === 'sub-compact-suv') {
    filtered = all.filter(c => (c.bodyType || '').includes('SUV'));
  } else if (currentUnder10LFilter === 'hatchback') {
    filtered = all.filter(c => (c.bodyType || '').includes('Hatchback'));
  } else if (currentUnder10LFilter === 'sedan') {
    filtered = all.filter(c => (c.bodyType || '').includes('Sedan') || (c.bodyType || '').includes('MPV'));
  }

  const ordered = getOrderedCarsForSection('under10L', filtered, currentUnder10LFilter === 'all');
  const secCfg = getHomepageSectionConfig('popularBudget');
  const cardStyle = secCfg.under10LCardStyle || secCfg.cardStyle || 'compact';
  const layoutMode = secCfg.under10LLayout || secCfg.layout || 'carousel';
  applyShelfLayoutClasses(container, layoutMode, cardStyle);

  let html = ordered.slice(0, 12).map(car => createShelfCarCard(car, cardStyle)).join('');
  html += createShelfViewMoreCard(`/cars.html?budget=under-10l&category=${currentUnder10LFilter}`, 'View Under 10L');
  container.innerHTML = html;
}

window.filterUnder10L = function(filterKey, btn) {
  currentUnder10LFilter = filterKey;
  document.querySelectorAll('#under10LPills .sub-pill-btn').forEach(b => b.classList.toggle('active', b === btn));
  renderUnder10LShelf();
};

// 4B. Popular Cars Above 10 Lakh
let currentAbove10LTab = '10-20l';
let currentAbove10LFilter = 'all';

function renderAbove10LShelf() {
  const container = document.getElementById('above10LShelf');
  if (!container) return;

  const all = getAllCars();
  let filtered = all;

  // Filter by budget tab
  if (currentAbove10LTab === '10-20l') {
    filtered = all.filter(c => c.minPrice >= 1000000 && c.minPrice <= 2000000);
  } else if (currentAbove10LTab === '20-30l') {
    filtered = all.filter(c => c.minPrice >= 2000000 && c.minPrice <= 3000000);
  } else if (currentAbove10LTab === 'luxury') {
    filtered = all.filter(c => c.minPrice > 2500000 || c.maxPrice > 3000000);
  }

  // Filter by body pill
  if (currentAbove10LFilter === 'suv') {
    filtered = filtered.filter(c => (c.bodyType || '').includes('SUV'));
  } else if (currentAbove10LFilter === 'sub-compact-suv') {
    filtered = filtered.filter(c => (c.bodyType || '').includes('SUV') && c.minPrice < 1500000);
  } else if (currentAbove10LFilter === 'sedan') {
    filtered = filtered.filter(c => (c.bodyType || '').includes('Sedan') || (c.bodyType || '').includes('MPV'));
  }

  const ordered = getOrderedCarsForSection('above10L', filtered, currentAbove10LFilter === 'all');
  const secCfg = getHomepageSectionConfig('popularBudget');
  const cardStyle = secCfg.above10LCardStyle || secCfg.cardStyle || 'compact';
  const layoutMode = secCfg.above10LLayout || secCfg.layout || 'carousel';
  applyShelfLayoutClasses(container, layoutMode, cardStyle);

  let html = ordered.slice(0, 12).map(car => createShelfCarCard(car, cardStyle)).join('');
  html += createShelfViewMoreCard(`/cars.html?budget=${currentAbove10LTab}&category=${currentAbove10LFilter}`, 'View Above 10L');
  container.innerHTML = html;
}

window.switchAbove10LTab = function(tabKey, btn) {
  currentAbove10LTab = tabKey;
  document.querySelectorAll('#above10LTabs .budget-tab-btn').forEach(b => b.classList.toggle('active', b === btn));
  renderAbove10LShelf();
};

window.filterAbove10L = function(filterKey, btn) {
  currentAbove10LFilter = filterKey;
  document.querySelectorAll('#above10LPills .sub-pill-btn').forEach(b => b.classList.toggle('active', b === btn));
  renderAbove10LShelf();
};

// 5. Get Offers on Popular Cars
function renderOffersShelf() {
  const container = document.getElementById('offersShelf');
  if (!container) return;

  const offers = [
    {
      carId: 'maruti-grand-vitara',
      name: 'Maruti Suzuki Grand Vitara',
      savings: 'Up to ₹1,28,000 Total Benefits',
      highlight: 'Exchange Bonus + Corporate Discount + 5 Year Warranty',
      image: 'https://ik.imagekit.io/2908vvlod/cars/grand-vitara/colors/opulent-red.webp'
    },
    {
      carId: 'tata-safari',
      name: 'Tata Safari & Harrier',
      savings: 'Up to ₹1,40,000 Festive Savings',
      highlight: 'Cash Discount + Scrappage Bonus + 3 Yrs Free Maintenance',
      image: 'https://ik.imagekit.io/2908vvlod/cars/safari/colors/cosmic-gold.webp'
    },
    {
      carId: 'mahindra-xuv700',
      name: 'Mahindra XUV700 (AX7 Series)',
      savings: 'Flat ₹2,00,000 Price Cut',
      highlight: 'Official OEM celebration price cut on high-spec variants',
      image: 'https://ik.imagekit.io/2908vvlod/cars/xuv700/colors/electric-blue.webp'
    },
    {
      carId: 'hyundai-creta',
      name: 'Hyundai Creta & Venue',
      savings: 'Up to ₹45,000 Special Benefits',
      highlight: 'Corporate benefit + 6.99% low EMI interest financing',
      image: 'https://ik.imagekit.io/2908vvlod/cars/creta/colors/ranger-khaki.webp'
    },
    {
      carId: 'mg-windsor-ev',
      name: 'MG Windsor EV (BaaS)',
      savings: 'Battery-as-a-Service at ₹3.5/km',
      highlight: 'Free 1 Year Public Charging + Lifetime Battery Warranty',
      image: 'https://ik.imagekit.io/2908vvlod/cars/mg-windsor-ev/colors/starburst-black.webp'
    }
  ];

  container.innerHTML = offers.map(o => `
    <div class="offer-card" onclick="window.navigateToCar('${o.carId}')" style="cursor:pointer;">
      <span class="offer-savings-badge">${o.savings}</span>
      <div style="height:120px; display:flex; align-items:center; justify-content:center;">
        <img src="${o.image}" alt="${o.name}" style="max-width:90%; max-height:100px; object-fit:contain; filter:drop-shadow(0 6px 10px rgba(0,0,0,0.1));">
      </div>
      <h4 style="font-size:16px; font-weight:800; color:#0F172A; margin:6px 0 2px;">${o.name}</h4>
      <p style="font-size:12px; color:#64748B; margin-bottom:12px;">${o.highlight}</p>
      <button type="button" class="btn-orange-pill" style="width:100%; justify-content:center; padding:7px;">
        View Offer & Price &rsaquo;
      </button>
    </div>
  `).join('');
}

// 6. Check New Car On-Road Price Search Box
window.handleQuickPriceSearch = function(q) {
  const list = document.getElementById('quickSearchResultsList');
  if (!list) return;

  const query = (q || '').toLowerCase().trim();
  if (!query) {
    list.style.display = 'none';
    return;
  }

  const all = getAllCars();
  const matched = all.filter(c => c.name.toLowerCase().includes(query) || c.brand.toLowerCase().includes(query)).slice(0, 5);

  if (matched.length === 0) {
    list.innerHTML = '<div style="font-size:13px; color:#64748B; padding:6px;">No car found matching query</div>';
    list.style.display = 'block';
    return;
  }

  list.innerHTML = matched.map(car => {
    const onRoad = calculateOnRoadPrice(car.minPrice, selectedCityId);
    return `
      <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 6px; border-bottom:1px solid #E2E8F0; cursor:pointer;" onclick="window.navigateToCar('${car.id}')">
        <div>
          <strong style="font-size:13.5px; color:#0F172A;">${car.name}</strong>
          <div style="font-size:11px; color:#64748B;">${car.brand} &bull; ${car.priceRange}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:13px; font-weight:900; color:var(--primary);">${formatLakh(onRoad.total)}</div>
          <span style="font-size:10px; color:#64748B;">Est. ${onRoad.cityName}</span>
        </div>
      </div>
    `;
  }).join('');
  list.style.display = 'block';
};

// 7. Upcoming and Recently Launched Cars
let currentUpcomingTab = 'upcoming';

function renderUpcomingLaunchedShelf() {
  const container = document.getElementById('upcomingLaunchedShelf');
  if (!container) return;

  const all = getAllCars();
  let matched = [];

  if (currentUpcomingTab === 'upcoming') {
    matched = all.filter(c => {
      const ld = String(c.launchDate || '');
      return ld.includes('2025') || ld.includes('2026') || ld.includes('Upcoming');
    });
  } else {
    matched = all.filter(c => {
      const ld = String(c.launchDate || '');
      return ld.includes('2024') || ld.includes('Facelift') || ld.includes('Launched');
    });
  }

  const ordered = getOrderedCarsForSection('upcomingLaunched', matched, true);
  const secCfg = getHomepageSectionConfig('upcomingLaunched');
  const cardStyle = secCfg.cardStyle || 'compact';
  applyShelfLayoutClasses(container, secCfg.layout || 'carousel', cardStyle);

  let html = ordered.slice(0, 12).map(car => createShelfCarCard(car, cardStyle)).join('');
  html += createShelfViewMoreCard(`/cars.html?category=${currentUpcomingTab}`, 'View All');
  container.innerHTML = html;
}

window.switchUpcomingTab = function(tabKey, btn) {
  currentUpcomingTab = tabKey;
  document.querySelectorAll('#upcomingTabs .fuel-tab-btn').forEach(b => b.classList.toggle('active', b === btn));
  renderUpcomingLaunchedShelf();
};

// 8. Cars by Fuel Type Carousel
let currentFuelTab = 'ev';

function renderFuelTypeShelf() {
  const container = document.getElementById('fuelTypeShelf');
  const link = document.getElementById('fuelTypeViewAllLink');
  if (!container) return;

  const all = getAllCars();
  let matched = [];
  let label = 'Electric';

  if (currentFuelTab === 'ev') {
    matched = all.filter(c => Array.isArray(c.fuelTypes) && c.fuelTypes.includes('EV'));
    label = 'Electric';
  } else if (currentFuelTab === 'hybrid') {
    matched = all.filter(c => (Array.isArray(c.fuelTypes) && c.fuelTypes.includes('Hybrid')) || (c.tagline && c.tagline.toLowerCase().includes('hybrid')));
    label = 'Hybrid';
  } else if (currentFuelTab === 'cng') {
    matched = all.filter(c => Array.isArray(c.fuelTypes) && c.fuelTypes.includes('CNG'));
    label = 'CNG';
  }

  if (link) {
    link.href = `/cars.html?fuel=${currentFuelTab}`;
    link.textContent = 'View More ›';
  }

  const ordered = getOrderedCarsForSection('fuelType', matched, false);
  const secCfg = getHomepageSectionConfig('fuelType');
  const cardStyle = secCfg.cardStyle || 'compact';
  applyShelfLayoutClasses(container, secCfg.layout || 'carousel', cardStyle);

  let html = ordered.slice(0, 12).map(car => createShelfCarCard(car, cardStyle)).join('');
  html += createShelfViewMoreCard(`/cars.html?fuel=${currentFuelTab}`, `View More ${label} Cars`);
  container.innerHTML = html;
}

window.switchFuelTab = function(fuelKey, btn) {
  currentFuelTab = fuelKey;
  document.querySelectorAll('#fuelTabsRow .fuel-tab-btn').forEach(b => b.classList.toggle('active', b === btn));
  renderFuelTypeShelf();
};

// Override navigateToCar to track recently viewed cars in localStorage & handle custom cars gracefully
const originalNavigateToCar = window.navigateToCar;
window.navigateToCar = function(carId, hash) {
  try {
    let viewed = JSON.parse(localStorage.getItem('cmv_recently_viewed') || '[]');
    viewed = viewed.filter(id => id !== carId);
    viewed.unshift(carId);
    if (viewed.length > 12) viewed = viewed.slice(0, 12);
    localStorage.setItem('cmv_recently_viewed', JSON.stringify(viewed));
  } catch(e) {}
  if (typeof originalNavigateToCar === 'function') {
    originalNavigateToCar(carId, hash);
  } else {
    window.location.href = `/cars/${carId}.html`;
  }
};


// CarWale Hero Pill Switcher (New vs Used)
window.setCarTypeMode = function(mode) {
  const pillNew = document.getElementById('pillNewCars');
  const pillUsed = document.getElementById('pillUsedCars');
  if (mode === 'used') {
    if (pillNew) pillNew.classList.remove('active');
    if (pillUsed) pillUsed.classList.add('active');
    window.showUsedCarsComingSoon();
  } else {
    if (pillUsed) pillUsed.classList.remove('active');
    if (pillNew) pillNew.classList.add('active');
    if (typeof window.selectHeroType === 'function') {
      window.selectHeroType('all');
    }
  }
};

/* Global Modal Backdrop & Escape Key Handlers */
window.addEventListener('click', (e) => {
  if (e.target && e.target.classList && e.target.classList.contains('modal-overlay')) {
    window.closeModal(e.target.id);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.closeModal();
  }
});


// ==========================================================================
// HEADER NAVIGATION TAB SWITCHER & SMOOTH SCROLLER
// ==========================================================================
window.switchNavTab = function(e, tabEl, targetId, subParam) {
  if (e) {
    try { e.preventDefault(); } catch(err) {}
  }

  // 1. Immediately toggle active class on nav tabs
  const navContainer = tabEl ? tabEl.closest('.nav-tabs-bar') : document.getElementById('mainNavTabs');
  if (navContainer) {
    navContainer.querySelectorAll('.nav-tab-item').forEach(el => el.classList.remove('active'));
    if (tabEl) tabEl.classList.add('active');
  }

  // 2. If EV & Hybrids tab clicked, switch the fuel shelf to EV
  if (targetId === 'fuelTypeSection') {
    const fuelKey = subParam || 'ev';
    if (typeof window.switchFuelTab === 'function') {
      const fuelTabsRow = document.getElementById('fuelTabsRow');
      const targetBtn = fuelTabsRow ? fuelTabsRow.querySelector(`[data-tab="${fuelKey}"]`) : null;
      window.switchFuelTab(fuelKey, targetBtn);
    }
  }

  // 3. Smooth scroll to target section with header offset
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    const headerOffset = 80;
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

window.selectCategory = function(catKey) {
  if (catKey === 'ev') {
    const evTab = document.querySelector('#mainNavTabs [data-nav="ev"]') || document.querySelectorAll('#mainNavTabs .nav-tab-item')[1];
    window.switchNavTab(null, evTab, 'fuelTypeSection', 'ev');
  }
};

function initHeaderScrollSpy() {
  const sections = [
    { id: 'heroSection', tabIndex: 0 },
    { id: 'popularBudgetSection', tabIndex: 0 },
    { id: 'fuelTypeSection', tabIndex: 1 },
    { id: 'compareSection', tabIndex: 2 },
    { id: 'onRoadCheckerSection', tabIndex: 3 },
    { id: 'popularUsedCarsSection', tabIndex: 4 },
    { id: 'newsSection', tabIndex: 5 }
  ];

  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      scrollTimeout = null;
      const scrollPos = window.pageYOffset + 120;
      const navTabs = document.querySelectorAll('#mainNavTabs .nav-tab-item');
      if (!navTabs.length) return;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = document.getElementById(sections[i].id);
        if (sec && sec.offsetTop <= scrollPos) {
          const targetTab = navTabs[sections[i].tabIndex];
          if (targetTab && !targetTab.classList.contains('active')) {
            navTabs.forEach(t => t.classList.remove('active'));
            targetTab.classList.add('active');
          }
          break;
        }
      }
    }, 100);
  }, { passive: true });
}
