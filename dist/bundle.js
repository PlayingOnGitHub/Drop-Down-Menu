/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/create.js":
/*!***********************!*\
  !*** ./src/create.js ***!
  \***********************/
/*! exports provided: createMenu, element */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMenu\", function() { return createMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"element\", function() { return element; });\n/* harmony import */ var _domStuff__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domStuff */ \"./src/domStuff.js\");\n\n\nfunction createMenu(title, id, dropDownArray) {\n  _domStuff__WEBPACK_IMPORTED_MODULE_0__[\"createInitialHTML\"](title, id);\n  dropDownArray.forEach(function (dropDownItem, myIndex) {\n    var behavior = 0;\n\n    if (myIndex === 0) {\n      behavior = 1;\n    }\n\n    if (dropDownArray.length - 1 === myIndex) {\n      behavior = 2;\n    }\n\n    _domStuff__WEBPACK_IMPORTED_MODULE_0__[\"pushMenuItem\"](id, title, dropDownItem, behavior);\n  });\n  var proto = {\n    title: title,\n    id: id,\n    dropDownArray: dropDownArray\n  };\n  return proto;\n}\n\nfunction element(type, idOrClass, name, href, idOrClass2, name2) {\n  var newElement = document.createElement(type);\n  if (idOrClass === undefined && idOrClass !== \"\") return newElement;\n\n  if (idOrClass === \"id\" || idOrClass === \"class\") {\n    idOrClass === \"id\" ? newElement.id = name : newElement.className = name;\n  }\n\n  if (href !== false) {\n    if (type === \"img\") {\n      newElement.src = href;\n    }\n\n    if (type === \"a\") {\n      newElement.href = href;\n    }\n  }\n\n  if (idOrClass2 === undefined && idOrClass2 !== \"\") return newElement;\n\n  if (idOrClass2 === \"id\" || idOrClass2 === \"class\") {\n    idOrClass2 === \"id\" ? newElement.id = name2 : newElement.className = name2;\n  }\n\n  return newElement;\n}\n\n\n\n//# sourceURL=webpack:///./src/create.js?");

/***/ }),

/***/ "./src/domStuff.js":
/*!*************************!*\
  !*** ./src/domStuff.js ***!
  \*************************/
/*! exports provided: createInitialHTML, pushMenuItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createInitialHTML\", function() { return createInitialHTML; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushMenuItem\", function() { return pushMenuItem; });\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n\n\nfunction changeDisplay() {\n  var myId = this;\n  var animatedPullUpMenuId = \"\".concat(myId, \"drop-down-animate-up\");\n  var dropDownWrapper = document.getElementById(animatedPullUpMenuId);\n\n  if (dropDownWrapper) {\n    dropDownWrapper.style.display = \"none\";\n  }\n}\n\nfunction animateMenu() {\n  var myId = this.id;\n  var dropDownMenuId = \"\".concat(myId, \"-drop-down\");\n  var animatedDropDownMenuId = \"\".concat(myId, \"-drop-down-animate-down\");\n  var animatedPullUpMenuId = \"\".concat(myId, \"-drop-down-animate-up\");\n  var dropDownMenu = document.getElementById(dropDownMenuId);\n  var animatedDropDownMenu = document.getElementById(animatedDropDownMenuId);\n  var animatedPullUpMenu = document.getElementById(animatedPullUpMenuId);\n\n  if (!dropDownMenu) {\n    if (!animatedPullUpMenu) {\n      animatedDropDownMenu.id = animatedPullUpMenuId;\n      animatedDropDownMenu.style.display = \"block\";\n      return;\n    }\n\n    animatedPullUpMenu.id = animatedDropDownMenuId;\n    animatedPullUpMenu.addEventListener(\"animationend\", changeDisplay.bind(myId), true);\n  } else {\n    dropDownMenu.id = animatedDropDownMenuId;\n    dropDownMenu.style.display = \"block\";\n  }\n}\n\nfunction createInitialHTML(title, id) {\n  var startingPoint = document.getElementById(id);\n  var menuWrapper = startingPoint.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"nav\", \"class\", \"menu-wrapper\"));\n  var parentList = menuWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"ul\", \"class\", \"parent-list\"));\n  var parentText = parentList.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"li\", \"class\", \"parent-text\"));\n  parentText.textContent = title;\n  var dropDownIconWrapper = parentList.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"drop-down-icon-wrapper\", \"\", \"id\", title));\n  dropDownIconWrapper.addEventListener(\"click\", animateMenu.bind(dropDownIconWrapper), true);\n  var dropDownIconLine1 = dropDownIconWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"drop-down-icon-line-1\"));\n  var dropDownIconLine2 = dropDownIconWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"drop-down-icon-line-2\"));\n  var dropDownWrapper = menuWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"div\", \"class\", \"drop-down-wrapper\", \"\", \"id\", \"\".concat(title, \"-drop-down\")));\n  var dropDownList = dropDownWrapper.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"ul\", \"class\", \"drop-down-list\", \"\", \"id\", \"\".concat(title, \"-drop-down-list\")));\n}\n\nfunction pushMenuItem(id, title, dropDownText, behavior) {\n  var startingPoint = document.getElementById(\"\".concat(title, \"-drop-down-list\"));\n\n  if (behavior === 1) {\n    var newMenuItem = startingPoint.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"li\", \"class\", \"drop-down-text first-drop-down-item\", \"\", \"id\", \"\".concat(title, \"-first-drop-down-item\")));\n    newMenuItem.textContent = dropDownText;\n  } else if (behavior === 2) {\n    var _newMenuItem = startingPoint.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"li\", \"class\", \"drop-down-text last-drop-down-item\", \"\", \"id\", \"\".concat(title, \"-last-drop-down-item\")));\n\n    _newMenuItem.textContent = dropDownText;\n  } else {\n    var _newMenuItem2 = startingPoint.appendChild(_create__WEBPACK_IMPORTED_MODULE_0__[\"element\"](\"li\", \"class\", \"drop-down-text\", \"\", \"id\", dropDownText));\n\n    _newMenuItem2.textContent = dropDownText;\n  }\n}\n\n\n\n//# sourceURL=webpack:///./src/domStuff.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create */ \"./src/create.js\");\n\n_create__WEBPACK_IMPORTED_MODULE_0__[\"createMenu\"](\"MOVIES\", \"content\", [\"Cheaper by the Dozen\", \"Matrix\", \"Angel has Fallen\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });