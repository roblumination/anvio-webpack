(self["webpackChunkanwebpack"] = self["webpackChunkanwebpack"] || []).push([["customAccord"],{

/***/ "./src/scripts/other/customAccordion.js":
/*!**********************************************!*\
  !*** ./src/scripts/other/customAccordion.js ***!
  \**********************************************/
/***/ (() => {

const accordions = [
  {
    summary: document.querySelector(".custom-accord_left"),
    arrow: document.querySelector("#arrow-acc-left"),
    content: document.querySelector(".custom-accord__content_left"),
    isOpened: false,
  },
  {
    summary: document.querySelector(".custom-accord_right"),
    arrow: document.querySelector("#arrow-acc-right"),
    content: document.querySelector(".custom-accord__content_right"),
    isOpened: false,
  },
];

accordions.forEach((acrd) => {
  let test = "test text";
  const test2 = "test tesdfsdfe";
  console.log(test, test2);
  acrd.summary.addEventListener("click", () => {
    const state = acrd.isOpened;
    closeAll();
    acrd.isOpened = !state;
    renderAccordions();
  });
});

function renderAccordions() {
  accordions.forEach((acrd) => {
    acrd.content.style.display = acrd.isOpened ? "flex" : "none";
    acrd.summary.style.color = acrd.isOpened ? "#ce2127" : "#000";
    acrd.arrow.style.stroke = acrd.isOpened ? "#ce2127" : "#000";
  });
}

function closeAll() {
  accordions[0].isOpened = false;
  accordions[1].isOpened = false;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/other/customAccordion.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tQWNjb3JkLjYxMTE0MDU2NDZjMDgyMDBjYjNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fud2VicGFjay8uL3NyYy9zY3JpcHRzL290aGVyL2N1c3RvbUFjY29yZGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhY2NvcmRpb25zID0gW1xuICB7XG4gICAgc3VtbWFyeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b20tYWNjb3JkX2xlZnRcIiksXG4gICAgYXJyb3c6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXJyb3ctYWNjLWxlZnRcIiksXG4gICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b20tYWNjb3JkX19jb250ZW50X2xlZnRcIiksXG4gICAgaXNPcGVuZWQ6IGZhbHNlLFxuICB9LFxuICB7XG4gICAgc3VtbWFyeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b20tYWNjb3JkX3JpZ2h0XCIpLFxuICAgIGFycm93OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Fycm93LWFjYy1yaWdodFwiKSxcbiAgICBjb250ZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmN1c3RvbS1hY2NvcmRfX2NvbnRlbnRfcmlnaHRcIiksXG4gICAgaXNPcGVuZWQ6IGZhbHNlLFxuICB9LFxuXTtcblxuYWNjb3JkaW9ucy5mb3JFYWNoKChhY3JkKSA9PiB7XG4gIGxldCB0ZXN0ID0gXCJ0ZXN0IHRleHRcIjtcbiAgY29uc3QgdGVzdDIgPSBcInRlc3QgdGVzZGZzZGZlXCI7XG4gIGNvbnNvbGUubG9nKHRlc3QsIHRlc3QyKTtcbiAgYWNyZC5zdW1tYXJ5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBhY3JkLmlzT3BlbmVkO1xuICAgIGNsb3NlQWxsKCk7XG4gICAgYWNyZC5pc09wZW5lZCA9ICFzdGF0ZTtcbiAgICByZW5kZXJBY2NvcmRpb25zKCk7XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIHJlbmRlckFjY29yZGlvbnMoKSB7XG4gIGFjY29yZGlvbnMuZm9yRWFjaCgoYWNyZCkgPT4ge1xuICAgIGFjcmQuY29udGVudC5zdHlsZS5kaXNwbGF5ID0gYWNyZC5pc09wZW5lZCA/IFwiZmxleFwiIDogXCJub25lXCI7XG4gICAgYWNyZC5zdW1tYXJ5LnN0eWxlLmNvbG9yID0gYWNyZC5pc09wZW5lZCA/IFwiI2NlMjEyN1wiIDogXCIjMDAwXCI7XG4gICAgYWNyZC5hcnJvdy5zdHlsZS5zdHJva2UgPSBhY3JkLmlzT3BlbmVkID8gXCIjY2UyMTI3XCIgOiBcIiMwMDBcIjtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlQWxsKCkge1xuICBhY2NvcmRpb25zWzBdLmlzT3BlbmVkID0gZmFsc2U7XG4gIGFjY29yZGlvbnNbMV0uaXNPcGVuZWQgPSBmYWxzZTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==