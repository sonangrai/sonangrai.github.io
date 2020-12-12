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
    nav: false,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
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

//Product Owl Carousel
$(document).ready(function () {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: true,
      dots: false,
      loop: true,
      responsiveRefreshRate: 200,
      navText: [
        '<i class="flaticon-left-arrow"></i>',
        '<i class="flaticon-right-arrow"></i>',
      ],
    })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function () {
      thumbs.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
      items: 4,
      dots: false,
      nav: false,
      margin: 10,
      autoplayHoverPause: true,
      smartSpeed: 200,
      slideSpeed: 500,
      autoplay: true,
      slideBy: 4,
      responsiveRefreshRate: 100,
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs.find(".owl-item.active").first().index();
    var end = thumbs.find(".owl-item.active").last().index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});

//Review
const starEls = document.querySelectorAll(".star.rating");
starEls.forEach((star) => {
  star.addEventListener("click", function (e) {
    let starEl = e.currentTarget;
    console.log(starEl.parentNode.dataset.stars + ", " + starEl.dataset.rating);
    starEl.parentNode.setAttribute("data-stars", starEl.dataset.rating);
  });
});
