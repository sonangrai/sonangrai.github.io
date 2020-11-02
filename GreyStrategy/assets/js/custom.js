$(".main-slider").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  items: 1,
  autoplay: true,
});
$(".team-owl").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  items: 1,
});
$(".impact-owl").owlCarousel({
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay: true,
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
