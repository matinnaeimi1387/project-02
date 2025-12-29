window.addEventListener("load",()=> {
    var swiper = new Swiper(".mySwiperf", {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
})