"use strict";!function(e){AOS.init({disable:function(){return window.innerWidth<580}});var o=document.querySelector(".header");window.addEventListener("scroll",()=>{100<document.documentElement.scrollTop?o.classList.add("stickymenu"):o.classList.remove("stickymenu")}),e(".top-slider").owlCarousel({loop:!0,margin:20,dots:!0,autoplay:!0,autoplayTimeout:3e3,nav:!1,items:1}),e(".bottom-slider").owlCarousel({loop:!0,margin:20,dots:!0,autoplay:!0,autoplayTimeout:5e3,nav:!1,items:1});var t=document.getElementById("gotop");window.onscroll=function(){20<document.body.scrollTop||20<document.documentElement.scrollTop?(t.style.visibility="visible",t.style.opacity=1):(t.style.visibility="hidden",t.style.opacity=0)},t.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0}),e(".beforeimagetest").cndkbeforeafter({showText:!1,seperatorColor:"blue",seperatorWidth:"1px",hoverEffect:!1,mode:"drag",beforeTextPosition:"top-left"})}(jQuery);