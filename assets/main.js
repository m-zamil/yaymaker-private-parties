$(document).ready(function () {
  $(".carousel-1").owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: true,
    center: true,
    stagePadding: 0,
    responsive: {
      0: {
        items: 1,
        stagePadding: 50,
      },
      960: {
        items: 3,
        stagePadding: 160,
      },
    },
  });
});
