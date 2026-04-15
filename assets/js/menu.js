(function () {
  var btn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) {
    return;
  }

  var icon = btn.querySelector('i');
  var links = document.querySelectorAll('.mobile-link');

  // Sincroniza estado visual y aria-expanded del menú móvil.
  function toggleMenu() {
    var isOpen = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    if (!isOpen) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times', 'text-violet-400');
      btn.setAttribute('aria-expanded', 'true');
    } else {
      icon.classList.remove('fa-times', 'text-violet-400');
      icon.classList.add('fa-bars');
      btn.setAttribute('aria-expanded', 'false');
    }
  }

  btn.addEventListener('click', toggleMenu);
  links.forEach(function (link) {
    link.addEventListener('click', toggleMenu);
  });
  // Añade navegación por teclado a los dropdowns del menú de escritorio.
  var dropdowns = document.querySelectorAll('[data-dropdown]');
  dropdowns.forEach(function (dropdown) {
    var trigger = dropdown.querySelector('button');
    var menuEl = dropdown.querySelector('.dropdown-menu');
    var menuLinks = menuEl.querySelectorAll('a');

    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        var isOpen = trigger.getAttribute('aria-expanded') === 'true';
        trigger.setAttribute('aria-expanded', String(!isOpen));
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        trigger.setAttribute('aria-expanded', 'true');
        menuLinks[0].focus();
      }
      if (e.key === 'Escape') {
        trigger.setAttribute('aria-expanded', 'false');
        trigger.focus();
      }
    });

    menuLinks.forEach(function (link, idx) {
      link.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          var next = menuLinks[idx + 1];
          if (next) next.focus();
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (idx === 0) {
            trigger.focus();
            trigger.setAttribute('aria-expanded', 'false');
          } else {
            menuLinks[idx - 1].focus();
          }
        }
        if (e.key === 'Escape') {
          trigger.focus();
          trigger.setAttribute('aria-expanded', 'false');
        }
      });
    });

    dropdown.addEventListener('focusout', function (e) {
      if (!dropdown.contains(e.relatedTarget)) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
