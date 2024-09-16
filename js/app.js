let nav = document.querySelector("nav");
let welcomeInfo = nav.nextElementSibling;

window.onscroll = function () {
  if (window.scrollY > 100) {
    nav.classList.add("top");
    nav.querySelector("img").classList.add("top");
    welcomeInfo.style.paddingTop = window
      .getComputedStyle(nav)
      .getPropertyValue("height");
  } else {
    nav.classList.remove("top");
    nav.querySelector("img").classList.remove("top");
    welcomeInfo.style.paddingTop = 0;
  }
};
