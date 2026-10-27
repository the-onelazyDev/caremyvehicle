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
  checkDeepLink();
});

// Helper to retrieve both built-in dataset and locally added custom cars
function getAllCars() {
  try {
    const custom = JSON.parse(localStorage.getItem('cmv_custom_cars') || '[]');
    const customIds = new Set(custom.map(c => c.id));
    const base = CARS.filter(c => !customIds.has(c.id));
    return [...custom, ...base];
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

// Render Car Cards based on active filter
function renderCars() {
  const allCars = getAllCars();
  const filteredCars = allCars.filter(car => {
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

// Setup Event Listeners
function setupEventListeners() {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      renderCars();
    });
  });

  citySelectorBtn.addEventListener('click', () => {
    cityModal.classList.add('active');
  });

  window.closeModal = function(modalId) {
    document.getElementById(modalId).classList.remove('active');
    if (modalId === 'carDetailModal') {
      if (spinState.autoSpinInterval) {
        clearInterval(spinState.autoSpinInterval);
        spinState.autoSpinInterval = null;
      }
      currentModalCar = null;
      history.pushState(null, '', window.location.pathname);
    }
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
