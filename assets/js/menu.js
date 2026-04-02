// menú móvil: abrir, cerrar y cerrar al tocar un enlace
(function () {
  var btn = document.getElementById('mobile-menu-btn');
  var menu = document.getElementById('mobile-menu');
  if (!btn || !menu) {
    return;
  }

  var icon = btn.querySelector('i');
  var links = document.querySelectorAll('.mobile-link');

  function toggleMenu() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('flex');
    if (menu.classList.contains('flex')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times', 'text-violet-400');
    } else {
      icon.classList.remove('fa-times', 'text-violet-400');
      icon.classList.add('fa-bars');
    }
  }

  btn.addEventListener('click', toggleMenu);
  links.forEach(function (link) {
    link.addEventListener('click', toggleMenu);
  });
})();
