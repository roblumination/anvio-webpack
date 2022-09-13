const [
  cSliderArrowLeft,
  cSliderArrowRight,
  cSliderExtender,
  cSliderIndicators,
] = [
  document.getElementById("slid-arrow-1L"),
  document.getElementById("slid-arrow-1R"),
  document.getElementById("ext-1"),
  document.querySelectorAll<HTMLElement>(".indicator-dot"),
];

const cSliderElementOk =
  cSliderArrowLeft && cSliderArrowRight && cSliderExtender && cSliderIndicators;

if (cSliderElementOk) {
  const slider = {
    arrow: {
      left: cSliderArrowLeft,
      right: cSliderArrowRight,
    },
    extender: cSliderExtender,
    indicators: cSliderIndicators,
    position: 0,
    maxPosition: 2,
  };

  slider.arrow.left.addEventListener("click", () => {
    if (slider.position == 0) {
      slider.position = slider.maxPosition;
    } else {
      slider.position--;
    }

    slider.extender.style.transform = `translateX(-${
      (100 / (slider.maxPosition + 1)) * slider.position
    }%)`;

    offAllIndicators();
    slider.indicators[slider.position].style.opacity = "1";
  });

  slider.arrow.right.addEventListener("click", () => {
    if (slider.position == slider.maxPosition) {
      slider.position = 0;
    } else {
      slider.position++;
    }

    slider.extender.style.transform = `translateX(-${
      (100 / (slider.maxPosition + 1)) * slider.position
    }%)`;

    offAllIndicators();
    slider.indicators[slider.position].style.opacity = "1";
  });

  function offAllIndicators() {
    // [].forEach.call(slider.indicators, (ind) => {
    //   ind.style.opacity = "0.5";
    // });
    slider.indicators.forEach((indicator) => {
      indicator.style.opacity = "0.5";
    });
  }
}
