import { CARS, CITIES, calculateOnRoadPrice, formatLakh } from './carData.js';

let currentPage = 1;
const PAGE_SIZE = 20;
let currentCityId = 'delhi';

// Restore city
try {
  const saved = localStorage.getItem('cmv_user_city');
  if (saved && CITIES.some(c => c.id === saved)) {
    currentCityId = saved;
  }
} catch(e) {}

const filters = {
  category: 'all',
  budget: 'all',
  fuel: 'all',
  brand: 'all',
  search: '',
  sort: 'newest'
};

// Parse URL params
function parseUrlParams() {
  const params = new URLSearchParams(window.location.search);
  if (params.get('category')) filters.category = params.get('category');
  if (params.get('budget')) filters.budget = params.get('budget');
  if (params.get('fuel')) filters.fuel = params.get('fuel');
  if (params.get('brand')) filters.brand = params.get('brand');
  if (params.get('search')) filters.search = params.get('search');
  if (params.get('sort')) filters.sort = params.get('sort');
  if (params.get('page')) currentPage = parseInt(params.get('page'), 10) || 1;

  // Sync inputs
  const sInput = document.getElementById('catalogSearchInput');
  if (sInput && filters.search) sInput.value = filters.search;
  
  const bSelect = document.getElementById('brandFilterSelect');
  if (bSelect && filters.brand !== 'all') bSelect.value = filters.brand;

  const pSelect = document.getElementById('budgetFilterSelect');
  if (pSelect && filters.budget !== 'all') pSelect.value = filters.budget;

  const fSelect = document.getElementById('fuelFilterSelect');
  if (fSelect && filters.fuel !== 'all') fSelect.value = filters.fuel;

  const sortSelect = document.getElementById('sortFilterSelect');
  if (sortSelect && filters.sort !== 'newest') sortSelect.value = filters.sort;

  // Sync pills
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === filters.category);
  });
}

function getFilteredCars() {
  return CARS.filter(car => {
    // Category / Body Type
    if (filters.category !== 'all') {
      const cat = filters.category.toLowerCase();
      const body = (car.bodyType || '').toLowerCase();
      if (cat === 'suv' && !body.includes('suv')) return false;
      if (cat === 'sub-compact-suv' && (!body.includes('suv') || car.minPrice >= 1500000)) return false;
      if (cat === 'sedan' && !body.includes('sedan')) return false;
      if (cat === 'hatchback' && !body.includes('hatchback')) return false;
      if (cat === 'mpv' && !body.includes('mpv') && !body.includes('muv') && !(car.specs?.seatingCapacity && car.specs.seatingCapacity.includes('7'))) return false;
      if (cat === 'ev' && !car.fuelTypes.includes('EV')) return false;
      if (cat === 'luxury' && car.minPrice < 2500000) return false;
      if (cat === 'upcoming' && !(car.launchDate.includes('2025') || car.launchDate.includes('2026') || car.launchDate.includes('Upcoming'))) return false;
      if (cat === 'recommended' && !['tata-curvv', 'hyundai-creta', 'skoda-kylaq', 'mahindra-thar-roxx', 'tata-punch', 'nissan-magnite', 'maruti-brezza', 'mg-windsor-ev'].includes(car.id)) return false;
    }

    // Budget Filter
    if (filters.budget !== 'all') {
      const b = filters.budget;
      if (b === 'under-5l' && car.minPrice >= 500000) return false;
      if (b === 'under-10l' && car.minPrice >= 1000000) return false;
      if (b === 'under-15l' && car.minPrice >= 1500000) return false;
      if (b === 'above-10l' && car.minPrice < 1000000) return false;
      if (b === '10-20l' && (car.minPrice < 1000000 || car.minPrice > 2000000)) return false;
      if (b === '20-30l' && (car.minPrice < 2000000 || car.minPrice > 3000000)) return false;
      if (b === 'above-25l' && car.minPrice < 2500000) return false;
      if (b === 'luxury' && car.minPrice < 2500000) return false;
    }

    // Fuel Filter
    if (filters.fuel !== 'all') {
      const f = filters.fuel.toLowerCase();
      if (f === 'ev' && !car.fuelTypes.includes('EV')) return false;
      if (f === 'petrol' && !car.fuelTypes.includes('Petrol')) return false;
      if (f === 'diesel' && !car.fuelTypes.includes('Diesel')) return false;
      if (f === 'cng' && !car.fuelTypes.includes('CNG')) return false;
      if (f === 'hybrid' && !car.fuelTypes.includes('Hybrid') && !(car.tagline && car.tagline.toLowerCase().includes('hybrid'))) return false;
    }

    // Brand Filter
    if (filters.brand !== 'all') {
      const bKey = (car.brand || '').replace(/\s*\(Nexa\)\s*$/i, '').trim().toLowerCase();
      if (bKey !== filters.brand.toLowerCase()) return false;
    }

    // Search Query
    if (filters.search) {
      const q = filters.search.toLowerCase().trim();
      const matchName = car.name.toLowerCase().includes(q);
      const matchBrand = car.brand.toLowerCase().includes(q);
      const matchTag = (car.tagline || '').toLowerCase().includes(q);
      const matchFuel = (car.fuelTypes || []).some(f => f.toLowerCase().includes(q));
      if (!matchName && !matchBrand && !matchTag && !matchFuel) return false;
    }

    return true;
  }).sort((a, b) => {
    if (filters.sort === 'price-asc') return a.minPrice - b.minPrice;
    if (filters.sort === 'price-desc') return b.minPrice - a.minPrice;
    if (filters.sort === 'name-asc') return a.name.localeCompare(b.name);
    return 0; // Default order
  });
}

function updateUrlParams() {
  const params = new URLSearchParams();
  if (filters.category !== 'all') params.set('category', filters.category);
  if (filters.budget !== 'all') params.set('budget', filters.budget);
  if (filters.fuel !== 'all') params.set('fuel', filters.fuel);
  if (filters.brand !== 'all') params.set('brand', filters.brand);
  if (filters.search) params.set('search', filters.search);
  if (filters.sort !== 'newest') params.set('sort', filters.sort);
  if (currentPage > 1) params.set('page', currentPage);

  const newUrl = `${window.location.pathname}?${params.toString()}`;
  window.history.replaceState({}, '', newUrl);
}

function renderCatalog() {
  const filtered = getFilteredCars();
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / PAGE_SIZE) || 1;

  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = Math.min(startIndex + PAGE_SIZE, totalItems);
  const pagedCars = filtered.slice(startIndex, endIndex);

  // Update header text
  const countEl = document.getElementById('catalogResultsCount');
  if (countEl) {
    if (totalItems === 0) {
      countEl.innerHTML = `No cars found matching your criteria`;
    } else {
      countEl.innerHTML = `Showing <strong>${startIndex + 1}–${endIndex}</strong> of <strong>${totalItems}</strong> car models (Page ${currentPage} of ${totalPages})`;
    }
  }

  const container = document.getElementById('catalogGridContainer');
  if (!container) return;

  if (pagedCars.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; background: #FFFFFF; border-radius: 20px; border: 1.5px dashed var(--border); margin: 20px 0;">
        <div style="font-size: 48px; margin-bottom: 12px;">🚗</div>
        <h3 style="font-size: 20px; font-weight: 800; color: #0F172A; margin-bottom: 6px;">No Cars Match Your Filters</h3>
        <p style="font-size: 13.5px; color: #64748B; max-width: 440px; margin: 0 auto 16px;">
          Try adjusting your price range, fuel type, or clear some filters to see available car models.
        </p>
        <button class="btn-orange-pill" onclick="window.clearAllCatalogFilters()">✕ Clear All Filters</button>
      </div>
    `;
    renderPagination(0, 1);
    return;
  }

  container.innerHTML = pagedCars.map(car => {
    const onRoad = calculateOnRoadPrice(car.minPrice, currentCityId);
    return `
      <article class="car-card" onclick="window.location.href='/cars/${car.id}.html'" style="cursor:pointer;" title="${car.name}">
        <div class="card-media">
          <div class="card-badge-row">
            <span class="card-badge badge-launch">⚡ ${car.launchDate}</span>
            <span class="card-badge badge-safety">⭐ ${car.safetyRating}</span>
          </div>
          <img src="${car.heroImage}" alt="${car.name}" class="card-img" loading="lazy">
        </div>
        <div class="card-body">
          <span class="card-brand">${car.brand} • ${car.bodyType}</span>
          <h3 class="card-title"><a href="/cars/${car.id}.html" class="car-seo-title-link">${car.name}</a></h3>
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
          <div class="card-price-block">
            <div class="price-sub">Est. On-Road (${onRoad.cityName})</div>
            <div class="price-main">${formatLakh(onRoad.total)} <span style="font-size:12px; font-weight:600; color:var(--text-muted)">onwards</span></div>
            <div style="font-size:11px; color:var(--text-muted); font-weight:600; margin-top:2px;">Ex-Showroom: ${car.priceRange}</div>
          </div>
          <div class="card-actions-carwale">
            <a href="/cars/${car.id}.html" class="btn-price-breakup" style="display:inline-block; text-align:center;">
              View Variants & Price &rsaquo;
            </a>
          </div>
        </div>
      </article>
    `;
  }).join('');

  renderPagination(totalPages, currentPage);
  updateUrlParams();
}

function renderPagination(totalPages, curPage) {
  const container = document.getElementById('catalogPaginationContainer');
  if (!container) return;

  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  let html = '';

  // Prev Button
  html += `
    <button class="pg-btn pg-nav ${curPage === 1 ? 'disabled' : ''}" onclick="window.goToPage(${curPage - 1})" ${curPage === 1 ? 'disabled' : ''}>
      &lsaquo; Prev
    </button>
  `;

  // Page Numbers
  for (let i = 1; i <= totalPages; i++) {
    html += `
      <button class="pg-btn ${i === curPage ? 'active' : ''}" onclick="window.goToPage(${i})">
        ${i}
      </button>
    `;
  }

  // Next Button
  html += `
    <button class="pg-btn pg-nav ${curPage === totalPages ? 'disabled' : ''}" onclick="window.goToPage(${curPage + 1})" ${curPage === totalPages ? 'disabled' : ''}>
      Next &rsaquo;
    </button>
  `;

  container.innerHTML = html;
}

window.goToPage = function(pageNum) {
  currentPage = pageNum;
  renderCatalog();
  const topEl = document.getElementById('catalogTopAnchor');
  if (topEl) {
    topEl.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

window.setCategory = function(cat) {
  filters.category = cat;
  currentPage = 1;
  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === cat);
  });
  renderCatalog();
};

window.setBudget = function(b) {
  filters.budget = b;
  currentPage = 1;
  renderCatalog();
};

window.setFuel = function(f) {
  filters.fuel = f;
  currentPage = 1;
  renderCatalog();
};

window.setBrand = function(br) {
  filters.brand = br;
  currentPage = 1;
  renderCatalog();
};

window.setSort = function(s) {
  filters.sort = s;
  currentPage = 1;
  renderCatalog();
};

window.handleSearch = function(q) {
  filters.search = q;
  currentPage = 1;
  renderCatalog();
};

window.clearAllCatalogFilters = function() {
  filters.category = 'all';
  filters.budget = 'all';
  filters.fuel = 'all';
  filters.brand = 'all';
  filters.search = '';
  filters.sort = 'newest';
  currentPage = 1;

  const sInput = document.getElementById('catalogSearchInput');
  if (sInput) sInput.value = '';

  const bSelect = document.getElementById('brandFilterSelect');
  if (bSelect) bSelect.value = 'all';

  const pSelect = document.getElementById('budgetFilterSelect');
  if (pSelect) pSelect.value = 'all';

  const fSelect = document.getElementById('fuelFilterSelect');
  if (fSelect) fSelect.value = 'all';

  const sortSelect = document.getElementById('sortFilterSelect');
  if (sortSelect) sortSelect.value = 'newest';

  document.querySelectorAll('.cat-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === 'all');
  });

  renderCatalog();
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  parseUrlParams();
  
  // Populate brands dropdown
  const brandSelect = document.getElementById('brandFilterSelect');
  if (brandSelect) {
    const brands = [...new Set(CARS.map(c => (c.brand || '').replace(/\s*\(Nexa\)\s*$/i, '').trim()))].sort();
    brands.forEach(b => {
      const opt = document.createElement('option');
      opt.value = b.toLowerCase();
      opt.textContent = b;
      if (filters.brand.toLowerCase() === b.toLowerCase()) opt.selected = true;
      brandSelect.appendChild(opt);
    });
  }

  // City display sync
  const city = CITIES.find(c => c.id === currentCityId);
  const cityLabel = document.getElementById('catalogCityLabel');
  if (cityLabel && city) cityLabel.textContent = city.name;
  const cityDisplay = document.getElementById('cityNameDisplay');
  if (cityDisplay && city) cityDisplay.textContent = city.name;

  if (filters.fuel === 'ev' || filters.category === 'ev') {
    const navItems = document.querySelectorAll('#mainNavTabs .nav-tab-item');
    navItems.forEach(i => i.classList.remove('active'));
    const evTab = document.querySelector('#mainNavTabs [data-nav="ev"]');
    if (evTab) evTab.classList.add('active');
  }

  renderCatalog();
});

window.filterCatalogByFuel = function(fuelKey, e) {
  if (e && e.preventDefault) e.preventDefault();
  const navItems = document.querySelectorAll('#mainNavTabs .nav-tab-item');
  navItems.forEach(i => i.classList.remove('active'));
  const evTab = document.querySelector('#mainNavTabs [data-nav="ev"]');
  if (evTab) evTab.classList.add('active');
  window.setCategory('ev');
  const fuelSel = document.getElementById('fuelFilterSelect');
  if (fuelSel) {
    fuelSel.value = 'ev';
    window.setFuel('ev');
  }
};



// City Modal & Filter Handlers for catalog.js
window.openCityModal = function() {
  const modal = document.getElementById('cityModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderCatalogCityModalList();
    const input = document.getElementById('citySearchInput');
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 120);
    }
  }
};

window.closeModal = function(modalId) {
  if (modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  } else {
    document.querySelectorAll('.modal-overlay.active, .modal.active').forEach(m => m.classList.remove('active'));
  }
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
};

window.filterCitiesList = function(val) {
  renderCatalogCityModalList(val);
};

function renderCatalogCityModalList(filterText = '') {
  const container = document.getElementById('citiesListContainer');
  if (!container) return;
  const q = (filterText || '').toLowerCase().trim();
  const matched = CITIES.filter(c => c.name.toLowerCase().includes(q) || c.id.includes(q));

  if (matched.length === 0) {
    container.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:20px; color:#64748B; font-size:13px;">No city found</div>';
    return;
  }

  container.innerHTML = matched.map(c => {
    const isSel = c.id === currentCityId;
    const rtoPct = Math.round(c.rtoRate * 100);
    return '<button type="button" class="city-select-card ' + (isSel ? 'active' : '') + '" onclick="window.selectCity(\'' + c.id + '\')">' +
      '<div class="city-name-text">' + c.name + (isSel ? ' ✓' : '') + '</div>' +
      '<div class="city-rto-tag">' + rtoPct + '% State RTO + Cess</div>' +
    '</button>';
  }).join('');
}

window.selectCity = function(cityId) {
  currentCityId = cityId;
  try {
    localStorage.setItem('cmv_user_city', cityId);
  } catch(e) {}
  const city = CITIES.find(c => c.id === cityId);
  const cityDisplay = document.getElementById('cityNameDisplay');
  if (cityDisplay && city) cityDisplay.textContent = city.name;
  const catLabel = document.getElementById('catalogCityLabel');
  if (catLabel && city) catLabel.textContent = city.name;
  window.closeModal('cityModal');
  renderCatalog();
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

window.subscribeUsedCars = function() {
  const input = document.getElementById('usedCarModalEmail');
  const email = (input ? input.value : '').trim();
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email address.');
    return;
  }
  alert('🎉 You are on the VIP Early Access list for Used Cars!');
  if (input) input.value = '';
  window.closeModal('usedCarsModal');
};

/* Global Backdrop & Escape Key Handlers */
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
