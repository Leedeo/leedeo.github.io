// assets/js/analytics.js
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

function loadGA() {
    if (window._gaLoaded) return;
    window._gaLoaded = true;

    // Agregamos el preconnect de forma dinámica para contentar a Lighthouse
    // sin tener que conectar con Google si el usuario rechaza las cookies.
    var p = document.createElement('link');
    p.rel = 'preconnect';
    p.href = 'https://www.googletagmanager.com';
    document.head.appendChild(p);

    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-2SB71QMPV3';
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', 'G-2SB71QMPV3');
}

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('cookie_consent') === 'accepted') {
        loadGA();
    }
});
