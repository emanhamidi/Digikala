// start slider
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
// end slider

//  start header

// start search
const search = document.querySelector('#search');

function toggleSearchResault(event) {
  const serachResult = document.querySelectorAll('.header__serach-result')[0];
  const serachInput = document.querySelectorAll('.header__serach-input')[0];
  const inputValue = event.target.value;
  if (event.type == 'click') {
    serachResult.style = "display: none";
    serachInput.classList.remove('header__serach-input--is-active');
  } else {
    serachResult.style = "display: block";
    serachInput.classList.add('header__serach-input--is-active');
  }
}

search.addEventListener('keyup', toggleSearchResault);

const overlay = document.querySelectorAll('.overlay')[0];
overlay.addEventListener('click', function (event) {
  toggleSearchResault(event);
});
// end search

// end header