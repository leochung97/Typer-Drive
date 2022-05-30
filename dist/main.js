/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/input.js */ \"./src/scripts/input.js\");\n/* harmony import */ var _scripts_music_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/music.js */ \"./src/scripts/music.js\");\n\n\n // import Sprite from \"./scripts/sprite\"\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.querySelector('canvas');\n  var c = canvas.getContext('2d');\n  canvas.width = 1080;\n  canvas.height = 550;\n  c.fillStyle = \"gray\";\n  c.fillRect(0, 0, canvas.width, canvas.height);\n  var game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  game.addEventListeners();\n  var music = new _scripts_music_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  music.addEventListeners();\n  var input = new _scripts_input_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  input.addEventListeners();\n}); // const test_player = new Sprite({x: 312, y: 300});\n// test_player.draw();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFFQUcsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVztFQUV2RCxJQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1QixRQUF2QixDQUFmO0VBQ0EsSUFBTUMsQ0FBQyxHQUFHRixNQUFNLENBQUNHLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtFQUVBSCxNQUFNLENBQUNJLEtBQVAsR0FBZSxJQUFmO0VBQ0FKLE1BQU0sQ0FBQ0ssTUFBUCxHQUFnQixHQUFoQjtFQUVBSCxDQUFDLENBQUNJLFNBQUYsR0FBYyxNQUFkO0VBQ0FKLENBQUMsQ0FBQ0ssUUFBRixDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCUCxNQUFNLENBQUNJLEtBQXhCLEVBQStCSixNQUFNLENBQUNLLE1BQXRDO0VBRUEsSUFBSUcsSUFBSSxHQUFHLElBQUliLHdEQUFKLEVBQVg7RUFDQWEsSUFBSSxDQUFDQyxpQkFBTDtFQUVBLElBQUlDLEtBQUssR0FBRyxJQUFJYix5REFBSixFQUFaO0VBQ0FhLEtBQUssQ0FBQ0QsaUJBQU47RUFFQSxJQUFJRSxLQUFLLEdBQUcsSUFBSWYseURBQUosRUFBWjtFQUNBZSxLQUFLLENBQUNGLGlCQUFOO0FBQ0QsQ0FuQkQsR0FxQkE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZS5qc1wiXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vc2NyaXB0cy9pbnB1dC5qc1wiO1xuaW1wb3J0IE11c2ljIGZyb20gXCIuL3NjcmlwdHMvbXVzaWMuanNcIlxuLy8gaW1wb3J0IFNwcml0ZSBmcm9tIFwiLi9zY3JpcHRzL3Nwcml0ZVwiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkgeyAgXG4gIFxuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgY29uc3QgYyA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gIGNhbnZhcy53aWR0aCA9IDEwODA7XG4gIGNhbnZhcy5oZWlnaHQgPSA1NTA7XG5cbiAgYy5maWxsU3R5bGUgPSBcImdyYXlcIjtcbiAgYy5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgZ2FtZS5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gIGxldCBtdXNpYyA9IG5ldyBNdXNpYygpO1xuICBtdXNpYy5hZGRFdmVudExpc3RlbmVycygpO1xuXG4gIGxldCBpbnB1dCA9IG5ldyBJbnB1dCgpO1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVycygpO1xufSk7XG5cbi8vIGNvbnN0IHRlc3RfcGxheWVyID0gbmV3IFNwcml0ZSh7eDogMzEyLCB5OiAzMDB9KTtcbi8vIHRlc3RfcGxheWVyLmRyYXcoKTsiXSwibmFtZXMiOlsiR2FtZSIsIklucHV0IiwiTXVzaWMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJxdWVyeVNlbGVjdG9yIiwiYyIsImdldENvbnRleHQiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZ2FtZSIsImFkZEV2ZW50TGlzdGVuZXJzIiwibXVzaWMiLCJpbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input */ \"./src/scripts/input.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.input = new _input__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // this.current_word = new Dictionary()\n\n    this.start = document.querySelector(\"#start-button\");\n    this.started = false;\n    this.currentLevel = 1;\n  }\n\n  _createClass(Game, [{\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      this.start.addEventListener(\"click\", function (listener) {\n        if (!_this.started) {\n          _this.start.innerText = \"Restart\";\n          _this.started = true;\n          _this.currentLevel = 1;\n\n          _this.startLevel(_this.currentLevel);\n        } else {\n          _this.start.innerText = \"Restart\";\n          _this.started = true;\n          _this.currentLevel = 1;\n\n          _this.startLevel(_this.currentLevel);\n        }\n      });\n    }\n  }, {\n    key: \"startLevel\",\n    value: function startLevel(level) {\n      if (this.started) {\n        console.log(\"Generate word and start typing!\");\n      }\n    }\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0lBRXFCQztFQUNuQixnQkFBYztJQUFBOztJQUNaLEtBQUtDLEtBQUwsR0FBYSxJQUFJRiw4Q0FBSixFQUFiLENBRFksQ0FFWjs7SUFDQSxLQUFLRyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFiO0lBQ0EsS0FBS0MsT0FBTCxHQUFlLEtBQWY7SUFDQSxLQUFLQyxZQUFMLEdBQW9CLENBQXBCO0VBQ0Q7Ozs7V0FFRCw2QkFBb0I7TUFBQTs7TUFDbEIsS0FBS0osS0FBTCxDQUFXSyxnQkFBWCxDQUE0QixPQUE1QixFQUFxQyxVQUFDQyxRQUFELEVBQWM7UUFDakQsSUFBSSxDQUFDLEtBQUksQ0FBQ0gsT0FBVixFQUFtQjtVQUNqQixLQUFJLENBQUNILEtBQUwsQ0FBV08sU0FBWCxHQUF1QixTQUF2QjtVQUNBLEtBQUksQ0FBQ0osT0FBTCxHQUFlLElBQWY7VUFDQSxLQUFJLENBQUNDLFlBQUwsR0FBb0IsQ0FBcEI7O1VBQ0EsS0FBSSxDQUFDSSxVQUFMLENBQWdCLEtBQUksQ0FBQ0osWUFBckI7UUFDRCxDQUxELE1BS087VUFDTCxLQUFJLENBQUNKLEtBQUwsQ0FBV08sU0FBWCxHQUF1QixTQUF2QjtVQUNBLEtBQUksQ0FBQ0osT0FBTCxHQUFlLElBQWY7VUFDQSxLQUFJLENBQUNDLFlBQUwsR0FBb0IsQ0FBcEI7O1VBQ0EsS0FBSSxDQUFDSSxVQUFMLENBQWdCLEtBQUksQ0FBQ0osWUFBckI7UUFDRDtNQUNGLENBWkQ7SUFhRDs7O1dBRUQsb0JBQVdLLEtBQVgsRUFBa0I7TUFDaEIsSUFBSSxLQUFLTixPQUFULEVBQWtCO1FBQ2hCTyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxpQ0FBWjtNQUNEO0lBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0IGZyb20gXCIuL2lucHV0XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQoKVxuICAgIC8vIHRoaXMuY3VycmVudF93b3JkID0gbmV3IERpY3Rpb25hcnkoKVxuICAgIHRoaXMuc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N0YXJ0LWJ1dHRvblwiKVxuICAgIHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuY3VycmVudExldmVsID0gMTtcbiAgfVxuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChsaXN0ZW5lcikgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXJ0ZWQpIHtcbiAgICAgICAgdGhpcy5zdGFydC5pbm5lclRleHQgPSBcIlJlc3RhcnRcIlxuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmN1cnJlbnRMZXZlbCA9IDE7XG4gICAgICAgIHRoaXMuc3RhcnRMZXZlbCh0aGlzLmN1cnJlbnRMZXZlbClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RhcnQuaW5uZXJUZXh0ID0gXCJSZXN0YXJ0XCJcbiAgICAgICAgdGhpcy5zdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jdXJyZW50TGV2ZWwgPSAxO1xuICAgICAgICB0aGlzLnN0YXJ0TGV2ZWwodGhpcy5jdXJyZW50TGV2ZWwpXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzdGFydExldmVsKGxldmVsKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRlZCkge1xuICAgICAgY29uc29sZS5sb2coXCJHZW5lcmF0ZSB3b3JkIGFuZCBzdGFydCB0eXBpbmchXCIpXG4gICAgfVxuICB9XG59Il0sIm5hbWVzIjpbIklucHV0IiwiR2FtZSIsImlucHV0Iiwic3RhcnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdGFydGVkIiwiY3VycmVudExldmVsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwiaW5uZXJUZXh0Iiwic3RhcnRMZXZlbCIsImxldmVsIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/input.js":
/*!******************************!*\
  !*** ./src/scripts/input.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Input; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n// import Word from \"./word.js\"\nvar Input = /*#__PURE__*/function () {\n  function Input(level) {\n    _classCallCheck(this, Input);\n\n    this.level = level;\n    this.input = document.querySelector(\"#input\");\n    this.typed = \"\";\n  }\n\n  _createClass(Input, [{\n    key: \"handler\",\n    value: function handler(e) {\n      this.typed += e;\n      console.log(this.typed);\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      this.input.addEventListener(\"keyup\", this.handler);\n      this.input.addEventListener(\"keydown\", this.handler);\n      this.input.addEventListener(\"keypress\", this.handler);\n    }\n  }]);\n\n  return Input;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9pbnB1dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7SUFFcUJBO0VBQ25CLGVBQVlDLEtBQVosRUFBbUI7SUFBQTs7SUFDakIsS0FBS0EsS0FBTCxHQUFhQSxLQUFiO0lBQ0EsS0FBS0MsS0FBTCxHQUFhQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtJQUNBLEtBQUtDLEtBQUwsR0FBYSxFQUFiO0VBQ0Q7Ozs7V0FFRCxpQkFBUUMsQ0FBUixFQUFXO01BQ1QsS0FBS0QsS0FBTCxJQUFjQyxDQUFkO01BQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtILEtBQWpCO0lBQ0Q7OztXQUVELDZCQUFvQjtNQUNsQixLQUFLSCxLQUFMLENBQVdPLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLEtBQUtDLE9BQTFDO01BQ0EsS0FBS1IsS0FBTCxDQUFXTyxnQkFBWCxDQUE0QixTQUE1QixFQUF1QyxLQUFLQyxPQUE1QztNQUNBLEtBQUtSLEtBQUwsQ0FBV08sZ0JBQVgsQ0FBNEIsVUFBNUIsRUFBd0MsS0FBS0MsT0FBN0M7SUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2lucHV0LmpzPzQ0ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFdvcmQgZnJvbSBcIi4vd29yZC5qc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IHtcbiAgY29uc3RydWN0b3IobGV2ZWwpIHtcbiAgICB0aGlzLmxldmVsID0gbGV2ZWw7XG4gICAgdGhpcy5pbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXRcIilcbiAgICB0aGlzLnR5cGVkID0gXCJcIjtcbiAgfVxuXG4gIGhhbmRsZXIoZSkge1xuICAgIHRoaXMudHlwZWQgKz0gZTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnR5cGVkKVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgdGhpcy5oYW5kbGVyKTtcbiAgICB0aGlzLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlcik7XG4gICAgdGhpcy5pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgdGhpcy5oYW5kbGVyKTtcbiAgfVxuXG59Il0sIm5hbWVzIjpbIklucHV0IiwibGV2ZWwiLCJpbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInR5cGVkIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/input.js\n");

/***/ }),

/***/ "./src/scripts/music.js":
/*!******************************!*\
  !*** ./src/scripts/music.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Music; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Music = /*#__PURE__*/function () {\n  function Music() {\n    _classCallCheck(this, Music);\n\n    this.music = document.querySelector(\"#game-music\");\n    this.toggle = document.querySelector(\"#mute-button\");\n    this.muted = true;\n    this.music.volume = 0.01;\n  }\n\n  _createClass(Music, [{\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      this.toggle.addEventListener(\"click\", function (listener) {\n        if (!_this.muted) {\n          _this.music.currentTime = 0;\n\n          _this.music.play();\n\n          _this.toggle.innerText = \"Mute\";\n          _this.muted = true;\n        } else {\n          _this.music.pause();\n\n          _this.toggle.innerText = \"Play\";\n          _this.muted = false;\n        }\n      });\n    }\n  }]);\n\n  return Music;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tdXNpYy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQTtFQUNuQixpQkFBYztJQUFBOztJQUNaLEtBQUtDLEtBQUwsR0FBYUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWI7SUFDQSxLQUFLQyxNQUFMLEdBQWNGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFkO0lBQ0EsS0FBS0UsS0FBTCxHQUFhLElBQWI7SUFDQSxLQUFLSixLQUFMLENBQVdLLE1BQVgsR0FBb0IsSUFBcEI7RUFDRDs7OztXQUVELDZCQUFvQjtNQUFBOztNQUNsQixLQUFLRixNQUFMLENBQVlHLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQUNDLFFBQUQsRUFBYztRQUNsRCxJQUFJLENBQUMsS0FBSSxDQUFDSCxLQUFWLEVBQWlCO1VBQ2YsS0FBSSxDQUFDSixLQUFMLENBQVdRLFdBQVgsR0FBeUIsQ0FBekI7O1VBQ0EsS0FBSSxDQUFDUixLQUFMLENBQVdTLElBQVg7O1VBQ0EsS0FBSSxDQUFDTixNQUFMLENBQVlPLFNBQVosR0FBd0IsTUFBeEI7VUFDQSxLQUFJLENBQUNOLEtBQUwsR0FBYSxJQUFiO1FBQ0QsQ0FMRCxNQUtPO1VBQ0wsS0FBSSxDQUFDSixLQUFMLENBQVdXLEtBQVg7O1VBQ0EsS0FBSSxDQUFDUixNQUFMLENBQVlPLFNBQVosR0FBd0IsTUFBeEI7VUFDQSxLQUFJLENBQUNOLEtBQUwsR0FBYSxLQUFiO1FBQ0Q7TUFDRixDQVhEO0lBWUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tdXNpYy5qcz9mMDQxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE11c2ljIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tdXNpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZS1tdXNpY1wiKTtcbiAgICB0aGlzLnRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbXV0ZS1idXR0b25cIik7XG4gICAgdGhpcy5tdXRlZCA9IHRydWU7XG4gICAgdGhpcy5tdXNpYy52b2x1bWUgPSAwLjAxO1xuICB9O1xuXG4gIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAobGlzdGVuZXIpID0+IHtcbiAgICAgIGlmICghdGhpcy5tdXRlZCkge1xuICAgICAgICB0aGlzLm11c2ljLmN1cnJlbnRUaW1lID0gMDtcbiAgICAgICAgdGhpcy5tdXNpYy5wbGF5KCk7XG4gICAgICAgIHRoaXMudG9nZ2xlLmlubmVyVGV4dCA9IFwiTXV0ZVwiO1xuICAgICAgICB0aGlzLm11dGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubXVzaWMucGF1c2UoKTtcbiAgICAgICAgdGhpcy50b2dnbGUuaW5uZXJUZXh0ID0gXCJQbGF5XCI7XG4gICAgICAgIHRoaXMubXV0ZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcbn0iXSwibmFtZXMiOlsiTXVzaWMiLCJtdXNpYyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRvZ2dsZSIsIm11dGVkIiwidm9sdW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImxpc3RlbmVyIiwiY3VycmVudFRpbWUiLCJwbGF5IiwiaW5uZXJUZXh0IiwicGF1c2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/music.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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