(function () {
  var bar = document.querySelector('.reading-progress-bar');
  if (!bar) {
    return;
  }

  // Calcula el progreso de lectura sobre toda la altura útil del documento.
  window.addEventListener('scroll', function () {
    var top = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (top / h) * 100 : 0) + '%';
  });
})();
