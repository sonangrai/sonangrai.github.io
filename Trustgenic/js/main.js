"use strict";

(function ($) {
  //Search Slide
  var srch = document.getElementById("srch");
  var srchbar = document.querySelector(".search__bar");
  srch.addEventListener("click", () => {
    srchbar.classList.add("show");
  });
  var cls = document.getElementById("close");
  cls.addEventListener("click", () => {
    srchbar.classList.remove("show");
  });

  var date = document.getElementById("year");
  date.innerHTML = new Date().getFullYear();

  //SLider
  $(".business__slider").owlCarousel({
    loop: true,
    margin: 50,
    dots: false,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".companies__slider").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
  $(".customer__slider").owlCarousel({
    loop: true,
    margin: 20,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: false,
    items: 1,
  });

  //Ham Anime
  var ham = document.getElementById("burger");
  var mobnav = document.getElementById("mobnav");
  ham.addEventListener("click", () => {
    ham.classList.toggle("opened");
    ham.setAttribute("aria-expanded", ham.classList.contains("opened"));
    mobnav.classList.toggle("show");
  });
  mobnav.addEventListener("click", () => {
    ham.classList.toggle("opened");
    ham.setAttribute("aria-expanded", ham.classList.contains("opened"));
    mobnav.classList.toggle("show");
  });
  var blue = document.querySelector(".mob__menu__row");
  blue.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  //Accordion
  var acc = document.querySelectorAll("#it");
  acc.forEach((a, i) => {
    a.addEventListener("click", () => {
      var ch = a.nextElementSibling;
      a.classList.toggle("show");
      ch.classList.toggle("show");
    });
  });
})(jQuery);
