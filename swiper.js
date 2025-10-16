var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  cssMode: true,
  loop: true, 
  autoplay: {
    delay: 4000,                
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
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

  // Draggable/swipeable
  grabCursor: true,     
  simulateTouch: true, 
  touchRatio: 1,          
  touchAngle: 45,         
});
