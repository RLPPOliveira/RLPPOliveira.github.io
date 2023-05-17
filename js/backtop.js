var backtop = document.querySelector('.backtop');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
    backtop.classList.add('active');
  } else {
    backtop.classList.remove('active');
  }
});

backtop.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});