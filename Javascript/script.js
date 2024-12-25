// Toggle Menu
const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarActive = document.querySelector(".navbar-nav");
// Ketika Hamburger menu di klik
hamburgerMenu.addEventListener("click", function (e) {
  navbarActive.classList.toggle("active");
  e.preventDefault();
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
// Toggle untuk Shopping Cart
const btnShop = document.getElementById("shopping-bag");
const shoppingCart = document.querySelector(".shoping-cart");
btnShop.addEventListener("click", function () {
  shoppingCart.classList.toggle("active");
});
// Klik dimanapun kecuali shop dan shopping cart untuk menghilangkan shopping cart
document.addEventListener("click", function (e) {
  if (!btnShop.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});
// Untuk menghapus Produk di shopping cart
const removeItem = querySelectorAll(".remove-item");
const cartItem = querySelector(".cart-item");
removeItem.forEach(function (index) {
  index.addEventListener("click", function () {
    cartItem.style.display = "none";
  });
});
// shoppingCart.addEventListener("click", function (e) {
//   if (e.target.className == "remove-item") {
//     cartItem.style.display = "none";
//   }
// });
