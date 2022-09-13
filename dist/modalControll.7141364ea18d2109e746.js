"use strict";
(self["webpackChunkanwebpack"] = self["webpackChunkanwebpack"] || []).push([["modalControll"],{

/***/ "./src/scripts/other/modalControl.ts":
/*!*******************************************!*\
  !*** ./src/scripts/other/modalControl.ts ***!
  \*******************************************/
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
    // priceClose: "-m+",
};
const modals = {
    background: document.querySelector(".modal__background"),
    menu: document.getElementById("modal-menu"),
    location: document.getElementById("modal-location"),
    price: document.getElementById("modal-price"),
};
const menuIco = {
    closed: document.getElementById("menu-ico_closed"),
    opened: document.getElementById("menu-ico_opened"),
};
if (buttons.location && buttons.menu && buttons.price) {
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
}
if (modals.background) {
    modals.background.addEventListener("click", (e) => {
        if (e.target != modals.background)
            return;
        state.modalIsActive = false;
        state.modalSmallLocationIsActive = false;
        state.modalSmallMenuIsActive = false;
        // state.moda;
        state.modalNormalIsActive = false;
        render();
    });
}
function render() {
    // apply styles according to state{}
    //background
    if (modals.background && modals.menu) {
        modals.background.style.opacity = state.modalIsActive ? "1" : "0.0";
        modals.background.style.pointerEvents = state.modalIsActive
            ? "all"
            : "none";
        //menu
        modals.menu.style.transform = state.modalSmallMenuIsActive
            ? "translateX(0px)"
            : "translateX(300px)";
        modals.menu.style.opacity = state.modalSmallMenuIsActive ? "1" : "0.0";
        modals.menu.style.pointerEvents = state.modalSmallMenuIsActive
            ? "all"
            : "none";
    }
    if (buttons.menu && menuIco.closed && menuIco.opened) {
        buttons.menu.style.backgroundColor = state.modalSmallMenuIsActive
            ? "#fff"
            : "#fff0";
        menuIco.closed.style.display = state.modalSmallMenuIsActive
            ? "none"
            : "block";
        menuIco.opened.style.display = !state.modalSmallMenuIsActive
            ? "none"
            : "block";
    }
    if (modals.location && buttons.location && modals.price) {
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
        modals.price.style.pointerEvents = state.modalNormalIsActive
            ? "all"
            : "none";
    }
}
// setTimeout(() => render(), 1000);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/other/modalControl.ts"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWxDb250cm9sbC43MTQxMzY0ZWExOGQyMTA5ZTc0Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbndlYnBhY2svLi9zcmMvc2NyaXB0cy9vdGhlci9tb2RhbENvbnRyb2wudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5sZXQgc3RhdGUgPSB7XG4gICAgLy8gbmVlZCB0byBjbG9zZSBtb2RhbCB3aXRob3V0IGJhY2tncm91bmRcbiAgICBtb2RhbElzQWN0aXZlOiBmYWxzZSxcbiAgICBtb2RhbFNtYWxsTG9jYXRpb25Jc0FjdGl2ZTogZmFsc2UsXG4gICAgbW9kYWxTbWFsbE1lbnVJc0FjdGl2ZTogZmFsc2UsXG4gICAgbW9kYWxOb3JtYWxJc0FjdGl2ZTogZmFsc2UsXG59O1xuY29uc3QgYnV0dG9ucyA9IHtcbiAgICBsb2NhdGlvbjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItYnRuLWxvY2F0aW9uXCIpLFxuICAgIHBob25lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlci1idG4tcGhvbmVcIiksXG4gICAgbWVudTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXItYnRuLW1lbnVcIiksXG4gICAgcHJpY2U6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLXByaWNlXCIpLFxuICAgIC8vIHByaWNlQ2xvc2U6IFwiLW0rXCIsXG59O1xuY29uc3QgbW9kYWxzID0ge1xuICAgIGJhY2tncm91bmQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2JhY2tncm91bmRcIiksXG4gICAgbWVudTogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RhbC1tZW51XCIpLFxuICAgIGxvY2F0aW9uOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLWxvY2F0aW9uXCIpLFxuICAgIHByaWNlOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vZGFsLXByaWNlXCIpLFxufTtcbmNvbnN0IG1lbnVJY28gPSB7XG4gICAgY2xvc2VkOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtaWNvX2Nsb3NlZFwiKSxcbiAgICBvcGVuZWQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1pY29fb3BlbmVkXCIpLFxufTtcbmlmIChidXR0b25zLmxvY2F0aW9uICYmIGJ1dHRvbnMubWVudSAmJiBidXR0b25zLnByaWNlKSB7XG4gICAgYnV0dG9ucy5sb2NhdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBzdGF0ZS5tb2RhbFNtYWxsTG9jYXRpb25Jc0FjdGl2ZSA9ICFzdGF0ZS5tb2RhbFNtYWxsTG9jYXRpb25Jc0FjdGl2ZTtcbiAgICAgICAgc3RhdGUubW9kYWxTbWFsbE1lbnVJc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5tb2RhbElzQWN0aXZlID0gc3RhdGUubW9kYWxTbWFsbExvY2F0aW9uSXNBY3RpdmUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHN0YXRlLm1vZGFsTm9ybWFsSXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgcmVuZGVyKCk7XG4gICAgfSk7XG4gICAgYnV0dG9ucy5tZW51LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIHN0YXRlLm1vZGFsU21hbGxNZW51SXNBY3RpdmUgPSAhc3RhdGUubW9kYWxTbWFsbE1lbnVJc0FjdGl2ZTtcbiAgICAgICAgc3RhdGUubW9kYWxJc0FjdGl2ZSA9IHN0YXRlLm1vZGFsU21hbGxNZW51SXNBY3RpdmUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHN0YXRlLm1vZGFsU21hbGxMb2NhdGlvbklzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLm1vZGFsTm9ybWFsSXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgcmVuZGVyKCk7XG4gICAgfSk7XG4gICAgYnV0dG9ucy5wcmljZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInByaWNlIVwiKTtcbiAgICAgICAgc3RhdGUubW9kYWxTbWFsbE1lbnVJc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5tb2RhbElzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUubW9kYWxTbWFsbExvY2F0aW9uSXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUubW9kYWxOb3JtYWxJc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHJlbmRlcigpO1xuICAgIH0pO1xufVxuaWYgKG1vZGFscy5iYWNrZ3JvdW5kKSB7XG4gICAgbW9kYWxzLmJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldCAhPSBtb2RhbHMuYmFja2dyb3VuZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc3RhdGUubW9kYWxJc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5tb2RhbFNtYWxsTG9jYXRpb25Jc0FjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5tb2RhbFNtYWxsTWVudUlzQWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIHN0YXRlLm1vZGE7XG4gICAgICAgIHN0YXRlLm1vZGFsTm9ybWFsSXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgcmVuZGVyKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gYXBwbHkgc3R5bGVzIGFjY29yZGluZyB0byBzdGF0ZXt9XG4gICAgLy9iYWNrZ3JvdW5kXG4gICAgaWYgKG1vZGFscy5iYWNrZ3JvdW5kICYmIG1vZGFscy5tZW51KSB7XG4gICAgICAgIG1vZGFscy5iYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSBzdGF0ZS5tb2RhbElzQWN0aXZlID8gXCIxXCIgOiBcIjAuMFwiO1xuICAgICAgICBtb2RhbHMuYmFja2dyb3VuZC5zdHlsZS5wb2ludGVyRXZlbnRzID0gc3RhdGUubW9kYWxJc0FjdGl2ZVxuICAgICAgICAgICAgPyBcImFsbFwiXG4gICAgICAgICAgICA6IFwibm9uZVwiO1xuICAgICAgICAvL21lbnVcbiAgICAgICAgbW9kYWxzLm1lbnUuc3R5bGUudHJhbnNmb3JtID0gc3RhdGUubW9kYWxTbWFsbE1lbnVJc0FjdGl2ZVxuICAgICAgICAgICAgPyBcInRyYW5zbGF0ZVgoMHB4KVwiXG4gICAgICAgICAgICA6IFwidHJhbnNsYXRlWCgzMDBweClcIjtcbiAgICAgICAgbW9kYWxzLm1lbnUuc3R5bGUub3BhY2l0eSA9IHN0YXRlLm1vZGFsU21hbGxNZW51SXNBY3RpdmUgPyBcIjFcIiA6IFwiMC4wXCI7XG4gICAgICAgIG1vZGFscy5tZW51LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBzdGF0ZS5tb2RhbFNtYWxsTWVudUlzQWN0aXZlXG4gICAgICAgICAgICA/IFwiYWxsXCJcbiAgICAgICAgICAgIDogXCJub25lXCI7XG4gICAgfVxuICAgIGlmIChidXR0b25zLm1lbnUgJiYgbWVudUljby5jbG9zZWQgJiYgbWVudUljby5vcGVuZWQpIHtcbiAgICAgICAgYnV0dG9ucy5tZW51LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHN0YXRlLm1vZGFsU21hbGxNZW51SXNBY3RpdmVcbiAgICAgICAgICAgID8gXCIjZmZmXCJcbiAgICAgICAgICAgIDogXCIjZmZmMFwiO1xuICAgICAgICBtZW51SWNvLmNsb3NlZC5zdHlsZS5kaXNwbGF5ID0gc3RhdGUubW9kYWxTbWFsbE1lbnVJc0FjdGl2ZVxuICAgICAgICAgICAgPyBcIm5vbmVcIlxuICAgICAgICAgICAgOiBcImJsb2NrXCI7XG4gICAgICAgIG1lbnVJY28ub3BlbmVkLnN0eWxlLmRpc3BsYXkgPSAhc3RhdGUubW9kYWxTbWFsbE1lbnVJc0FjdGl2ZVxuICAgICAgICAgICAgPyBcIm5vbmVcIlxuICAgICAgICAgICAgOiBcImJsb2NrXCI7XG4gICAgfVxuICAgIGlmIChtb2RhbHMubG9jYXRpb24gJiYgYnV0dG9ucy5sb2NhdGlvbiAmJiBtb2RhbHMucHJpY2UpIHtcbiAgICAgICAgLy9sb2NhdGlvblxuICAgICAgICBtb2RhbHMubG9jYXRpb24uc3R5bGUudHJhbnNmb3JtID0gc3RhdGUubW9kYWxTbWFsbExvY2F0aW9uSXNBY3RpdmVcbiAgICAgICAgICAgID8gXCJ0cmFuc2xhdGVYKDBweClcIlxuICAgICAgICAgICAgOiBcInRyYW5zbGF0ZVgoMzAwcHgpXCI7XG4gICAgICAgIG1vZGFscy5sb2NhdGlvbi5zdHlsZS5vcGFjaXR5ID0gc3RhdGUubW9kYWxTbWFsbExvY2F0aW9uSXNBY3RpdmVcbiAgICAgICAgICAgID8gXCIxXCJcbiAgICAgICAgICAgIDogXCIwLjBcIjtcbiAgICAgICAgbW9kYWxzLmxvY2F0aW9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBzdGF0ZS5tb2RhbFNtYWxsTG9jYXRpb25Jc0FjdGl2ZVxuICAgICAgICAgICAgPyBcImFsbFwiXG4gICAgICAgICAgICA6IFwibm9uZVwiO1xuICAgICAgICBidXR0b25zLmxvY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHN0YXRlLm1vZGFsU21hbGxMb2NhdGlvbklzQWN0aXZlXG4gICAgICAgICAgICA/IFwiI2ZmZlwiXG4gICAgICAgICAgICA6IFwiI2ZmZjBcIjtcbiAgICAgICAgbW9kYWxzLnByaWNlLnN0eWxlLnRyYW5zZm9ybSA9IHN0YXRlLm1vZGFsTm9ybWFsSXNBY3RpdmVcbiAgICAgICAgICAgID8gXCJ0cmFuc2xhdGVYKDBweClcIlxuICAgICAgICAgICAgOiBcInRyYW5zbGF0ZVgoMzAwcHgpXCI7XG4gICAgICAgIG1vZGFscy5wcmljZS5zdHlsZS5vcGFjaXR5ID0gc3RhdGUubW9kYWxOb3JtYWxJc0FjdGl2ZSA/IFwiMVwiIDogXCIwLjBcIjtcbiAgICAgICAgbW9kYWxzLnByaWNlLnN0eWxlLnBvaW50ZXJFdmVudHMgPSBzdGF0ZS5tb2RhbE5vcm1hbElzQWN0aXZlXG4gICAgICAgICAgICA/IFwiYWxsXCJcbiAgICAgICAgICAgIDogXCJub25lXCI7XG4gICAgfVxufVxuLy8gc2V0VGltZW91dCgoKSA9PiByZW5kZXIoKSwgMTAwMCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=