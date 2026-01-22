/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/components/capture-link.js"
/*!**********************************************!*\
  !*** ./assets/js/components/capture-link.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Popup image classes
 */
var CAPTURE_LINK_CLASSES = {
  link: 'js-capture'
};

/**
 * Capture handler
 * 
 * @param {object} e 
 */
var onCapture = function onCapture(e) {
  var target = e.target;
  if (target.closest(".".concat(CAPTURE_LINK_CLASSES.link))) {
    console.log('Captured link:', target.href);
  }
};

/**
 * Render capture link
 * 
 */
var captureLink = function captureLink() {
  document.addEventListener('click', onCapture);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (captureLink);

/***/ },

/***/ "./assets/js/components/index.js"
/*!***************************************!*\
  !*** ./assets/js/components/index.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popup_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup-image */ "./assets/js/components/popup-image.js");
/* harmony import */ var _capture_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capture-link */ "./assets/js/components/capture-link.js");



// Initialize popup image
(0,_popup_image__WEBPACK_IMPORTED_MODULE_0__["default"])();

// Initialize capture link
(0,_capture_link__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ },

/***/ "./assets/js/components/popup-image.js"
/*!*********************************************!*\
  !*** ./assets/js/components/popup-image.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ "./assets/js/utils/utils.js");


/**
 * Popup image classes
 */
var POPUP_IMAGE_CLASSES = {
  trigger: 'js-popup-img',
  popup: 'js-popup-img-container',
  close: 'js-popup-img-close'
};

/**
 * Show or hide popup image
 * @param {string} imageSrc 
 * @param {boolean} isShown 
 */
var showPopup = function showPopup() {
  var imageSrc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var isShown = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var _setClassToElements = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.setClassToElements)(POPUP_IMAGE_CLASSES),
    popup = _setClassToElements.popup;

  // Show or hide popup
  popup.classList[isShown ? 'add' : 'remove']('show');

  // Avoid scrolling in the body if popup is active
  document.body.classList[isShown ? 'add' : 'remove']('overflow--hidden');
  if (!isShown) {
    return;
  }

  // Populate popup content with image
  popup.querySelector('.popup-image__content').innerHTML = imageSrc ? "<img src=\"".concat(imageSrc, "\" />") : '';
};

/**
 * Close popup image
 * 
 * @param {object} e 
 */
var onClose = function onClose(e) {
  var target = e.target;

  // close either from close button or pressing "esc"
  if (target.classList.contains('popup-image') || target.classList.contains(POPUP_IMAGE_CLASSES.close) || e.key === 'Escape') {
    showPopup('', false);
  }
};

/**
 * Render popup image
 * 
 */
var popupImage = function popupImage() {
  var _setClassToElements2 = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__.setClassToElements)(POPUP_IMAGE_CLASSES),
    popup = _setClassToElements2.popup,
    trigger = _setClassToElements2.trigger;
  if (!trigger || !popup) {
    return;
  }
  Array.prototype.forEach.call(document.querySelectorAll(".".concat(POPUP_IMAGE_CLASSES.trigger)), function (popupTrigger) {
    var _popupTrigger$dataset;
    if ((_popupTrigger$dataset = popupTrigger.dataset) !== null && _popupTrigger$dataset !== void 0 && _popupTrigger$dataset.src) {
      popupTrigger.addEventListener('click', function (e) {
        // populate image in the popup with data-src
        showPopup(popupTrigger.dataset.src);
      });
    }
  });
  document.addEventListener('click', onClose);
  document.addEventListener('keydown', onClose);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupImage);

/***/ },

/***/ "./assets/js/utils/utils.js"
/*!**********************************!*\
  !*** ./assets/js/utils/utils.js ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setClassToElements: () => (/* binding */ setClassToElements)
/* harmony export */ });
/**
 * Set classes to elements
 *
 * @param {HTMLElement} selectors
 * @returns {HTMLElement}
 */
var setClassToElements = function setClassToElements() {
  var selectors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var elements = {};
  for (var selector in selectors) {
    if (Object.prototype.hasOwnProperty.call(selectors, selector)) {
      elements[selector] = document.querySelector(".".concat(selectors[selector]));
    }
  }
  return elements;
};

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index */ "./assets/js/components/index.js");

})();

// This entry needs to be wrapped in an IIFE because it needs to be isolated against other entry modules.
(() => {
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.js.map