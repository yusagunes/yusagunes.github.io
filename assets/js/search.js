/* ==========================================================================
   Blog search & tag filter (client-side)
   ========================================================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('post-search');
    const pills = document.querySelectorAll('.filter-pill');
    const cards = document.querySelectorAll('.post-card[data-tags]');
    const empty = document.getElementById('empty-state');

    if (!cards.length) return;

    let activeTag = 'all';
    let query = '';

    function filter() {
      let visibleCount = 0;
      cards.forEach(function (card) {
        const tags = (card.getAttribute('data-tags') || '').split(',');
        const title = (card.getAttribute('data-title') || '').toLowerCase();
        const excerpt = (card.getAttribute('data-excerpt') || '').toLowerCase();

        const matchesTag = activeTag === 'all' || tags.indexOf(activeTag) !== -1;
        const matchesQuery = !query ||
          title.indexOf(query) !== -1 ||
          excerpt.indexOf(query) !== -1 ||
          tags.some(function (t) { return t.toLowerCase().indexOf(query) !== -1; });

        const show = matchesTag && matchesQuery;
        card.style.display = show ? '' : 'none';
        if (show) visibleCount++;
      });

      if (empty) empty.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    if (input) {
      input.addEventListener('input', function (e) {
        query = e.target.value.trim().toLowerCase();
        filter();
      });
    }

    pills.forEach(function (pill) {
      pill.addEventListener('click', function () {
        pills.forEach(function (p) { p.classList.remove('active'); });
        pill.classList.add('active');
        activeTag = pill.getAttribute('data-tag') || 'all';
        filter();
      });
    });
  });
})();