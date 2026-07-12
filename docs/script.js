/* ============================================================
   The Story House — styleguide interactivity
   Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  /* ---- Accordion (FAQ) ---- */
  document.querySelectorAll('.acc-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.closest('.acc-item');
      var panel = item.querySelector('.acc-panel');
      var isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
      panel.style.maxHeight = isOpen ? panel.scrollHeight + 'px' : null;
    });
  });
  // Initialise any accordion items marked open in the HTML.
  document.querySelectorAll('.acc-item.open').forEach(function (item) {
    var panel = item.querySelector('.acc-panel');
    panel.style.maxHeight = panel.scrollHeight + 'px';
    item.querySelector('.acc-trigger').setAttribute('aria-expanded', 'true');
  });

  /* ---- Tabs ---- */
  var tabs = document.querySelectorAll('.tab');
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var key = tab.getAttribute('data-tab');
      tabs.forEach(function (t) {
        var on = t === tab;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', String(on));
      });
      document.querySelectorAll('.tab-panel').forEach(function (p) {
        p.classList.toggle('active', p.getAttribute('data-panel') === key);
      });
    });
  });

  /* ---- Filter chips (toggle) ---- */
  document.querySelectorAll('.chip-tag').forEach(function (chip) {
    chip.addEventListener('click', function () {
      var on = chip.classList.toggle('active');
      chip.setAttribute('aria-pressed', String(on));
    });
  });

  /* ---- Wishlist heart toggle ---- */
  document.querySelectorAll('.wishlist-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var on = btn.classList.toggle('active');
      btn.setAttribute('aria-label', on ? 'Remove from wishlist' : 'Add to wishlist');
    });
  });

  /* ---- Recompute open accordion heights on resize ---- */
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      document.querySelectorAll('.acc-item.open .acc-panel').forEach(function (panel) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      });
    }, 120);
  });
})();
