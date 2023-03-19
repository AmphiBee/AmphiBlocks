import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";

document.addEventListener("DOMContentLoaded", function () {
  const sliderElements = document.querySelectorAll(
    ".wp-block-amphiblocks-slider.swiper"
  );

  sliderElements.forEach((sliderElement) => {
    let swiperWrapper = sliderElement.querySelector(".swiper-wrapper");
    var swiperSlides = swiperWrapper.children;

    for (var i = 0; i < swiperSlides.length; i++) {
      var newSlide = document.createElement("div");
      newSlide.classList.add("swiper-slide");
      newSlide.appendChild(swiperSlides[i].cloneNode(true));
      swiperWrapper.replaceChild(newSlide, swiperSlides[i]);
    }

    new Swiper(sliderElement, {
      modules: [Navigation, Pagination],
      slidesPerView:
        parseInt(sliderElement.getAttribute("data-slides-per-view")) || 1,
      spaceBetween:
        parseInt(sliderElement.getAttribute("data-space-between")) || 0,
      loop: sliderElement.getAttribute("data-loop-mode") === "true",
      pagination:
        sliderElement.getAttribute("data-pagination") === "true"
          ? {
              el: ".swiper-pagination",
              clickable: true,
            }
          : false,
      navigation:
        sliderElement.getAttribute("data-navigation") === "true"
          ? {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }
          : false,
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  });
});
