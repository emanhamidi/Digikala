// start slider
var swiper = new Swiper(".swiper3", {
  slidesPerGroup: 5,
  speed: 1000,
  navigation: {
    nextEl: ".swiper3-next",
    prevEl: ".swiper3-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});
// end slider

//  start header

// start search
const searchInput = document.querySelector("#search");
const header = document.querySelector("#header");
const overlay = document.querySelectorAll(".overlay")[0];
const searchResetBtn = document.querySelectorAll(".header__search-reset")[0];

function showSearchResult(event) {
  const searchResult = document.querySelectorAll(".header__search-result")[0];
  const searchInput = document.querySelectorAll(".header__search-input")[0];
  const inputValue = event.target.value;

  searchResult.classList.add("header__search-result--is-active");
  searchInput.classList.add("header__search-input--is-active");
  overlay.classList.add("overlay--is-active");
  searchResetBtn.classList.add("header__search-reset--is-active");

  if (inputValue == "")
    searchResetBtn.classList.remove("header__search-reset--is-active");
}

function hideSearchResult(event) {
  const searchResult = document.querySelectorAll(".header__search-result")[0];
  const searchInput = document.querySelectorAll(".header__search-input")[0];

  searchResult.classList.remove("header__search-result--is-active");
  searchInput.classList.remove("header__search-input--is-active");
  overlay.classList.remove("overlay--is-active");
}

function serachInputReset() {
  searchResetBtn.classList.remove("header__search-reset--is-active");
  searchInput.value = "";
}

searchInput.addEventListener("keyup", showSearchResult);
searchResetBtn.addEventListener("click", serachInputReset);
header.addEventListener("click", hideSearchResult);
overlay.addEventListener("click", hideSearchResult);

// end search

// end header
