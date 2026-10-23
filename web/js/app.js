import { CARS, CITIES, calculateOnRoadPrice, formatINR, formatLakh } from './carData.js';

// Application State
let activeFilter = 'all';
let selectedCityId = 'delhi';
let currentModalCar = null;

// DOM Elements
const carsContainer = document.getElementById('carsContainer');
const filterButtons = document.querySelectorAll('.filter-btn');
const citySelectorBtn = document.getElementById('citySelectorBtn');
const cityNameDisplay = document.getElementById('cityNameDisplay');
const cityModal = document.getElementById('cityModal');
const carDetailModal = document.getElementById('carDetailModal');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  renderCars();
  setupEventListeners();
});

// Render Car Cards based on active filter
function renderCars() {
  const filteredCars = CARS.filter(car => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'suv') return car.bodyType.toLowerCase().includes('suv');
    if (activeFilter === 'ev') return car.fuelTypes.includes('EV');
    if (activeFilter === 'under-10l') return car.minPrice < 1000000;
    if (activeFilter === '10-15l') return car.minPrice >= 1000000 && car.minPrice <= 1500000;
    if (activeFilter === 'above-15l') return car.minPrice > 1500000;
    return true;
  });

  carsContainer.innerHTML = filteredCars.map(car => {
    const onRoadEstimate = calculateOnRoadPrice(car.minPrice, selectedCityId);
    
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

          <div class="card-price-block">
            <div>
              <div class="price-sub">Est. On-Road (${onRoadEstimate.cityName})</div>
              <div class="price-main">${formatLakh(onRoadEstimate.total)} <span style="font-size:12px; font-weight:600; color:var(--text-muted)">onwards</span></div>
            </div>
            <button class="btn-view-variants" onclick="window.openCarModal('${car.id}')">
              Variants (${car.variants.length}) ➔
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Setup Event Listeners
function setupEventListeners() {
  // Filter Tabs
  filterButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderCars();
    });
  });

  // City Selector
  citySelectorBtn.addEventListener('click', () => {
    cityModal.classList.add('active');
  });

  // Close modals on overlay click
  window.closeModal = function(modalId) {
    document.getElementById(modalId).classList.remove('active');
  };
}

// City Selection Handler
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

// Open Car Detail Modal Drawer
window.openCarModal = function(carId) {
  const car = CARS.find(c => c.id === carId);
  if (!car) return;
  currentModalCar = car;

  const modalBody = document.getElementById('carModalContent');
  const city = CITIES.find(c => c.id === selectedCityId);

  modalBody.innerHTML = `
    <div class="modal-header">
      <div>
        <span class="card-brand">${car.brand} • ${car.bodyType}</span>
        <h2 style="font-size:24px; font-weight:900; letter-spacing:-0.5px; margin-top:2px;">${car.name}</h2>
        <p style="font-size:13px; color:var(--text-secondary); margin-top:4px;">${car.summary}</p>
      </div>
      <button class="modal-close-btn" onclick="closeModal('carDetailModal')">&times;</button>
    </div>

    <!-- City Pricing Selector inside modal -->
    <div style="background:#F1F5F9; border-radius:12px; padding:12px 16px; margin-bottom:20px; display:flex; align-items:center; justify-content:space-between;">
      <span style="font-size:13px; font-weight:700; color:var(--text-secondary)">Pricing for City:</span>
      <select onchange="window.selectCity(this.value)" style="padding:6px 12px; border-radius:8px; border:1px solid #CBD5E1; font-weight:700; background:#FFF;">
        ${CITIES.map(c => `<option value="${c.id}" ${c.id === selectedCityId ? 'selected' : ''}>${c.name}</option>`).join('')}
      </select>
    </div>

    <h4 style="font-size:15px; font-weight:800; text-transform:uppercase; letter-spacing:0.8px; margin-bottom:12px; color:var(--text-muted);">
      All ${car.variants.length} Variants & On-Road Price Breakdown
    </h4>

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
              ${v.keyFeatures.map(f => `<span class="feat-tag">✓ ${f}</span>`).join('')}
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  carDetailModal.classList.add('active');
};
