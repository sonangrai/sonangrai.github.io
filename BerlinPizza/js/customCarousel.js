window.addEventListener("DOMContentLoaded",e=>{const t=document.querySelector(".carousel"),r=t.querySelector(".prev"),c=t.querySelector(".next");c.addEventListener("click",e=>{e.preventDefault();e=t.querySelector(".active").nextElementSibling;t.querySelector(".active").classList.remove("active"),e?i(e):i(t.querySelector(".image-container").firstElementChild)}),r.addEventListener("click",e=>{e.preventDefault();e=t.querySelector(".active").previousElementSibling;t.querySelector(".active").classList.remove("active"),e?i(e):i(t.querySelector(".image-container").lastElementChild)});const i=e=>{e.scrollIntoView({behavior:"smooth",block:"center",inline:"start"}),e.classList.add("active")}});