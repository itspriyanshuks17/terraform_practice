/* nav-toggle.js — shared mobile navigation & sidebar behaviour */

(function () {
  /* ── Hamburger / mobile nav ── */
  var toggle = document.getElementById('navToggle');
  var nav    = document.getElementById('siteNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));

      // Swap icon between hamburger ≡ and close ✕
      var lines = toggle.querySelectorAll('line');
      if (isOpen) {
        // Animate to X
        if (lines[0]) { lines[0].setAttribute('x1','2'); lines[0].setAttribute('y1','2'); lines[0].setAttribute('x2','16'); lines[0].setAttribute('y2','16'); }
        if (lines[1]) { lines[1].style.opacity = '0'; }
        if (lines[2]) { lines[2].setAttribute('x1','2'); lines[2].setAttribute('y1','16'); lines[2].setAttribute('x2','16'); lines[2].setAttribute('y2','2'); }
      } else {
        if (lines[0]) { lines[0].setAttribute('x1','1'); lines[0].setAttribute('y1','4'); lines[0].setAttribute('x2','17'); lines[0].setAttribute('y2','4'); }
        if (lines[1]) { lines[1].style.opacity = ''; }
        if (lines[2]) { lines[2].setAttribute('x1','1'); lines[2].setAttribute('y1','14'); lines[2].setAttribute('x2','17'); lines[2].setAttribute('y2','14'); }
      }
    });

    // Close nav when a link is tapped (single-page navigation feel)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Note sidebar collapse (mobile / tablet) ── */
  var sidebarBtn  = document.getElementById('sidebarToggle');
  var noteList    = document.getElementById('noteList');

  if (sidebarBtn && noteList) {
    var chevron = sidebarBtn.querySelector('svg');

    // Collapsed by default on narrow screens
    function applyInitialState() {
      if (window.innerWidth <= 900) {
        noteList.classList.add('collapsed');
        sidebarBtn.setAttribute('aria-expanded', 'false');
        if (chevron) chevron.style.transform = 'rotate(-90deg)';
      } else {
        noteList.classList.remove('collapsed');
        sidebarBtn.setAttribute('aria-expanded', 'true');
        if (chevron) chevron.style.transform = '';
      }
    }

    applyInitialState();
    window.addEventListener('resize', applyInitialState);

    sidebarBtn.addEventListener('click', function () {
      var isCollapsed = noteList.classList.toggle('collapsed');
      sidebarBtn.setAttribute('aria-expanded', String(!isCollapsed));
      if (chevron) chevron.style.transform = isCollapsed ? 'rotate(-90deg)' : '';
    });
  }
})();
