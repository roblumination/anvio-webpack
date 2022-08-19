(self["webpackChunkanwebpack"] = self["webpackChunkanwebpack"] || []).push([["increaser"],{

/***/ "./src/scripts/numberIncreaser.js":
/*!****************************************!*\
  !*** ./src/scripts/numberIncreaser.js ***!
  \****************************************/
/***/ (() => {

const infoNum1 = document.getElementById('info-number-1');
const infoNum2 = document.getElementById('info-number-2');
const infoScrollPos = infoNum1.offsetTop;
let isInfoCountStarted = false;

window.addEventListener('scroll', (e) => {
  // console.log(window.scrollY, infoScrollPos);
  if (!isInfoCountStarted && window.scrollY > infoScrollPos - 600) {
    // console.log('should increase here');
    isInfoCountStarted = true;
    startInfoCount();
  }
});

console.log('loaded!');

async function startInfoCount() {
  const num1Max = 12;
  const num2Max = 26;

  for (let i = 0; i < num2Max; i++) {
    if (i <= num1Max) infoNum1.innerText = i;
    if (i <= num2Max) infoNum2.innerText = i;
    await delay(40);
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jcmVhc2VyLmIxODg5OWYyOTI0ZTVhNzBlNTUyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2Fud2VicGFjay8uL3NyYy9zY3JpcHRzL251bWJlckluY3JlYXNlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBpbmZvTnVtMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLW51bWJlci0xJyk7XG5jb25zdCBpbmZvTnVtMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmZvLW51bWJlci0yJyk7XG5jb25zdCBpbmZvU2Nyb2xsUG9zID0gaW5mb051bTEub2Zmc2V0VG9wO1xubGV0IGlzSW5mb0NvdW50U3RhcnRlZCA9IGZhbHNlO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKGUpID0+IHtcbiAgLy8gY29uc29sZS5sb2cod2luZG93LnNjcm9sbFksIGluZm9TY3JvbGxQb3MpO1xuICBpZiAoIWlzSW5mb0NvdW50U3RhcnRlZCAmJiB3aW5kb3cuc2Nyb2xsWSA+IGluZm9TY3JvbGxQb3MgLSA2MDApIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc2hvdWxkIGluY3JlYXNlIGhlcmUnKTtcbiAgICBpc0luZm9Db3VudFN0YXJ0ZWQgPSB0cnVlO1xuICAgIHN0YXJ0SW5mb0NvdW50KCk7XG4gIH1cbn0pO1xuXG5jb25zb2xlLmxvZygnbG9hZGVkIScpO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydEluZm9Db3VudCgpIHtcbiAgY29uc3QgbnVtMU1heCA9IDEyO1xuICBjb25zdCBudW0yTWF4ID0gMjY7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW0yTWF4OyBpKyspIHtcbiAgICBpZiAoaSA8PSBudW0xTWF4KSBpbmZvTnVtMS5pbm5lclRleHQgPSBpO1xuICAgIGlmIChpIDw9IG51bTJNYXgpIGluZm9OdW0yLmlubmVyVGV4dCA9IGk7XG4gICAgYXdhaXQgZGVsYXkoNDApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGF5KGRlbGF5SW5tcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlc29sdmUoMik7XG4gICAgfSwgZGVsYXlJbm1zKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=