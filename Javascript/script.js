// Toggle
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
