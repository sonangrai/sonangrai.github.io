"use strict";!function(){var e=new Date,t=new Array(7);t[0]="Sunday",t[1]="Monday",t[2]="Tuesday",t[3]="Wednesday",t[4]="Thursday",t[5]="Friday",t[6]="Saturday";var n=new Array(12);n[0]="Janauary",n[1]="Febrauray",n[2]="March",n[3]="April",n[4]="May",n[5]="June",n[6]="July",n[7]="August",n[8]="September",n[9]="October",n[10]="November",n[11]="December";var r=document.getElementById("date"),a=e.getFullYear(),t=t[e.getDay()],n=n[e.getMonth()],e=(new Date).getDate();r.innerHTML=t+" "+n+" "+e+" , "+a+" ",document.getElementById("gotop").addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0});var d=document.querySelector(".lower-head");window.addEventListener("scroll",()=>{130<document.documentElement.scrollTop?d.classList.add("stickymenu"):d.classList.remove("stickymenu")});var e=document.getElementById("ham"),o=document.querySelector(".mobile-nav"),a=document.querySelector(".closer");e.addEventListener("click",()=>{o.classList.add("show")}),a.addEventListener("click",()=>{o.classList.remove("show")})}();