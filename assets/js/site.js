// assets/js/site.js
var yearEl = document.getElementById('auto-year');
if (yearEl) { yearEl.textContent = new Date().getFullYear(); }

var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('active'); }
    });
}, { threshold: 0.15 });

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
