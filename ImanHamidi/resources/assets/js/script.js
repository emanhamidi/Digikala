var swiper = new Swiper('.swiper3', {
  slidesPerGroup: 5,
  speed: 1000,
  navigation: {
    nextEl: '.swiper3-next',
    prevEl: '.swiper3-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    }
  }
});