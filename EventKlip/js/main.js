"use strict";!function(){console.log("Have a good day 🎈"),window.addEventListener("scroll",()=>{50<document.body.scrollTop||50<document.documentElement.scrollTop?document.querySelector("header").classList.add("sticked"):document.querySelector("header").classList.remove("sticked")});var e=document.querySelector(".nav-icon"),t=document.querySelector(".mob-menu"),o=document.querySelector(".close");e.addEventListener("click",()=>{t.classList.add("open")}),o.addEventListener("click",()=>{t.classList.remove("open")});o=document.querySelector("#phone");intlTelInput(o,{preferredCountries:["np"],separateDialCode:!0});o=document.querySelector("#phone-sign");intlTelInput(o,{preferredCountries:["np"],separateDialCode:!0});let s=document.querySelector(".eye"),r=document.querySelector(".eye-signup"),c=document.querySelector("#password"),n=document.querySelector("#password-signup");s.addEventListener("click",()=>{s.classList.toggle("show"),"password"===c.type?c.type="text":c.type="password"}),r.addEventListener("click",()=>{r.classList.toggle("show"),"password"===n.type?n.type="text":n.type="password"})}();