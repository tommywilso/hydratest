/**
 * HYDRATEST — Home Page Logic
 * Handles form validation, oil bar interaction, and routing to results.
 */

import { getSkinProfile, OIL_LABELS } from '../data/skinData.js';

// ─── State ────────────────────────────────────────
let selectedOil = 0;

// ─── Oil bar interaction ──────────────────────────
const oilBars    = document.getElementById('oil-bars');
const oilReading = document.getElementById('oil-reading');

oilBars.addEventListener('click', (e) => {
  const btn = e.target.closest('.oil-bar-btn');
  if (!btn) return;

  selectedOil = parseInt(btn.dataset.bar, 10);

  oilBars.querySelectorAll('.oil-bar-btn').forEach(b => {
    const v = parseInt(b.dataset.bar, 10);
    b.classList.toggle('active',  v === selectedOil);
    b.classList.toggle('filled',  v <  selectedOil);
  });

  oilReading.innerHTML = `Selected: <strong>${selectedOil} Bar${selectedOil > 1 ? 's' : ''} — ${OIL_LABELS[selectedOil]}</strong>`;
  document.getElementById('oil-error').textContent = '';
});

// ─── Form submit ──────────────────────────────────
document.getElementById('diagnostic-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const hydrationEl = document.getElementById('hydration-input');
  const hydrationErr = document.getElementById('hydration-error');
  const oilErr       = document.getElementById('oil-error');

  let valid = true;
  hydrationErr.textContent = '';
  oilErr.textContent       = '';

  const raw = hydrationEl.value.trim();
  const pct = parseFloat(raw);

  if (!raw || isNaN(pct) || pct < 0 || pct > 100) {
    hydrationErr.textContent = 'Please enter a valid hydration reading (0–100%)';
    valid = false;
  }

  if (!selectedOil) {
    oilErr.textContent = 'Please select your oil level';
    valid = false;
  }

  if (!valid) return;

  const profile = getSkinProfile(pct, selectedOil);

  if (!profile) {
    hydrationErr.textContent = 'Reading combination not recognised — please check your values.';
    return;
  }

  // Store readings in sessionStorage so the results page can read them
  sessionStorage.setItem('hydratest_reading', JSON.stringify({
    hydrationPct: pct,
    oilBars:      selectedOil,
  }));

  window.location.href = '/results/';
});
