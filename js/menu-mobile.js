var buttonMenu = document.querySelector(".main-nav__toggle");
var menuNav = document.querySelector(".main-nav");

menuNav.classList.remove("main-nav--no-js");

buttonMenu.addEventListener("click", function(){
  if (menuNav.classList.contains("main-nav--closed")) {
    menuNav.classList.remove("main-nav--closed");
    menuNav.classList.add("main-nav--opened");
  } else {
    menuNav.classList.remove("main-nav--opened");
    menuNav.classList.add("main-nav--closed");
  }
})