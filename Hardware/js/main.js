jQuery(document).ready(function ($) {
  $(".droppe").hover(
    function () {
      $(".drop-box").css("display", "block");
    },
    function () {
      $(".drop-box").css("display", "none");
    }
  );

  //Main Slider
  $(".main-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 1,
    dots: false,
    animateOut: "fadeOut",
    autoplay: true,
  });

  //Featured Slider
  $(".featured-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    autoplay: true,
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

  //FAQ
  $(".bar").click(function () {
    $(this).find(".answer").slideToggle();
  });
});

//Sticky
window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("stickit");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
