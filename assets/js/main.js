/* ==========================================================================
   Main JS — Theme toggle, Mobile nav, Year
   ========================================================================== */

(function () {
  'use strict';

  /* ----- Theme ----- */
  const STORAGE_KEY = 'yg-theme';
  const root = document.documentElement;

  function getStoredTheme() {
    try { return localStorage.getItem(STORAGE_KEY); } catch { return null; }
  }
  function setStoredTheme(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch { /* ignore */ }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#0a0a0a' : '#ffffff');
  }

  function initTheme() {
    const stored = getStoredTheme();
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
  }

  function toggleTheme() {
    const current = root.getAttribute('data-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    setStoredTheme(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    initTheme();

    const toggleBtn = document.querySelector('.theme-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleTheme);
    }

    /* ----- Mobile nav ----- */
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (navToggle && navLinks) {
      navToggle.addEventListener('click', function () {
        const open = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
      // Close on link click
      navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          navLinks.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        });
      });
    }

    /* ----- Active link highlight ----- */
    const path = window.location.pathname.replace(/\/$/, '') || '/';
    document.querySelectorAll('.nav-link').forEach(function (link) {
      const href = link.getAttribute('href');
      if (!href) return;
      const normalized = href.replace(/\/$/, '') || '/';
      if (normalized === path || (normalized !== '/' && path.startsWith(normalized + '/'))) {
        link.classList.add('active');
      }
    });

    /* ----- Footer year ----- */
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  });

  /* ----- Listen to system theme changes (if user hasn't picked) ----- */
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!getStoredTheme()) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();