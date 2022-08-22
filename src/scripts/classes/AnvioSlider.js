import { clamp } from "../utils";

export default class AnvioSlider {
  constructor({
    sliderClassName,
    nextButtonClassName,
    prevButtonClassName,

    sideOffset = {
      0: 22,
      768: 29,
    },
    initSlideNumber = 0,
  }) {
    this.currentSlideNumber = initSlideNumber;
    this.wrapperOffset = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;
    // this.sideOffset = 30;

    try {
      this.initElements({
        sliderClassName,
        nextButtonClassName,
        prevButtonClassName,
      });
      this.checkElements(sliderClassName);
      this.initListeners();
      this.initAdaptiveSideOffset(sideOffset);
    } catch (e) {
      console.error(e);
    }
    this.adjustSliderOffset();
  }

  get lastSlide() {
    return this.slidesList[this.slidesList.length - 1];
  }

  get wrapperWidth() {
    return this.lastSlide.offsetWidth + this.lastSlide.offsetLeft;
  }

  initAdaptiveSideOffset(sideOffset) {
    const offset = sideOffset;
    const funcIfObject = () => {
      let result = "empty result";

      for (let size in offset) {
        if (document.querySelector("body").offsetWidth > size)
          result = offset[size];
      }

      return result;
    };

    Object.defineProperties(this, {
      sideOffset: {
        get: typeof sideOffset !== "object" ? () => offset : funcIfObject,
      },
    });
  }

  setAbsoluteWrapperOffset(offset) {
    const final = clamp(
      0 - this.sideOffset,
      offset - this.sideOffset,
      this.wrapperWidth - this.sliderEl.offsetWidth + this.sideOffset
    );
    this.wrapperOffset = final;
    this.sliderWrapper.style.transform = `translateX(${-final}px)`;
  }

  setRelativeOffset(offset) {
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
    const vibrate = () => navigator.vibrate(10);

    this.buttons.left.addEventListener("click", () => {
      vibrate();
      this.prevSlide();
    });
    this.buttons.right.addEventListener("click", () => {
      vibrate();
      this.nextSlide();
    });

    this.sliderWrapper.addEventListener("touchstart", (e) =>
      this.handleTouchStart(e)
    );
    this.sliderWrapper.addEventListener("touchmove", (e) => {
      this.handleTouchMove(e);
    });
    this.sliderWrapper.addEventListener("touchend", (e) => {
      this.handleTouchEnd(e);
    });
    // this.initTouchListeners();
  }

  handleTouchStart(e) {
    // this.sliderWrapper.style.transition = "all 0.0s";
    this.disableTransitions();
    this.touchStartX = e.changedTouches[0].clientX;
  }

  handleTouchMove(e) {
    const touchOffsetX = e.changedTouches[0].clientX;
    this.setRelativeOffset(this.touchStartX - touchOffsetX);
  }

  handleTouchEnd(e) {
    this.touchEndX = e.changedTouches[0].clientX;
    this.setAbsoluteWrapperOffset(
      this.wrapperOffset + (this.touchStartX - this.touchEndX)
    );
    this.enableTransitions();
    this.updpateCurrentSlideNumber();
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
    const isLastSlideVisible =
      lastSlideOffsetFull - offsetCurrentSlide < this.sliderEl.offsetWidth;
    const isCurrentSlideIsLast =
      this.currentSlideNumber == this.slidesList.length - 1;
    let finalOffset;

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

    this.setAbsoluteWrapperOffset(finalOffset);
  }

  enableTransitions() {
    this.sliderWrapper.style.transition = "all 0.5s";
  }

  disableTransitions() {
    this.sliderWrapper.style.transition = "all 0s";
  }

  updpateCurrentSlideNumber() {
    this.currentSlideNumber = ~~(
      this.wrapperOffset / this.slidesList[0].offsetWidth
    );
  }
}
