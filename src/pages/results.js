/**
 * HYDRATEST — Results Page Logic
 * Reads readings from sessionStorage, renders the full profile.
 */

import { getSkinProfile, OIL_LABELS } from '../data/skinData.js';

// ─── Read stored reading ──────────────────────────
const stored = sessionStorage.getItem('hydratest_reading');

if (!stored) {
  // No reading found — redirect home
  window.location.href = '/';
}

const { hydrationPct, oilBars } = JSON.parse(stored);
const profile = getSkinProfile(hydrationPct, oilBars);

if (!profile) {
  window.location.href = '/';
}

// ─── Render ───────────────────────────────────────
renderResults(hydrationPct, oilBars, profile);

function renderResults(hp, oil, d) {

  // Header
  setText('r-condition-tag',   `${d.hydrationLevel} Hydration · ${d.oilLevelText} Oil`);
  setText('r-main-title',      d.condition);
  setText('r-hyd-val',         `${hp}%`);
  setText('r-hyd-level',       d.hydrationLevel);
  setHTML('r-oil-display',     buildOilMiniBar(oil));
  setText('r-oil-level',       d.oilLevelText);
  setText('r-cond-val',        d.shortCondition);

  // Sections
  setHTML('r-story-heading',   escapeHTML(d.condition));
  setText('r-story-body',      d.story);
  setText('r-aim-body',        d.aim);
  setText('r-note',            d.note);

  // Indicators
  setHTML('r-indicators', `
    <div class="indicator">
      <div class="ind-label">Hydration Level</div>
      <div class="ind-track"><div class="ind-fill" data-width="${d.hydrationBar}"></div></div>
      <div class="ind-value">${hp}% — ${d.hydrationLevel}</div>
    </div>
    <div class="indicator">
      <div class="ind-label">Oil Level</div>
      <div class="ind-track"><div class="ind-fill" data-width="${d.oilBar}"></div></div>
      <div class="ind-value">${oil} Bar${oil > 1 ? 's' : ''} — ${d.oilLevelText}</div>
    </div>
  `);

  // Routine
  setHTML('r-routine', d.routine.map((r, i) => `
    <div class="routine-item" role="listitem">
      <div class="r-num">${String(i + 1).padStart(2, '0')}</div>
      <div class="r-step-tag"><span class="r-step-label">${escapeHTML(r.step)}</span></div>
      <div class="r-step-body">
        <div class="r-step-name">${escapeHTML(r.name)}</div>
        <div class="r-step-desc">${escapeHTML(r.desc)}</div>
      </div>
    </div>
  `).join(''));

  // Ingredients
  setHTML('r-ingredients', d.ingredients.map((ing, i) => `
    <div class="ing-card">
      <div class="ing-dot"></div>
      <div class="ing-name">${escapeHTML(ing)}</div>
      <div class="ing-role">${escapeHTML(d.ingredientRoles[i] ?? '')}</div>
    </div>
  `).join(''));

  // Animate indicator bars after paint
  requestAnimationFrame(() => {
    document.querySelectorAll('.ind-fill[data-width]').forEach(el => {
      el.style.width = el.dataset.width + '%';
    });
  });

  // Trigger scroll reveals with stagger
  setTimeout(() => {
    document.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('in'), i * 100);
    });
  }, 80);
}

// ─── Helpers ──────────────────────────────────────

function buildOilMiniBar(oil) {
  const bars = Array.from({ length: 5 }, (_, i) =>
    `<div class="oil-mini-bar${i < oil ? ' lit' : ''}"></div>`
  ).join('');
  return `<div class="oil-mini-bars">${bars}</div>`;
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function setHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function escapeHTML(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── Scroll observer ──────────────────────────────
const obs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
  { threshold: 0.08 }
);
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
