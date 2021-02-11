/*
    For Mobile Menu Changing active on click
*/
var currentactive = document.querySelector(".mobile__menu__item.active");
var allmobilemenu = document.querySelectorAll(".mobile__menu__item");
//Looping Throught the all menu items
allmobilemenu.forEach((a, i) => {
  allmobilemenu[i].addEventListener("click", () => {
    //Removing Current Active
    currentactive.classList.remove("active");
    //Setting New Active
    currentactive = allmobilemenu[i];
    allmobilemenu[i].classList.add("active");
  });
});

/* 
    Mobile menu toggle
*/
var menuicon = document.querySelector(".mobile__nav");
var mobilemenu = document.querySelector(".mobile__menu");
var clickcnt = 0;
menuicon.addEventListener("click", () => {
  if (clickcnt % 2 == 0) {
    mobilemenu.style.left = "0";
    menuicon.classList.add("tog");
  } else {
    mobilemenu.style.left = "-100vw";
    menuicon.classList.remove("tog");
  }
  clickcnt++;
});
