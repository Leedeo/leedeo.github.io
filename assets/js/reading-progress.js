(function () {
  // Busca la barra de progreso ya presente en el DOM (colocada estáticamente en post.html).
  // Si no existe (la página no es un post), no hace nada.
  // Antes el script creaba el elemento dinámicamente, lo que generaba un duplicado
  // porque post.html ya incluía el elemento en el HTML estático.
  var bar = document.querySelector('.reading-progress-bar');
  if (!bar) {
    return;
  }

  window.addEventListener('scroll', function () {
    var top = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (h > 0 ? (top / h) * 100 : 0) + '%';
  });
})();
