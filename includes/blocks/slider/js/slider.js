import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";

const ATTRIBUTES = {
  slidesPerGroup: "data-slides-per-group",
  slidesPerView: "data-slides-per-view",
  spaceBetween: "data-space-between",
  loopMode: "data-loop-mode",
  pagination: "data-pagination",
  navigation: "data-navigation",
};

const getAttribute = (element, attribute) => {
  return element.getAttribute(attribute);
};

const getSlidesPerGroup = (element) =>
  parseInt(getAttribute(element, ATTRIBUTES.slidesPerGroup)) || 1;

const getSlidesPerView = (element) =>
  parseInt(getAttribute(element, ATTRIBUTES.slidesPerView)) || 1;

const getSpaceBetween = (element) =>
  parseInt(getAttribute(element, ATTRIBUTES.spaceBetween)) || 0;

const getLoopMode = (element) =>
  getAttribute(element, ATTRIBUTES.loopMode) === "true";

const getPagination = (element) =>
  getAttribute(element, ATTRIBUTES.pagination) === "true"
    ? {
        el: ".swiper-pagination",
        clickable: true,
      }
    : false;

const getNavigation = (element) =>
  getAttribute(element, ATTRIBUTES.navigation) === "true"
    ? {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }
    : false;

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
      slidesPerGroup: getSlidesPerGroup(sliderElement),
      slidesPerView: getSlidesPerView(sliderElement),
      spaceBetween: getSpaceBetween(sliderElement),
      loop: getLoopMode(sliderElement),
      pagination: getPagination(sliderElement),
      navigation: getNavigation(sliderElement),
      scrollbar: {
        el: ".swiper-scrollbar",
      },
    });
  });
});
