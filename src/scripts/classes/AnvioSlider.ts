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
  wrapperOffset: number = 0;
  touchStartX: number = 0;
  touchEndX: number = 0;
  sideOffsetSet: { [n: number]: number };
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

    if (typeof sideOffset === "number") {
      this.sideOffset = sideOffset;
      this.sideOffsetSet = { 0: sideOffset };
    } else {
      this.sideOffsetSet = sideOffset;
      this.sideOffset = 0;
      this.initAdaptiveSideOffset();
    }

    const { sliderEl, leftButton, rightButton } = this.getElements({
      sliderClassName,
      nextButtonClassName,
      prevButtonClassName,
    });

    if (sliderEl && leftButton && rightButton) {
      this.sliderEl = sliderEl;
      this.sliderWrapper = [].slice.call(this.sliderEl.children)[0];
      this.slidesList = [].slice.call(this.sliderWrapper.children);
      this.buttons = {
        left: leftButton,
        right: rightButton,
      };
    } else {
      throw new Error("Something wrong with initializing elements");
    }
    this.initListeners();
    this.adjustSliderOffset();
  }

  get lastSlide() {
    return this.slidesList[this.slidesList.length - 1];
  }

  get wrapperWidth() {
    return this.lastSlide.offsetWidth + this.lastSlide.offsetLeft;
  }

  private initAdaptiveSideOffset() {
    const getSliderOffset = () => {
      let result = 0;

      for (let size in this.sideOffsetSet) {
        const s = Number(size);
        const body = document.querySelector("body");

        if (body && body.offsetWidth > s) result = this.sideOffsetSet[s];
      }

      return result;
    };

    Object.defineProperties(this, {
      sideOffset: {
        get: getSliderOffset,
      },
    });
  }

  // Regular slides position setter.
  setAbsoluteWrapperOffset(offset: number) {
    const final = clamp(
      0 - this.sideOffset,
      offset - this.sideOffset,
      this.wrapperWidth - this.sliderEl.offsetWidth + this.sideOffset
    );
    this.wrapperOffset = final;
    this.sliderWrapper.style.transform = `translateX(${-final}px)`;
  }

  // Used for touch events. Slides folows finger.
  setRelativeOffset(offset: number) {
    const final = this.wrapperOffset + offset;
    this.sliderWrapper.style.transform = `translateX(${-final}px)`;
  }

  private getElements(elementsName: {
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

  private initListeners() {
    const vibrate = () => navigator.vibrate(10);

    this.buttons.left.addEventListener("click", () => {
      console.log("left");
      vibrate();
      this.prevSlide();
    });
    this.buttons.right.addEventListener("click", () => {
      console.log("right");
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

  private handleTouchStart(e: TouchEvent) {
    // this.sliderWrapper.style.transition = "all 0.0s";
    this.disableTransitions();
    this.touchStartX = e.changedTouches[0].clientX;
  }

  private handleTouchMove(e: TouchEvent) {
    const touchOffsetX = e.changedTouches[0].clientX;
    this.setRelativeOffset(this.touchStartX - touchOffsetX);
  }

  private handleTouchEnd(e: TouchEvent) {
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

  private adjustSliderOffset() {
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

  private enableTransitions() {
    this.sliderWrapper.style.transition = "all 0.5s";
  }

  private disableTransitions() {
    this.sliderWrapper.style.transition = "all 0s";
  }

  private updpateCurrentSlideNumber() {
    this.currentSlideNumber = ~~(
      this.wrapperOffset / this.slidesList[0].offsetWidth
    );
  }
}
