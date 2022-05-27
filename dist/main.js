/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_game__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_music__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/music */ \"./src/scripts/music.js\");\n/* harmony import */ var _scripts_music__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_music__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sprite */ \"./src/scripts/sprite.js\");\n/* harmony import */ var _scripts_sprite__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_sprite__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.querySelector('canvas');\n  var c = canvas.getContext('2d');\n  canvas.width = 1080;\n  canvas.height = 550;\n  c.fillStyle = \"gray\";\n  c.fillRect(0, 0, canvas.width, canvas.height);\n  var game = new (_scripts_game__WEBPACK_IMPORTED_MODULE_0___default())();\n  game.render();\n  game.addEventListeners();\n  var music = new (_scripts_music__WEBPACK_IMPORTED_MODULE_1___default())();\n  music.addEventListeners();\n});\nvar test_player = new (_scripts_sprite__WEBPACK_IMPORTED_MODULE_2___default())({\n  x: 312,\n  y: 300\n});\ntest_player.draw();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBRyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0VBRXZELElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFFBQXZCLENBQWY7RUFDQSxJQUFNQyxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFWO0VBRUFILE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLElBQWY7RUFDQUosTUFBTSxDQUFDSyxNQUFQLEdBQWdCLEdBQWhCO0VBRUFILENBQUMsQ0FBQ0ksU0FBRixHQUFjLE1BQWQ7RUFDQUosQ0FBQyxDQUFDSyxRQUFGLENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUJQLE1BQU0sQ0FBQ0ksS0FBeEIsRUFBK0JKLE1BQU0sQ0FBQ0ssTUFBdEM7RUFFQSxJQUFJRyxJQUFJLEdBQUcsSUFBSWIsc0RBQUosRUFBWDtFQUNBYSxJQUFJLENBQUNDLE1BQUw7RUFDQUQsSUFBSSxDQUFDRSxpQkFBTDtFQUVBLElBQUlDLEtBQUssR0FBRyxJQUFJZix1REFBSixFQUFaO0VBQ0FlLEtBQUssQ0FBQ0QsaUJBQU47QUFDRCxDQWpCRDtBQW1CQSxJQUFNRSxXQUFXLEdBQUcsSUFBSWYsd0RBQUosQ0FBVztFQUFDZ0IsQ0FBQyxFQUFFLEdBQUo7RUFBU0MsQ0FBQyxFQUFFO0FBQVosQ0FBWCxDQUFwQjtBQUNBRixXQUFXLENBQUNHLElBQVoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWVcIlxuaW1wb3J0IE11c2ljIGZyb20gXCIuL3NjcmlwdHMvbXVzaWNcIlxuaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9zY3JpcHRzL3Nwcml0ZVwiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkgeyAgXG4gIFxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgY29uc3QgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGNhbnZhcy53aWR0aCA9IDEwODA7XG4gIGNhbnZhcy5oZWlnaHQgPSA1NTA7XG5cbiAgYy5maWxsU3R5bGUgPSBcImdyYXlcIjtcbiAgYy5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgZ2FtZS5yZW5kZXIoKTtcbiAgZ2FtZS5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gIGxldCBtdXNpYyA9IG5ldyBNdXNpYygpO1xuICBtdXNpYy5hZGRFdmVudExpc3RlbmVycygpO1xufSk7XG5cbmNvbnN0IHRlc3RfcGxheWVyID0gbmV3IFNwcml0ZSh7eDogMzEyLCB5OiAzMDB9KTtcbnRlc3RfcGxheWVyLmRyYXcoKTsiXSwibmFtZXMiOlsiR2FtZSIsIk11c2ljIiwiU3ByaXRlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImMiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImdhbWUiLCJyZW5kZXIiLCJhZGRFdmVudExpc3RlbmVycyIsIm11c2ljIiwidGVzdF9wbGF5ZXIiLCJ4IiwieSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIiJdLCJtYXBwaW5ncyI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/music.js":
/*!******************************!*\
  !*** ./src/scripts/music.js ***!
  \******************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tdXNpYy5qcy5qcyIsIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL211c2ljLmpzP2YwNDEiXSwic291cmNlc0NvbnRlbnQiOlsiIl0sIm1hcHBpbmdzIjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/music.js\n");

/***/ }),

/***/ "./src/scripts/sprite.js":
/*!*******************************!*\
  !*** ./src/scripts/sprite.js ***!
  \*******************************/
/***/ (function() {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Sprite = /*#__PURE__*/function () {\n  function Sprite(position) {\n    _classCallCheck(this, Sprite);\n\n    this.position = position;\n  }\n\n  _createClass(Sprite, [{\n    key: \"draw\",\n    value: function draw() {\n      c.fillStyle = 'red';\n      c.fillRect(this.position.x, this.position.y, 50, 150);\n    }\n  }]);\n\n  return Sprite;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zcHJpdGUuanMuanMiLCJuYW1lcyI6WyJTcHJpdGUiLCJwb3NpdGlvbiIsImMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIngiLCJ5Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9zcHJpdGUuanM/MGFjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTcHJpdGUge1xuICBjb25zdHJ1Y3Rvcihwb3NpdGlvbikge1xuICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgfVxuXG4gIGRyYXcoKSB7XG4gICAgYy5maWxsU3R5bGUgPSAncmVkJ1xuICAgIGMuZmlsbFJlY3QodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnksIDUwLCAxNTApO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBTUEsTTtFQUNKLGdCQUFZQyxRQUFaLEVBQXNCO0lBQUE7O0lBQ3BCLEtBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0VBQ0Q7Ozs7V0FFRCxnQkFBTztNQUNMQyxDQUFDLENBQUNDLFNBQUYsR0FBYyxLQUFkO01BQ0FELENBQUMsQ0FBQ0UsUUFBRixDQUFXLEtBQUtILFFBQUwsQ0FBY0ksQ0FBekIsRUFBNEIsS0FBS0osUUFBTCxDQUFjSyxDQUExQyxFQUE2QyxFQUE3QyxFQUFpRCxHQUFqRDtJQUNEIn0=\n//# sourceURL=webpack-internal:///./src/scripts/sprite.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;