/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/quiz.js":
/*!*********************!*\
  !*** ./src/quiz.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _quizmod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quizmod */ \"./src/quizmod.js\");\n\r\n\r\ndocument.getElementById('minus').innerHTML = (0,_quizmod__WEBPACK_IMPORTED_MODULE_0__.minus)(100, 2);\r\ndocument.getElementById('plus').innerHTML = (0,_quizmod__WEBPACK_IMPORTED_MODULE_0__.plus)(20, 20);\r\ndocument.getElementById('avg').innerHTML = (0,_quizmod__WEBPACK_IMPORTED_MODULE_0__.avg)(1, 2, 3);\r\n\n\n//# sourceURL=webpack://10/./src/quiz.js?");

/***/ }),

/***/ "./src/quizmod.js":
/*!************************!*\
  !*** ./src/quizmod.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"minus\": () => (/* binding */ minus),\n/* harmony export */   \"plus\": () => (/* binding */ plus),\n/* harmony export */   \"avg\": () => (/* binding */ avg),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction minus(a, b) {\r\n  return a - b;\r\n}\r\n\r\nfunction plus(a, b) {\r\n  return a + b;\r\n}\r\n\r\nfunction avg(...rest) {\r\n  console.log(Array.isArray(rest));\r\n  console.log(...rest);\r\n  console.log(...rest[0]);\r\n  console.log([...rest[0]]);\r\n  console.log(rest);\r\n  const arr = Array.isArray(rest[0]) ? [...rest[0]] : rest;\r\n  console.log(arr);\r\n  let result = 0;\r\n  let count = 0;\r\n  for (let i = 0; i < arr.length; i++) {\r\n    if (typeof arr[i] === 'number') {\r\n      result += arr[i];\r\n    } else {\r\n      count += 1;\r\n    }\r\n  }\r\n  return result / (arr.length - count);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ minus, plus, avg });\r\n\n\n//# sourceURL=webpack://10/./src/quizmod.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/quiz.js");
/******/ 	
/******/ })()
;