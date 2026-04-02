(function () {
  var bar = document.createElement('div');
  bar.className = 'reading-progress';
  bar.innerHTML = '<div class="reading-progress-bar"></div>';
  document.body.appendChild(bar);

  var inner = bar.querySelector('.reading-progress-bar');

  window.addEventListener('scroll', function () {
    var top = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    inner.style.width = (h > 0 ? (top / h) * 100 : 0) + '%';
  });
})();
