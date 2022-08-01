window.onload = function () {
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

  //faq's accordion script
  const items = document.querySelectorAll(".accordion button");
  function toggleAccordion() {
    const itemToggle = this.getAttribute("aria-expanded");
    for (i = 0; i < items.length; i++) {
      items[i].setAttribute("aria-expanded", "false");
    }
    if (itemToggle == "false") {
      this.setAttribute("aria-expanded", "true");
    }
  }
  items.forEach((item) => item.addEventListener("click", toggleAccordion));
};
