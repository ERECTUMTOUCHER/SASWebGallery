// JavaScript functions for image inspection
document.addEventListener('DOMContentLoaded', function() {
    var galleryImages = document.querySelectorAll('.gallery img');
    var overlay = document.querySelector('.overlay');
    var overlayImage = document.getElementById('overlayImage');

    galleryImages.forEach(function(image) {
        image.addEventListener('click', function() {
            var fullImagePath = this.getAttribute('data-full');
            overlayImage.src = fullImagePath;
            overlay.style.display = 'block';
        });
    });

    overlay.addEventListener('click', function() {
        this.style.display = 'none';
    });
});

