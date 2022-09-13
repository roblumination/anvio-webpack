"use strict";
(self["webpackChunkanwebpack"] = self["webpackChunkanwebpack"] || []).push([["customAccord"],{

/***/ "./src/scripts/other/customAccordion.ts":
/*!**********************************************!*\
  !*** ./src/scripts/other/customAccordion.ts ***!
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
    if (acrd.summary) {
        acrd.summary.addEventListener("click", () => {
            const state = acrd.isOpened;
            closeAll();
            acrd.isOpened = !state;
            renderAccordions();
        });
    }
});
function renderAccordions() {
    accordions.forEach((acrd) => {
        if (acrd.content && acrd.summary && acrd.arrow) {
            acrd.content.style.display = acrd.isOpened ? "flex" : "none";
            acrd.summary.style.color = acrd.isOpened ? "#ce2127" : "#000";
            acrd.arrow.style.stroke = acrd.isOpened ? "#ce2127" : "#000";
        }
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/other/customAccordion.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tQWNjb3JkLmRjNWZmNTVjY2I2NWM5YjAzNDI1LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYW53ZWJwYWNrLy4vc3JjL3NjcmlwdHMvb3RoZXIvY3VzdG9tQWNjb3JkaW9uLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuY29uc3QgYWNjb3JkaW9ucyA9IFtcbiAgICB7XG4gICAgICAgIHN1bW1hcnk6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tLWFjY29yZF9sZWZ0XCIpLFxuICAgICAgICBhcnJvdzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcnJvdy1hY2MtbGVmdFwiKSxcbiAgICAgICAgY29udGVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b20tYWNjb3JkX19jb250ZW50X2xlZnRcIiksXG4gICAgICAgIGlzT3BlbmVkOiBmYWxzZSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3VtbWFyeTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jdXN0b20tYWNjb3JkX3JpZ2h0XCIpLFxuICAgICAgICBhcnJvdzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcnJvdy1hY2MtcmlnaHRcIiksXG4gICAgICAgIGNvbnRlbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VzdG9tLWFjY29yZF9fY29udGVudF9yaWdodFwiKSxcbiAgICAgICAgaXNPcGVuZWQ6IGZhbHNlLFxuICAgIH0sXG5dO1xuYWNjb3JkaW9ucy5mb3JFYWNoKChhY3JkKSA9PiB7XG4gICAgbGV0IHRlc3QgPSBcInRlc3QgdGV4dFwiO1xuICAgIGNvbnN0IHRlc3QyID0gXCJ0ZXN0IHRlc2Rmc2RmZVwiO1xuICAgIGNvbnNvbGUubG9nKHRlc3QsIHRlc3QyKTtcbiAgICBpZiAoYWNyZC5zdW1tYXJ5KSB7XG4gICAgICAgIGFjcmQuc3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBhY3JkLmlzT3BlbmVkO1xuICAgICAgICAgICAgY2xvc2VBbGwoKTtcbiAgICAgICAgICAgIGFjcmQuaXNPcGVuZWQgPSAhc3RhdGU7XG4gICAgICAgICAgICByZW5kZXJBY2NvcmRpb25zKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gcmVuZGVyQWNjb3JkaW9ucygpIHtcbiAgICBhY2NvcmRpb25zLmZvckVhY2goKGFjcmQpID0+IHtcbiAgICAgICAgaWYgKGFjcmQuY29udGVudCAmJiBhY3JkLnN1bW1hcnkgJiYgYWNyZC5hcnJvdykge1xuICAgICAgICAgICAgYWNyZC5jb250ZW50LnN0eWxlLmRpc3BsYXkgPSBhY3JkLmlzT3BlbmVkID8gXCJmbGV4XCIgOiBcIm5vbmVcIjtcbiAgICAgICAgICAgIGFjcmQuc3VtbWFyeS5zdHlsZS5jb2xvciA9IGFjcmQuaXNPcGVuZWQgPyBcIiNjZTIxMjdcIiA6IFwiIzAwMFwiO1xuICAgICAgICAgICAgYWNyZC5hcnJvdy5zdHlsZS5zdHJva2UgPSBhY3JkLmlzT3BlbmVkID8gXCIjY2UyMTI3XCIgOiBcIiMwMDBcIjtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gY2xvc2VBbGwoKSB7XG4gICAgYWNjb3JkaW9uc1swXS5pc09wZW5lZCA9IGZhbHNlO1xuICAgIGFjY29yZGlvbnNbMV0uaXNPcGVuZWQgPSBmYWxzZTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==