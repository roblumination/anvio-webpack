import AnvioSlider from './AnvioSlider';

const params = {
  sliderClassName: '.anvio-slider',
  // wrapperClass: '.anvio-slider__wrapper',
  // slideClass: 'anvio-slider__slide',
  nextButtonClassName: '.anvio-slider__button-next',
  prevButtonClassName: '.anvio-slider__button-prev',
  sideOffset: 15,
};

let testSlider = new AnvioSlider({
  sliderClassName: '.anvio-slider',
  nextButtonClassName: '.anvio-slider__button-next',
  prevButtonClassName: '.anvio-slider__button-prev',
});
