import NumberIncreaser from "./classes/NumberIncreaser";
import AnvioSlider from "./classes/AnvioSlider";
import { adjustSmoothScrollForAnchors } from "./utils";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

(() => {
  adjustSmoothScrollForAnchors();

  new NumberIncreaser("#info-number-1", 12);
  new NumberIncreaser("#info-number-2", 26);

  new AnvioSlider({
    sliderClassName: ".news-slider",
    nextButtonClassName: ".news-slider__button-next",
    prevButtonClassName: ".news-slider__button-prev",
  });

  new AnvioSlider({
    sliderClassName: ".discounts-slider",
    nextButtonClassName: "#discounts-slider__button-next",
    prevButtonClassName: "#discounts-slider__button-prev",
  });

  new Swiper(".f-slider", {
    modules: [Navigation, Pagination],
    direction: "horizontal",
    // loop: true,
    pagination: {
      el: ".f-slider__pagination",
    },
    navigation: {
      nextEl: ".f-slider__button-next",
      prevEl: ".f-slider__button-prev",
    },
    breakpoints: {
      160: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
})();
