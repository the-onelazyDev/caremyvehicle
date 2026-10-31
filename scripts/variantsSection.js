// CarWale-style "Variants" section (grouped by trim, expandable, filterable).
import { calculateOnRoadPrice } from '../js/carData.js';

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function fmtPrice(v) {
  if (v >= 10000000) return '₹ ' + (v / 10000000).toFixed(2) + ' Cr';
  return '₹ ' + (v / 100000).toFixed(2) + ' Lakh';
}
function fmtRange(min, max) {
  if (min === max) return fmtPrice(min);
  if (max < 10000000) return '₹ ' + (min / 100000).toFixed(2) + ' - ' + (max / 100000).toFixed(2) + ' Lakh';
  return fmtPrice(min) + ' - ' + fmtPrice(max);
}

// "Smart+ 1.2 Petrol 5MT" -> "Smart+", "Creative+ S 1.2 Turbo DCA" -> "Creative+ S"
const STOP = /^(\(.*|\d+(\.\d+)?l?|petrol|diesel|cng|s-cng|ev|hybrid|turbo|mt|at|amt|dct|dca|ags|cvt|imt|ivt|e-cvt|automatic|manual|\d+(mt|at|amt|dct|dca|cvt|imt)|\d+-?speed|dual|strong|mild|tsi|tdi|crdi|gdi|awd|4x4|2wd|4wd|\d+\s?kwh|e20|flex|plug-in|phev|bev)$/i;
function trimName(name) {
  const tokens = String(name).trim().split(/\s+/);
  let i = 0;
  while (i < tokens.length && !STOP.test(tokens[i])) i++;
  if (i === 0) return String(name).trim();
  return tokens.slice(0, i).join(' ');
}

function transClass(t) {
  return /manual|^mt$|imt/i.test(t || '') ? 'Manual' : 'Automatic';
}

function specLine(v) {
  const eng = v.engine || '';
  const bits = [];
  const ps = eng.match(/(\d+(?:\.\d+)?)\s*(?:PS|bhp|hp)\b/i);
  const nm = eng.match(/(\d+(?:\.\d+)?)\s*Nm/i);
  if (ps) bits.push(ps[1] + ' PS');
  if (nm) bits.push(nm[1] + ' Nm');
  if (v.mileage) bits.push(v.mileage);
  return bits;
}

function variantTitle(v) {
  const disp = (v.engine || '').match(/(\d\.\d)\s*L/i);
  const fuel = v.fuel === 'EV' ? 'Electric' : (v.fuel || '');
  return [fuel + (disp ? ' ' + disp[1] + 'L' : ''), v.trans || ''].filter(Boolean).join(' | ');
}

export function buildVariantsSection(car, variants) {
  if (!variants || !variants.length) return '';

  // Group by trim (keeping price order)
  const map = new Map();
  [...variants].sort((a, b) => a.exShowroom - b.exShowroom).forEach(v => {
    const key = trimName(v.name);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(v);
  });
  const trims = [...map.entries()]
    .map(([name, vs]) => ({ name, vs, min: Math.min(...vs.map(x => x.exShowroom)), max: Math.max(...vs.map(x => x.exShowroom)) }))
    .sort((a, b) => a.min - b.min);

  const allMin = Math.min(...variants.map(v => v.exShowroom));
  const allMax = Math.max(...variants.map(v => v.exShowroom));
  const fuels = [...new Set(variants.map(v => v.fuel).filter(Boolean))];
  const transList = [...new Set(variants.map(v => transClass(v.trans)))];

  const chip = (kind, val, label) =>
    `<button type="button" class="vr-chip" data-kind="${kind}" data-val="${esc(val)}" onclick="vrFilter(this)">${esc(label)}</button>`;
  const chipsHtml = (fuels.length > 1 || transList.length > 1) ? `
      <div class="vr-filter-label"><span class="vr-filter-ico">&#9881;</span> Filter by Fuel type &amp; Transmission</div>
      <div class="vr-chips">
        ${fuels.length > 1 ? `<div class="vr-chip-group">${fuels.map(f => chip('fuel', f, f === 'EV' ? 'Electric' : f)).join('')}</div>` : ''}
        ${transList.length > 1 ? `<div class="vr-chip-group">${transList.map(t => chip('trans', t, t)).join('')}</div>` : ''}
      </div>` : '';

  let prevFeatures = [];
  let prevName = '';
  const trimsHtml = trims.map((t, idx) => {
    const feats = [];
    t.vs.forEach(v => (v.keyFeatures || []).forEach(f => { if (!feats.includes(f)) feats.push(f); }));
    const prevSet = new Set(prevFeatures.map(f => f.toLowerCase()));
    let diff = feats.filter(f => !prevSet.has(f.toLowerCase()));
    if (!diff.length) diff = feats;
    const label = idx === 0 ? 'Key Features:' : `Features over ${esc(prevName)}:`;
    prevFeatures = feats;
    prevName = t.name;

    const rows = t.vs.map(v => {
      const bits = specLine(v);
      return `
          <div class="vr-var" data-fuel="${esc(v.fuel || '')}" data-trans="${transClass(v.trans)}" data-price="${v.exShowroom}">
            <div class="vr-var-left">
              <div class="vr-var-title">${esc(variantTitle(v))}${v.isVFM ? ' <span class="vr-vfm">&#11088; Best VFM</span>' : ''}</div>
              <div class="vr-var-name">${esc(v.name)}</div>
              ${bits.length ? `<div class="vr-var-specs">${bits.map(b => `<span>&bull; ${esc(b)}</span>`).join('')}</div>` : ''}
            </div>
            <div class="vr-var-right">
              <div class="vr-var-price">${fmtPrice(v.exShowroom)}</div>
              <a href="#" class="vr-link" onclick="window.openCityModal && window.openCityModal(); return false;">On-Road: <span class="vr-onroad-val">${fmtPrice(calculateOnRoadPrice(v.exShowroom, 'delhi').total)}</span></a>
            </div>
          </div>`;
    }).join('');

    const n = t.vs.length;
    return `
        <div class="vr-trim${idx === 0 ? ' open' : ''}">
          <div class="vr-trim-top">
            <span class="vr-trim-name">${esc(car.name.replace(/\s*\(.*?\)/g, ''))} ${esc(t.name)}</span>
            <span class="vr-trim-price">${fmtRange(t.min, t.max)}</span>
          </div>
          <div class="vr-trim-mid">
            <label class="vr-compare"><input type="checkbox" onchange="vrCompare()"> <span>Compare</span></label>
            <a href="#" class="vr-link vr-offers" onclick="window.openCityModal && window.openCityModal(); return false;">Get On-Road Price</a>
          </div>
          <p class="vr-feat"><strong>${label}</strong> ${diff.slice(0, 8).map(esc).join('<i class="vr-sep">|</i>')}</p>
          <button type="button" class="vr-toggle" onclick="vrToggleTrim(this)">
            <span class="vr-toggle-label">${idx === 0 ? 'Collapse' : `View ${n} ${n === 1 ? 'Variant' : 'Variants'}`}</span>
            <span class="vr-toggle-ico"></span>
          </button>
          <div class="vr-variants">${rows}
          </div>
        </div>`;
  }).join('');

  return `
    <section id="sec-variants" class="detail-section-card vr-section">
      <h2 class="section-heading-seo">📋 ${esc(car.name)} Variants</h2>
      <p class="vr-intro" id="vrIntro">${esc(car.name)} price for the base model starts at ${esc(fmtPrice(allMin).replace('₹ ', 'Rs. '))} and the top model price goes up to ${esc(fmtPrice(allMax).replace('₹ ', 'Rs. '))} (ex-showroom). ${esc(car.name)} price for ${variants.length} variants is listed below.</p>
      ${chipsHtml}
      <div class="vr-card">
        <div class="vr-head"><span>Variants</span><span>Ex-Showroom Price</span></div>
        ${trimsHtml}
        <div class="vr-empty" id="vrEmpty" style="display:none;">No variants match the selected filters.</div>
        <div class="vr-foot">Showing ex-showroom prices. Est. on-road price shown for <strong class="vr-city-name">Delhi NCR</strong> &mdash; <a href="#" class="vr-link" onclick="window.openCityModal && window.openCityModal(); return false;">change city</a></div>
      </div>
      <a href="/#compareSection" class="vr-compare-bar" id="vrCompareBar">&#9878;&#65039; <span id="vrCmpN">0</span> selected &mdash; Compare Now &rarr;</a>
    </section>`;
}

export const VARIANTS_CLIENT_JS = `
    // ---- Variants section (CarWale style) ----
    var VR_STATE = { fuel: [], trans: [] };
    function vrFmt(v) {
      if (v >= 10000000) return '₹ ' + (v / 10000000).toFixed(2) + ' Cr';
      return '₹ ' + (v / 100000).toFixed(2) + ' Lakh';
    }
    function vrRange(a, b) {
      if (a === b) return vrFmt(a);
      if (b < 10000000) return '₹ ' + (a / 100000).toFixed(2) + ' - ' + (b / 100000).toFixed(2) + ' Lakh';
      return vrFmt(a) + ' - ' + vrFmt(b);
    }
    function vrOnRoad(ex, city) {
      var rto = Math.round(ex * city.rtoRate);
      var ins = Math.round(ex * 0.038);
      var tcs = ex >= 1000000 ? Math.round(ex * 0.01) : 0;
      return ex + rto + ins + tcs + (city.cess || 0) + (city.fastag || 0);
    }
    window.updateVariantOnRoad = function(city) {
      document.querySelectorAll('.vr-var').forEach(function(r) {
        var el = r.querySelector('.vr-onroad-val');
        if (el) el.textContent = vrFmt(vrOnRoad(Number(r.getAttribute('data-price')), city));
      });
      document.querySelectorAll('.vr-city-name').forEach(function(el) { el.textContent = city.name; });
    };
    function vrSync(t) {
      var n = t.querySelectorAll('.vr-var:not(.vr-hidden)').length;
      var lbl = t.querySelector('.vr-toggle-label');
      if (lbl) lbl.textContent = t.classList.contains('open') ? 'Collapse' : ('View ' + n + (n === 1 ? ' Variant' : ' Variants'));
    }
    window.vrToggleTrim = function(btn) {
      var t = btn.closest('.vr-trim');
      t.classList.toggle('open');
      vrSync(t);
    };
    window.vrFilter = function(btn) {
      var kind = btn.getAttribute('data-kind');
      var val = btn.getAttribute('data-val');
      var arr = VR_STATE[kind];
      var i = arr.indexOf(val);
      if (i > -1) arr.splice(i, 1); else arr.push(val);
      btn.classList.toggle('active', i === -1);
      var anyShown = false;
      document.querySelectorAll('.vr-trim').forEach(function(t) {
        var shown = 0, min = Infinity, max = 0;
        t.querySelectorAll('.vr-var').forEach(function(r) {
          var f = r.getAttribute('data-fuel'), tr = r.getAttribute('data-trans');
          var ok = (!VR_STATE.fuel.length || VR_STATE.fuel.indexOf(f) > -1) && (!VR_STATE.trans.length || VR_STATE.trans.indexOf(tr) > -1);
          r.classList.toggle('vr-hidden', !ok);
          if (ok) { shown++; var p = Number(r.getAttribute('data-price')); if (p < min) min = p; if (p > max) max = p; }
        });
        t.style.display = shown ? '' : 'none';
        if (shown) {
          anyShown = true;
          t.querySelector('.vr-trim-price').textContent = vrRange(min, max);
          vrSync(t);
        }
      });
      var empty = document.getElementById('vrEmpty');
      if (empty) empty.style.display = anyShown ? 'none' : 'block';
    };
    window.vrCompare = function() {
      var n = document.querySelectorAll('.vr-compare input:checked').length;
      var bar = document.getElementById('vrCompareBar');
      var c = document.getElementById('vrCmpN');
      if (c) c.textContent = n;
      if (bar) bar.classList.toggle('show', n > 0);
    };
`;

export const VARIANTS_CSS = `
    /* ===== CarWale-style Variants ===== */
    .vr-intro { font-size: 14px; color: var(--text-secondary); line-height: 1.55; margin: -4px 0 14px; }
    .vr-filter-label { font-size: 13px; color: var(--text-muted); font-weight: 600; margin-bottom: 8px; display: flex; align-items: center; gap: 6px; }
    .vr-filter-ico { font-size: 14px; }
    .vr-chips { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 16px; }
    .vr-chip-group { display: flex; gap: 8px; flex-wrap: wrap; padding-right: 10px; margin-right: 2px; border-right: 1px solid #E2E8F0; }
    .vr-chip-group:last-child { border-right: 0; }
    .vr-chip { background: #FFFFFF; border: 1px solid #94A3B8; color: #1E293B; border-radius: 8px; padding: 7px 16px; font-size: 13px; font-weight: 600; cursor: pointer; font-family: inherit; transition: all .15s; }
    .vr-chip:hover { border-color: #0284C7; color: #0284C7; }
    .vr-chip.active { background: #0F172A; border-color: #0F172A; color: #FFFFFF; }
    .vr-card { background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 14px; padding: 4px 18px 10px; }
    .vr-head { display: flex; justify-content: space-between; font-size: 13px; font-weight: 800; color: #0F172A; padding: 14px 0 12px; border-bottom: 1px solid #E2E8F0; }
    .vr-trim { padding: 14px 0 6px; border-bottom: 1px solid #EEF2F6; }
    .vr-trim:last-of-type { border-bottom: 0; }
    .vr-trim-top { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
    .vr-trim-name { color: #1B76B8; font-size: 16px; font-weight: 700; line-height: 1.3; }
    .vr-trim-price { font-size: 15px; font-weight: 800; color: #0F172A; white-space: nowrap; }
    .vr-trim-mid { display: flex; align-items: center; gap: 22px; margin: 8px 0 8px; font-size: 13px; }
    .vr-compare { display: inline-flex; align-items: center; gap: 7px; color: #1E293B; cursor: pointer; font-weight: 500; }
    .vr-compare input { width: 16px; height: 16px; accent-color: #0F172A; margin: 0; cursor: pointer; }
    .vr-link { color: #1B76B8; text-decoration: none; font-weight: 600; font-size: 13px; }
    .vr-link:hover { text-decoration: underline; }
    .vr-feat { font-size: 13px; color: #475569; line-height: 1.55; margin: 0 0 6px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .vr-feat strong { color: #0F172A; font-weight: 800; }
    .vr-sep { font-style: normal; color: #CBD5E1; margin: 0 7px; }
    .vr-trim.open .vr-feat { -webkit-line-clamp: unset; display: block; overflow: visible; }
    .vr-toggle { display: flex; align-items: center; justify-content: flex-end; gap: 6px; width: 100%; background: none; border: 0; padding: 4px 0 8px; font-size: 12.5px; font-weight: 600; color: #475569; cursor: pointer; font-family: inherit; }
    .vr-toggle-ico { display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border: 1.5px solid #475569; border-radius: 50%; box-sizing: border-box; }
    .vr-toggle-ico::after { content: ''; width: 5px; height: 5px; border-right: 1.5px solid #475569; border-bottom: 1.5px solid #475569; transform: translateY(-1px) rotate(45deg); transition: transform .2s; }
    .vr-trim.open .vr-toggle-ico::after { transform: translateY(1px) rotate(225deg); }
    .vr-variants { display: none; background: #F1F5F9; border: 1px solid #E2E8F0; border-radius: 10px; padding: 4px 14px; margin-bottom: 10px; }
    .vr-trim.open .vr-variants { display: block; }
    .vr-var { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; padding: 12px 0; border-bottom: 1px solid #E2E8F0; }
    .vr-var:last-child { border-bottom: 0; }
    .vr-var-title { font-size: 13.5px; font-weight: 700; color: #0F172A; }
    .vr-var-name { font-size: 11.5px; color: #64748B; margin-top: 2px; }
    .vr-var-specs { display: flex; flex-wrap: wrap; gap: 4px 12px; font-size: 11.5px; color: #64748B; margin-top: 6px; }
    .vr-var-right { text-align: right; flex-shrink: 0; }
    .vr-var-price { font-size: 13.5px; font-weight: 800; color: #0F172A; margin-bottom: 4px; }
    .vr-var-right .vr-link { font-size: 12px; }
    .vr-vfm { background: #FEF3C7; color: #92400E; font-size: 9.5px; font-weight: 800; padding: 2px 6px; border-radius: 6px; margin-left: 6px; text-transform: uppercase; white-space: nowrap; }
    .vr-hidden { display: none !important; }
    .vr-empty { text-align: center; color: #64748B; font-size: 13px; padding: 24px 0; }
    .vr-foot { font-size: 11.5px; color: #64748B; padding: 10px 0 4px; border-top: 1px solid #EEF2F6; }
    .vr-compare-bar { display: none; position: fixed; left: 50%; bottom: 18px; transform: translateX(-50%); background: #0F172A; color: #FFFFFF; font-size: 13px; font-weight: 700; padding: 11px 20px; border-radius: 30px; box-shadow: 0 8px 24px rgba(15,23,42,.35); z-index: 90; text-decoration: none; white-space: nowrap; }
    .vr-compare-bar.show { display: block; }
    @media (max-width: 768px) {
      .vr-intro { font-size: 13px; margin-bottom: 12px; }
      .vr-chips { gap: 8px; flex-wrap: nowrap; overflow-x: auto; scrollbar-width: none; margin-left: -2px; padding-bottom: 2px; }
      .vr-chips::-webkit-scrollbar { display: none; }
      .vr-chip-group { flex-wrap: nowrap; flex-shrink: 0; padding-right: 8px; }
      .vr-chip { padding: 7px 14px; font-size: 12.5px; white-space: nowrap; }
      .vr-card { padding: 2px 12px 8px; border-radius: 12px; }
      .vr-head { padding: 12px 0 10px; }
      .vr-trim-name { font-size: 15px; }
      .vr-trim-price { font-size: 14px; }
      .vr-trim-mid { justify-content: space-between; gap: 10px; }
      .vr-toggle { justify-content: center; }
      .vr-variants { padding: 2px 10px; }
      .vr-var { padding: 10px 0; }
      .vr-var-name { display: none; }
    }
`;
