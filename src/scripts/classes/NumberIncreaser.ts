import { delay } from "../utils";

export default class NumberIncreaser {
  constructor(elementClass, endValue) {
    this.element;
    this.isCountStarted = false;
    this.endValue = endValue;
    this.initElement(elementClass);
    this.initListener();
  }

  initElement(elementClass) {
    try {
      this.element = document.querySelector(elementClass);
      if (!this.element)
        throw new Error(`Number Increaser: ${elementClass} not found`);
    } catch (e) {
      console.error(e);
    }
  }

  initListener() {
    const elementTopOffset = this.element.offsetTop;

    window.addEventListener("scroll", () => {
      const isNecessaryOffsetReached = window.scrollY > elementTopOffset - 600;

      if (!this.isCountStarted && isNecessaryOffsetReached) {
        this.isCountStarted = true;
        this.startInfoCount();
      }
    });
  }

  async startInfoCount() {
    for (let i = 0; i <= this.endValue; i++) {
      // if (i <= num1Max) infoNum1.innerText = i;
      await delay(40);
      this.element.innerText = i;
    }
  }
}
