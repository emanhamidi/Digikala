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

const searchInput = document.querySelector("#search");
const header = document.querySelector("#header");
const overlay = document.querySelectorAll(".overlay")[0];
const searchResetBtn = document.querySelectorAll(".header__search-reset")[0];
const userProfileIcon  = document.querySelectorAll('.header__user-profile-icon')[0];
const userProfileDropdown  = document.querySelectorAll('.header__user-profile-dropdown')[0];
let showUserProfileDropdown = false;


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

function hideDropdown(event) {
  const searchResult = document.querySelectorAll(".header__search-result")[0];
  const searchInput = document.querySelectorAll(".header__search-input")[0];

  searchResult.classList.remove("header__search-result--is-active");
  searchInput.classList.remove("header__search-input--is-active");
  overlay.classList.remove("overlay--is-active");

  userProfileIcon.classList.remove('header__user-profile-icon--is-active');
  userProfileDropdown.classList.remove('header__user-profile-dropdown--show');
  showUserProfileDropdown = false;

}

function serachInputReset() {
  searchResetBtn.classList.remove("header__search-reset--is-active");
  searchInput.value = "";
}

searchInput.addEventListener("keyup", showSearchResult);
searchResetBtn.addEventListener("click", serachInputReset);



const userProfileBtn = 
      document.querySelectorAll('.header__user-profile-toggle-dropdown')[0];

function toggleUserProfileDropdown() {

  if (showUserProfileDropdown) {
    userProfileIcon.classList.remove('header__user-profile-icon--is-active');
    userProfileDropdown.classList.remove('header__user-profile-dropdown--show');
    showUserProfileDropdown = false;
  } else {
    userProfileIcon.classList.add('header__user-profile-icon--is-active');
    userProfileDropdown.classList.add('header__user-profile-dropdown--show');
    overlay.classList.add("overlay--is-active");
    showUserProfileDropdown = true;
  }

}

userProfileBtn.addEventListener('click', toggleUserProfileDropdown);


overlay.addEventListener("click", hideDropdown);
// end header
