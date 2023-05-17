function moveImage() {
    var image = document.querySelector('.scroll-image');
    var windowHeight = window.innerHeight;
    var imageBottom = image.getBoundingClientRect().bottom;
    var revealPoint = 100;
  
    if (imageBottom < windowHeight - revealPoint) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  }
  
  window.addEventListener('scroll', moveImage);
  