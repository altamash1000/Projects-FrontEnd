
    (function() {
      var images = document.querySelectorAll('.image-gallery3 img');
      var currentImageIndex = 0;

      setInterval(function() {
        images[currentImageIndex].style.opacity = 0;
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.opacity = 1;
      }, 2000);
    })();
