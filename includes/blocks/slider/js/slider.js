import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", function () {
  var swiperWrapper = document.querySelector(
    ".wp-block-amphiblocks-slider.swiper .swiper-wrapper"
  );
  var swiperSlides = swiperWrapper.children;

  for (var i = 0; i < swiperSlides.length; i++) {
    var newSlide = document.createElement("div");
    newSlide.classList.add("swiper-slide");
    newSlide.appendChild(swiperSlides[i].cloneNode(true));
    swiperWrapper.replaceChild(newSlide, swiperSlides[i]);
  }

  var swiper = new Swiper(".wp-block-amphiblocks-slider.swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
});
