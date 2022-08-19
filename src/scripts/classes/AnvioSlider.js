import { clamp } from "../utils";

export default class AnvioSlider {
  constructor(config) {
    this.currentSlideNumber = 0;
    this.wrapperOffset = 0;
    this.sideOffset = 30;

    try {
      this.initElements(config);
      this.checkElements(config.sliderClassName);
      this.initListeners();
    } catch (e) {
      console.error(e);
    }
  }

  get lastSlide() {
    return this.slidesList[this.slidesList.length - 1];
  }

  get wrapperWidth() {
    return this.lastSlide.offsetWidth + this.lastSlide.offsetLeft;
  }

  setWrapperOffset(offset) {
    const final = clamp(
      0 - this.sideOffset,
      offset - this.sideOffset,
      this.wrapperWidth - this.sliderEl.offsetWidth + this.sideOffset
    );
    this.wrapperOffset = final;
    this.sliderWrapper.style.transform = `translateX(${-final}px)`;
  }

  addWrapperOffset(offset) {
    const final = this.wrapperOffset + offset;
    this.sliderWrapper.style.transform = `translateX(${-final}px)`;
  }

  initElements(config) {
    this.sliderEl = document.querySelector(config.sliderClassName);
    this.sliderWrapper = this.sliderEl.children[0];
    this.slidesList = this.sliderWrapper.children;
    this.buttons = {
      left: document.querySelector(config.prevButtonClassName),
      right: document.querySelector(config.nextButtonClassName),
    };
  }

  checkElements(sliderClassName) {
    const errorMsgBase = `Anvio Slider (${sliderClassName})`;
    if (!this.sliderEl) {
      throw new Error(errorMsgBase + "invalid slider's classname");
    }
    if (!this.sliderWrapper) {
      throw new Error(errorMsgBase + "doesn't has a track element");
    }
    if (!this.sliderWrapper.children.length) {
      throw new Error(errorMsgBase + "doesn't have slides");
    }
    if (!this.buttons.left || !this.buttons.right) {
      throw new Error(errorMsgBase + "invalid button classnames");
    }
  }

  initListeners() {
    this.buttons.left.addEventListener("click", () => this.prevSlide());
    this.buttons.right.addEventListener("click", () => this.nextSlide());
    this.initTouchListeners();
  }

  initTouchListeners() {
    let touchStartX = 0;
    let touchEndX = 0;

    //
    // START
    //
    this.sliderWrapper.addEventListener("touchstart", (e) => {
      this.sliderWrapper.style.transition = "all 0.1s";
      touchStartX = e.changedTouches[0].clientX;
    });

    //
    // END
    //
    this.sliderWrapper.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].clientX;
      this.setWrapperOffset(this.wrapperOffset + (touchStartX - touchEndX));
      this.sliderWrapper.style.transition = "all 0.5s";
      this.getCurrentSlideNumber();
      // this.adjustSliderOffset();
    });

    //
    // MOVE
    //
    this.sliderWrapper.addEventListener("touchmove", (e) => {
      const touchOffsetX = e.changedTouches[0].clientX;
      this.addWrapperOffset(touchStartX - touchOffsetX);
    });
  }

  nextSlide() {
    this.currentSlideNumber =
      this.currentSlideNumber >= this.slidesList.length - 1
        ? 0
        : this.currentSlideNumber + 1;

    this.adjustSliderOffset();
  }

  prevSlide() {
    this.currentSlideNumber =
      this.currentSlideNumber <= 0
        ? this.slidesList.length - 1
        : this.currentSlideNumber - 1;

    this.adjustSliderOffset();
  }

  adjustSliderOffset() {
    const offsetCurrentSlide =
      this.slidesList[this.currentSlideNumber].offsetLeft;
    const lastSlideOffsetFull =
      this.lastSlide.offsetLeft + this.lastSlide.offsetWidth;
    let finalOffset;

    const isLastSlideVisible =
      lastSlideOffsetFull - offsetCurrentSlide < this.sliderEl.offsetWidth;

    const isCurrentSlideIsLast =
      this.currentSlideNumber == this.slidesList.length - 1;

    if (!isLastSlideVisible) {
      finalOffset = offsetCurrentSlide;
    } else if (isCurrentSlideIsLast) {
      const properIndex =
        this.slidesList.length -
        ~~(this.sliderEl.offsetWidth / this.slidesList[0].offsetWidth) +
        1;
      this.currentSlideNumber = properIndex - 1;
      finalOffset = this.slidesList[this.currentSlideNumber].offsetLeft;
    } else {
      finalOffset =
        this.wrapperWidth - this.sliderEl.offsetWidth + this.sideOffset * 2;
      this.currentSlideNumber = this.slidesList.length - 1;
    }

    this.setWrapperOffset(finalOffset);
  }

  getCurrentSlideNumber() {
    this.currentSlideNumber = ~~(
      this.wrapperOffset / this.slidesList[0].offsetWidth
    );
  }
}
