const slider = {
  arrow: {
    left: document.getElementById("slid-arrow-1L"),
    right: document.getElementById("slid-arrow-1R"),
  },
  extender: document.getElementById("ext-1"),
  indicators: document.getElementsByClassName("indicator-dot"),
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
  // console.log(slider.indicators[slider.position]);
  [].forEach.call(slider.indicators, (ind) => {
    ind.style.opacity = "0.5";
  });
}
