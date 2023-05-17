var swiper = new Swiper(".slide-container", {
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  center:true,
  grabCursor: "true",
  fade: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function() {
      document.querySelector(".swiper-slide-active .card").classList.add("active");
    }
  }
});
