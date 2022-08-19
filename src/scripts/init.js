import NumberIncreaser from "./classes/NumberIncreaser";
import AnvioSlider from "./classes/AnvioSlider";
import { adjustSmoothScrollForAnchors } from "./utils";
import Swiper, { Navigation, Pagination } from "swiper";

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
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".f-slider__pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".f-slider__button-next",
      prevEl: ".f-slider__button-prev",
    },
  });
})();
