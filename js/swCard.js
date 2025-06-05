const swCard = new Swiper(".sw-card", {
  centeredSlides: false,
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //반응형
  breakpoints: {
    320: {
      centeredSlides: true,
      spaceBetween: 20,
    },
    768: {
      centeredSlides: false,
      spaceBetween: 30,
    },
    1220: {
      centeredSlides: false,
      spaceBetween: 30,
    },
  },
});
