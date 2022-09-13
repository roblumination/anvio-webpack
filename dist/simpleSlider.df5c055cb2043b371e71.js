"use strict";
(self["webpackChunkanwebpack"] = self["webpackChunkanwebpack"] || []).push([["simpleSlider"],{

/***/ "./src/scripts/other/singleSlider.ts":
/*!*******************************************!*\
  !*** ./src/scripts/other/singleSlider.ts ***!
  \*******************************************/
/***/ (() => {


const [cSliderArrowLeft, cSliderArrowRight, cSliderExtender, cSliderIndicators,] = [
    document.getElementById("slid-arrow-1L"),
    document.getElementById("slid-arrow-1R"),
    document.getElementById("ext-1"),
    document.querySelectorAll(".indicator-dot"),
];
const cSliderElementOk = cSliderArrowLeft && cSliderArrowRight && cSliderExtender && cSliderIndicators;
if (cSliderElementOk) {
    const slider = {
        arrow: {
            left: cSliderArrowLeft,
            right: cSliderArrowRight,
        },
        extender: cSliderExtender,
        indicators: cSliderIndicators,
        position: 0,
        maxPosition: 2,
    };
    slider.arrow.left.addEventListener("click", () => {
        if (slider.position == 0) {
            slider.position = slider.maxPosition;
        }
        else {
            slider.position--;
        }
        slider.extender.style.transform = `translateX(-${(100 / (slider.maxPosition + 1)) * slider.position}%)`;
        offAllIndicators();
        slider.indicators[slider.position].style.opacity = "1";
    });
    slider.arrow.right.addEventListener("click", () => {
        if (slider.position == slider.maxPosition) {
            slider.position = 0;
        }
        else {
            slider.position++;
        }
        slider.extender.style.transform = `translateX(-${(100 / (slider.maxPosition + 1)) * slider.position}%)`;
        offAllIndicators();
        slider.indicators[slider.position].style.opacity = "1";
    });
    function offAllIndicators() {
        // [].forEach.call(slider.indicators, (ind) => {
        //   ind.style.opacity = "0.5";
        // });
        slider.indicators.forEach((indicator) => {
            indicator.style.opacity = "0.5";
        });
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/other/singleSlider.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ltcGxlU2xpZGVyLmRmNWMwNTVjYjIwNDNiMzcxZTcxLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxtREFBbUQ7QUFDNUc7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxtREFBbUQ7QUFDNUc7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW53ZWJwYWNrLy4vc3JjL3NjcmlwdHMvb3RoZXIvc2luZ2xlU2xpZGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY29uc3QgW2NTbGlkZXJBcnJvd0xlZnQsIGNTbGlkZXJBcnJvd1JpZ2h0LCBjU2xpZGVyRXh0ZW5kZXIsIGNTbGlkZXJJbmRpY2F0b3JzLF0gPSBbXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkLWFycm93LTFMXCIpLFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2xpZC1hcnJvdy0xUlwiKSxcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4dC0xXCIpLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuaW5kaWNhdG9yLWRvdFwiKSxcbl07XG5jb25zdCBjU2xpZGVyRWxlbWVudE9rID0gY1NsaWRlckFycm93TGVmdCAmJiBjU2xpZGVyQXJyb3dSaWdodCAmJiBjU2xpZGVyRXh0ZW5kZXIgJiYgY1NsaWRlckluZGljYXRvcnM7XG5pZiAoY1NsaWRlckVsZW1lbnRPaykge1xuICAgIGNvbnN0IHNsaWRlciA9IHtcbiAgICAgICAgYXJyb3c6IHtcbiAgICAgICAgICAgIGxlZnQ6IGNTbGlkZXJBcnJvd0xlZnQsXG4gICAgICAgICAgICByaWdodDogY1NsaWRlckFycm93UmlnaHQsXG4gICAgICAgIH0sXG4gICAgICAgIGV4dGVuZGVyOiBjU2xpZGVyRXh0ZW5kZXIsXG4gICAgICAgIGluZGljYXRvcnM6IGNTbGlkZXJJbmRpY2F0b3JzLFxuICAgICAgICBwb3NpdGlvbjogMCxcbiAgICAgICAgbWF4UG9zaXRpb246IDIsXG4gICAgfTtcbiAgICBzbGlkZXIuYXJyb3cubGVmdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoc2xpZGVyLnBvc2l0aW9uID09IDApIHtcbiAgICAgICAgICAgIHNsaWRlci5wb3NpdGlvbiA9IHNsaWRlci5tYXhQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNsaWRlci5wb3NpdGlvbi0tO1xuICAgICAgICB9XG4gICAgICAgIHNsaWRlci5leHRlbmRlci5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHsoMTAwIC8gKHNsaWRlci5tYXhQb3NpdGlvbiArIDEpKSAqIHNsaWRlci5wb3NpdGlvbn0lKWA7XG4gICAgICAgIG9mZkFsbEluZGljYXRvcnMoKTtcbiAgICAgICAgc2xpZGVyLmluZGljYXRvcnNbc2xpZGVyLnBvc2l0aW9uXS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgfSk7XG4gICAgc2xpZGVyLmFycm93LnJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGlmIChzbGlkZXIucG9zaXRpb24gPT0gc2xpZGVyLm1heFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBzbGlkZXIucG9zaXRpb24gPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2xpZGVyLnBvc2l0aW9uKys7XG4gICAgICAgIH1cbiAgICAgICAgc2xpZGVyLmV4dGVuZGVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0keygxMDAgLyAoc2xpZGVyLm1heFBvc2l0aW9uICsgMSkpICogc2xpZGVyLnBvc2l0aW9ufSUpYDtcbiAgICAgICAgb2ZmQWxsSW5kaWNhdG9ycygpO1xuICAgICAgICBzbGlkZXIuaW5kaWNhdG9yc1tzbGlkZXIucG9zaXRpb25dLnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBvZmZBbGxJbmRpY2F0b3JzKCkge1xuICAgICAgICAvLyBbXS5mb3JFYWNoLmNhbGwoc2xpZGVyLmluZGljYXRvcnMsIChpbmQpID0+IHtcbiAgICAgICAgLy8gICBpbmQuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICBzbGlkZXIuaW5kaWNhdG9ycy5mb3JFYWNoKChpbmRpY2F0b3IpID0+IHtcbiAgICAgICAgICAgIGluZGljYXRvci5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9