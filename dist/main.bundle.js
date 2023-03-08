/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background: black;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;AACnB","sourcesContent":["body {\n  background: black;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Board": () => (/* binding */ Board)
/* harmony export */ });
const Square = (x, y, up, right) => {
  const coord = [x, y];
  return { coord, up, right };
};

const Board = (x, y) => {
  if (x === undefined && y === undefined) {
    x = 0;
    y = 0;
  }

  if (x > 7 || y > 7) {
    return null;
  }

  let board = {};

  board = Square(x, y, Board(x + 1, y), Board(x, y + 1));

  return board;
};




/***/ }),

/***/ "./src/find-moves.js":
/*!***************************!*\
  !*** ./src/find-moves.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findDown": () => (/* binding */ findDown),
/* harmony export */   "findLeft": () => (/* binding */ findLeft),
/* harmony export */   "findRight": () => (/* binding */ findRight),
/* harmony export */   "findUp": () => (/* binding */ findUp)
/* harmony export */ });
/* harmony import */ var _find_square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-square */ "./src/find-square.js");
/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./board */ "./src/board.js");



const board = (0,_board__WEBPACK_IMPORTED_MODULE_1__.Board)();

const findUp = (v, h) => {
  let moveTo = {};

  if (v + 2 <= 7) {
    const coordX = v + 2;

    if (h + 1 <= 7) {
      const coordY = h + 1;
      moveTo.turnRight = (0,_find_square__WEBPACK_IMPORTED_MODULE_0__.findSquare)(board, coordX, coordY);
    } else {
      moveTo.turnRight = null;
    }

    if (h - 1 >= 0) {
      const coordY = h - 1;
      moveTo.turnLeft = (0,_find_square__WEBPACK_IMPORTED_MODULE_0__.findSquare)(board, coordX, coordY);
    } else {
      moveTo.turnLeft = null;
    }
  } else {
    moveTo = null;
  }

  return moveTo;
};

const findDown = (v, h) => {
  let moveTo = {};

  if (v - 2 >= 0) {
    const coordX = v - 2;

    if (h + 1 <= 7) {
      const coordY = h + 1;
      moveTo.turnRight = (0,_find_square__WEBPACK_IMPORTED_MODULE_0__.findSquare)(board, coordX, coordY);
    } else {
      moveTo.turnRight = null;
    }

    if (h - 1 >= 0) {
      const coordY = h - 1;
      moveTo.turnLeft = (0,_find_square__WEBPACK_IMPORTED_MODULE_0__.findSquare)(board, coordX, coordY);
    } else {
      moveTo.turnLeft = null;
    }
  } else {
    moveTo = null;
  }

  return moveTo;
};

const findRight = (v, h) => {
  let moveTo = {};

  if (h + 2 <= 7) {
    const coordY = h + 2;

    if (v + 1 <= 7) {
      const coordX = v + 1;
      moveTo.turnLeft = (0,_find_square__WEBPACK_IMPORTED_MODULE_0__.findSquare)(board, coordX, coordY);
    } else {
      moveTo.turnLeft = null;
    }

    if (v - 1 >= 0) {
      const coordX = v - 1;
      moveTo.turnRight = (0,_find_square__WEBPACK_IMPORTED_MODULE_0__.findSquare)(board, coordX, coordY);
    } else {
      moveTo.turnRight = null;
    }
  } else {
    moveTo = null;
  }

  return moveTo;
};

const findLeft = (v, h) => {
  let moveTo = {};

  if (h - 2 >= 0) {
    const coordY = h - 2;

    if (v + 1 <= 7) {
      const coordX = v + 1;
      moveTo.turnRight = (0,_find_square__WEBPACK_IMPORTED_MODULE_0__.findSquare)(board, coordX, coordY);
    } else {
      moveTo.turnRight = null;
    }

    if (v - 1 >= 0) {
      const coordX = v - 1;
      moveTo.turnLeft = (0,_find_square__WEBPACK_IMPORTED_MODULE_0__.findSquare)(board, coordX, coordY);
    } else {
      moveTo.turnLeft = null;
    }
  } else {
    moveTo = null;
  }

  return moveTo;
};




/***/ }),

/***/ "./src/find-square.js":
/*!****************************!*\
  !*** ./src/find-square.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findSquare": () => (/* binding */ findSquare)
/* harmony export */ });
const findSquare = (square, p, q) => {
  if (square.coord[0] !== p) {
    square = square.up;
    return findSquare(square, p, q);
  }

  if (square.coord[0] === p) {
    if (square.coord[1] !== q) {
      square = square.right;
      return findSquare(square, p, q);
    }
    if (square.coord[1] !== q) {
      return;
    }
  }
  return square;
};




/***/ }),

/***/ "./src/knight.js":
/*!***********************!*\
  !*** ./src/knight.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Knight": () => (/* binding */ Knight)
/* harmony export */ });
/* harmony import */ var _find_moves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-moves */ "./src/find-moves.js");


// const Knight = (coord) => {
//   const v = coord[0];
//   const h = coord[1];

//   const up = findUp(v, h);
//   const down = findDown(v, h);
//   const left = findLeft(v, h);
//   const right = findRight(v, h);

//   return { coord, up, down, left, right };
// };

const Knight = (coord) => {
  if (coord === null) {
    return null;
  }

  const v = coord[0];
  const h = coord[1];

  const up = (0,_find_moves__WEBPACK_IMPORTED_MODULE_0__.findUp)(v, h);
  const down = (0,_find_moves__WEBPACK_IMPORTED_MODULE_0__.findDown)(v, h);
  const left = (0,_find_moves__WEBPACK_IMPORTED_MODULE_0__.findLeft)(v, h);
  const right = (0,_find_moves__WEBPACK_IMPORTED_MODULE_0__.findRight)(v, h);

  let upL = null;
  let upR = null;
  let downL = null;
  let downR = null;
  let leftL = null;
  let leftR = null;
  let rightL = null;
  let rightR = null;

  if (up !== null) {
    if (up.turnLeft !== null) {
      upL = up.turnLeft.coord;
    }

    if (up.turnRight !== null) {
      upR = up.turnRight.coord;
    }
  }

  if (down !== null) {
    if (down.turnLeft !== null) {
      downL = down.turnLeft.coord;
    }

    if (down.turnRight !== null) {
      downR = down.turnRight.coord;
    }
  }

  if (left !== null) {
    if (left.turnLeft !== null) {
      leftL = left.turnLeft.coord;
    }

    if (left.turnRight !== null) {
      leftR = left.turnRight.coord;
    }
  }

  if (right !== null) {
    if (right.turnLeft !== null) {
      rightL = right.turnLeft.coord;
    }

    if (right.turnRight !== null) {
      rightR = right.turnRight.coord;
    }
  }

  return { coord, upL, upR, downL, downR, leftL, leftR, rightL, rightR };
};




/***/ }),

/***/ "./src/move-tree.js":
/*!**************************!*\
  !*** ./src/move-tree.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "makeTree": () => (/* binding */ makeTree)
/* harmony export */ });
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./knight */ "./src/knight.js");
/* eslint-disable prefer-destructuring */


const Node = (data, left, right) => ({ data, left, right });

const moveList = (node) => {
  const rawlist = [];
  const list = [];
  rawlist.push(
    node.upL,
    node.upR,
    node.downL,
    node.downR,
    node.leftL,
    node.leftR,
    node.rightL,
    node.rightR
  );
  rawlist.forEach((num) => {
    if (num !== null) {
      list.push(num);
    }
  });
  return list;
};

const BstTree = (array) => {
  const sorted = array.sort();
  const start = 0;
  const end = sorted.length - 1;
  const mid = Math.floor((start + end) / 2);

  const left = [];
  const right = [];

  if (start > end) {
    return null;
  }

  sorted.forEach((num) => {
    if (num < sorted[mid]) {
      left.push(num);
    } else if (num > sorted[mid]) {
      right.push(num);
    }
  });

  const root = Node(sorted[mid], BstTree(left), BstTree(right));
  return root;
};

const makeTree = (coord) => {
  const knight = (0,_knight__WEBPACK_IMPORTED_MODULE_0__.Knight)(coord);
  const moves = moveList(knight);
  return BstTree(moves);
};



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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _knight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight */ "./src/knight.js");
/* harmony import */ var _move_tree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./move-tree */ "./src/move-tree.js");




const preorder = (node, end, child = [], match = []) => {
  if (node === null) {
    return;
  }

  if (node.data[0] !== end[0] || node.data[1] !== end[1]) {
    child.push(node.data);
  }

  if (node.data[0] === end[0] && node.data[1] === end[1]) {
    match.push(node.data);
  }

  if (match.length > 0) {
    return match;
  }

  preorder(node.left, end, child, match);
  preorder(node.right, end, child, match);

  return child;
};

// When match found, recusively use knightMovs to find all steps
const knightMoves = (
  start,
  end,
  genesis = [],
  memory = {},
  temp = [],
  currentLvl = 0,
  currentData = 0
) => {
  console.log(start);
  // New level of steps finish searching, no matching found
  // Continue to next level
  if (start === undefined) {
    console.log('end');
    currentLvl += 1;
    currentData = 0;
    const searchLvl = `level${currentLvl}`;
    memory[searchLvl] = temp;
    temp = [];
    return knightMoves(
      memory[searchLvl][currentData],
      end,
      genesis,
      memory,
      temp,
      currentLvl,
      currentData
    );
  }

  const startTree = (0,_move_tree__WEBPACK_IMPORTED_MODULE_2__.makeTree)(start);
  const startMoves = preorder(startTree, end);

  // Found match, continue to search for match's parent step
  if (startMoves[0][0] === end[0] && startMoves[0][1] === end[1]) {
    const firstHalf = [genesis[0]];
    firstHalf.push(start);
    const secondHalf = genesis.slice(1, genesis.length);
    genesis = firstHalf.concat(secondHalf);
    memory = {};
    temp = [];
    currentLvl = 0;
    currentData = 0;
    return genesis;
    // return console.log(genesis[0], genesis[1]);
    // if (genesis[1][0] === end[0] && genesis[1][1] === end[1]) {
    //   return genesis;
    // }
    // return knightMoves(
    //   genesis[0],
    //   genesis[1],
    //   genesis,
    //   memory,
    //   temp,
    //   currentLvl,
    //   currentData
    // );
  }

  // Record next level of temporary search memory
  if (Object.keys(memory).length > 0) {
    console.log('temp');
    startMoves.forEach((coord) => {
      temp.push(coord);
    });
  }

  // Record first level of search memory
  if (Object.keys(memory).length === 0) {
    console.log('length0');
    genesis.push(start, end);
    memory.level0 = startMoves;
  }

  // Go to next step in memory
  const searchLvl = `level${currentLvl}`;

  return knightMoves(
    memory[searchLvl][currentData],
    end,
    genesis,
    memory,
    temp,
    currentLvl,
    currentData + 1
  );
  // return memory[seachLvl][currentData];
  // return temp;
  // return startMoves;
};

const diu = knightMoves([2, 2], [4, 4]);
console.log(diu);
console.log((0,_knight__WEBPACK_IMPORTED_MODULE_1__.Knight)([5, 2]));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBLGdEQUFnRCxzQkFBc0IsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGdDQUFnQyxzQkFBc0IsR0FBRyxtQkFBbUI7QUFDeFA7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEIwQjtBQUNYOztBQUVoQyxjQUFjLDZDQUFLOztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qix3REFBVTtBQUNuQyxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFVO0FBQ2xDLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qix3REFBVTtBQUNuQyxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFVO0FBQ2xDLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qix3REFBVTtBQUNsQyxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLHdEQUFVO0FBQ25DLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qix3REFBVTtBQUNuQyxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFVO0FBQ2xDLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFaUQ7Ozs7Ozs7Ozs7Ozs7OztBQzdHakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVzQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCK0M7O0FBRXJFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLG1EQUFNO0FBQ25CLGVBQWUscURBQVE7QUFDdkIsZUFBZSxxREFBUTtBQUN2QixnQkFBZ0Isc0RBQVM7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVrQjs7Ozs7Ozs7Ozs7Ozs7OztBQy9FbEI7QUFDa0M7O0FBRWxDLHVDQUF1QyxtQkFBbUI7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsK0NBQU07QUFDdkI7QUFDQTtBQUNBO0FBQ29COzs7Ozs7O1VDeERwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYTtBQUNLOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFdBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixvREFBUTtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixXQUFXOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSwrQ0FBTSIsInNvdXJjZXMiOlsid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2ZpbmQtbW92ZXMuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2ZpbmQtc3F1YXJlLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9rbmlnaHQuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL21vdmUtdHJlZS5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25wbS1zZXR1cC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IFNxdWFyZSA9ICh4LCB5LCB1cCwgcmlnaHQpID0+IHtcbiAgY29uc3QgY29vcmQgPSBbeCwgeV07XG4gIHJldHVybiB7IGNvb3JkLCB1cCwgcmlnaHQgfTtcbn07XG5cbmNvbnN0IEJvYXJkID0gKHgsIHkpID0+IHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCAmJiB5ID09PSB1bmRlZmluZWQpIHtcbiAgICB4ID0gMDtcbiAgICB5ID0gMDtcbiAgfVxuXG4gIGlmICh4ID4gNyB8fCB5ID4gNykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgbGV0IGJvYXJkID0ge307XG5cbiAgYm9hcmQgPSBTcXVhcmUoeCwgeSwgQm9hcmQoeCArIDEsIHkpLCBCb2FyZCh4LCB5ICsgMSkpO1xuXG4gIHJldHVybiBib2FyZDtcbn07XG5cbmV4cG9ydCB7IEJvYXJkIH07XG4iLCJpbXBvcnQgeyBmaW5kU3F1YXJlIH0gZnJvbSAnLi9maW5kLXNxdWFyZSc7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gJy4vYm9hcmQnO1xuXG5jb25zdCBib2FyZCA9IEJvYXJkKCk7XG5cbmNvbnN0IGZpbmRVcCA9ICh2LCBoKSA9PiB7XG4gIGxldCBtb3ZlVG8gPSB7fTtcblxuICBpZiAodiArIDIgPD0gNykge1xuICAgIGNvbnN0IGNvb3JkWCA9IHYgKyAyO1xuXG4gICAgaWYgKGggKyAxIDw9IDcpIHtcbiAgICAgIGNvbnN0IGNvb3JkWSA9IGggKyAxO1xuICAgICAgbW92ZVRvLnR1cm5SaWdodCA9IGZpbmRTcXVhcmUoYm9hcmQsIGNvb3JkWCwgY29vcmRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW92ZVRvLnR1cm5SaWdodCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGggLSAxID49IDApIHtcbiAgICAgIGNvbnN0IGNvb3JkWSA9IGggLSAxO1xuICAgICAgbW92ZVRvLnR1cm5MZWZ0ID0gZmluZFNxdWFyZShib2FyZCwgY29vcmRYLCBjb29yZFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZlVG8udHVybkxlZnQgPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtb3ZlVG8gPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG1vdmVUbztcbn07XG5cbmNvbnN0IGZpbmREb3duID0gKHYsIGgpID0+IHtcbiAgbGV0IG1vdmVUbyA9IHt9O1xuXG4gIGlmICh2IC0gMiA+PSAwKSB7XG4gICAgY29uc3QgY29vcmRYID0gdiAtIDI7XG5cbiAgICBpZiAoaCArIDEgPD0gNykge1xuICAgICAgY29uc3QgY29vcmRZID0gaCArIDE7XG4gICAgICBtb3ZlVG8udHVyblJpZ2h0ID0gZmluZFNxdWFyZShib2FyZCwgY29vcmRYLCBjb29yZFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZlVG8udHVyblJpZ2h0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaCAtIDEgPj0gMCkge1xuICAgICAgY29uc3QgY29vcmRZID0gaCAtIDE7XG4gICAgICBtb3ZlVG8udHVybkxlZnQgPSBmaW5kU3F1YXJlKGJvYXJkLCBjb29yZFgsIGNvb3JkWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmVUby50dXJuTGVmdCA9IG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1vdmVUbyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbW92ZVRvO1xufTtcblxuY29uc3QgZmluZFJpZ2h0ID0gKHYsIGgpID0+IHtcbiAgbGV0IG1vdmVUbyA9IHt9O1xuXG4gIGlmIChoICsgMiA8PSA3KSB7XG4gICAgY29uc3QgY29vcmRZID0gaCArIDI7XG5cbiAgICBpZiAodiArIDEgPD0gNykge1xuICAgICAgY29uc3QgY29vcmRYID0gdiArIDE7XG4gICAgICBtb3ZlVG8udHVybkxlZnQgPSBmaW5kU3F1YXJlKGJvYXJkLCBjb29yZFgsIGNvb3JkWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmVUby50dXJuTGVmdCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHYgLSAxID49IDApIHtcbiAgICAgIGNvbnN0IGNvb3JkWCA9IHYgLSAxO1xuICAgICAgbW92ZVRvLnR1cm5SaWdodCA9IGZpbmRTcXVhcmUoYm9hcmQsIGNvb3JkWCwgY29vcmRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW92ZVRvLnR1cm5SaWdodCA9IG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1vdmVUbyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbW92ZVRvO1xufTtcblxuY29uc3QgZmluZExlZnQgPSAodiwgaCkgPT4ge1xuICBsZXQgbW92ZVRvID0ge307XG5cbiAgaWYgKGggLSAyID49IDApIHtcbiAgICBjb25zdCBjb29yZFkgPSBoIC0gMjtcblxuICAgIGlmICh2ICsgMSA8PSA3KSB7XG4gICAgICBjb25zdCBjb29yZFggPSB2ICsgMTtcbiAgICAgIG1vdmVUby50dXJuUmlnaHQgPSBmaW5kU3F1YXJlKGJvYXJkLCBjb29yZFgsIGNvb3JkWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmVUby50dXJuUmlnaHQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmICh2IC0gMSA+PSAwKSB7XG4gICAgICBjb25zdCBjb29yZFggPSB2IC0gMTtcbiAgICAgIG1vdmVUby50dXJuTGVmdCA9IGZpbmRTcXVhcmUoYm9hcmQsIGNvb3JkWCwgY29vcmRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW92ZVRvLnR1cm5MZWZ0ID0gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbW92ZVRvID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBtb3ZlVG87XG59O1xuXG5leHBvcnQgeyBmaW5kVXAsIGZpbmREb3duLCBmaW5kUmlnaHQsIGZpbmRMZWZ0IH07XG4iLCJjb25zdCBmaW5kU3F1YXJlID0gKHNxdWFyZSwgcCwgcSkgPT4ge1xuICBpZiAoc3F1YXJlLmNvb3JkWzBdICE9PSBwKSB7XG4gICAgc3F1YXJlID0gc3F1YXJlLnVwO1xuICAgIHJldHVybiBmaW5kU3F1YXJlKHNxdWFyZSwgcCwgcSk7XG4gIH1cblxuICBpZiAoc3F1YXJlLmNvb3JkWzBdID09PSBwKSB7XG4gICAgaWYgKHNxdWFyZS5jb29yZFsxXSAhPT0gcSkge1xuICAgICAgc3F1YXJlID0gc3F1YXJlLnJpZ2h0O1xuICAgICAgcmV0dXJuIGZpbmRTcXVhcmUoc3F1YXJlLCBwLCBxKTtcbiAgICB9XG4gICAgaWYgKHNxdWFyZS5jb29yZFsxXSAhPT0gcSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3F1YXJlO1xufTtcblxuZXhwb3J0IHsgZmluZFNxdWFyZSB9O1xuIiwiaW1wb3J0IHsgZmluZFVwLCBmaW5kRG93biwgZmluZFJpZ2h0LCBmaW5kTGVmdCB9IGZyb20gJy4vZmluZC1tb3Zlcyc7XG5cbi8vIGNvbnN0IEtuaWdodCA9IChjb29yZCkgPT4ge1xuLy8gICBjb25zdCB2ID0gY29vcmRbMF07XG4vLyAgIGNvbnN0IGggPSBjb29yZFsxXTtcblxuLy8gICBjb25zdCB1cCA9IGZpbmRVcCh2LCBoKTtcbi8vICAgY29uc3QgZG93biA9IGZpbmREb3duKHYsIGgpO1xuLy8gICBjb25zdCBsZWZ0ID0gZmluZExlZnQodiwgaCk7XG4vLyAgIGNvbnN0IHJpZ2h0ID0gZmluZFJpZ2h0KHYsIGgpO1xuXG4vLyAgIHJldHVybiB7IGNvb3JkLCB1cCwgZG93biwgbGVmdCwgcmlnaHQgfTtcbi8vIH07XG5cbmNvbnN0IEtuaWdodCA9IChjb29yZCkgPT4ge1xuICBpZiAoY29vcmQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHYgPSBjb29yZFswXTtcbiAgY29uc3QgaCA9IGNvb3JkWzFdO1xuXG4gIGNvbnN0IHVwID0gZmluZFVwKHYsIGgpO1xuICBjb25zdCBkb3duID0gZmluZERvd24odiwgaCk7XG4gIGNvbnN0IGxlZnQgPSBmaW5kTGVmdCh2LCBoKTtcbiAgY29uc3QgcmlnaHQgPSBmaW5kUmlnaHQodiwgaCk7XG5cbiAgbGV0IHVwTCA9IG51bGw7XG4gIGxldCB1cFIgPSBudWxsO1xuICBsZXQgZG93bkwgPSBudWxsO1xuICBsZXQgZG93blIgPSBudWxsO1xuICBsZXQgbGVmdEwgPSBudWxsO1xuICBsZXQgbGVmdFIgPSBudWxsO1xuICBsZXQgcmlnaHRMID0gbnVsbDtcbiAgbGV0IHJpZ2h0UiA9IG51bGw7XG5cbiAgaWYgKHVwICE9PSBudWxsKSB7XG4gICAgaWYgKHVwLnR1cm5MZWZ0ICE9PSBudWxsKSB7XG4gICAgICB1cEwgPSB1cC50dXJuTGVmdC5jb29yZDtcbiAgICB9XG5cbiAgICBpZiAodXAudHVyblJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICB1cFIgPSB1cC50dXJuUmlnaHQuY29vcmQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRvd24gIT09IG51bGwpIHtcbiAgICBpZiAoZG93bi50dXJuTGVmdCAhPT0gbnVsbCkge1xuICAgICAgZG93bkwgPSBkb3duLnR1cm5MZWZ0LmNvb3JkO1xuICAgIH1cblxuICAgIGlmIChkb3duLnR1cm5SaWdodCAhPT0gbnVsbCkge1xuICAgICAgZG93blIgPSBkb3duLnR1cm5SaWdodC5jb29yZDtcbiAgICB9XG4gIH1cblxuICBpZiAobGVmdCAhPT0gbnVsbCkge1xuICAgIGlmIChsZWZ0LnR1cm5MZWZ0ICE9PSBudWxsKSB7XG4gICAgICBsZWZ0TCA9IGxlZnQudHVybkxlZnQuY29vcmQ7XG4gICAgfVxuXG4gICAgaWYgKGxlZnQudHVyblJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBsZWZ0UiA9IGxlZnQudHVyblJpZ2h0LmNvb3JkO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyaWdodCAhPT0gbnVsbCkge1xuICAgIGlmIChyaWdodC50dXJuTGVmdCAhPT0gbnVsbCkge1xuICAgICAgcmlnaHRMID0gcmlnaHQudHVybkxlZnQuY29vcmQ7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0LnR1cm5SaWdodCAhPT0gbnVsbCkge1xuICAgICAgcmlnaHRSID0gcmlnaHQudHVyblJpZ2h0LmNvb3JkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGNvb3JkLCB1cEwsIHVwUiwgZG93bkwsIGRvd25SLCBsZWZ0TCwgbGVmdFIsIHJpZ2h0TCwgcmlnaHRSIH07XG59O1xuXG5leHBvcnQgeyBLbmlnaHQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG5pbXBvcnQgeyBLbmlnaHQgfSBmcm9tICcuL2tuaWdodCc7XG5cbmNvbnN0IE5vZGUgPSAoZGF0YSwgbGVmdCwgcmlnaHQpID0+ICh7IGRhdGEsIGxlZnQsIHJpZ2h0IH0pO1xuXG5jb25zdCBtb3ZlTGlzdCA9IChub2RlKSA9PiB7XG4gIGNvbnN0IHJhd2xpc3QgPSBbXTtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICByYXdsaXN0LnB1c2goXG4gICAgbm9kZS51cEwsXG4gICAgbm9kZS51cFIsXG4gICAgbm9kZS5kb3duTCxcbiAgICBub2RlLmRvd25SLFxuICAgIG5vZGUubGVmdEwsXG4gICAgbm9kZS5sZWZ0UixcbiAgICBub2RlLnJpZ2h0TCxcbiAgICBub2RlLnJpZ2h0UlxuICApO1xuICByYXdsaXN0LmZvckVhY2goKG51bSkgPT4ge1xuICAgIGlmIChudW0gIT09IG51bGwpIHtcbiAgICAgIGxpc3QucHVzaChudW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsaXN0O1xufTtcblxuY29uc3QgQnN0VHJlZSA9IChhcnJheSkgPT4ge1xuICBjb25zdCBzb3J0ZWQgPSBhcnJheS5zb3J0KCk7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgY29uc3QgZW5kID0gc29ydGVkLmxlbmd0aCAtIDE7XG4gIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuXG4gIGNvbnN0IGxlZnQgPSBbXTtcbiAgY29uc3QgcmlnaHQgPSBbXTtcblxuICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNvcnRlZC5mb3JFYWNoKChudW0pID0+IHtcbiAgICBpZiAobnVtIDwgc29ydGVkW21pZF0pIHtcbiAgICAgIGxlZnQucHVzaChudW0pO1xuICAgIH0gZWxzZSBpZiAobnVtID4gc29ydGVkW21pZF0pIHtcbiAgICAgIHJpZ2h0LnB1c2gobnVtKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHJvb3QgPSBOb2RlKHNvcnRlZFttaWRdLCBCc3RUcmVlKGxlZnQpLCBCc3RUcmVlKHJpZ2h0KSk7XG4gIHJldHVybiByb290O1xufTtcblxuY29uc3QgbWFrZVRyZWUgPSAoY29vcmQpID0+IHtcbiAgY29uc3Qga25pZ2h0ID0gS25pZ2h0KGNvb3JkKTtcbiAgY29uc3QgbW92ZXMgPSBtb3ZlTGlzdChrbmlnaHQpO1xuICByZXR1cm4gQnN0VHJlZShtb3Zlcyk7XG59O1xuZXhwb3J0IHsgbWFrZVRyZWUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgS25pZ2h0IH0gZnJvbSAnLi9rbmlnaHQnO1xuaW1wb3J0IHsgbWFrZVRyZWUgfSBmcm9tICcuL21vdmUtdHJlZSc7XG5cbmNvbnN0IHByZW9yZGVyID0gKG5vZGUsIGVuZCwgY2hpbGQgPSBbXSwgbWF0Y2ggPSBbXSkgPT4ge1xuICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChub2RlLmRhdGFbMF0gIT09IGVuZFswXSB8fCBub2RlLmRhdGFbMV0gIT09IGVuZFsxXSkge1xuICAgIGNoaWxkLnB1c2gobm9kZS5kYXRhKTtcbiAgfVxuXG4gIGlmIChub2RlLmRhdGFbMF0gPT09IGVuZFswXSAmJiBub2RlLmRhdGFbMV0gPT09IGVuZFsxXSkge1xuICAgIG1hdGNoLnB1c2gobm9kZS5kYXRhKTtcbiAgfVxuXG4gIGlmIChtYXRjaC5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIG1hdGNoO1xuICB9XG5cbiAgcHJlb3JkZXIobm9kZS5sZWZ0LCBlbmQsIGNoaWxkLCBtYXRjaCk7XG4gIHByZW9yZGVyKG5vZGUucmlnaHQsIGVuZCwgY2hpbGQsIG1hdGNoKTtcblxuICByZXR1cm4gY2hpbGQ7XG59O1xuXG4vLyBXaGVuIG1hdGNoIGZvdW5kLCByZWN1c2l2ZWx5IHVzZSBrbmlnaHRNb3ZzIHRvIGZpbmQgYWxsIHN0ZXBzXG5jb25zdCBrbmlnaHRNb3ZlcyA9IChcbiAgc3RhcnQsXG4gIGVuZCxcbiAgZ2VuZXNpcyA9IFtdLFxuICBtZW1vcnkgPSB7fSxcbiAgdGVtcCA9IFtdLFxuICBjdXJyZW50THZsID0gMCxcbiAgY3VycmVudERhdGEgPSAwXG4pID0+IHtcbiAgY29uc29sZS5sb2coc3RhcnQpO1xuICAvLyBOZXcgbGV2ZWwgb2Ygc3RlcHMgZmluaXNoIHNlYXJjaGluZywgbm8gbWF0Y2hpbmcgZm91bmRcbiAgLy8gQ29udGludWUgdG8gbmV4dCBsZXZlbFxuICBpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnNvbGUubG9nKCdlbmQnKTtcbiAgICBjdXJyZW50THZsICs9IDE7XG4gICAgY3VycmVudERhdGEgPSAwO1xuICAgIGNvbnN0IHNlYXJjaEx2bCA9IGBsZXZlbCR7Y3VycmVudEx2bH1gO1xuICAgIG1lbW9yeVtzZWFyY2hMdmxdID0gdGVtcDtcbiAgICB0ZW1wID0gW107XG4gICAgcmV0dXJuIGtuaWdodE1vdmVzKFxuICAgICAgbWVtb3J5W3NlYXJjaEx2bF1bY3VycmVudERhdGFdLFxuICAgICAgZW5kLFxuICAgICAgZ2VuZXNpcyxcbiAgICAgIG1lbW9yeSxcbiAgICAgIHRlbXAsXG4gICAgICBjdXJyZW50THZsLFxuICAgICAgY3VycmVudERhdGFcbiAgICApO1xuICB9XG5cbiAgY29uc3Qgc3RhcnRUcmVlID0gbWFrZVRyZWUoc3RhcnQpO1xuICBjb25zdCBzdGFydE1vdmVzID0gcHJlb3JkZXIoc3RhcnRUcmVlLCBlbmQpO1xuXG4gIC8vIEZvdW5kIG1hdGNoLCBjb250aW51ZSB0byBzZWFyY2ggZm9yIG1hdGNoJ3MgcGFyZW50IHN0ZXBcbiAgaWYgKHN0YXJ0TW92ZXNbMF1bMF0gPT09IGVuZFswXSAmJiBzdGFydE1vdmVzWzBdWzFdID09PSBlbmRbMV0pIHtcbiAgICBjb25zdCBmaXJzdEhhbGYgPSBbZ2VuZXNpc1swXV07XG4gICAgZmlyc3RIYWxmLnB1c2goc3RhcnQpO1xuICAgIGNvbnN0IHNlY29uZEhhbGYgPSBnZW5lc2lzLnNsaWNlKDEsIGdlbmVzaXMubGVuZ3RoKTtcbiAgICBnZW5lc2lzID0gZmlyc3RIYWxmLmNvbmNhdChzZWNvbmRIYWxmKTtcbiAgICBtZW1vcnkgPSB7fTtcbiAgICB0ZW1wID0gW107XG4gICAgY3VycmVudEx2bCA9IDA7XG4gICAgY3VycmVudERhdGEgPSAwO1xuICAgIHJldHVybiBnZW5lc2lzO1xuICAgIC8vIHJldHVybiBjb25zb2xlLmxvZyhnZW5lc2lzWzBdLCBnZW5lc2lzWzFdKTtcbiAgICAvLyBpZiAoZ2VuZXNpc1sxXVswXSA9PT0gZW5kWzBdICYmIGdlbmVzaXNbMV1bMV0gPT09IGVuZFsxXSkge1xuICAgIC8vICAgcmV0dXJuIGdlbmVzaXM7XG4gICAgLy8gfVxuICAgIC8vIHJldHVybiBrbmlnaHRNb3ZlcyhcbiAgICAvLyAgIGdlbmVzaXNbMF0sXG4gICAgLy8gICBnZW5lc2lzWzFdLFxuICAgIC8vICAgZ2VuZXNpcyxcbiAgICAvLyAgIG1lbW9yeSxcbiAgICAvLyAgIHRlbXAsXG4gICAgLy8gICBjdXJyZW50THZsLFxuICAgIC8vICAgY3VycmVudERhdGFcbiAgICAvLyApO1xuICB9XG5cbiAgLy8gUmVjb3JkIG5leHQgbGV2ZWwgb2YgdGVtcG9yYXJ5IHNlYXJjaCBtZW1vcnlcbiAgaWYgKE9iamVjdC5rZXlzKG1lbW9yeSkubGVuZ3RoID4gMCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZW1wJyk7XG4gICAgc3RhcnRNb3Zlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgdGVtcC5wdXNoKGNvb3JkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlY29yZCBmaXJzdCBsZXZlbCBvZiBzZWFyY2ggbWVtb3J5XG4gIGlmIChPYmplY3Qua2V5cyhtZW1vcnkpLmxlbmd0aCA9PT0gMCkge1xuICAgIGNvbnNvbGUubG9nKCdsZW5ndGgwJyk7XG4gICAgZ2VuZXNpcy5wdXNoKHN0YXJ0LCBlbmQpO1xuICAgIG1lbW9yeS5sZXZlbDAgPSBzdGFydE1vdmVzO1xuICB9XG5cbiAgLy8gR28gdG8gbmV4dCBzdGVwIGluIG1lbW9yeVxuICBjb25zdCBzZWFyY2hMdmwgPSBgbGV2ZWwke2N1cnJlbnRMdmx9YDtcblxuICByZXR1cm4ga25pZ2h0TW92ZXMoXG4gICAgbWVtb3J5W3NlYXJjaEx2bF1bY3VycmVudERhdGFdLFxuICAgIGVuZCxcbiAgICBnZW5lc2lzLFxuICAgIG1lbW9yeSxcbiAgICB0ZW1wLFxuICAgIGN1cnJlbnRMdmwsXG4gICAgY3VycmVudERhdGEgKyAxXG4gICk7XG4gIC8vIHJldHVybiBtZW1vcnlbc2VhY2hMdmxdW2N1cnJlbnREYXRhXTtcbiAgLy8gcmV0dXJuIHRlbXA7XG4gIC8vIHJldHVybiBzdGFydE1vdmVzO1xufTtcblxuY29uc3QgZGl1ID0ga25pZ2h0TW92ZXMoWzIsIDJdLCBbNCwgNF0pO1xuY29uc29sZS5sb2coZGl1KTtcbmNvbnNvbGUubG9nKEtuaWdodChbNSwgMl0pKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==