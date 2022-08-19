(self["webpackChunkanwebpack"] = self["webpackChunkanwebpack"] || []).push([["modalControll"],{

/***/ "./src/scripts/modalControl.js":
/*!*************************************!*\
  !*** ./src/scripts/modalControl.js ***!
  \*************************************/
/***/ (() => {

let state = {
  // need to close modal without background
  modalIsActive: false,
  modalSmallLocationIsActive: false,
  modalSmallMenuIsActive: false,
  modalNormalIsActive: false,
};

const buttons = {
  location: document.getElementById("header-btn-location"),
  phone: document.getElementById("header-btn-phone"),
  menu: document.getElementById("header-btn-menu"),
  price: document.getElementById("btn-price"),
  priceClose: "-m+",
};

const modals = {
  background: document.querySelector(".modal__background"),
  menu: document.getElementById("modal-menu"),
  location: document.getElementById("modal-location"),
  price: document.getElementById("modal-price"),
};

console.log(modals);

const menuIco = {
  closed: document.getElementById("menu-ico_closed"),
  opened: document.getElementById("menu-ico_opened"),
};

buttons.location.addEventListener("click", () => {
  state.modalSmallLocationIsActive = !state.modalSmallLocationIsActive;
  state.modalSmallMenuIsActive = false;
  state.modalIsActive = state.modalSmallLocationIsActive ? true : false;
  state.modalNormalIsActive = false;

  render();
});

buttons.menu.addEventListener("click", () => {
  state.modalSmallMenuIsActive = !state.modalSmallMenuIsActive;
  state.modalIsActive = state.modalSmallMenuIsActive ? true : false;
  state.modalSmallLocationIsActive = false;
  state.modalNormalIsActive = false;

  render();
});

buttons.price.addEventListener("click", () => {
  console.log("price!");
  state.modalSmallMenuIsActive = false;
  state.modalIsActive = true;
  state.modalSmallLocationIsActive = false;
  state.modalNormalIsActive = true;

  render();
});

modals.background.addEventListener("click", (e) => {
  if (e.target != modals.background) return;
  state.modalIsActive = false;
  state.modalSmallLocationIsActive = false;
  state.modalSmallMenuIsActive = false;
  // state.moda;
  state.modalNormalIsActive = false;

  render();
});

function render() {
  // apply styles according to state{}

  //background
  modals.background.style.opacity = state.modalIsActive ? "1" : "0.0";
  modals.background.style.pointerEvents = state.modalIsActive ? "all" : "none";

  //menu
  modals.menu.style.transform = state.modalSmallMenuIsActive
    ? "translateX(0px)"
    : "translateX(300px)";
  modals.menu.style.opacity = state.modalSmallMenuIsActive ? "1" : "0.0";
  modals.menu.style.pointerEvents = state.modalSmallMenuIsActive
    ? "all"
    : "none";
  buttons.menu.style.backgroundColor = state.modalSmallMenuIsActive
    ? "#fff"
    : "#fff0";
  menuIco.closed.style.display = state.modalSmallMenuIsActive
    ? "none"
    : "block";
  menuIco.opened.style.display = !state.modalSmallMenuIsActive
    ? "none"
    : "block";

  //location
  modals.location.style.transform = state.modalSmallLocationIsActive
    ? "translateX(0px)"
    : "translateX(300px)";
  modals.location.style.opacity = state.modalSmallLocationIsActive
    ? "1"
    : "0.0";
  modals.location.style.pointerEvents = state.modalSmallLocationIsActive
    ? "all"
    : "none";
  buttons.location.style.backgroundColor = state.modalSmallLocationIsActive
    ? "#fff"
    : "#fff0";

  modals.price.style.transform = state.modalNormalIsActive
    ? "translateX(0px)"
    : "translateX(300px)";
  modals.price.style.opacity = state.modalNormalIsActive ? "1" : "0.0";
  modals.price.style.pointerEvents = state.modalNormalIsActive ? "all" : "none";
}

// setTimeout(() => render(), 1000);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/modalControl.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxDb250cm9sbC4xZjRiZTljNWRlZDRmYzM3MDVkZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Fud2VicGFjay8uL3NyYy9zY3JpcHRzL21vZGFsQ29udHJvbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc3RhdGUgPSB7XG4gIC8vIG5lZWQgdG8gY2xvc2UgbW9kYWwgd2l0aG91dCBiYWNrZ3JvdW5kXG4gIG1vZGFsSXNBY3RpdmU6IGZhbHNlLFxuICBtb2RhbFNtYWxsTG9jYXRpb25Jc0FjdGl2ZTogZmFsc2UsXG4gIG1vZGFsU21hbGxNZW51SXNBY3RpdmU6IGZhbHNlLFxuICBtb2RhbE5vcm1hbElzQWN0aXZlOiBmYWxzZSxcbn07XG5cbmNvbnN0IGJ1dHRvbnMgPSB7XG4gIGxvY2F0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1idG4tbG9jYXRpb25cIiksXG4gIHBob25lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1idG4tcGhvbmVcIiksXG4gIG1lbnU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaGVhZGVyLWJ0bi1tZW51XCIpLFxuICBwcmljZTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcHJpY2VcIiksXG4gIHByaWNlQ2xvc2U6IFwiLW0rXCIsXG59O1xuXG5jb25zdCBtb2RhbHMgPSB7XG4gIGJhY2tncm91bmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2JhY2tncm91bmRcIiksXG4gIG1lbnU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtbWVudVwiKSxcbiAgbG9jYXRpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibW9kYWwtbG9jYXRpb25cIiksXG4gIHByaWNlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXByaWNlXCIpLFxufTtcblxuY29uc29sZS5sb2cobW9kYWxzKTtcblxuY29uc3QgbWVudUljbyA9IHtcbiAgY2xvc2VkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvX2Nsb3NlZFwiKSxcbiAgb3BlbmVkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvX29wZW5lZFwiKSxcbn07XG5cbmJ1dHRvbnMubG9jYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgc3RhdGUubW9kYWxTbWFsbExvY2F0aW9uSXNBY3RpdmUgPSAhc3RhdGUubW9kYWxTbWFsbExvY2F0aW9uSXNBY3RpdmU7XG4gIHN0YXRlLm1vZGFsU21hbGxNZW51SXNBY3RpdmUgPSBmYWxzZTtcbiAgc3RhdGUubW9kYWxJc0FjdGl2ZSA9IHN0YXRlLm1vZGFsU21hbGxMb2NhdGlvbklzQWN0aXZlID8gdHJ1ZSA6IGZhbHNlO1xuICBzdGF0ZS5tb2RhbE5vcm1hbElzQWN0aXZlID0gZmFsc2U7XG5cbiAgcmVuZGVyKCk7XG59KTtcblxuYnV0dG9ucy5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHN0YXRlLm1vZGFsU21hbGxNZW51SXNBY3RpdmUgPSAhc3RhdGUubW9kYWxTbWFsbE1lbnVJc0FjdGl2ZTtcbiAgc3RhdGUubW9kYWxJc0FjdGl2ZSA9IHN0YXRlLm1vZGFsU21hbGxNZW51SXNBY3RpdmUgPyB0cnVlIDogZmFsc2U7XG4gIHN0YXRlLm1vZGFsU21hbGxMb2NhdGlvbklzQWN0aXZlID0gZmFsc2U7XG4gIHN0YXRlLm1vZGFsTm9ybWFsSXNBY3RpdmUgPSBmYWxzZTtcblxuICByZW5kZXIoKTtcbn0pO1xuXG5idXR0b25zLnByaWNlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwicHJpY2UhXCIpO1xuICBzdGF0ZS5tb2RhbFNtYWxsTWVudUlzQWN0aXZlID0gZmFsc2U7XG4gIHN0YXRlLm1vZGFsSXNBY3RpdmUgPSB0cnVlO1xuICBzdGF0ZS5tb2RhbFNtYWxsTG9jYXRpb25Jc0FjdGl2ZSA9IGZhbHNlO1xuICBzdGF0ZS5tb2RhbE5vcm1hbElzQWN0aXZlID0gdHJ1ZTtcblxuICByZW5kZXIoKTtcbn0pO1xuXG5tb2RhbHMuYmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgaWYgKGUudGFyZ2V0ICE9IG1vZGFscy5iYWNrZ3JvdW5kKSByZXR1cm47XG4gIHN0YXRlLm1vZGFsSXNBY3RpdmUgPSBmYWxzZTtcbiAgc3RhdGUubW9kYWxTbWFsbExvY2F0aW9uSXNBY3RpdmUgPSBmYWxzZTtcbiAgc3RhdGUubW9kYWxTbWFsbE1lbnVJc0FjdGl2ZSA9IGZhbHNlO1xuICAvLyBzdGF0ZS5tb2RhO1xuICBzdGF0ZS5tb2RhbE5vcm1hbElzQWN0aXZlID0gZmFsc2U7XG5cbiAgcmVuZGVyKCk7XG59KTtcblxuZnVuY3Rpb24gcmVuZGVyKCkge1xuICAvLyBhcHBseSBzdHlsZXMgYWNjb3JkaW5nIHRvIHN0YXRle31cblxuICAvL2JhY2tncm91bmRcbiAgbW9kYWxzLmJhY2tncm91bmQuc3R5bGUub3BhY2l0eSA9IHN0YXRlLm1vZGFsSXNBY3RpdmUgPyBcIjFcIiA6IFwiMC4wXCI7XG4gIG1vZGFscy5iYWNrZ3JvdW5kLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBzdGF0ZS5tb2RhbElzQWN0aXZlID8gXCJhbGxcIiA6IFwibm9uZVwiO1xuXG4gIC8vbWVudVxuICBtb2RhbHMubWVudS5zdHlsZS50cmFuc2Zvcm0gPSBzdGF0ZS5tb2RhbFNtYWxsTWVudUlzQWN0aXZlXG4gICAgPyBcInRyYW5zbGF0ZVgoMHB4KVwiXG4gICAgOiBcInRyYW5zbGF0ZVgoMzAwcHgpXCI7XG4gIG1vZGFscy5tZW51LnN0eWxlLm9wYWNpdHkgPSBzdGF0ZS5tb2RhbFNtYWxsTWVudUlzQWN0aXZlID8gXCIxXCIgOiBcIjAuMFwiO1xuICBtb2RhbHMubWVudS5zdHlsZS5wb2ludGVyRXZlbnRzID0gc3RhdGUubW9kYWxTbWFsbE1lbnVJc0FjdGl2ZVxuICAgID8gXCJhbGxcIlxuICAgIDogXCJub25lXCI7XG4gIGJ1dHRvbnMubWVudS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzdGF0ZS5tb2RhbFNtYWxsTWVudUlzQWN0aXZlXG4gICAgPyBcIiNmZmZcIlxuICAgIDogXCIjZmZmMFwiO1xuICBtZW51SWNvLmNsb3NlZC5zdHlsZS5kaXNwbGF5ID0gc3RhdGUubW9kYWxTbWFsbE1lbnVJc0FjdGl2ZVxuICAgID8gXCJub25lXCJcbiAgICA6IFwiYmxvY2tcIjtcbiAgbWVudUljby5vcGVuZWQuc3R5bGUuZGlzcGxheSA9ICFzdGF0ZS5tb2RhbFNtYWxsTWVudUlzQWN0aXZlXG4gICAgPyBcIm5vbmVcIlxuICAgIDogXCJibG9ja1wiO1xuXG4gIC8vbG9jYXRpb25cbiAgbW9kYWxzLmxvY2F0aW9uLnN0eWxlLnRyYW5zZm9ybSA9IHN0YXRlLm1vZGFsU21hbGxMb2NhdGlvbklzQWN0aXZlXG4gICAgPyBcInRyYW5zbGF0ZVgoMHB4KVwiXG4gICAgOiBcInRyYW5zbGF0ZVgoMzAwcHgpXCI7XG4gIG1vZGFscy5sb2NhdGlvbi5zdHlsZS5vcGFjaXR5ID0gc3RhdGUubW9kYWxTbWFsbExvY2F0aW9uSXNBY3RpdmVcbiAgICA/IFwiMVwiXG4gICAgOiBcIjAuMFwiO1xuICBtb2RhbHMubG9jYXRpb24uc3R5bGUucG9pbnRlckV2ZW50cyA9IHN0YXRlLm1vZGFsU21hbGxMb2NhdGlvbklzQWN0aXZlXG4gICAgPyBcImFsbFwiXG4gICAgOiBcIm5vbmVcIjtcbiAgYnV0dG9ucy5sb2NhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzdGF0ZS5tb2RhbFNtYWxsTG9jYXRpb25Jc0FjdGl2ZVxuICAgID8gXCIjZmZmXCJcbiAgICA6IFwiI2ZmZjBcIjtcblxuICBtb2RhbHMucHJpY2Uuc3R5bGUudHJhbnNmb3JtID0gc3RhdGUubW9kYWxOb3JtYWxJc0FjdGl2ZVxuICAgID8gXCJ0cmFuc2xhdGVYKDBweClcIlxuICAgIDogXCJ0cmFuc2xhdGVYKDMwMHB4KVwiO1xuICBtb2RhbHMucHJpY2Uuc3R5bGUub3BhY2l0eSA9IHN0YXRlLm1vZGFsTm9ybWFsSXNBY3RpdmUgPyBcIjFcIiA6IFwiMC4wXCI7XG4gIG1vZGFscy5wcmljZS5zdHlsZS5wb2ludGVyRXZlbnRzID0gc3RhdGUubW9kYWxOb3JtYWxJc0FjdGl2ZSA/IFwiYWxsXCIgOiBcIm5vbmVcIjtcbn1cblxuLy8gc2V0VGltZW91dCgoKSA9PiByZW5kZXIoKSwgMTAwMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=