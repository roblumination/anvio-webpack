(self["webpackChunkanwebpack"] = self["webpackChunkanwebpack"] || []).push([["slider"],{

/***/ "./src/scripts/singleSlider.js":
/*!*************************************!*\
  !*** ./src/scripts/singleSlider.js ***!
  \*************************************/
/***/ (() => {

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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/singleSlider.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLjIyM2I0YWVmMmI0MjU2MjJhMjVjLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Fud2VicGFjay8uL3NyYy9zY3JpcHRzL3NpbmdsZVNsaWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzbGlkZXIgPSB7XG4gIGFycm93OiB7XG4gICAgbGVmdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkLWFycm93LTFMXCIpLFxuICAgIHJpZ2h0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWQtYXJyb3ctMVJcIiksXG4gIH0sXG4gIGV4dGVuZGVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4dC0xXCIpLFxuICBpbmRpY2F0b3JzOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaW5kaWNhdG9yLWRvdFwiKSxcbiAgcG9zaXRpb246IDAsXG4gIG1heFBvc2l0aW9uOiAyLFxufTtcblxuc2xpZGVyLmFycm93LmxlZnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHNsaWRlci5wb3NpdGlvbiA9PSAwKSB7XG4gICAgc2xpZGVyLnBvc2l0aW9uID0gc2xpZGVyLm1heFBvc2l0aW9uO1xuICB9IGVsc2Uge1xuICAgIHNsaWRlci5wb3NpdGlvbi0tO1xuICB9XG5cbiAgc2xpZGVyLmV4dGVuZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke1xuICAgICgxMDAgLyAoc2xpZGVyLm1heFBvc2l0aW9uICsgMSkpICogc2xpZGVyLnBvc2l0aW9uXG4gIH0lKWA7XG5cbiAgb2ZmQWxsSW5kaWNhdG9ycygpO1xuICBzbGlkZXIuaW5kaWNhdG9yc1tzbGlkZXIucG9zaXRpb25dLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbn0pO1xuXG5zbGlkZXIuYXJyb3cucmlnaHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHNsaWRlci5wb3NpdGlvbiA9PSBzbGlkZXIubWF4UG9zaXRpb24pIHtcbiAgICBzbGlkZXIucG9zaXRpb24gPSAwO1xuICB9IGVsc2Uge1xuICAgIHNsaWRlci5wb3NpdGlvbisrO1xuICB9XG5cbiAgc2xpZGVyLmV4dGVuZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke1xuICAgICgxMDAgLyAoc2xpZGVyLm1heFBvc2l0aW9uICsgMSkpICogc2xpZGVyLnBvc2l0aW9uXG4gIH0lKWA7XG5cbiAgb2ZmQWxsSW5kaWNhdG9ycygpO1xuICBzbGlkZXIuaW5kaWNhdG9yc1tzbGlkZXIucG9zaXRpb25dLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbn0pO1xuXG5mdW5jdGlvbiBvZmZBbGxJbmRpY2F0b3JzKCkge1xuICAvLyBjb25zb2xlLmxvZyhzbGlkZXIuaW5kaWNhdG9yc1tzbGlkZXIucG9zaXRpb25dKTtcbiAgW10uZm9yRWFjaC5jYWxsKHNsaWRlci5pbmRpY2F0b3JzLCAoaW5kKSA9PiB7XG4gICAgaW5kLnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==