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
var currentactive2 = document.querySelector(".big__menu__item.active");
var allmobilemenu2 = document.querySelectorAll(".big__menu__item");
//Looping Throught the all menu items
allmobilemenu2.forEach((a, i) => {
  allmobilemenu2[i].addEventListener("click", () => {
    //Removing Current Active
    currentactive2.classList.remove("active");
    //Setting New Active
    currentactive2 = allmobilemenu2[i];
    allmobilemenu2[i].classList.add("active");
  });
});

/*
  Making the active getting postion
*/

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

/*
  Sticky menu
*/
var lastScrollTop = 0;
var header = document.getElementsByTagName("header")[0];
window.addEventListener("scroll", () => {
  var st = document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    header.classList.remove("stickymenu");
  } else if (st == 0) {
    header.classList.remove("stickymenu");
  } else {
    // upscroll code
    header.classList.add("stickymenu");
  }
  lastScrollTop = st;
});

//Date to footer
var datebox = document.querySelector("#date");
var year = new Date().getFullYear();
datebox.innerHTML = year;
