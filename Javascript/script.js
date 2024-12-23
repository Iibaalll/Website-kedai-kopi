// Toggle Menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarActive = document.querySelector(".navbar-nav");
// Ketika Hamburger menu di klik
hamburgerMenu.addEventListener("click", function () {
  navbarActive.classList.toggle("active");
});
// Klik dimanapun kecuali hamburger dan nav untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarActive.contains(e.target)) {
    navbarActive.classList.remove("active");
  }
});

// Toggle Search
const search = document.getElementById("search");
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
search.addEventListener("click", function (e) {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
});
// Klik dimanapun kecuali search dan search-form untuk menghilangkan search form
document.addEventListener("click", function (e) {
  if (!search.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
