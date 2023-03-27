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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*:before,\\n*:after {\\n  box-sizing: border-box;\\n  color: white;\\n}\\n\\nh1 {\\n  margin: 0;\\n}\\n\\n.content {\\n  background-color: rgba(240, 248, 255, 0.164);\\n  height: 100vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n/* 1. Sidebar */\\n.full-sidebar-container {\\n  background-color: rgba(0, 0, 255, 0.581);\\n  width: 20vw;\\n  height: 90vh;\\n}\\n\\n/* 1.1. Sidebar-top */\\n\\n.top-sidebar-container {\\n  height: 10%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n/* 1.2. Sidebar-mid */\\n\\n.mid-sidebar-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  height: 30%;\\n}\\n\\n.sidebar-btn {\\n  margin: 1rem;\\n  color: black;\\n  width: 40%;\\n}\\n\\n/* 1.3. Sidebar-bot */\\n\\n.bot-sidebar-container {\\n  background-color: rgba(0, 0, 255, 0.581);\\n  height: 60%;\\n  text-align: center;\\n  padding-top: 1rem;\\n}\\n\\n.new-project-btn {\\n  color: black;\\n  font-size: 1rem;\\n  width: 80%;\\n  padding: 0.5rem;\\n}\\n\\n/* 2. main-container */\\n\\n.main-content-container {\\n  background-color: rgba(210, 255, 196, 0.199);\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 70vw;\\n  height: 90vh;\\n}\\n\\n/* 2.1. main-top */\\n\\n.main-content-header {\\n  background-color: rgba(210, 255, 196, 222);\\n  height: 10%;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n/* 2.2. main-mid */\\n\\n.project-title-section {\\n  background-color: rgba(210, 255, 196, 0.499);\\n  height: 10%;\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.task-content-container {\\n  background-color: rgba(210, 255, 196, 0.799);\\n  width: 90%;\\n  height: 80%;\\n  margin-top: 5%;\\n  margin-bottom: 5%;\\n}\\n\\n/* 2.3. main-project */\\n\\n.task-container {\\n}\\n\\n/* new project*/\\n\\n.new-project-interface {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: rgba(0, 0, 0, 0.442);\\n  height: 15 0px;\\n  width: 450px;\\n  padding: 1rem;\\n}\\n\\n.new-project-title {\\n  color: white;\\n  font-size: 2.5rem;\\n  letter-spacing: 5px;\\n}\\n\\n.new-project-name-input {\\n  color: black;\\n  height: 1.5rem;\\n  width: 200px;\\n}\\n\\n.new-project-name-label {\\n  color: black;\\n}\\n\\n.submit-btn {\\n  height: 30px;\\n  width: 100px;\\n  background-color: transparent;\\n  color: white;\\n}\\n\\n.project-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.project {\\n  margin: 10px;\\n  width: 80%;\\n}\\n\\n.project > button {\\n  width: 90%;\\n  height: 25px;\\n  background-color: transparent;\\n  color: white;\\n  border: white 3px solid;\\n}\\n\\n/* new task*/\\n\\n.new-task-btn {\\n  width: 90%;\\n  height: 50px;\\n  margin: 1rem;\\n  background-color: transparent;\\n  color: black;\\n}\\n\\n.task-container {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.task {\\n  border: solid black 1px;\\n  width: 80%;\\n  height: 40px;\\n  margin-bottom: 0.5rem;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.task > h3 {\\n  color: black;\\n}\\n\\n.task > p {\\n  color: black;\\n}\\n\\n.important {\\n  border: green 5px solid;\\n}\\n/*new task form*/\\n\\n.new-task-interface {\\n  position: absolute;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: rgba(0, 0, 0, 0.442);\\n  height: 15 0px;\\n  width: 450px;\\n  padding: 1rem;\\n}\\n\\n.new-task-name-input {\\n  color: black;\\n}\\n\\n.new-task-description-input {\\n  color: black;\\n}\\n\\n.new-task-date-input {\\n  color: black;\\n}\\n\\n.new-task-checkbox-input {\\n  color: black;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions/first-load.js":
/*!*************************************!*\
  !*** ./src/functions/first-load.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ firstLoad)\n/* harmony export */ });\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/home */ \"./src/pages/home.js\");\n\n\nfunction firstLoad() {\n    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/functions/first-load.js?");

/***/ }),

/***/ "./src/functions/project-factory.js":
/*!******************************************!*\
  !*** ./src/functions/project-factory.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cleanString\": () => (/* binding */ cleanString),\n/* harmony export */   \"clickProject\": () => (/* binding */ clickProject),\n/* harmony export */   \"defaultProjectClick\": () => (/* binding */ defaultProjectClick),\n/* harmony export */   \"projectIntoArray\": () => (/* binding */ projectIntoArray),\n/* harmony export */   \"removeElementsByClass\": () => (/* binding */ removeElementsByClass)\n/* harmony export */ });\n/* harmony import */ var _task_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-factory */ \"./src/functions/task-factory.js\");\n/* harmony import */ var _page_elements_new_task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-elements/new-task */ \"./src/page-elements/new-task.js\");\n\n\n\nconst projectArray = [];\n\nfunction projectIntoArray() {\n    const nameInput = document.getElementById('projectName');\n    const newProject = nameInput.value;\n\n    projectArray.push(newProject);\n}\n\nfunction renderProject(projectSelected) {\n    removeElementsByClass('task');\n    _task_factory__WEBPACK_IMPORTED_MODULE_0__.taskArray.forEach((task) => {\n        if (task.projectName === projectSelected) {\n            const stringTask = JSON.stringify(task);\n            cleanString(stringTask);\n        }\n    });\n}\n\nfunction removeElementsByClass(className) {\n    const elements = document.getElementsByClassName(className);\n    while (elements.length > 0) {\n        elements[0].parentNode.removeChild(elements[0]);\n    }\n}\n\nfunction clickProject() {\n    const projectName = document.getElementById('project-title-h1');\n    projectName.innerHTML = this.innerHTML;\n    renderProject(this.innerHTML);\n}\n\nfunction defaultProjectClick() {\n    const projectName = document.getElementById('project-title-h1');\n    projectName.innerHTML = 'Default project';\n    renderProject('defaultProject');\n}\n\nfunction jsonToName(fullString) {\n    const searchName = 'name';\n    const searchDescription = '\",\"description';\n    const indexOfName = fullString.indexOf(searchName);\n    const infexOfDescription = fullString.indexOf(searchDescription);\n    const name = fullString.slice(indexOfName + 7, infexOfDescription);\n    return name;\n}\n\nfunction jsonToDescription(fullString) {\n    const searchDescription = 'description';\n    const searchDate = '\",\"date';\n    const indexOfDescription = fullString.indexOf(searchDescription);\n    const indexOfDate = fullString.indexOf(searchDate);\n    const name = fullString.slice(indexOfDescription + 14, indexOfDate);\n    return name;\n}\n\nfunction jsonToDate(fullString) {\n    const searchDate = 'date';\n    const searchStatus = '\",\"status';\n    const indefOfDate = fullString.indexOf(searchDate);\n    const indexOfStatus = fullString.indexOf(searchStatus);\n    const name = fullString.slice(indefOfDate + 7, indexOfStatus);\n    return name;\n}\n\nfunction jsonToStatus(fullString) {\n    const searchStatus = 'status';\n    const indexOfStatus = fullString.indexOf(searchStatus);\n    const name = fullString.slice(indexOfStatus + 8, -1);\n    return name;\n}\n\nfunction cleanString(fullString) {\n    const name = jsonToName(fullString);\n    const description = jsonToDescription(fullString);\n    const date = jsonToDate(fullString);\n    const status = jsonToStatus(fullString);\n    (0,_page_elements_new_task__WEBPACK_IMPORTED_MODULE_1__.createTaskDom)(name, description, date, status);\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/functions/project-factory.js?");

/***/ }),

/***/ "./src/functions/sort-tasks.js":
/*!*************************************!*\
  !*** ./src/functions/sort-tasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sortAll\": () => (/* binding */ sortAll),\n/* harmony export */   \"sortImportant\": () => (/* binding */ sortImportant),\n/* harmony export */   \"sortNext7Days\": () => (/* binding */ sortNext7Days),\n/* harmony export */   \"sortToday\": () => (/* binding */ sortToday)\n/* harmony export */ });\n/* harmony import */ var _task_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-factory */ \"./src/functions/task-factory.js\");\n/* harmony import */ var _project_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-factory */ \"./src/functions/project-factory.js\");\n\n\n\nfunction sortAll() {\n    const allBtn = document.getElementById('sidebar-btn-1');\n\n    allBtn.addEventListener('click', () => {\n        (0,_project_factory__WEBPACK_IMPORTED_MODULE_1__.removeElementsByClass)('task');\n        _task_factory__WEBPACK_IMPORTED_MODULE_0__.taskArray.forEach((task) => {\n            const stringTask = JSON.stringify(task);\n            (0,_project_factory__WEBPACK_IMPORTED_MODULE_1__.cleanString)(stringTask);\n        });\n    });\n}\n\nfunction sortNext7Days() {\n    const daysBtn = document.getElementById('sidebar-btn-2');\n\n    _task_factory__WEBPACK_IMPORTED_MODULE_0__.taskArray.forEach((task) => {\n        (0,_project_factory__WEBPACK_IMPORTED_MODULE_1__.removeElementsByClass)('task');\n        if (task.projectName === projectSelected) {\n            const stringTask = JSON.stringify(task);\n            (0,_project_factory__WEBPACK_IMPORTED_MODULE_1__.cleanString)(stringTask);\n        }\n    });\n}\n\nfunction sortToday() {\n    const todayBtn = document.getElementById('sidebar-btn-3');\n\n    _task_factory__WEBPACK_IMPORTED_MODULE_0__.taskArray.forEach((task) => {\n        (0,_project_factory__WEBPACK_IMPORTED_MODULE_1__.removeElementsByClass)('task');\n        if (task.projectName === projectSelected) {\n            const stringTask = JSON.stringify(task);\n            (0,_project_factory__WEBPACK_IMPORTED_MODULE_1__.cleanString)(stringTask);\n        }\n    });\n}\n\nfunction sortImportant() {\n    const importantBtn = document.getElementById('sidebar-btn-4');\n\n    importantBtn.addEventListener('click', () => {\n        (0,_project_factory__WEBPACK_IMPORTED_MODULE_1__.removeElementsByClass)('task');\n        _task_factory__WEBPACK_IMPORTED_MODULE_0__.taskArray.forEach((task) => {\n            if (task.status === true) {\n                const stringTask = JSON.stringify(task);\n                (0,_project_factory__WEBPACK_IMPORTED_MODULE_1__.cleanString)(stringTask);\n            }\n        });\n    });\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/functions/sort-tasks.js?");

/***/ }),

/***/ "./src/functions/task-factory.js":
/*!***************************************!*\
  !*** ./src/functions/task-factory.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newTask),\n/* harmony export */   \"taskArray\": () => (/* binding */ taskArray)\n/* harmony export */ });\n/* harmony import */ var _page_elements_new_task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-elements/new-task */ \"./src/page-elements/new-task.js\");\n\n\nconst taskFactory = (projectName, name, description, date, status) => ({\n    projectName, name, description, date, status,\n});\n\nconst taskArray = [];\n\nfunction taskIntoArray(task) {\n    console.log(taskArray);\n    if (task.projectName === 'Default project') {\n        task.projectName = 'defaultProject';\n        taskArray.push(task);\n    } else taskArray.push(task);\n}\n\nfunction newTask() {\n    const projectName = document.getElementById('project-title-h1');\n    const nameInput = document.getElementById('taskName');\n    const descriptionInput = document.getElementById('taskDescription');\n    const dateInput = document.getElementById('taskDate');\n    const statusInput = document.getElementById('taskStatus');\n\n    const task = taskFactory(\n        projectName.innerHTML,\n        nameInput.value,\n        descriptionInput.value,\n        dateInput.value,\n        statusInput.checked,\n    );\n\n    taskIntoArray(task);\n    (0,_page_elements_new_task__WEBPACK_IMPORTED_MODULE_0__.createTaskDom)(\n        nameInput.value,\n        descriptionInput.value,\n        dateInput.value,\n        statusInput.checked,\n    );\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/functions/task-factory.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_first_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/first-load */ \"./src/functions/first-load.js\");\n/* harmony import */ var _page_elements_new_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-elements/new-project */ \"./src/page-elements/new-project.js\");\n/* harmony import */ var _page_elements_new_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-elements/new-task */ \"./src/page-elements/new-task.js\");\n/* harmony import */ var _functions_sort_tasks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/sort-tasks */ \"./src/functions/sort-tasks.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n(0,_functions_first_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_page_elements_new_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_page_elements_new_task__WEBPACK_IMPORTED_MODULE_2__.newTaskCall)();\n(0,_functions_sort_tasks__WEBPACK_IMPORTED_MODULE_3__.sortAll)();\n(0,_functions_sort_tasks__WEBPACK_IMPORTED_MODULE_3__.sortImportant)();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/page-elements/dom-elements.js":
/*!*******************************************!*\
  !*** ./src/page-elements/dom-elements.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createButton\": () => (/* binding */ createButton),\n/* harmony export */   \"createDiv\": () => (/* binding */ createDiv),\n/* harmony export */   \"createForm\": () => (/* binding */ createForm),\n/* harmony export */   \"createFullInput\": () => (/* binding */ createFullInput),\n/* harmony export */   \"createImage\": () => (/* binding */ createImage),\n/* harmony export */   \"createList\": () => (/* binding */ createList),\n/* harmony export */   \"createParagraph\": () => (/* binding */ createParagraph),\n/* harmony export */   \"createSection\": () => (/* binding */ createSection),\n/* harmony export */   \"createTitle\": () => (/* binding */ createTitle)\n/* harmony export */ });\nfunction createDiv(className, id) {\n    const newDiv = document.createElement('div');\n    newDiv.classList.add(`${className}`);\n    newDiv.id = id;\n    return newDiv;\n}\n\nfunction createTitle(titleH, content, className, id) {\n    const newTitle = document.createElement(`h${titleH}`);\n    newTitle.classList.add(`${className}`);\n    newTitle.innerHTML = content;\n    newTitle.id = id;\n    return newTitle;\n}\n\nfunction createParagraph(content, className, id) {\n    const newParagraph = document.createElement('p');\n    newParagraph.classList.add(`${className}`);\n    newParagraph.innerHTML = content;\n    newParagraph.id = id;\n    return newParagraph;\n}\n\nfunction createImage(src, className, id) {\n    const newImage = document.getElementById('img');\n    newImage.classList.add(`${className}`);\n    newImage.src = src;\n    newImage.id = id;\n    return newImage;\n}\n\nfunction createSection(className, id) {\n    const newSection = document.createElement('section');\n    newSection.classList.add(`${className}`);\n    newSection.id = id;\n    return newSection;\n}\n\nfunction createButton(content, className) {\n    const newButton = document.createElement('button');\n    newButton.classList.add(`${className}`);\n    newButton.innerHTML = content;\n    return newButton;\n}\n\nfunction createList(content, id) {\n    const newUl = document.createElement('ul');\n    const listArray = content.split(',');\n    newUl.id = id;\n\n    listArray.forEach((element) => {\n        const newLi = document.createElement('li');\n        newLi.innerHTML = element;\n        newUl.appendChild(newLi);\n    });\n    return newUl;\n}\n\nfunction createForm(title, action, method, className) {\n    const form = document.createElement('form');\n    const formTitle = createTitle(1, title.replace(/-/g, ' '), `${title.toLowerCase()}-title`, `${title.toLowerCase()}-title`);\n\n    form.classList.add(className);\n    form.action = action;\n    form.method = method;\n\n    form.appendChild(formTitle);\n\n    return form;\n}\n\nfunction createInput(type, name, classNameInput, id, placeholder) {\n    const input = document.createElement('input');\n    input.classList.add(classNameInput);\n    input.type = type;\n    input.name = name;\n    input.id = id;\n    input.placeholder = placeholder;\n\n    return input;\n}\n\nfunction createLabel(forName, classNameLabel) {\n    const label = document.createElement('label');\n    label.classList.add(classNameLabel);\n    label.htmlFor = forName;\n\n    return label;\n}\n\nfunction createFullInput(forName, classNameLabel, type, name, classNameInput, id, pholder) {\n    const paragraph = createParagraph(null, 'input-holder', 'input-holder');\n    const newLabel = createLabel(forName, classNameLabel);\n    const newInput = createInput(type, name, classNameInput, id, pholder);\n\n    paragraph.appendChild(newLabel);\n    paragraph.appendChild(newInput);\n\n    return paragraph;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/page-elements/dom-elements.js?");

/***/ }),

/***/ "./src/page-elements/main-section.js":
/*!*******************************************!*\
  !*** ./src/page-elements/main-section.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createMainSection)\n/* harmony export */ });\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ \"./src/page-elements/dom-elements.js\");\n\n\nfunction createTopSection() {\n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('main-content-header', 'main-content-header');\n    const title = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createTitle)(1, 'All tasks', 'main-content-title', 'main-content-title-h1');\n\n    container.appendChild(title);\n\n    return container;\n}\n\nfunction createProjectTitleSection() {\n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('project-title-section', 'project-title-section)');\n    const title = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createTitle)(1, 'Default project', 'project-title', 'project-title-h1');\n\n    container.appendChild(title);\n\n    return container;\n}\n\nfunction createTaskContainer() {\n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('task-container', 'task-container');\n    const button = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)('Create new task', 'new-task-btn');\n\n    button.id = 'new-task-btn';\n\n    container.appendChild(button);\n\n    return container;\n}\n\nfunction createTaskSection() {\n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('task-content-container', 'task-content-container');\n    const project = createTaskContainer();\n\n    container.appendChild(project);\n\n    return container;\n}\n\nfunction createMainSection() {\n    const section = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createSection)('main-content-container', 'main-content-container');\n    const topSection = createTopSection();\n    const midSection = createProjectTitleSection();\n    const botSection = createTaskSection();\n\n    section.appendChild(topSection);\n    section.appendChild(midSection);\n    section.appendChild(botSection);\n\n    return section;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/page-elements/main-section.js?");

/***/ }),

/***/ "./src/page-elements/new-project.js":
/*!******************************************!*\
  !*** ./src/page-elements/new-project.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProjectDom\": () => (/* binding */ createProjectDom),\n/* harmony export */   \"default\": () => (/* binding */ newProject)\n/* harmony export */ });\n/* harmony import */ var _functions_project_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/project-factory */ \"./src/functions/project-factory.js\");\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-elements */ \"./src/page-elements/dom-elements.js\");\n\n\n\nlet idCounter = 0;\n\nfunction newProjectId() {\n    idCounter += 1;\n}\n\nfunction deleteForm() {\n    const form = document.getElementById('new-project-form');\n    form.remove();\n}\n\nfunction createDefaultProject() {\n    const mainProjectContainer = document.getElementById('project-container');\n    const newProjectContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)('project', 'project0-id');\n    const project = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createButton)('Default project', 'project-main-btn');\n\n    project.id = 'default-project';\n    project.onclick = _functions_project_factory__WEBPACK_IMPORTED_MODULE_0__.defaultProjectClick;\n\n    mainProjectContainer.appendChild(newProjectContainer);\n    newProjectContainer.appendChild(project);\n}\n\nfunction createProjectDom(project) {\n    const mainProjectContainer = document.getElementById('project-container');\n    const newProjectContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createDiv)('project', `project${idCounter}-id`);\n\n    const projectBtn = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createButton)(`${project}`, 'project-main-btn');\n\n    projectBtn.id = `project${idCounter}`;\n    projectBtn.onclick = _functions_project_factory__WEBPACK_IMPORTED_MODULE_0__.clickProject;\n\n    mainProjectContainer.appendChild(newProjectContainer);\n    newProjectContainer.appendChild(projectBtn);\n}\n\nfunction crateProjectInterface() {\n    const content = document.getElementById('content');\n    const form = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createForm)('New-Project', '', 'GET', 'new-project-interface');\n    const input = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createFullInput)('projectName', 'new-project-name-label', 'text', 'projectName', 'new-project-name-input', 'projectName', 'Project Title');\n    const submitButton = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_1__.createButton)('Submit', 'submit-btn');\n\n    form.id = 'new-project-form';\n\n    content.appendChild(form);\n    form.appendChild(input);\n    form.appendChild(submitButton);\n\n    submitButton.type = 'button';\n    submitButton.addEventListener('click', () => {\n        const inputValue = document.getElementById('projectName');\n\n        (0,_functions_project_factory__WEBPACK_IMPORTED_MODULE_0__.projectIntoArray)();\n        createProjectDom(inputValue.value);\n        deleteForm();\n    });\n}\n\nfunction newProject() {\n    const newProjectBtn = document.getElementById('new-project-btn');\n    createDefaultProject();\n    newProjectBtn.addEventListener('click', () => {\n        crateProjectInterface();\n        newProjectId();\n    });\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/page-elements/new-project.js?");

/***/ }),

/***/ "./src/page-elements/new-task.js":
/*!***************************************!*\
  !*** ./src/page-elements/new-task.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createTaskDom\": () => (/* binding */ createTaskDom),\n/* harmony export */   \"newTaskCall\": () => (/* binding */ newTaskCall)\n/* harmony export */ });\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ \"./src/page-elements/dom-elements.js\");\n/* harmony import */ var _functions_task_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/task-factory */ \"./src/functions/task-factory.js\");\n\n\n\n\nfunction deleteForm() {\n    const form = document.getElementById('new-task-form');\n    form.remove();\n}\n\nfunction createTaskInterface() {\n    const content = document.getElementById('content');\n    const form = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createForm)('New-Task', '', 'GET', 'new-task-interface');\n    const inputTitle = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFullInput)('taskName', 'new-task-name-label', 'text', 'taskName', 'new-task-name-input', 'taskName', 'Task Name');\n    const inputDescription = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFullInput)('taskDescription', 'new-task-description-label', 'text-area', 'taskDescription', 'new-task-name-input', 'taskDescription', 'Task Description');\n    const inputDate = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFullInput)('taskDate', 'new-task-date-label', 'date', 'taskDate', 'new-task-name-input', 'taskDate', '1994-10-03');\n    const inputStatus = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createFullInput)('taskStatus', 'new-task-checkbox-label', 'checkbox', 'taskStatus', 'new-task-name-input', 'taskStatus');\n    const submitButton = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)('Submit', 'submit-btn');\n\n    form.id = 'new-task-form';\n\n    content.appendChild(form);\n    form.appendChild(inputTitle);\n    form.appendChild(inputDescription);\n    form.appendChild(inputDate);\n    form.appendChild(inputStatus);\n    form.appendChild(submitButton);\n\n    submitButton.type = 'button';\n\n    submitButton.addEventListener('click', () => {\n        (0,_functions_task_factory__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n        deleteForm();\n    });\n}\n\nfunction newTaskCall() {\n    const newTaskBtn = document.getElementById('new-task-btn');\n\n    newTaskBtn.addEventListener('click', () => {\n        createTaskInterface();\n    });\n}\n\nfunction createTaskDom(name, description, date, status) {\n    const projectContainer = document.getElementById('task-container');\n\n    const taskContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('task', 'task');\n    const domName = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createTitle)(3, name, 'task-title');\n    const domDescription = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(description, 'task-description', 'task-description');\n    const domDate = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createParagraph)(date, 'task-date', 'task-date');\n\n    projectContainer.appendChild(taskContainer);\n    taskContainer.appendChild(domName);\n    taskContainer.appendChild(domDescription);\n    taskContainer.appendChild(domDate);\n    console.log(status);\n    if (status === true || status === 'true') {\n        taskContainer.classList.add('important');\n    }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/page-elements/new-task.js?");

/***/ }),

/***/ "./src/page-elements/side-section.js":
/*!*******************************************!*\
  !*** ./src/page-elements/side-section.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createSideSection)\n/* harmony export */ });\n/* harmony import */ var _dom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-elements */ \"./src/page-elements/dom-elements.js\");\n\n\nfunction createTopSidebar() {\n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('top-sidebar-container', 'top-sidebar');\n    const title = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createTitle)(1, 'To Do', 'sidebar-title', 'sidebar-title-h1');\n\n    container.appendChild(title);\n\n    return container;\n}\n\nfunction createMidSidebar() {\n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('mid-sidebar-container', 'mid-sidebar');\n    const nameArray = ['All tasks', 'Next 7 days', 'Today', 'Important'];\n    let buttonIdCounter = 1;\n\n    nameArray.forEach((name) => {\n        const button = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)(`${name}`, 'sidebar-btn');\n\n        button.id = `sidebar-btn-${buttonIdCounter}`;\n        buttonIdCounter += 1;\n        container.appendChild(button);\n    });\n\n    return container;\n}\n\nfunction createBotSidebar() {\n    const container = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('bot-sidebar-container', 'bot-sidebar');\n    const title = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createTitle)(2, 'Projects', 'sidebar-title', 'sidebar-title-h2');\n    const button = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createButton)('Create new project', 'new-project-btn');\n    const projectContainer = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createDiv)('project-container', 'project-container');\n\n    button.id = 'new-project-btn';\n\n    container.appendChild(title);\n    container.appendChild(button);\n    container.appendChild(projectContainer);\n\n    return container;\n}\n\nfunction createSideSection() {\n    const section = (0,_dom_elements__WEBPACK_IMPORTED_MODULE_0__.createSection)('full-sidebar-container', 'full-sidebar');\n    const topSection = createTopSidebar();\n    const midSection = createMidSidebar();\n    const botSection = createBotSidebar();\n\n    section.appendChild(topSection);\n    section.appendChild(midSection);\n    section.appendChild(botSection);\n\n    return section;\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/page-elements/side-section.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createHome)\n/* harmony export */ });\n/* harmony import */ var _page_elements_side_section__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-elements/side-section */ \"./src/page-elements/side-section.js\");\n/* harmony import */ var _page_elements_main_section__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-elements/main-section */ \"./src/page-elements/main-section.js\");\n\n\n\nfunction createHome() {\n    const content = document.getElementById('content');\n    const sideSection = (0,_page_elements_side_section__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const mainSection = (0,_page_elements_main_section__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n    content.appendChild(sideSection);\n    content.appendChild(mainSection);\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/pages/home.js?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;