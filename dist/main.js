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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_music_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/music.js */ \"./src/scripts/music.js\");\n// import Game from \"./scripts/game\"\n // import Sprite from \"./scripts/sprite\"\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.querySelector('canvas');\n  var c = canvas.getContext('2d');\n  canvas.width = 1080;\n  canvas.height = 550;\n  c.fillStyle = \"gray\";\n  c.fillRect(0, 0, canvas.width, canvas.height); // let game = new Game();\n  // game.render();\n  // game.addEventListeners();\n\n  var music = new _scripts_music_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  music.addEventListeners();\n}); // const test_player = new Sprite({x: 312, y: 300});\n// test_player.draw();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtDQUVBOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0VBRXZELElBQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLFFBQXZCLENBQWY7RUFDQSxJQUFNQyxDQUFDLEdBQUdGLE1BQU0sQ0FBQ0csVUFBUCxDQUFrQixJQUFsQixDQUFWO0VBRUFILE1BQU0sQ0FBQ0ksS0FBUCxHQUFlLElBQWY7RUFDQUosTUFBTSxDQUFDSyxNQUFQLEdBQWdCLEdBQWhCO0VBRUFILENBQUMsQ0FBQ0ksU0FBRixHQUFjLE1BQWQ7RUFDQUosQ0FBQyxDQUFDSyxRQUFGLENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUJQLE1BQU0sQ0FBQ0ksS0FBeEIsRUFBK0JKLE1BQU0sQ0FBQ0ssTUFBdEMsRUFUdUQsQ0FXdkQ7RUFDQTtFQUNBOztFQUVBLElBQUlHLEtBQUssR0FBRyxJQUFJWCx5REFBSixFQUFaO0VBQ0FXLEtBQUssQ0FBQ0MsaUJBQU47QUFDRCxDQWpCRCxHQW1CQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCJcbmltcG9ydCBNdXNpYyBmcm9tIFwiLi9zY3JpcHRzL211c2ljLmpzXCJcbi8vIGltcG9ydCBTcHJpdGUgZnJvbSBcIi4vc2NyaXB0cy9zcHJpdGVcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHsgIFxuICBcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG4gIGNvbnN0IGMgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICBjYW52YXMud2lkdGggPSAxMDgwO1xuICBjYW52YXMuaGVpZ2h0ID0gNTUwO1xuXG4gIGMuZmlsbFN0eWxlID0gXCJncmF5XCI7XG4gIGMuZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAvLyBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gIC8vIGdhbWUucmVuZGVyKCk7XG4gIC8vIGdhbWUuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICBsZXQgbXVzaWMgPSBuZXcgTXVzaWMoKTtcbiAgbXVzaWMuYWRkRXZlbnRMaXN0ZW5lcnMoKTtcbn0pO1xuXG4vLyBjb25zdCB0ZXN0X3BsYXllciA9IG5ldyBTcHJpdGUoe3g6IDMxMiwgeTogMzAwfSk7XG4vLyB0ZXN0X3BsYXllci5kcmF3KCk7Il0sIm5hbWVzIjpbIk11c2ljIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzIiwicXVlcnlTZWxlY3RvciIsImMiLCJnZXRDb250ZXh0Iiwid2lkdGgiLCJoZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIm11c2ljIiwiYWRkRXZlbnRMaXN0ZW5lcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/music.js":
/*!******************************!*\
  !*** ./src/scripts/music.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Music; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nvar Music = /*#__PURE__*/function () {\n  function Music() {\n    _classCallCheck(this, Music);\n\n    this.music = document.querySelector(\"#game-music\");\n    this.volume = document.querySelector(\"#volume\");\n    this.toggle = document.querySelector(\"#mute-button\");\n    this.muted = true;\n    this.music.volume = 0.05;\n  }\n\n  _createClass(Music, [{\n    key: \"muteAudio\",\n    value: function muteAudio() {\n      if (!this.muted) {\n        this.music.pause();\n        this.toggle.innerText = \"Unmute\";\n        this.muted = true;\n      } else {\n        this.music.play();\n        this.toggle.innerText = \"Mute\";\n        this.muted = false;\n      }\n    }\n  }, {\n    key: \"addEventListeners\",\n    value: function addEventListeners() {\n      var _this = this;\n\n      this.toggle.addEventListener(\"click\", function (e) {\n        if (!_this.muted) {\n          _this.music.currentTime = 0;\n\n          _this.music.play();\n\n          _this.toggle.innerText = \"Mute\";\n          _this.muted = true;\n        } else {\n          _this.music.pause();\n\n          _this.toggle.innerText = \"Play\";\n          _this.muted = false;\n        }\n      });\n    }\n  }]);\n\n  return Music;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tdXNpYy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQXFCQTtFQUNuQixpQkFBYztJQUFBOztJQUNaLEtBQUtDLEtBQUwsR0FBYUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGFBQXZCLENBQWI7SUFDQSxLQUFLQyxNQUFMLEdBQWNGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFkO0lBQ0EsS0FBS0UsTUFBTCxHQUFjSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZDtJQUNBLEtBQUtHLEtBQUwsR0FBYSxJQUFiO0lBQ0EsS0FBS0wsS0FBTCxDQUFXRyxNQUFYLEdBQW9CLElBQXBCO0VBQ0Q7Ozs7V0FFRCxxQkFBWTtNQUNWLElBQUksQ0FBQyxLQUFLRSxLQUFWLEVBQWlCO1FBQ2YsS0FBS0wsS0FBTCxDQUFXTSxLQUFYO1FBQ0EsS0FBS0YsTUFBTCxDQUFZRyxTQUFaLEdBQXdCLFFBQXhCO1FBQ0EsS0FBS0YsS0FBTCxHQUFhLElBQWI7TUFDRCxDQUpELE1BSU87UUFDTCxLQUFLTCxLQUFMLENBQVdRLElBQVg7UUFDQSxLQUFLSixNQUFMLENBQVlHLFNBQVosR0FBd0IsTUFBeEI7UUFDQSxLQUFLRixLQUFMLEdBQWEsS0FBYjtNQUNEO0lBQ0Y7OztXQUVELDZCQUFvQjtNQUFBOztNQUNsQixLQUFLRCxNQUFMLENBQVlLLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFVBQUNDLENBQUQsRUFBTztRQUMzQyxJQUFJLENBQUMsS0FBSSxDQUFDTCxLQUFWLEVBQWlCO1VBQ2YsS0FBSSxDQUFDTCxLQUFMLENBQVdXLFdBQVgsR0FBeUIsQ0FBekI7O1VBQ0EsS0FBSSxDQUFDWCxLQUFMLENBQVdRLElBQVg7O1VBQ0EsS0FBSSxDQUFDSixNQUFMLENBQVlHLFNBQVosR0FBd0IsTUFBeEI7VUFDQSxLQUFJLENBQUNGLEtBQUwsR0FBYSxJQUFiO1FBQ0QsQ0FMRCxNQUtPO1VBQ0wsS0FBSSxDQUFDTCxLQUFMLENBQVdNLEtBQVg7O1VBQ0EsS0FBSSxDQUFDRixNQUFMLENBQVlHLFNBQVosR0FBd0IsTUFBeEI7VUFDQSxLQUFJLENBQUNGLEtBQUwsR0FBYSxLQUFiO1FBQ0Q7TUFDRixDQVhEO0lBWUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9tdXNpYy5qcz9mMDQxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE11c2ljIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tdXNpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZS1tdXNpY1wiKTtcbiAgICB0aGlzLnZvbHVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdm9sdW1lXCIpO1xuICAgIHRoaXMudG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtdXRlLWJ1dHRvblwiKTtcbiAgICB0aGlzLm11dGVkID0gdHJ1ZTtcbiAgICB0aGlzLm11c2ljLnZvbHVtZSA9IDAuMDU7XG4gIH1cblxuICBtdXRlQXVkaW8oKSB7XG4gICAgaWYgKCF0aGlzLm11dGVkKSB7XG4gICAgICB0aGlzLm11c2ljLnBhdXNlKCk7XG4gICAgICB0aGlzLnRvZ2dsZS5pbm5lclRleHQgPSBcIlVubXV0ZVwiO1xuICAgICAgdGhpcy5tdXRlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubXVzaWMucGxheSgpO1xuICAgICAgdGhpcy50b2dnbGUuaW5uZXJUZXh0ID0gXCJNdXRlXCI7XG4gICAgICB0aGlzLm11dGVkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdGhpcy50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBpZiAoIXRoaXMubXV0ZWQpIHtcbiAgICAgICAgdGhpcy5tdXNpYy5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIHRoaXMubXVzaWMucGxheSgpO1xuICAgICAgICB0aGlzLnRvZ2dsZS5pbm5lclRleHQgPSBcIk11dGVcIjtcbiAgICAgICAgdGhpcy5tdXRlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm11c2ljLnBhdXNlKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlLmlubmVyVGV4dCA9IFwiUGxheVwiO1xuICAgICAgICB0aGlzLm11dGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTXVzaWMiLCJtdXNpYyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInZvbHVtZSIsInRvZ2dsZSIsIm11dGVkIiwicGF1c2UiLCJpbm5lclRleHQiLCJwbGF5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjdXJyZW50VGltZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/music.js\n");

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