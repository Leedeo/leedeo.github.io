(function () {
  var modal = document.getElementById('galleryModal');
  if (!modal) {
    return;
  }

  var galleryImage = document.getElementById('galleryImage');
  var closeBtn = document.getElementById('gallery-close');

  function openGallery(imageSrc) {
    if (!galleryImage) {
      return;
    }
    galleryImage.src = imageSrc;
    modal.showModal();
    document.body.style.overflow = 'hidden';
  }

  function closeGallery() {
    modal.close();
  }

  modal.addEventListener('close', function () {
    document.body.style.overflow = 'auto';
  });

  modal.addEventListener('click', function (e) {
    if (e.target === modal) {
      closeGallery();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeGallery);
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.open) {
      closeGallery();
    }
  });

  document.querySelectorAll('[data-image]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openGallery(btn.dataset.image);
    });
  });
})();
