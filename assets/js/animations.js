/* ==========================================================================
   Animations — IntersectionObserver fade-in
   ========================================================================== */

(function () {
  'use strict';

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.fade-in');
    if (!items.length) return;

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    items.forEach(function (item) { observer.observe(item); });
  });
})();