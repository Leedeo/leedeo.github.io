(function () {
  var triggerContainer = document.getElementById('disqus_trigger_container');
  if (!triggerContainer) {
    return;
  }

  var btn = document.getElementById('load_disqus_btn');
  var shortname = triggerContainer.dataset.shortname;
  var pageUrl = triggerContainer.dataset.pageUrl;
  var pageId = triggerContainer.dataset.pageId;
  if (!shortname) {
    return;
  }

  window.disqus_config = function () {
    this.page.url = pageUrl;
    this.page.identifier = pageId;
  };

  // Inyecta Disqus bajo demanda y muestra el hilo solo cuando el script termina de cargar.
  function loadDisqus() {
    if (!btn) {
      return;
    }
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Cargando comentarios...';
    btn.disabled = true;
    btn.style.opacity = '0.7';

    var s = document.createElement('script');
    s.src = 'https://' + shortname + '.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    s.onload = function () {
      triggerContainer.style.display = 'none';
      var container = document.getElementById('disqus_container');
      if (container) {
        container.style.display = 'block';
      }
    };
    (document.head || document.body).appendChild(s);
  }

  if (btn) {
    btn.addEventListener('click', loadDisqus);
  }
})();
