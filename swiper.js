var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // 1 slide visible at a time
  spaceBetween: 30, // optional
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
