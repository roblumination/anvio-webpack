"use strict";
(self["webpackChunkanwebpack"] = self["webpackChunkanwebpack"] || []).push([["sliders"],{

/***/ "./src/scripts/slidersInit.js":
/*!************************************!*\
  !*** ./src/scripts/slidersInit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");
const params = {
  sliderClassName: '.anvio-slider',
  // wrapperClass: '.anvio-slider__wrapper',
  // slideClass: 'anvio-slider__slide',
  nextButtonClassName: '.anvio-slider__button-next',
  prevButtonClassName: '.anvio-slider__button-prev',
  sideOffset: 15,
};



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
    // const final = offset - this.sideOffset;
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
      throw new Error(errorMsgBase + "doesn't has slides");
    }

    if (!this.buttons.left || !this.buttons.right) {
      throw new Error(errorMsgBase + 'invalid button classnames');
    }
  }

  initListeners() {
    this.buttons.left.addEventListener('click', () => this.prevSlide());
    this.buttons.right.addEventListener('click', () => this.nextSlide());
    this.initTouchListeners();
  }

  initTouchListeners() {
    let touchStartX = 0;
    let touchEndX = 0;

    //
    // START
    //
    this.sliderWrapper.addEventListener('touchstart', (e) => {
      this.sliderWrapper.style.transition = 'all 0.1s';
      // console.log('touch started from: ', e.changedTouches[0].clientX);
      touchStartX = e.changedTouches[0].clientX;
    });

    //
    // END
    //
    this.sliderWrapper.addEventListener('touchend', (e) => {
      // console.log('touch ends on: ', e.changedTouches[0].clientX);
      touchEndX = e.changedTouches[0].clientX;
      this.setWrapperOffset(this.wrapperOffset + (touchStartX - touchEndX));
      this.sliderWrapper.style.transition = 'all 0.5s';
      this.getCurrentSlideNumber();
      this.adjustSliderOffset();
    });

    //
    // MOVE
    //
    this.sliderWrapper.addEventListener('touchmove', (e) => {
      const touchOffsetX = e.changedTouches[0].clientX;
      // const maxOffset = this.wrapperWidth - this.sliderEl.offsetWidth;

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
    // console.log('edd');
    // console.log(~~(this.wrapperOffset / this.slidesList[0].offsetWidth));
    this.currentSlideNumber = ~~(
      this.wrapperOffset / this.slidesList[0].offsetWidth
    );
  }

  // throwError(text) {
  //   throw new Error(`Anvio Slider: ${text}`);
  // }
}

let testSlider = new AnvioSlider({
  sliderClassName: '.anvio-slider',
  nextButtonClassName: '.anvio-slider__button-next',
  prevButtonClassName: '.anvio-slider__button-prev',
});


/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp)
/* harmony export */ });
function clamp(min, val, max) {
  return Math.min(Math.max(val, min), max);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/slidersInit.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVycy5hNjVjNmZkZWM0MDc0OGVjNDU4Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQUs7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxPQUFPO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsT0FBTztBQUM5RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsZ0JBQWdCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxLQUFLO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN6TE07QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW53ZWJwYWNrLy4vc3JjL3NjcmlwdHMvc2xpZGVyc0luaXQuanMiLCJ3ZWJwYWNrOi8vYW53ZWJwYWNrLy4vc3JjL3NjcmlwdHMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGFyYW1zID0ge1xuICBzbGlkZXJDbGFzc05hbWU6ICcuYW52aW8tc2xpZGVyJyxcbiAgLy8gd3JhcHBlckNsYXNzOiAnLmFudmlvLXNsaWRlcl9fd3JhcHBlcicsXG4gIC8vIHNsaWRlQ2xhc3M6ICdhbnZpby1zbGlkZXJfX3NsaWRlJyxcbiAgbmV4dEJ1dHRvbkNsYXNzTmFtZTogJy5hbnZpby1zbGlkZXJfX2J1dHRvbi1uZXh0JyxcbiAgcHJldkJ1dHRvbkNsYXNzTmFtZTogJy5hbnZpby1zbGlkZXJfX2J1dHRvbi1wcmV2JyxcbiAgc2lkZU9mZnNldDogMTUsXG59O1xuXG5pbXBvcnQgeyBjbGFtcCB9IGZyb20gJy4vdXRpbHMnO1xuXG5jbGFzcyBBbnZpb1NsaWRlciB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZykge1xuICAgIHRoaXMuY3VycmVudFNsaWRlTnVtYmVyID0gMDtcbiAgICB0aGlzLndyYXBwZXJPZmZzZXQgPSAwO1xuICAgIHRoaXMuc2lkZU9mZnNldCA9IDMwO1xuXG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuaW5pdEVsZW1lbnRzKGNvbmZpZyk7XG4gICAgICB0aGlzLmNoZWNrRWxlbWVudHMoY29uZmlnLnNsaWRlckNsYXNzTmFtZSk7XG4gICAgICB0aGlzLmluaXRMaXN0ZW5lcnMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBsYXN0U2xpZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzTGlzdFt0aGlzLnNsaWRlc0xpc3QubGVuZ3RoIC0gMV07XG4gIH1cblxuICBnZXQgd3JhcHBlcldpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RTbGlkZS5vZmZzZXRXaWR0aCArIHRoaXMubGFzdFNsaWRlLm9mZnNldExlZnQ7XG4gIH1cblxuICBzZXRXcmFwcGVyT2Zmc2V0KG9mZnNldCkge1xuICAgIC8vIGNvbnN0IGZpbmFsID0gb2Zmc2V0IC0gdGhpcy5zaWRlT2Zmc2V0O1xuICAgIGNvbnN0IGZpbmFsID0gY2xhbXAoXG4gICAgICAwIC0gdGhpcy5zaWRlT2Zmc2V0LFxuICAgICAgb2Zmc2V0IC0gdGhpcy5zaWRlT2Zmc2V0LFxuICAgICAgdGhpcy53cmFwcGVyV2lkdGggLSB0aGlzLnNsaWRlckVsLm9mZnNldFdpZHRoICsgdGhpcy5zaWRlT2Zmc2V0XG4gICAgKTtcbiAgICB0aGlzLndyYXBwZXJPZmZzZXQgPSBmaW5hbDtcbiAgICB0aGlzLnNsaWRlcldyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHstZmluYWx9cHgpYDtcbiAgfVxuXG4gIGFkZFdyYXBwZXJPZmZzZXQob2Zmc2V0KSB7XG4gICAgY29uc3QgZmluYWwgPSB0aGlzLndyYXBwZXJPZmZzZXQgKyBvZmZzZXQ7XG4gICAgdGhpcy5zbGlkZXJXcmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7LWZpbmFsfXB4KWA7XG4gIH1cblxuICBpbml0RWxlbWVudHMoY29uZmlnKSB7XG4gICAgdGhpcy5zbGlkZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29uZmlnLnNsaWRlckNsYXNzTmFtZSk7XG4gICAgdGhpcy5zbGlkZXJXcmFwcGVyID0gdGhpcy5zbGlkZXJFbC5jaGlsZHJlblswXTtcbiAgICB0aGlzLnNsaWRlc0xpc3QgPSB0aGlzLnNsaWRlcldyYXBwZXIuY2hpbGRyZW47XG4gICAgdGhpcy5idXR0b25zID0ge1xuICAgICAgbGVmdDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcucHJldkJ1dHRvbkNsYXNzTmFtZSksXG4gICAgICByaWdodDogZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb25maWcubmV4dEJ1dHRvbkNsYXNzTmFtZSksXG4gICAgfTtcbiAgfVxuXG4gIGNoZWNrRWxlbWVudHMoc2xpZGVyQ2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZXJyb3JNc2dCYXNlID0gYEFudmlvIFNsaWRlciAoJHtzbGlkZXJDbGFzc05hbWV9KWA7XG4gICAgaWYgKCF0aGlzLnNsaWRlckVsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNc2dCYXNlICsgXCJpbnZhbGlkIHNsaWRlcidzIGNsYXNzbmFtZVwiKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNsaWRlcldyYXBwZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1zZ0Jhc2UgKyBcImRvZXNuJ3QgaGFzIGEgdHJhY2sgZWxlbWVudFwiKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnNsaWRlcldyYXBwZXIuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNc2dCYXNlICsgXCJkb2Vzbid0IGhhcyBzbGlkZXNcIik7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmJ1dHRvbnMubGVmdCB8fCAhdGhpcy5idXR0b25zLnJpZ2h0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JNc2dCYXNlICsgJ2ludmFsaWQgYnV0dG9uIGNsYXNzbmFtZXMnKTtcbiAgICB9XG4gIH1cblxuICBpbml0TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuYnV0dG9ucy5sZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5wcmV2U2xpZGUoKSk7XG4gICAgdGhpcy5idXR0b25zLnJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5uZXh0U2xpZGUoKSk7XG4gICAgdGhpcy5pbml0VG91Y2hMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGluaXRUb3VjaExpc3RlbmVycygpIHtcbiAgICBsZXQgdG91Y2hTdGFydFggPSAwO1xuICAgIGxldCB0b3VjaEVuZFggPSAwO1xuXG4gICAgLy9cbiAgICAvLyBTVEFSVFxuICAgIC8vXG4gICAgdGhpcy5zbGlkZXJXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZSkgPT4ge1xuICAgICAgdGhpcy5zbGlkZXJXcmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDAuMXMnO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3RvdWNoIHN0YXJ0ZWQgZnJvbTogJywgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKTtcbiAgICAgIHRvdWNoU3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH0pO1xuXG4gICAgLy9cbiAgICAvLyBFTkRcbiAgICAvL1xuICAgIHRoaXMuc2xpZGVyV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChlKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndG91Y2ggZW5kcyBvbjogJywgZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKTtcbiAgICAgIHRvdWNoRW5kWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIHRoaXMuc2V0V3JhcHBlck9mZnNldCh0aGlzLndyYXBwZXJPZmZzZXQgKyAodG91Y2hTdGFydFggLSB0b3VjaEVuZFgpKTtcbiAgICAgIHRoaXMuc2xpZGVyV3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAwLjVzJztcbiAgICAgIHRoaXMuZ2V0Q3VycmVudFNsaWRlTnVtYmVyKCk7XG4gICAgICB0aGlzLmFkanVzdFNsaWRlck9mZnNldCgpO1xuICAgIH0pO1xuXG4gICAgLy9cbiAgICAvLyBNT1ZFXG4gICAgLy9cbiAgICB0aGlzLnNsaWRlcldyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRvdWNoT2Zmc2V0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIC8vIGNvbnN0IG1heE9mZnNldCA9IHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5zbGlkZXJFbC5vZmZzZXRXaWR0aDtcblxuICAgICAgdGhpcy5hZGRXcmFwcGVyT2Zmc2V0KHRvdWNoU3RhcnRYIC0gdG91Y2hPZmZzZXRYKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5leHRTbGlkZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRTbGlkZU51bWJlciA9XG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZU51bWJlciA+PSB0aGlzLnNsaWRlc0xpc3QubGVuZ3RoIC0gMVxuICAgICAgICA/IDBcbiAgICAgICAgOiB0aGlzLmN1cnJlbnRTbGlkZU51bWJlciArIDE7XG5cbiAgICB0aGlzLmFkanVzdFNsaWRlck9mZnNldCgpO1xuICB9XG5cbiAgcHJldlNsaWRlKCkge1xuICAgIHRoaXMuY3VycmVudFNsaWRlTnVtYmVyID1cbiAgICAgIHRoaXMuY3VycmVudFNsaWRlTnVtYmVyIDw9IDBcbiAgICAgICAgPyB0aGlzLnNsaWRlc0xpc3QubGVuZ3RoIC0gMVxuICAgICAgICA6IHRoaXMuY3VycmVudFNsaWRlTnVtYmVyIC0gMTtcblxuICAgIHRoaXMuYWRqdXN0U2xpZGVyT2Zmc2V0KCk7XG4gIH1cblxuICBhZGp1c3RTbGlkZXJPZmZzZXQoKSB7XG4gICAgY29uc3Qgb2Zmc2V0Q3VycmVudFNsaWRlID1cbiAgICAgIHRoaXMuc2xpZGVzTGlzdFt0aGlzLmN1cnJlbnRTbGlkZU51bWJlcl0ub2Zmc2V0TGVmdDtcbiAgICBjb25zdCBsYXN0U2xpZGVPZmZzZXRGdWxsID1cbiAgICAgIHRoaXMubGFzdFNsaWRlLm9mZnNldExlZnQgKyB0aGlzLmxhc3RTbGlkZS5vZmZzZXRXaWR0aDtcbiAgICBsZXQgZmluYWxPZmZzZXQ7XG5cbiAgICBjb25zdCBpc0xhc3RTbGlkZVZpc2libGUgPVxuICAgICAgbGFzdFNsaWRlT2Zmc2V0RnVsbCAtIG9mZnNldEN1cnJlbnRTbGlkZSA8IHRoaXMuc2xpZGVyRWwub2Zmc2V0V2lkdGg7XG5cbiAgICBjb25zdCBpc0N1cnJlbnRTbGlkZUlzTGFzdCA9XG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZU51bWJlciA9PSB0aGlzLnNsaWRlc0xpc3QubGVuZ3RoIC0gMTtcblxuICAgIGlmICghaXNMYXN0U2xpZGVWaXNpYmxlKSB7XG4gICAgICBmaW5hbE9mZnNldCA9IG9mZnNldEN1cnJlbnRTbGlkZTtcbiAgICB9IGVsc2UgaWYgKGlzQ3VycmVudFNsaWRlSXNMYXN0KSB7XG4gICAgICBjb25zdCBwcm9wZXJJbmRleCA9XG4gICAgICAgIHRoaXMuc2xpZGVzTGlzdC5sZW5ndGggLVxuICAgICAgICB+fih0aGlzLnNsaWRlckVsLm9mZnNldFdpZHRoIC8gdGhpcy5zbGlkZXNMaXN0WzBdLm9mZnNldFdpZHRoKSArXG4gICAgICAgIDE7XG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZU51bWJlciA9IHByb3BlckluZGV4IC0gMTtcbiAgICAgIGZpbmFsT2Zmc2V0ID0gdGhpcy5zbGlkZXNMaXN0W3RoaXMuY3VycmVudFNsaWRlTnVtYmVyXS5vZmZzZXRMZWZ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmaW5hbE9mZnNldCA9XG4gICAgICAgIHRoaXMud3JhcHBlcldpZHRoIC0gdGhpcy5zbGlkZXJFbC5vZmZzZXRXaWR0aCArIHRoaXMuc2lkZU9mZnNldCAqIDI7XG4gICAgICB0aGlzLmN1cnJlbnRTbGlkZU51bWJlciA9IHRoaXMuc2xpZGVzTGlzdC5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIHRoaXMuc2V0V3JhcHBlck9mZnNldChmaW5hbE9mZnNldCk7XG4gIH1cblxuICBnZXRDdXJyZW50U2xpZGVOdW1iZXIoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2VkZCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKH5+KHRoaXMud3JhcHBlck9mZnNldCAvIHRoaXMuc2xpZGVzTGlzdFswXS5vZmZzZXRXaWR0aCkpO1xuICAgIHRoaXMuY3VycmVudFNsaWRlTnVtYmVyID0gfn4oXG4gICAgICB0aGlzLndyYXBwZXJPZmZzZXQgLyB0aGlzLnNsaWRlc0xpc3RbMF0ub2Zmc2V0V2lkdGhcbiAgICApO1xuICB9XG5cbiAgLy8gdGhyb3dFcnJvcih0ZXh0KSB7XG4gIC8vICAgdGhyb3cgbmV3IEVycm9yKGBBbnZpbyBTbGlkZXI6ICR7dGV4dH1gKTtcbiAgLy8gfVxufVxuXG5sZXQgdGVzdFNsaWRlciA9IG5ldyBBbnZpb1NsaWRlcih7XG4gIHNsaWRlckNsYXNzTmFtZTogJy5hbnZpby1zbGlkZXInLFxuICBuZXh0QnV0dG9uQ2xhc3NOYW1lOiAnLmFudmlvLXNsaWRlcl9fYnV0dG9uLW5leHQnLFxuICBwcmV2QnV0dG9uQ2xhc3NOYW1lOiAnLmFudmlvLXNsaWRlcl9fYnV0dG9uLXByZXYnLFxufSk7XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xhbXAobWluLCB2YWwsIG1heCkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsLCBtaW4pLCBtYXgpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9