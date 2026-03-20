// assets/js/analytics.js
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

function loadGA() {
    if (window._gaLoaded) return;
    window._gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-2SB71QMPV3';
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', 'G-2SB71QMPV3');
}

window.addEventListener('load', function () {
    if (localStorage.getItem('cookie_consent') === 'accepted') {
        loadGA();
    }
});
