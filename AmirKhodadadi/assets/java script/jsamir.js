var swiper3 = new Swiper('.swiper-container', {
    slidesPerGroup: 5,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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