var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 50,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });