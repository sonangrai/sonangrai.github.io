"use strict";!function(e){AOS.init();var t=document.querySelector("header");window.addEventListener("scroll",()=>{100<document.documentElement.scrollTop?t.classList.add("stickymenu"):t.classList.remove("stickymenu")}),e(".top-slider").owlCarousel({loop:!0,margin:20,dots:!0,autoplayTimeout:5e3,nav:!1,items:1}),e(".bottom-slider").owlCarousel({loop:!0,margin:20,dots:!0,autoplay:!0,autoplayTimeout:5e3,nav:!1,items:1});var o=document.getElementById("gotop");window.onscroll=function(){20<document.body.scrollTop||20<document.documentElement.scrollTop?(o.style.visibility="visible",o.style.opacity=1):(o.style.visibility="hidden",o.style.opacity=0)},o.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0}),function(){for(var e=document.getElementsByClassName("img-comp-overlay"),t=0;t<e.length;t++)!function(n){var i,s,e,d=0;function t(e){e.preventDefault(),d=1,window.addEventListener("mousemove",l),window.addEventListener("touchmove",l)}function o(){d=0}function l(e){var t,o;if(0==d)return!1;o=0,t=(t=e)||window.event,e=n.getBoundingClientRect(),o=t.pageX-e.left,o=o-=window.pageXOffset,o=o=s<(o=o<0?0:o)?s:o,n.style.width=o+"px",i.style.left=n.offsetWidth-i.offsetWidth/2+"px"}s=n.offsetWidth,e=n.offsetHeight,n.style.width=s/2+"px",(i=document.createElement("DIV")).setAttribute("class","img-comp-slider"),n.parentElement.insertBefore(i,n),i.style.top=e/2-i.offsetHeight/2+"px",i.style.left=s/2-i.offsetWidth/2+"px",i.addEventListener("mousedown",t),window.addEventListener("mouseup",o),i.addEventListener("touchstart",t),window.addEventListener("touchend",o)}(e[t])}()}(jQuery);