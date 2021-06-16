let navItems = document.querySelectorAll('.navbar__category-item');

function highlightNavItems(event) {
    const subHighlightElem = document.querySelector('.navbar__category-list-sub-highlight');
    if (event.type == "mouseover" && event.target.classList.contains("category-item__link")) {
        subHighlightElem.style.width = event.target.clientWidth + "px";
        subHighlightElem.style.transform = "scale(1)";
        subHighlightElem.style.left = event.target.offsetLeft + "px";
    }
    else {
        subHighlightElem.style.width = event.target.clientWidth + "px";
        subHighlightElem.style.transform = "scale(0)";
    }
}

navItems.forEach(navItem => {
    navItem.addEventListener("mouseover", highlightNavItems);
    navItem.addEventListener("mouseout", highlightNavItems);
});

let navbar = document.querySelector(".navbar");

document.addEventListener("scroll", toggleNavBar);

let prevScrollPos = window.pageYOffset;

function toggleNavBar(event) {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos > prevScrollPos) {
        navbar.classList.add("navbar--hidden");
    }
    else {
        navbar.classList.remove("navbar--hidden");
    }

    prevScrollPos = currentScrollPos;
}