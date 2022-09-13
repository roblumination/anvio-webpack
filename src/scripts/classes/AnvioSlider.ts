import { clamp } from "../utils";

interface AnvioSliderConfiguration {
  sliderClassName: string;
  nextButtonClassName: string;
  prevButtonClassName: string;

  sideOffset?: { [n: number]: number } | number;
  initSlideNumber?: number;
}

// interface AnvioElementsBundle {
//   sliderEl: HTMLElement;
//   sliderWrapper: HTMLElement;
//   slidesList: HTMLElement | HTMLCollection;
//   buttons: {
//     left: HTMLElement;
//     right: HTMLElement;
//   };
// }

export default class AnvioSlider {
  currentSlideNumber: number;
  wrapperOffset: number;
  touchStartX: number;
  touchEndX: number;
  sideOffset: number;
  slidesList: Array<HTMLElement>;
  sliderEl: HTMLElement;
  sliderWrapper: HTMLElement;
  buttons: { left: HTMLElement; right: HTMLElement };

  constructor({
    sliderClassName,
    nextButtonClassName,
    prevButtonClassName,

    sideOffset = {
      0: 22,
      768: 29,
    },
    initSlideNumber = 0,
  }: AnvioSliderConfiguration) {
    this.currentSlideNumber = initSlideNumber;
    this.wrapperOffset = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;

    if (typeof sideOffset === "number") {
      this.sideOffset = sideOffset;
    } /*if (typeof sideOffset === "object")*/ else {
      this.sideOffset = this.initAdaptiveSideOffset(sideOffset);
    }

    const { sliderEl, leftButton, rightButton } = this.getElements({
      sliderClassName,
      nextButtonClassName,
      prevButtonClassName,
    });

    if (sliderEl && leftButton && rightButton) {
      this.sliderEl = sliderEl;
      this.sliderWrapper = [].slice.call(this.sliderEl.children)[0];
      // this.sliderWrapper = [...this.sliderEl.children];
      this.slidesList = [].slice.call(this.sliderWrapper.children);
      this.buttons = {
        left: leftButton,
        right: rightButton,
      };
    } else {
      throw new Error("Something wrong with initializing elements");
    }
    this.adjustSliderOffset();
  }

  get lastSlide() {
    return this.slidesList[this.slidesList.length - 1];
  }

  get wrapperWidth() {
    return this.lastSlide.offsetWidth + this.lastSlide.offsetLeft;
  }

  initAdaptiveSideOffset(sideOffset: { [n: number]: number }) {
    // const offset = sideOffset;
    const getSliderOffset = () => {
      let result = 0;

      for (let size in sideOffset as any) {
        const s: number = Number(size);
        const body = document.querySelector("body");

        if (body && body.offsetWidth > Number(size)) result = sideOffset[s];
      }

      return result;
    };

    Object.defineProperties(this, {
      sideOffset: {
        get: () => getSliderOffset,
      },
    });

    return getSliderOffset();
  }

  setAbsoluteWrapperOffset(offset: number) {
    const final = clamp(
      0 - this.sideOffset,
      offset - this.sideOffset,
      this.wrapperWidth - this.sliderEl.offsetWidth + this.sideOffset
    );
    this.wrapperOffset = final;
    this.sliderWrapper.style.transform = `translateX(${-final}px)`;
  }

  setRelativeOffset(offset: number) {
    const final = this.wrapperOffset + offset;
    this.sliderWrapper.style.transform = `translateX(${-final}px)`;
  }

  getElements(elementsName: {
    sliderClassName: string;
    nextButtonClassName: string;
    prevButtonClassName: string;
  }) {
    const sliderEl = document.querySelector<HTMLElement>(
      elementsName.sliderClassName
    );
    const leftButton = document.querySelector<HTMLElement>(
      elementsName.prevButtonClassName
    );
    const rightButton = document.querySelector<HTMLElement>(
      elementsName.nextButtonClassName
    );

    return { sliderEl, leftButton, rightButton };
  }

  // initElements(config) {
  //   this.sliderEl = document.querySelector(config.sliderClassName);
  //   this.sliderWrapper = this.sliderEl.children[0];
  //   this.slidesList = this.sliderWrapper.children;
  //   this.buttons = {
  //     left: document.querySelector(config.prevButtonClassName),
  //     right: document.querySelector(config.nextButtonClassName),
  //   };
  // }

  // checkElements(sliderClassName) {
  //   const errorMsgBase = `Anvio Slider (${sliderClassName})`;
  //   if (!this.sliderEl) {
  //     throw new Error(errorMsgBase + "invalid slider's classname");
  //   }
  //   if (!this.sliderWrapper) {
  //     throw new Error(errorMsgBase + "doesn't has a track element");
  //   }
  //   if (!this.sliderWrapper.children.length) {
  //     throw new Error(errorMsgBase + "doesn't have slides");
  //   }
  //   if (!this.buttons.left || !this.buttons.right) {
  //     throw new Error(errorMsgBase + "invalid button classnames");
  //   }
  // }

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

  handleTouchStart(e: TouchEvent) {
    // this.sliderWrapper.style.transition = "all 0.0s";
    this.disableTransitions();
    this.touchStartX = e.changedTouches[0].clientX;
  }

  handleTouchMove(e: TouchEvent) {
    const touchOffsetX = e.changedTouches[0].clientX;
    this.setRelativeOffset(this.touchStartX - touchOffsetX);
  }

  handleTouchEnd(e: TouchEvent) {
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
