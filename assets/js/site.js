// assets/js/site.js

// Todo este script asume que la clase 'js-loaded' ya está en el <html>,
// así evitamos destellos blancos feos (FOUC) al cargar la página.

var yearEl = document.getElementById('auto-year');
if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

// Carga las animaciones suaves solo cuando el elemento va a entrar en pantalla
var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('active'); }
    });
}, { rootMargin: '0px 0px 50px 0px', threshold: 0.02 });

document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
});

document.querySelectorAll('.rich-content table').forEach(function (table) {
    if (table.parentElement.classList.contains('table-wrapper')) { return; }
    var wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
});

// Carga diferida de los vídeos de YouTube. No carga el reproductor pesado
// hasta que el usuario hace clic en el botón, ahorrando mucho tiempo de carga.
document.querySelectorAll('.js-youtube-facade').forEach(function (el) {
    el.addEventListener('click', function () {
        var id = this.getAttribute('data-id');
        var title = this.getAttribute('data-title');
        this.innerHTML = '<iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0" title="' + title + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    });
});
