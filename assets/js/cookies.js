(function () {
  var banner = document.getElementById('cookie-banner');
  var acceptBtn = document.getElementById('cookie-accept');
  var rejectBtn = document.getElementById('cookie-reject');
  if (!banner) {
    return;
  }

  // migrar consentimiento antiguo al formato nuevo
  var oldConsent = localStorage.getItem('cookies-accepted');
  if (oldConsent && !localStorage.getItem('cookie_consent')) {
    localStorage.setItem('cookie_consent', oldConsent === 'true' ? 'accepted' : 'rejected');
    localStorage.removeItem('cookies-accepted');
  }

  // mostrar banner si el usuario no eligió nada
  if (!localStorage.getItem('cookie_consent')) {
    setTimeout(function () {
      banner.classList.remove('translate-y-full');
    }, 1500);
  }

  function closeBanner(value) {
    localStorage.setItem('cookie_consent', value);
    banner.classList.add('translate-y-full');
    if (value === 'accepted' && typeof loadGA === 'function') {
      loadGA();
    }
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', function () {
      closeBanner('accepted');
    });
  }
  if (rejectBtn) {
    rejectBtn.addEventListener('click', function () {
      closeBanner('rejected');
    });
  }
})();
