"use strict";
(self["webpackChunkanwebpack"] = self["webpackChunkanwebpack"] || []).push([["sliders"],{

/***/ "./src/scripts/AnvioSlider.js":
/*!************************************!*\
  !*** ./src/scripts/AnvioSlider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AnvioSlider)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");


class AnvioSlider {
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
    const final = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.clamp)(
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


/***/ }),

/***/ "./src/scripts/slidersInit.js":
/*!************************************!*\
  !*** ./src/scripts/slidersInit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnvioSlider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnvioSlider */ "./src/scripts/AnvioSlider.js");


const params = {
  sliderClassName: ".anvio-slider",
  // wrapperClass: '.anvio-slider__wrapper',
  // slideClass: 'anvio-slider__slide',
  nextButtonClassName: ".anvio-slider__button-next",
  prevButtonClassName: ".anvio-slider__button-prev",
  sideOffset: 15,
};

let testSlider = new _AnvioSlider__WEBPACK_IMPORTED_MODULE_0__["default"]({
  sliderClassName: ".anvio-slider",
  nextButtonClassName: ".anvio-slider__button-next",
  prevButtonClassName: ".anvio-slider__button-prev",
});


/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "delay": () => (/* binding */ delay)
/* harmony export */ });
function clamp(min, val, max) {
  return Math.min(Math.max(val, min), max);
}

function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/slidersInit.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVycy4yOTliYWY2NmU4MTk1MDE2NWVkNy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQzs7QUFFakI7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiw2Q0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELE9BQU87QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxnQkFBZ0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5SndDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixvREFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDZk07QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Fud2VicGFjay8uL3NyYy9zY3JpcHRzL0FudmlvU2xpZGVyLmpzIiwid2VicGFjazovL2Fud2VicGFjay8uL3NyYy9zY3JpcHRzL3NsaWRlcnNJbml0LmpzIiwid2VicGFjazovL2Fud2VicGFjay8uL3NyYy9zY3JpcHRzL3V0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsYW1wIH0gZnJvbSBcIi4vdXRpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW52aW9TbGlkZXIge1xuICBjb25zdHJ1Y3Rvcihjb25maWcpIHtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZU51bWJlciA9IDA7XG4gICAgdGhpcy53cmFwcGVyT2Zmc2V0ID0gMDtcbiAgICB0aGlzLnNpZGVPZmZzZXQgPSAzMDtcblxuICAgIHRyeSB7XG4gICAgICB0aGlzLmluaXRFbGVtZW50cyhjb25maWcpO1xuICAgICAgdGhpcy5jaGVja0VsZW1lbnRzKGNvbmZpZy5zbGlkZXJDbGFzc05hbWUpO1xuICAgICAgdGhpcy5pbml0TGlzdGVuZXJzKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbGFzdFNsaWRlKCkge1xuICAgIHJldHVybiB0aGlzLnNsaWRlc0xpc3RbdGhpcy5zbGlkZXNMaXN0Lmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZ2V0IHdyYXBwZXJXaWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0U2xpZGUub2Zmc2V0V2lkdGggKyB0aGlzLmxhc3RTbGlkZS5vZmZzZXRMZWZ0O1xuICB9XG5cbiAgc2V0V3JhcHBlck9mZnNldChvZmZzZXQpIHtcbiAgICBjb25zdCBmaW5hbCA9IGNsYW1wKFxuICAgICAgMCAtIHRoaXMuc2lkZU9mZnNldCxcbiAgICAgIG9mZnNldCAtIHRoaXMuc2lkZU9mZnNldCxcbiAgICAgIHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5zbGlkZXJFbC5vZmZzZXRXaWR0aCArIHRoaXMuc2lkZU9mZnNldFxuICAgICk7XG4gICAgdGhpcy53cmFwcGVyT2Zmc2V0ID0gZmluYWw7XG4gICAgdGhpcy5zbGlkZXJXcmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LWZpbmFsfXB4KWA7XG4gIH1cblxuICBhZGRXcmFwcGVyT2Zmc2V0KG9mZnNldCkge1xuICAgIGNvbnN0IGZpbmFsID0gdGhpcy53cmFwcGVyT2Zmc2V0ICsgb2Zmc2V0O1xuICAgIHRoaXMuc2xpZGVyV3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkey1maW5hbH1weClgO1xuICB9XG5cbiAgaW5pdEVsZW1lbnRzKGNvbmZpZykge1xuICAgIHRoaXMuc2xpZGVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zbGlkZXJDbGFzc05hbWUpO1xuICAgIHRoaXMuc2xpZGVyV3JhcHBlciA9IHRoaXMuc2xpZGVyRWwuY2hpbGRyZW5bMF07XG4gICAgdGhpcy5zbGlkZXNMaXN0ID0gdGhpcy5zbGlkZXJXcmFwcGVyLmNoaWxkcmVuO1xuICAgIHRoaXMuYnV0dG9ucyA9IHtcbiAgICAgIGxlZnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnByZXZCdXR0b25DbGFzc05hbWUpLFxuICAgICAgcmlnaHQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLm5leHRCdXR0b25DbGFzc05hbWUpLFxuICAgIH07XG4gIH1cblxuICBjaGVja0VsZW1lbnRzKHNsaWRlckNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVycm9yTXNnQmFzZSA9IGBBbnZpbyBTbGlkZXIgKCR7c2xpZGVyQ2xhc3NOYW1lfSlgO1xuICAgIGlmICghdGhpcy5zbGlkZXJFbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTXNnQmFzZSArIFwiaW52YWxpZCBzbGlkZXIncyBjbGFzc25hbWVcIik7XG4gICAgfVxuICAgIGlmICghdGhpcy5zbGlkZXJXcmFwcGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNc2dCYXNlICsgXCJkb2Vzbid0IGhhcyBhIHRyYWNrIGVsZW1lbnRcIik7XG4gICAgfVxuICAgIGlmICghdGhpcy5zbGlkZXJXcmFwcGVyLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTXNnQmFzZSArIFwiZG9lc24ndCBoYXZlIHNsaWRlc1wiKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmJ1dHRvbnMubGVmdCB8fCAhdGhpcy5idXR0b25zLnJpZ2h0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNc2dCYXNlICsgXCJpbnZhbGlkIGJ1dHRvbiBjbGFzc25hbWVzXCIpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5idXR0b25zLmxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMucHJldlNsaWRlKCkpO1xuICAgIHRoaXMuYnV0dG9ucy5yaWdodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5uZXh0U2xpZGUoKSk7XG4gICAgdGhpcy5pbml0VG91Y2hMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGluaXRUb3VjaExpc3RlbmVycygpIHtcbiAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgIGxldCB0b3VjaEVuZFggPSAwO1xuXG4gICAgLy9cbiAgICAvLyBTVEFSVFxuICAgIC8vXG4gICAgdGhpcy5zbGlkZXJXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChlKSA9PiB7XG4gICAgICB0aGlzLnNsaWRlcldyYXBwZXIuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuMXNcIjtcbiAgICAgIHRvdWNoU3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH0pO1xuXG4gICAgLy9cbiAgICAvLyBFTkRcbiAgICAvL1xuICAgIHRoaXMuc2xpZGVyV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgKGUpID0+IHtcbiAgICAgIHRvdWNoRW5kWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIHRoaXMuc2V0V3JhcHBlck9mZnNldCh0aGlzLndyYXBwZXJPZmZzZXQgKyAodG91Y2hTdGFydFggLSB0b3VjaEVuZFgpKTtcbiAgICAgIHRoaXMuc2xpZGVyV3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC41c1wiO1xuICAgICAgdGhpcy5nZXRDdXJyZW50U2xpZGVOdW1iZXIoKTtcbiAgICAgIC8vIHRoaXMuYWRqdXN0U2xpZGVyT2Zmc2V0KCk7XG4gICAgfSk7XG5cbiAgICAvL1xuICAgIC8vIE1PVkVcbiAgICAvL1xuICAgIHRoaXMuc2xpZGVyV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIChlKSA9PiB7XG4gICAgICBjb25zdCB0b3VjaE9mZnNldFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICB0aGlzLmFkZFdyYXBwZXJPZmZzZXQodG91Y2hTdGFydFggLSB0b3VjaE9mZnNldFgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmV4dFNsaWRlKCkge1xuICAgIHRoaXMuY3VycmVudFNsaWRlTnVtYmVyID1cbiAgICAgIHRoaXMuY3VycmVudFNsaWRlTnVtYmVyID49IHRoaXMuc2xpZGVzTGlzdC5sZW5ndGggLSAxXG4gICAgICAgID8gMFxuICAgICAgICA6IHRoaXMuY3VycmVudFNsaWRlTnVtYmVyICsgMTtcblxuICAgIHRoaXMuYWRqdXN0U2xpZGVyT2Zmc2V0KCk7XG4gIH1cblxuICBwcmV2U2xpZGUoKSB7XG4gICAgdGhpcy5jdXJyZW50U2xpZGVOdW1iZXIgPVxuICAgICAgdGhpcy5jdXJyZW50U2xpZGVOdW1iZXIgPD0gMFxuICAgICAgICA/IHRoaXMuc2xpZGVzTGlzdC5sZW5ndGggLSAxXG4gICAgICAgIDogdGhpcy5jdXJyZW50U2xpZGVOdW1iZXIgLSAxO1xuXG4gICAgdGhpcy5hZGp1c3RTbGlkZXJPZmZzZXQoKTtcbiAgfVxuXG4gIGFkanVzdFNsaWRlck9mZnNldCgpIHtcbiAgICBjb25zdCBvZmZzZXRDdXJyZW50U2xpZGUgPVxuICAgICAgdGhpcy5zbGlkZXNMaXN0W3RoaXMuY3VycmVudFNsaWRlTnVtYmVyXS5vZmZzZXRMZWZ0O1xuICAgIGNvbnN0IGxhc3RTbGlkZU9mZnNldEZ1bGwgPVxuICAgICAgdGhpcy5sYXN0U2xpZGUub2Zmc2V0TGVmdCArIHRoaXMubGFzdFNsaWRlLm9mZnNldFdpZHRoO1xuICAgIGxldCBmaW5hbE9mZnNldDtcblxuICAgIGNvbnN0IGlzTGFzdFNsaWRlVmlzaWJsZSA9XG4gICAgICBsYXN0U2xpZGVPZmZzZXRGdWxsIC0gb2Zmc2V0Q3VycmVudFNsaWRlIDwgdGhpcy5zbGlkZXJFbC5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0IGlzQ3VycmVudFNsaWRlSXNMYXN0ID1cbiAgICAgIHRoaXMuY3VycmVudFNsaWRlTnVtYmVyID09IHRoaXMuc2xpZGVzTGlzdC5sZW5ndGggLSAxO1xuXG4gICAgaWYgKCFpc0xhc3RTbGlkZVZpc2libGUpIHtcbiAgICAgIGZpbmFsT2Zmc2V0ID0gb2Zmc2V0Q3VycmVudFNsaWRlO1xuICAgIH0gZWxzZSBpZiAoaXNDdXJyZW50U2xpZGVJc0xhc3QpIHtcbiAgICAgIGNvbnN0IHByb3BlckluZGV4ID1cbiAgICAgICAgdGhpcy5zbGlkZXNMaXN0Lmxlbmd0aCAtXG4gICAgICAgIH5+KHRoaXMuc2xpZGVyRWwub2Zmc2V0V2lkdGggLyB0aGlzLnNsaWRlc0xpc3RbMF0ub2Zmc2V0V2lkdGgpICtcbiAgICAgICAgMTtcbiAgICAgIHRoaXMuY3VycmVudFNsaWRlTnVtYmVyID0gcHJvcGVySW5kZXggLSAxO1xuICAgICAgZmluYWxPZmZzZXQgPSB0aGlzLnNsaWRlc0xpc3RbdGhpcy5jdXJyZW50U2xpZGVOdW1iZXJdLm9mZnNldExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbmFsT2Zmc2V0ID1cbiAgICAgICAgdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLnNsaWRlckVsLm9mZnNldFdpZHRoICsgdGhpcy5zaWRlT2Zmc2V0ICogMjtcbiAgICAgIHRoaXMuY3VycmVudFNsaWRlTnVtYmVyID0gdGhpcy5zbGlkZXNMaXN0Lmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRXcmFwcGVyT2Zmc2V0KGZpbmFsT2Zmc2V0KTtcbiAgfVxuXG4gIGdldEN1cnJlbnRTbGlkZU51bWJlcigpIHtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZU51bWJlciA9IH5+KFxuICAgICAgdGhpcy53cmFwcGVyT2Zmc2V0IC8gdGhpcy5zbGlkZXNMaXN0WzBdLm9mZnNldFdpZHRoXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IEFudmlvU2xpZGVyIGZyb20gXCIuL0FudmlvU2xpZGVyXCI7XG5cbmNvbnN0IHBhcmFtcyA9IHtcbiAgc2xpZGVyQ2xhc3NOYW1lOiBcIi5hbnZpby1zbGlkZXJcIixcbiAgLy8gd3JhcHBlckNsYXNzOiAnLmFudmlvLXNsaWRlcl9fd3JhcHBlcicsXG4gIC8vIHNsaWRlQ2xhc3M6ICdhbnZpby1zbGlkZXJfX3NsaWRlJyxcbiAgbmV4dEJ1dHRvbkNsYXNzTmFtZTogXCIuYW52aW8tc2xpZGVyX19idXR0b24tbmV4dFwiLFxuICBwcmV2QnV0dG9uQ2xhc3NOYW1lOiBcIi5hbnZpby1zbGlkZXJfX2J1dHRvbi1wcmV2XCIsXG4gIHNpZGVPZmZzZXQ6IDE1LFxufTtcblxubGV0IHRlc3RTbGlkZXIgPSBuZXcgQW52aW9TbGlkZXIoe1xuICBzbGlkZXJDbGFzc05hbWU6IFwiLmFudmlvLXNsaWRlclwiLFxuICBuZXh0QnV0dG9uQ2xhc3NOYW1lOiBcIi5hbnZpby1zbGlkZXJfX2J1dHRvbi1uZXh0XCIsXG4gIHByZXZCdXR0b25DbGFzc05hbWU6IFwiLmFudmlvLXNsaWRlcl9fYnV0dG9uLXByZXZcIixcbn0pO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgdmFsLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KGRlbGF5SW5tcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoMik7XG4gICAgfSwgZGVsYXlJbm1zKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=