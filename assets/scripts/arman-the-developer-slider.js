var bookOfferSwiper = new Swiper('.slider-arman__container', {
    speed: 1000,
    slidesPerView: 4,
    slidesPerGroup: 5,
    spaceBetween: 30,
    pagination: {
        clickable: true,
    },
    navigation: {
        nextEl: '.slider-arman__button-next',
        prevEl: '.slider-arman__button-prev',
    },
});