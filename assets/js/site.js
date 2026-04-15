var yearEl = document.getElementById('auto-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
// Activa animaciones de entrada una sola vez por bloque visible.
/* Observer para animaciones reveal cuando elementos entran en viewport */
var revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      var el = entry.target;
      el.classList.add('active');
      var delayStr = getComputedStyle(el).getPropertyValue('--reveal-delay') || '0s';
      var delayMs = parseFloat(delayStr) || 0;
      setTimeout(function () {
        el.style.setProperty('--reveal-delay', '0s');
      }, 700 + delayMs);
    }
  });
}, { rootMargin: '0px 0px 50px 0px', threshold: 0.1 }); // 50px bottom margin para activación anticipada

document.querySelectorAll('.reveal').forEach(function (el) {
  revealObserver.observe(el);
});
// Envuelve tablas Markdown para mantener scroll horizontal en móvil.
/* Wrapper dinámico para tablas amplias en dispositivos móviles */
document.querySelectorAll('.rich-content table').forEach(function (table) {
  if (table.parentElement.classList.contains('table-wrapper')) {
    return;
  }
  var wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper';
  table.parentNode.insertBefore(wrapper, table);
  wrapper.appendChild(table);
});
// Sustituye la miniatura de YouTube por el iframe solo tras clic explícito.
/* Lazy loading de videos YouTube: carga iframe solo tras interacción */
document.querySelectorAll('.js-youtube-facade').forEach(function (el) {
  el.addEventListener('click', function () {
    var id = this.getAttribute('data-id');
    var title = this.getAttribute('data-title');
    this.innerHTML = '<iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0" title="' + title + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  });
});
