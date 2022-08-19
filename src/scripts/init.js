import NumberIncreaser from "./classes/NumberIncreaser";
import AnvioSlider from "./classes/AnvioSlider";
import { adjustSmoothScrollForAnchors } from "./utils";

(() => {
  adjustSmoothScrollForAnchors();

  new NumberIncreaser("#info-number-1", 12);
  new NumberIncreaser("#info-number-2", 26);

  new AnvioSlider({
    sliderClassName: ".anvio-slider",
    nextButtonClassName: ".anvio-slider__button-next",
    prevButtonClassName: ".anvio-slider__button-prev",
  });
})();
