/* nav-toggle.js — shared mobile navigation, sidebar behaviour & copy buttons */

(function () {

  /* ── Hamburger / mobile nav ── */
  var toggle = document.getElementById('navToggle');
  var nav    = document.getElementById('siteNav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));

      var lines = toggle.querySelectorAll('line');
      if (isOpen) {
        if (lines[0]) { lines[0].setAttribute('x1','2'); lines[0].setAttribute('y1','2'); lines[0].setAttribute('x2','16'); lines[0].setAttribute('y2','16'); }
        if (lines[1]) { lines[1].style.opacity = '0'; }
        if (lines[2]) { lines[2].setAttribute('x1','2'); lines[2].setAttribute('y1','16'); lines[2].setAttribute('x2','16'); lines[2].setAttribute('y2','2'); }
      } else {
        if (lines[0]) { lines[0].setAttribute('x1','1'); lines[0].setAttribute('y1','4'); lines[0].setAttribute('x2','17'); lines[0].setAttribute('y2','4'); }
        if (lines[1]) { lines[1].style.opacity = ''; }
        if (lines[2]) { lines[2].setAttribute('x1','1'); lines[2].setAttribute('y1','14'); lines[2].setAttribute('x2','17'); lines[2].setAttribute('y2','14'); }
      }
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', function (e) {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ── Note sidebar collapse (mobile / tablet) ── */
  var sidebarBtn = document.getElementById('sidebarToggle');
  var noteList   = document.getElementById('noteList');

  if (sidebarBtn && noteList) {
    var chevron = sidebarBtn.querySelector('svg');

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

  /* ── Copy buttons ── */

  var ICON_COPY  = '<svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="5" y="2" width="9" height="11" rx="1.5"/><rect x="2" y="5" width="9" height="11" rx="1.5"/></svg>';
  var ICON_CHECK = '<svg viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="2 8 6.5 12.5 14 4"/></svg>';

  /**
   * Wire up copy buttons inside `root`.
   * Exposed globally so note.js can call it after dynamic render.
   */
  window.initCopyButtons = function (root) {
    root = root || document;
    root.querySelectorAll('[data-copy-btn]').forEach(function (btn) {
      if (btn.dataset.copyReady) return; // prevent double-bind
      btn.dataset.copyReady = '1';

      btn.addEventListener('click', function () {
        var card = btn.closest('.code-card');
        if (!card) return;
        var codeEl = card.querySelector('pre code');
        if (!codeEl) return;

        var text = codeEl.innerText || codeEl.textContent || '';

        function showCopied() {
          btn.innerHTML = ICON_CHECK + '<span>Copied!</span>';
          btn.classList.add('copied');
          setTimeout(function () {
            btn.innerHTML = ICON_COPY + '<span>Copy</span>';
            btn.classList.remove('copied');
          }, 2000);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(showCopied).catch(fallbackCopy);
        } else {
          fallbackCopy();
        }

        function fallbackCopy() {
          var ta = document.createElement('textarea');
          ta.value = text;
          ta.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
          document.body.appendChild(ta);
          ta.select();
          try { document.execCommand('copy'); } catch (e) {}
          document.body.removeChild(ta);
          showCopied();
        }
      });
    });
  };

  // Wire static copy buttons on page load
  window.initCopyButtons(document);

})();
