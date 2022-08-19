"use strict";
(self["webpackChunkanwebpack"] = self["webpackChunkanwebpack"] || []).push([["increaser"],{

/***/ "./src/scripts/numberIncreaser.js":
/*!****************************************!*\
  !*** ./src/scripts/numberIncreaser.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/scripts/utils.js");


class NumberIncreaser {
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

    window.addEventListener('scroll', () => {
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
      await (0,_utils__WEBPACK_IMPORTED_MODULE_0__.delay)(40);
      this.element.innerText = i;
    }
  }
}

new NumberIncreaser('#info-number-1', 12);
new NumberIncreaser('#info-number-2', 26);


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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/numberIncreaser.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jcmVhc2VyLjJkMTNmMTRmMjIzMWQ4YTgxYmZjLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWM7QUFDM0QsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0EsWUFBWSw2Q0FBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUNPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbndlYnBhY2svLi9zcmMvc2NyaXB0cy9udW1iZXJJbmNyZWFzZXIuanMiLCJ3ZWJwYWNrOi8vYW53ZWJwYWNrLy4vc3JjL3NjcmlwdHMvdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGVsYXkgfSBmcm9tICcuL3V0aWxzJztcblxuY2xhc3MgTnVtYmVySW5jcmVhc2VyIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudENsYXNzLCBlbmRWYWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudDtcbiAgICB0aGlzLmlzQ291bnRTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5lbmRWYWx1ZSA9IGVuZFZhbHVlO1xuICAgIHRoaXMuaW5pdEVsZW1lbnQoZWxlbWVudENsYXNzKTtcbiAgICB0aGlzLmluaXRMaXN0ZW5lcigpO1xuICB9XG5cbiAgaW5pdEVsZW1lbnQoZWxlbWVudENsYXNzKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZWxlbWVudENsYXNzKTtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE51bWJlciBJbmNyZWFzZXI6ICR7ZWxlbWVudENsYXNzfSBub3QgZm91bmRgKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRMaXN0ZW5lcigpIHtcbiAgICBjb25zdCBlbGVtZW50VG9wT2Zmc2V0ID0gdGhpcy5lbGVtZW50Lm9mZnNldFRvcDtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCAoKSA9PiB7XG4gICAgICBjb25zdCBpc05lY2Vzc2FyeU9mZnNldFJlYWNoZWQgPSB3aW5kb3cuc2Nyb2xsWSA+IGVsZW1lbnRUb3BPZmZzZXQgLSA2MDA7XG5cbiAgICAgIGlmICghdGhpcy5pc0NvdW50U3RhcnRlZCAmJiBpc05lY2Vzc2FyeU9mZnNldFJlYWNoZWQpIHtcbiAgICAgICAgdGhpcy5pc0NvdW50U3RhcnRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhcnRJbmZvQ291bnQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHN0YXJ0SW5mb0NvdW50KCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHRoaXMuZW5kVmFsdWU7IGkrKykge1xuICAgICAgLy8gaWYgKGkgPD0gbnVtMU1heCkgaW5mb051bTEuaW5uZXJUZXh0ID0gaTtcbiAgICAgIGF3YWl0IGRlbGF5KDQwKTtcbiAgICAgIHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSBpO1xuICAgIH1cbiAgfVxufVxuXG5uZXcgTnVtYmVySW5jcmVhc2VyKCcjaW5mby1udW1iZXItMScsIDEyKTtcbm5ldyBOdW1iZXJJbmNyZWFzZXIoJyNpbmZvLW51bWJlci0yJywgMjYpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKG1pbiwgdmFsLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbCwgbWluKSwgbWF4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGF5KGRlbGF5SW5tcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoMik7XG4gICAgfSwgZGVsYXlJbm1zKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=