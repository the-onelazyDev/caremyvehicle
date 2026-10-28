import { CARS, CITIES, calculateOnRoadPrice, formatINR, formatLakh } from './carData.js';
import { ARTICLES } from './newsData.js';

// Official Brand Logos Mapping
export const BRAND_LOGOS = {
  'Maruti Suzuki': 'assets/brands/maruti-suzuki.webp',
  'Maruti Suzuki (Nexa)': 'assets/brands/maruti-suzuki-nexa.webp',
  'Hyundai': 'assets/brands/hyundai.webp',
  'Tata': 'assets/brands/tata.webp',
  'Mahindra': 'assets/brands/mahindra.webp',
  'Kia': 'assets/brands/kia.webp',
  'Toyota': 'assets/brands/toyota.webp',
  'MG Motor': 'assets/brands/mg-motor.webp',
  'Honda': 'assets/brands/honda.webp',
  'Skoda': 'assets/brands/skoda.webp',
  'Volkswagen': 'assets/brands/volkswagen.webp',
  'Renault': 'assets/brands/renault.webp',
  'Citroën': 'assets/brands/citroen.webp',
  'BYD': 'assets/brands/byd.webp',
  'Nissan': 'assets/brands/nissan.webp'
};

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
let currentModalCar = null;

// DOM Elements
const carsContainer = document.getElementById('carsContainer');
const citySelectorBtn = document.getElementById('citySelectorBtn');
const cityNameDisplay = document.getElementById('cityNameDisplay');
const cityModal = document.getElementById('cityModal');
const carDetailModal = document.getElementById('carDetailModal');
const articleModal = document.getElementById('articleModal');
const globalSearchInput = document.getElementById('globalSearchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  renderBrandsShelf();
  renderTrendingLaunches();
  renderCars();
  renderNewsSection();
  setupEventListeners();
  checkDeepLink();
});

// Helper to retrieve both built-in dataset and locally added custom cars with visibility filters
function getAllCars() {
  try {
    const hiddenCars = new Set(JSON.parse(localStorage.getItem('cmv_hidden_cars') || '[]'));
    const hiddenBrands = new Set(JSON.parse(localStorage.getItem('cmv_hidden_brands') || '[]'));
    const custom = JSON.parse(localStorage.getItem('cmv_custom_cars') || '[]');
    const customIds = new Set(custom.map(c => c.id));
    const base = CARS.filter(c => !customIds.has(c.id));
    const all = [...custom, ...base];
    return all.filter(c => !hiddenCars.has(c.id) && !hiddenBrands.has(c.brand));
  } catch (e) {
    return CARS;
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
}

// 1. 🏢 Render Explore by Popular Brands Shelf
function renderBrandsShelf() {
  const container = document.getElementById('brandsShelfContainer');
  if (!container) return;

  const allCars = getAllCars();
  const brandCounts = {};
  allCars.forEach(c => {
    brandCounts[c.brand] = (brandCounts[c.brand] || 0) + 1;
  });

  const uniqueBrands = Object.keys(brandCounts).sort();
  
  let html = `
    <button class="brand-pill-card ${filters.brand === 'all' ? 'active' : ''}" onclick="window.selectBrand('all')">
      <div style="font-size:24px; line-height:1; height:38px; display:flex; align-items:center;">🚗</div>
      <div class="brand-pill-name">All Brands</div>
      <div class="brand-pill-count">${allCars.length} Cars</div>
    </button>
  `;

  uniqueBrands.forEach(b => {
    const logoUrl = BRAND_LOGOS[b] || `assets/brands/${b.toLowerCase().replace(/[^a-z0-9]+/g, '-')}.webp`;
    const count = brandCounts[b];
    const isActive = filters.brand === b;

    html += `
      <button class="brand-pill-card ${isActive ? 'active' : ''}" onclick="window.selectBrand('${b.replace(/'/g, "\\'")}')">
        <img src="${logoUrl}" alt="${b} Logo" class="brand-pill-logo" onerror="this.src='assets/logo.png'">
        <div class="brand-pill-name">${b}</div>
        <div class="brand-pill-count">${count} Cars</div>
      </button>
    `;
  });

  container.innerHTML = html;

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
function renderTrendingLaunches() {
  const container = document.getElementById('trendingShelfContainer');
  if (!container) return;

  const allCars = getAllCars();
  const trendingIds = [
    'nissan-magnite',
    'tata-curvv',
    'mahindra-thar-roxx',
    'skoda-kylaq',
    'hyundai-creta',
    'mg-windsor-ev',
    'nissan-tekton',
    'toyota-innova-hycross',
    'maruti-swift'
  ];

  const trendingCars = [];
  trendingIds.forEach(id => {
    const found = allCars.find(c => c.id === id);
    if (found) trendingCars.push(found);
  });

  const displayList = trendingCars.length >= 4 ? trendingCars : allCars.slice(0, 8);

  container.innerHTML = displayList.map(car => {
    const onRoadEstimate = calculateOnRoadPrice(car.minPrice, selectedCityId);
    return `
      <div class="trending-card" onclick="window.openCarModal('${car.id}')" style="cursor:pointer;">
        <div class="trending-card-media">
          <span class="trending-hot-badge">🔥 JUST LAUNCHED</span>
          <span class="trending-safety-badge">🛡️ ${car.safetyRating ? car.safetyRating.split('(')[0].trim() : '5-Star Safety'}</span>
          <img src="${car.heroImage}" alt="${car.name}" class="trending-card-img" loading="lazy">
        </div>
        <div class="trending-card-body">
          <span class="trending-brand">${car.brand} • ${car.bodyType}</span>
          <h3 class="trending-title">${car.name}</h3>
          <div class="trending-specs-mini">
            <span>⛽ ${(car.fuelTypes || []).join('/')}</span>
            <span>•</span>
            <span>📐 ${car.groundClearance}</span>
          </div>
          <div class="trending-price">
            ${car.priceRange}
            <div style="font-size:11px; font-weight:600; color:var(--text-muted); margin-top:2px;">Est. On-Road: ${formatLakh(onRoadEstimate.total)}</div>
          </div>
          <button class="trending-btn" onclick="event.stopPropagation(); window.openCarModal('${car.id}')">
            Explore 360 & Variants ➔
          </button>
        </div>
      </div>
    `;
  }).join('');
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
    if (filters.brand !== 'all' && car.brand !== filters.brand) {
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
      <article class="car-card" data-car-id="${car.id}">
        <div class="card-media">
          <img src="${car.heroImage}" alt="${car.name}" class="card-img" loading="lazy">
          <span class="badge-launch">🚀 Launched ${car.launchDate}</span>
          <span class="badge-safety">🛡️ ${car.safetyRating}</span>
        </div>

        <div class="card-body">
          <span class="card-brand">${car.brand}</span>
          <h3 class="card-title">${car.name}</h3>
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
            </div>
            <button class="btn-view-variants" onclick="window.openCarModal('${car.id}')">
              Explore All ➔
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// 5. 📰 Render Automotive Reviews & News Section
function renderNewsSection() {
  const container = document.getElementById('newsContainer');
  if (!container) return;

  container.innerHTML = ARTICLES.map(article => `
    <article class="news-card" onclick="window.openArticleModal('${article.id}')">
      <div class="news-card-media">
        <img src="${article.image}" alt="${article.title}" class="news-card-img" loading="lazy">
        <span class="news-cat-badge ${article.badgeClass}">${article.category}</span>
      </div>
      <div class="news-card-body">
        <h3 class="news-card-title">${article.title}</h3>
        <p class="news-card-excerpt">${article.excerpt}</p>
        <div class="news-card-footer">
          <span>${article.author} • ${article.readTime}</span>
          <span class="news-read-more">Read Review ➔</span>
        </div>
      </div>
    </article>
  `).join('');
}

window.openArticleModal = function(articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  const modal = document.getElementById('articleModal');
  const content = document.getElementById('articleModalContent');
  if (!modal || !content) return;

  content.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="news-cat-badge ${article.badgeClass}" style="position:static;">${article.category}</span>
        <h2 style="font-size:21px; font-weight:900; margin-top:8px; line-height:1.35; color:var(--text-main);">${article.title}</h2>
        <div style="font-size:12px; color:var(--text-muted); margin-top:6px;">
          By <strong>${article.author}</strong> • ${article.date} • ⏱️ ${article.readTime}
        </div>
      </div>
      <button class="modal-close-btn" onclick="window.closeArticleModal()">&times;</button>
    </div>

    <div style="padding:16px 0; border-bottom:1px solid var(--border); margin-bottom:20px;">
      <img src="${article.image}" alt="${article.title}" onerror="this.src='assets/logo.png'" style="width:100%; max-height:360px; object-fit:cover; border-radius:14px;">
    </div>

    <div style="font-size:15px; line-height:1.75; color:var(--text-main);" class="article-body-text">
      ${article.content}
    </div>

    <div style="margin-top:28px; padding-top:20px; border-top:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:12px; color:var(--text-muted);">Care My Vehicle Editorial Radar</span>
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
  });
}


window.selectCity = function(cityId) {
  selectedCityId = cityId;
  const city = CITIES.find(c => c.id === cityId);
  cityNameDisplay.textContent = city.name;
  cityModal.classList.remove('active');
  renderCars();
  if (currentModalCar) {
    window.openCarModal(currentModalCar.id);
  }
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
  container.onpointerdown = function(e) {
    spinState.isDragging = true;
    spinState.startX = e.clientX;
    container.setPointerCapture(e.pointerId);
    if (spinState.autoSpinInterval) {
      window.toggleAutoSpin();
    }
  };

  container.onpointermove = function(e) {
    if (!spinState.isDragging) return;
    const deltaX = e.clientX - spinState.startX;
    const sensitivity = 8; // pixels of drag per frame
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
    try { container.releasePointerCapture(e.pointerId); } catch(err) {}
  };

  container.onpointercancel = function() {
    spinState.isDragging = false;
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

// Open Car Detail Modal Drawer
window.openCarModal = function(carId) {
  const car = getAllCars().find(c => c.id === carId);
  if (!car) return;
  currentModalCar = car;

  // Update URL for SEO & deep linking
  history.pushState(null, '', `?car=${car.id}`);

  const modalBody = document.getElementById('carModalContent');
  const city = CITIES.find(c => c.id === selectedCityId);
  const colors = car.colors || [];
  const angles = car.angles || [];
  const spin360 = car.spin360 || null;
  const gallery = car.gallery || [];
  const specs = car.specs || {};
  const activePalette = (colors.length > 0) ? colors : (spin360 ? spin360.colors : []);

  modalBody.innerHTML = `
    <div class="modal-header">
      <div>
        <div style="display:flex; align-items:center; gap:8px;">
          <span class="card-brand">${car.brand} • ${car.bodyType}</span>
          <span class="badge-safety" style="position:static; font-size:11px; padding:2px 8px;">🛡️ ${car.safetyRating}</span>
        </div>
        <div style="display:flex; align-items:baseline; gap:10px; margin-top:2px;">
          <h2 style="font-size:21px; font-weight:900; letter-spacing:-0.5px; margin:0;">${car.name}</h2>
          <span style="font-size:14px; font-weight:800; color:var(--primary);">${car.priceRange}</span>
        </div>
        <p style="font-size:12px; color:var(--text-muted); margin-top:2px; margin-bottom:0; max-width:520px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${car.tagline || car.summary}</p>
      </div>
      <div style="display:flex; align-items:center; gap:8px; flex-shrink:0;">
      <button class="city-selector-btn" style="padding:6px 12px; font-size:12px;" onclick="window.shareCarLink('${car.id}')" title="Share direct link">
          🔗 Share
        </button>
        <button class="modal-close-btn" onclick="closeModal('carDetailModal')" title="Close">&times;</button>
      </div>
    </div>

    <!-- Navigation Tabs -->
    <div class="modal-nav-tabs">
      <button class="modal-tab-btn active" data-tab="variants" onclick="switchModalTab('variants')">
        🏷️ Variants & On-Road Price (${car.variants.length})
      </button>
      ${(spin360 || colors.length > 0 || angles.length > 0) ? `
        <button class="modal-tab-btn" data-tab="colors" onclick="switchModalTab('colors')">
          ${spin360 ? '🎨 Colors & 360° Studio 🔄' : `🎨 Official Colors (${colors.length})`}
        </button>
      ` : ''}
      ${gallery.length > 0 ? `
        <button class="modal-tab-btn" data-tab="gallery" onclick="switchModalTab('gallery')">
          📸 Photo Gallery (${gallery.length})
        </button>
      ` : ''}
      <button class="modal-tab-btn" data-tab="specs" onclick="switchModalTab('specs')">
        ⚙️ Specs & Dimensions
      </button>
    </div>

    <!-- TAB 1: VARIANTS & ON-ROAD PRICES -->
    <div id="tab-pane-variants" class="tab-pane active">
      <!-- City Pricing Selector -->
      <div style="background:#F1F5F9; border-radius:12px; padding:12px 16px; margin-bottom:20px; display:flex; align-items:center; justify-content:space-between;">
        <span style="font-size:13px; font-weight:700; color:var(--text-secondary)">Calculate On-Road Price for City:</span>
        <select onchange="window.selectCity(this.value)" style="padding:6px 12px; border-radius:8px; border:1px solid #CBD5E1; font-weight:700; background:#FFF; cursor:pointer;">
          ${CITIES.map(c => `<option value="${c.id}" ${c.id === selectedCityId ? 'selected' : ''}>${c.name}</option>`).join('')}
        </select>
      </div>

      <div class="variants-list">
        ${car.variants.map(v => {
          const quote = calculateOnRoadPrice(v.exShowroom, selectedCityId);

          return `
            <div class="variant-card ${v.isVFM ? 'vfm' : ''}">
              ${v.isVFM ? `<span class="vfm-chip">${v.vfmBadge}</span>` : ''}
              
              <div class="variant-title-row">
                <div class="variant-name">${v.name}</div>
                <div class="variant-price">${formatLakh(quote.total)}</div>
              </div>

              <div style="display:flex; gap:12px; font-size:12px; color:var(--text-secondary); margin-bottom:8px;">
                <span><strong>Engine:</strong> ${v.engine}</span>
                <span><strong>Mileage:</strong> ${v.mileage}</span>
                <span><strong>Fuel:</strong> ${v.fuel}</span>
                <span><strong>Trans:</strong> ${v.trans}</span>
              </div>

              <!-- Itemized Price Transparency Breakdown -->
              <div style="background:rgba(255,255,255,0.7); border:1px solid var(--border); border-radius:8px; padding:8px 12px; font-size:12px; margin-top:8px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:3px;">
                  <span style="color:var(--text-muted)">Ex-Showroom Price:</span>
                  <span>${formatINR(quote.exShowroom)}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:3px;">
                  <span style="color:var(--text-muted)">State RTO & Road Tax:</span>
                  <span>${formatINR(quote.rto)}</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:3px;">
                  <span style="color:var(--text-muted)">Zero-Dep Insurance (Fair Est.):</span>
                  <span>${formatINR(quote.insurance)}</span>
                </div>
                ${quote.tcs > 0 ? `
                <div style="display:flex; justify-content:space-between; margin-bottom:3px;">
                  <span style="color:var(--text-muted)">1% TCS Tax:</span>
                  <span>${formatINR(quote.tcs)}</span>
                </div>` : ''}
                <div style="display:flex; justify-content:space-between; margin-top:4px; padding-top:4px; border-top:1px dashed #CBD5E1; font-weight:800; color:var(--primary);">
                  <span>Total On-Road (${city.name}):</span>
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
              <!-- Top Left Badge -->
              <div class="spin360-badge" id="spin360Badge">
                <span>🔄</span>
                <span id="spin360BadgeText">Drag / Swipe to Spin 360°</span>
              </div>

              <!-- Top Right Floating Return Button (Visible in 2D Shade mode) -->
              <button type="button" id="btnReturnToSpin" class="spin-return-pill" onclick="window.returnTo360Spin()" style="display:none;" title="Switch back to 360° Turntable">
                🔄 360° Spin Studio
              </button>

              <!-- 360 Turntable Canvas -->
              <canvas id="spin360Canvas" width="1056" height="594" class="spin360-canvas"></canvas>

              <!-- 2D High-Res Official Shade (Seamlessly integrated inside same frame) -->
              <div id="spinColorStage" class="spin2d-stage" style="display:none;">
                <img id="spinColorDisplayImg" src="" alt="${car.name}" class="spin2d-img">
              </div>

              <!-- Bottom 360 Controls Bar -->
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

              <!-- Bottom 2D Shade Controls Bar -->
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
            <!-- Multi-Angle / Color Fallback for Cars without 360 spin -->
            ${angles.length > 0 ? `
              <!-- 360° / Multi-Angle Selector Toolbar -->
              <div style="margin-bottom:16px;">
                <div style="font-size:11px; font-weight:800; letter-spacing:0.5px; text-transform:uppercase; color:var(--text-muted); margin-bottom:8px;">
                  🔄 360° Multi-Angle Studio View
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
          </tr>
          ` : ''}
          ${specs.transmissions ? `
          <tr>
            <td class="spec-col-label">Transmissions</td>
            <td class="spec-col-val">${specs.transmissions}</td>
          </tr>
          ` : ''}
          ${specs.dimensions ? `
          <tr>
            <td class="spec-col-label">Dimensions (L × W × H)</td>
            <td class="spec-col-val">${specs.dimensions}</td>
          </tr>
          ` : ''}
          ${specs.wheelbase ? `
          <tr>
            <td class="spec-col-label">Wheelbase</td>
            <td class="spec-col-val">${specs.wheelbase}</td>
          </tr>
          ` : ''}
          ${specs.fuelTank ? `
          <tr>
            <td class="spec-col-label">Fuel Tank Capacity</td>
            <td class="spec-col-val">${specs.fuelTank}</td>
          </tr>
          ` : ''}
          ${specs.seatingCapacity ? `
          <tr>
            <td class="spec-col-label">Seating Capacity</td>
            <td class="spec-col-val">${specs.seatingCapacity}</td>
          </tr>
          ` : ''}
        </tbody>
      </table>
    </div>
  `;

  carDetailModal.classList.add('active');
};
