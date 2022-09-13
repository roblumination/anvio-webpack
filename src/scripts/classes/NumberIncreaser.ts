import { delay } from "../utils";

export default class NumberIncreaser {
  element: HTMLElement;
  isCountStarted: boolean;
  endValue: number;

  constructor(elementClassName: string, endValue: number) {
    const element = document.querySelector<HTMLElement>(elementClassName);
    if (element) {
      this.element = element;
    } else {
      throw new Error("Error with init element");
    }
    this.isCountStarted = false;
    this.endValue = endValue;
    this.initListener();
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
      this.element.innerText = i.toString();
    }
  }
}
