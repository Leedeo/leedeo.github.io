// assets/js/site.js

// La clase 'js-loaded' se añade sincrónicamente en <head> mediante init.js para prevenir FOUC

var yearEl = document.getElementById('auto-year');
if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('active'); }
    });
}, { rootMargin: '0px 0px 50px 0px', threshold: 0.02 });

document.querySelectorAll('.reveal').forEach(function (el) {
    revealObserver.observe(el);
});

document.querySelectorAll('.policy-content table').forEach(function (table) {
    if (table.parentElement.classList.contains('table-wrapper')) { return; }
    var wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';
    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
});

// YouTube Facades (Bypass strict CSP inline handler restrictions)
document.querySelectorAll('.js-youtube-facade').forEach(function (el) {
    el.addEventListener('click', function () {
        var id = this.getAttribute('data-id');
        var title = this.getAttribute('data-title');
        this.innerHTML = '<iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/' + id + '?autoplay=1&rel=0" title="' + title + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    });
});
