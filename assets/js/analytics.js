// assets/js/analytics.js
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

window.addEventListener('load', function () {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=G-2SB71QMPV3';
    document.head.appendChild(s);
    gtag('js', new Date());
    gtag('config', 'G-2SB71QMPV3');
});
