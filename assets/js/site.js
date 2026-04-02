// año actual en el pie de página
var yearEl = document.getElementById('auto-year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// animación de aparición al hacer scroll
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
}, { rootMargin: '0px 0px 50px 0px', threshold: 0.02 });

document.querySelectorAll('.reveal').forEach(function (el) {
  revealObserver.observe(el);
});

// envolver tablas en contenedor con scroll horizontal
document.querySelectorAll('.rich-content table').forEach(function (table) {
  if (table.parentElement.classList.contains('table-wrapper')) {
    return;
  }
  var wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper';
  table.parentNode.insertBefore(wrapper, table);
  wrapper.appendChild(table);
});

// fachada de youtube: solo carga el iframe al hacer clic
document.querySelectorAll('.js-youtube-facade').forEach(function (el) {
  el.addEventListener('click', function () {
    var id = this.getAttribute('data-id');
    var title = this.getAttribute('data-title');
    this.innerHTML = '<iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0" title="' + title + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  });
});
