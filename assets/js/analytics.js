window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

function loadGA() {
  if (window._gaLoaded) {
    return;
  }
  // Carga Google Analytics solo una vez y solo tras consentimiento explícito.
  window._gaLoaded = true;
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
  // Rehidrata analítica si el usuario ya había aceptado en una visita anterior.
  if (localStorage.getItem('cookie_consent') === 'accepted') {
    loadGA();
  }
});
