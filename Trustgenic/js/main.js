"use strict";!function(e){var t=document.querySelector(".lower__header");window.addEventListener("scroll",()=>{100<document.documentElement.scrollTop?t.classList.add("stickymenu"):t.classList.remove("stickymenu")});var s=document.getElementById("srch"),o=document.querySelector(".search__bar");s.addEventListener("click",()=>{o.classList.add("show")}),document.getElementById("close").addEventListener("click",()=>{o.classList.remove("show")}),document.getElementById("year").innerHTML=(new Date).getFullYear(),e(".business__slider").owlCarousel({loop:!0,margin:50,dots:!1,nav:!0,responsive:{0:{items:1},600:{items:2},1e3:{items:3}}}),e(".companies__slider").owlCarousel({loop:!0,margin:20,dots:!1,autoplay:!0,autoplayTimeout:3e3,nav:!1,responsive:{0:{items:1},600:{items:3},1e3:{items:5}}}),e(".customer__slider").owlCarousel({loop:!0,margin:20,dots:!0,autoplay:!0,autoplayTimeout:5e3,nav:!1,items:1});var l=document.getElementById("burger"),n=document.getElementById("mobnav");l.addEventListener("click",()=>{l.classList.toggle("opened"),l.setAttribute("aria-expanded",l.classList.contains("opened")),n.classList.toggle("show")}),n.addEventListener("click",()=>{l.classList.toggle("opened"),l.setAttribute("aria-expanded",l.classList.contains("opened")),n.classList.toggle("show")}),document.querySelector(".mob__menu__row").addEventListener("click",e=>{e.stopPropagation()}),document.querySelectorAll("#it").forEach((t,e)=>{t.addEventListener("click",()=>{var e=t.nextElementSibling;t.classList.toggle("show"),e.classList.toggle("show")})});var i=document.getElementById("gotop");window.onscroll=function(){20<document.body.scrollTop||20<document.documentElement.scrollTop?(i.style.visibility="visible",i.style.opacity=1):(i.style.visibility="hidden",i.style.opacity=0)},i.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0})}(jQuery);