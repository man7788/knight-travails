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

/***/ "./src/knight-moves.js":
/*!*****************************!*\
  !*** ./src/knight-moves.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "knightMoves": () => (/* binding */ knightMoves)
/* harmony export */ });
/* harmony import */ var _move_tree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./move-tree */ "./src/move-tree.js");


const printMoves = (moves) => {
  const sum = moves.length - 1;
  let path = '';
  moves.forEach((step) => {
    path += `[${step}]
    `;
  });

  if (sum === 1) {
    return console.log(
      `=> You made it in ${sum} move!  Here's your path:
    ${path}`
    );
  }
  return console.log(
    `=> You made it in ${sum} moves!  Here's your path:
    ${path}`
  );
};

const preorder = (node, end, child = [], match = []) => {
  if (node === null) {
    return;
  }

  if (node.data[0] === end[0] && node.data[1] === end[1]) {
    match.push(node.data);
  }

  if (node.data[0] !== end[0] || node.data[1] !== end[1]) {
    child.push(node.data);
  }

  preorder(node.left, end, child, match);
  preorder(node.right, end, child, match);

  if (match.length > 0) {
    return match;
  }

  return child;
};

// When match found, recusively use knightMoves to find all steps
const knightMoves = (
  start,
  end,
  path = [],
  memory = {},
  temp = [],
  currentLvl = 0,
  currentData = 0
) => {
  // New level of steps finish searching, no matching found
  // Continue to next level
  if (start === undefined) {
    currentLvl += 1;
    currentData = 0;
    const searchLvl = `level${currentLvl}`;
    memory[searchLvl] = temp;
    temp = [];
    return knightMoves(
      memory[searchLvl][currentData],
      end,
      path,
      memory,
      temp,
      currentLvl,
      currentData
    );
  }

  const startTree = (0,_move_tree__WEBPACK_IMPORTED_MODULE_0__.makeTree)(start);
  const startMoves = preorder(startTree, end);

  // End of search if returned match has start as a move
  if (startMoves[0][0] === end[0] && startMoves[0][1] === end[1]) {
    if (path.length === 0) {
      return printMoves([start, end]);
    }

    const matchTree = (0,_move_tree__WEBPACK_IMPORTED_MODULE_0__.makeTree)(startMoves[0]);
    const matchMoves = preorder(matchTree, path[0]);
    if (matchMoves.length === 1) {
      return printMoves(path);
    }
  }

  // Found match, continue to search for match's parent step
  if (startMoves[0][0] === end[0] && startMoves[0][1] === end[1]) {
    path.splice(1, 0, start);

    temp = [];
    currentLvl = 0;
    currentData = 0;

    return knightMoves(
      path[0],
      path[1],
      path,
      memory,
      temp,
      currentLvl,
      currentData
    );
  }

  // Record next level of temporary search memory
  if (Object.keys(memory).length > 0) {
    startMoves.forEach((coord) => {
      temp.push(coord);
    });
  }

  // Record first level of search memory, only works for first invoke
  if (Object.keys(memory).length === 0) {
    path.push(start, end);
    memory.level0 = startMoves;
  }

  // Go to next step in memory
  const searchLvl = `level${currentLvl}`;

  return knightMoves(
    memory[searchLvl][currentData],
    end,
    path,
    memory,
    temp,
    currentLvl,
    currentData + 1
  );
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
/* harmony import */ var _knight_moves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./knight-moves */ "./src/knight-moves.js");



(0,_knight_moves__WEBPACK_IMPORTED_MODULE_1__.knightMoves)([0, 0], [4, 4]);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRWtCOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0VsQjtBQUNrQzs7QUFFbEMsdUNBQXVDLG1CQUFtQjs7QUFFMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQiwrQ0FBTTtBQUN2QjtBQUNBO0FBQ0E7QUFDb0I7Ozs7Ozs7VUN4RHBCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ3dCOztBQUU3QywwREFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvYm9hcmQuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2ZpbmQtbW92ZXMuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2ZpbmQtc3F1YXJlLmpzIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9rbmlnaHQtbW92ZXMuanMiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwLy4vc3JjL2tuaWdodC5qcyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvLi9zcmMvbW92ZS10cmVlLmpzIiwid2VicGFjazovL25wbS1zZXR1cC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vbnBtLXNldHVwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ucG0tc2V0dXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25wbS1zZXR1cC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgYmFja2dyb3VuZDogYmxhY2s7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxpQkFBaUI7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBibGFjaztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgU3F1YXJlID0gKHgsIHksIHVwLCByaWdodCkgPT4ge1xuICBjb25zdCBjb29yZCA9IFt4LCB5XTtcbiAgcmV0dXJuIHsgY29vcmQsIHVwLCByaWdodCB9O1xufTtcblxuY29uc3QgQm9hcmQgPSAoeCwgeSkgPT4ge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkICYmIHkgPT09IHVuZGVmaW5lZCkge1xuICAgIHggPSAwO1xuICAgIHkgPSAwO1xuICB9XG5cbiAgaWYgKHggPiA3IHx8IHkgPiA3KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBsZXQgYm9hcmQgPSB7fTtcblxuICBib2FyZCA9IFNxdWFyZSh4LCB5LCBCb2FyZCh4ICsgMSwgeSksIEJvYXJkKHgsIHkgKyAxKSk7XG5cbiAgcmV0dXJuIGJvYXJkO1xufTtcblxuZXhwb3J0IHsgQm9hcmQgfTtcbiIsImltcG9ydCB7IGZpbmRTcXVhcmUgfSBmcm9tICcuL2ZpbmQtc3F1YXJlJztcbmltcG9ydCB7IEJvYXJkIH0gZnJvbSAnLi9ib2FyZCc7XG5cbmNvbnN0IGJvYXJkID0gQm9hcmQoKTtcblxuY29uc3QgZmluZFVwID0gKHYsIGgpID0+IHtcbiAgbGV0IG1vdmVUbyA9IHt9O1xuXG4gIGlmICh2ICsgMiA8PSA3KSB7XG4gICAgY29uc3QgY29vcmRYID0gdiArIDI7XG5cbiAgICBpZiAoaCArIDEgPD0gNykge1xuICAgICAgY29uc3QgY29vcmRZID0gaCArIDE7XG4gICAgICBtb3ZlVG8udHVyblJpZ2h0ID0gZmluZFNxdWFyZShib2FyZCwgY29vcmRYLCBjb29yZFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZlVG8udHVyblJpZ2h0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoaCAtIDEgPj0gMCkge1xuICAgICAgY29uc3QgY29vcmRZID0gaCAtIDE7XG4gICAgICBtb3ZlVG8udHVybkxlZnQgPSBmaW5kU3F1YXJlKGJvYXJkLCBjb29yZFgsIGNvb3JkWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmVUby50dXJuTGVmdCA9IG51bGw7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1vdmVUbyA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gbW92ZVRvO1xufTtcblxuY29uc3QgZmluZERvd24gPSAodiwgaCkgPT4ge1xuICBsZXQgbW92ZVRvID0ge307XG5cbiAgaWYgKHYgLSAyID49IDApIHtcbiAgICBjb25zdCBjb29yZFggPSB2IC0gMjtcblxuICAgIGlmIChoICsgMSA8PSA3KSB7XG4gICAgICBjb25zdCBjb29yZFkgPSBoICsgMTtcbiAgICAgIG1vdmVUby50dXJuUmlnaHQgPSBmaW5kU3F1YXJlKGJvYXJkLCBjb29yZFgsIGNvb3JkWSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1vdmVUby50dXJuUmlnaHQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChoIC0gMSA+PSAwKSB7XG4gICAgICBjb25zdCBjb29yZFkgPSBoIC0gMTtcbiAgICAgIG1vdmVUby50dXJuTGVmdCA9IGZpbmRTcXVhcmUoYm9hcmQsIGNvb3JkWCwgY29vcmRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW92ZVRvLnR1cm5MZWZ0ID0gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbW92ZVRvID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBtb3ZlVG87XG59O1xuXG5jb25zdCBmaW5kUmlnaHQgPSAodiwgaCkgPT4ge1xuICBsZXQgbW92ZVRvID0ge307XG5cbiAgaWYgKGggKyAyIDw9IDcpIHtcbiAgICBjb25zdCBjb29yZFkgPSBoICsgMjtcblxuICAgIGlmICh2ICsgMSA8PSA3KSB7XG4gICAgICBjb25zdCBjb29yZFggPSB2ICsgMTtcbiAgICAgIG1vdmVUby50dXJuTGVmdCA9IGZpbmRTcXVhcmUoYm9hcmQsIGNvb3JkWCwgY29vcmRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW92ZVRvLnR1cm5MZWZ0ID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAodiAtIDEgPj0gMCkge1xuICAgICAgY29uc3QgY29vcmRYID0gdiAtIDE7XG4gICAgICBtb3ZlVG8udHVyblJpZ2h0ID0gZmluZFNxdWFyZShib2FyZCwgY29vcmRYLCBjb29yZFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZlVG8udHVyblJpZ2h0ID0gbnVsbDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbW92ZVRvID0gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBtb3ZlVG87XG59O1xuXG5jb25zdCBmaW5kTGVmdCA9ICh2LCBoKSA9PiB7XG4gIGxldCBtb3ZlVG8gPSB7fTtcblxuICBpZiAoaCAtIDIgPj0gMCkge1xuICAgIGNvbnN0IGNvb3JkWSA9IGggLSAyO1xuXG4gICAgaWYgKHYgKyAxIDw9IDcpIHtcbiAgICAgIGNvbnN0IGNvb3JkWCA9IHYgKyAxO1xuICAgICAgbW92ZVRvLnR1cm5SaWdodCA9IGZpbmRTcXVhcmUoYm9hcmQsIGNvb3JkWCwgY29vcmRZKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbW92ZVRvLnR1cm5SaWdodCA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHYgLSAxID49IDApIHtcbiAgICAgIGNvbnN0IGNvb3JkWCA9IHYgLSAxO1xuICAgICAgbW92ZVRvLnR1cm5MZWZ0ID0gZmluZFNxdWFyZShib2FyZCwgY29vcmRYLCBjb29yZFkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBtb3ZlVG8udHVybkxlZnQgPSBudWxsO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtb3ZlVG8gPSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIG1vdmVUbztcbn07XG5cbmV4cG9ydCB7IGZpbmRVcCwgZmluZERvd24sIGZpbmRSaWdodCwgZmluZExlZnQgfTtcbiIsImNvbnN0IGZpbmRTcXVhcmUgPSAoc3F1YXJlLCBwLCBxKSA9PiB7XG4gIGlmIChzcXVhcmUuY29vcmRbMF0gIT09IHApIHtcbiAgICBzcXVhcmUgPSBzcXVhcmUudXA7XG4gICAgcmV0dXJuIGZpbmRTcXVhcmUoc3F1YXJlLCBwLCBxKTtcbiAgfVxuXG4gIGlmIChzcXVhcmUuY29vcmRbMF0gPT09IHApIHtcbiAgICBpZiAoc3F1YXJlLmNvb3JkWzFdICE9PSBxKSB7XG4gICAgICBzcXVhcmUgPSBzcXVhcmUucmlnaHQ7XG4gICAgICByZXR1cm4gZmluZFNxdWFyZShzcXVhcmUsIHAsIHEpO1xuICAgIH1cbiAgICBpZiAoc3F1YXJlLmNvb3JkWzFdICE9PSBxKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG4gIHJldHVybiBzcXVhcmU7XG59O1xuXG5leHBvcnQgeyBmaW5kU3F1YXJlIH07XG4iLCJpbXBvcnQgeyBtYWtlVHJlZSB9IGZyb20gJy4vbW92ZS10cmVlJztcblxuY29uc3QgcHJpbnRNb3ZlcyA9IChtb3ZlcykgPT4ge1xuICBjb25zdCBzdW0gPSBtb3Zlcy5sZW5ndGggLSAxO1xuICBsZXQgcGF0aCA9ICcnO1xuICBtb3Zlcy5mb3JFYWNoKChzdGVwKSA9PiB7XG4gICAgcGF0aCArPSBgWyR7c3RlcH1dXG4gICAgYDtcbiAgfSk7XG5cbiAgaWYgKHN1bSA9PT0gMSkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICAgIGA9PiBZb3UgbWFkZSBpdCBpbiAke3N1bX0gbW92ZSEgIEhlcmUncyB5b3VyIHBhdGg6XG4gICAgJHtwYXRofWBcbiAgICApO1xuICB9XG4gIHJldHVybiBjb25zb2xlLmxvZyhcbiAgICBgPT4gWW91IG1hZGUgaXQgaW4gJHtzdW19IG1vdmVzISAgSGVyZSdzIHlvdXIgcGF0aDpcbiAgICAke3BhdGh9YFxuICApO1xufTtcblxuY29uc3QgcHJlb3JkZXIgPSAobm9kZSwgZW5kLCBjaGlsZCA9IFtdLCBtYXRjaCA9IFtdKSA9PiB7XG4gIGlmIChub2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKG5vZGUuZGF0YVswXSA9PT0gZW5kWzBdICYmIG5vZGUuZGF0YVsxXSA9PT0gZW5kWzFdKSB7XG4gICAgbWF0Y2gucHVzaChub2RlLmRhdGEpO1xuICB9XG5cbiAgaWYgKG5vZGUuZGF0YVswXSAhPT0gZW5kWzBdIHx8IG5vZGUuZGF0YVsxXSAhPT0gZW5kWzFdKSB7XG4gICAgY2hpbGQucHVzaChub2RlLmRhdGEpO1xuICB9XG5cbiAgcHJlb3JkZXIobm9kZS5sZWZ0LCBlbmQsIGNoaWxkLCBtYXRjaCk7XG4gIHByZW9yZGVyKG5vZGUucmlnaHQsIGVuZCwgY2hpbGQsIG1hdGNoKTtcblxuICBpZiAobWF0Y2gubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBtYXRjaDtcbiAgfVxuXG4gIHJldHVybiBjaGlsZDtcbn07XG5cbi8vIFdoZW4gbWF0Y2ggZm91bmQsIHJlY3VzaXZlbHkgdXNlIGtuaWdodE1vdmVzIHRvIGZpbmQgYWxsIHN0ZXBzXG5jb25zdCBrbmlnaHRNb3ZlcyA9IChcbiAgc3RhcnQsXG4gIGVuZCxcbiAgcGF0aCA9IFtdLFxuICBtZW1vcnkgPSB7fSxcbiAgdGVtcCA9IFtdLFxuICBjdXJyZW50THZsID0gMCxcbiAgY3VycmVudERhdGEgPSAwXG4pID0+IHtcbiAgLy8gTmV3IGxldmVsIG9mIHN0ZXBzIGZpbmlzaCBzZWFyY2hpbmcsIG5vIG1hdGNoaW5nIGZvdW5kXG4gIC8vIENvbnRpbnVlIHRvIG5leHQgbGV2ZWxcbiAgaWYgKHN0YXJ0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjdXJyZW50THZsICs9IDE7XG4gICAgY3VycmVudERhdGEgPSAwO1xuICAgIGNvbnN0IHNlYXJjaEx2bCA9IGBsZXZlbCR7Y3VycmVudEx2bH1gO1xuICAgIG1lbW9yeVtzZWFyY2hMdmxdID0gdGVtcDtcbiAgICB0ZW1wID0gW107XG4gICAgcmV0dXJuIGtuaWdodE1vdmVzKFxuICAgICAgbWVtb3J5W3NlYXJjaEx2bF1bY3VycmVudERhdGFdLFxuICAgICAgZW5kLFxuICAgICAgcGF0aCxcbiAgICAgIG1lbW9yeSxcbiAgICAgIHRlbXAsXG4gICAgICBjdXJyZW50THZsLFxuICAgICAgY3VycmVudERhdGFcbiAgICApO1xuICB9XG5cbiAgY29uc3Qgc3RhcnRUcmVlID0gbWFrZVRyZWUoc3RhcnQpO1xuICBjb25zdCBzdGFydE1vdmVzID0gcHJlb3JkZXIoc3RhcnRUcmVlLCBlbmQpO1xuXG4gIC8vIEVuZCBvZiBzZWFyY2ggaWYgcmV0dXJuZWQgbWF0Y2ggaGFzIHN0YXJ0IGFzIGEgbW92ZVxuICBpZiAoc3RhcnRNb3Zlc1swXVswXSA9PT0gZW5kWzBdICYmIHN0YXJ0TW92ZXNbMF1bMV0gPT09IGVuZFsxXSkge1xuICAgIGlmIChwYXRoLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHByaW50TW92ZXMoW3N0YXJ0LCBlbmRdKTtcbiAgICB9XG5cbiAgICBjb25zdCBtYXRjaFRyZWUgPSBtYWtlVHJlZShzdGFydE1vdmVzWzBdKTtcbiAgICBjb25zdCBtYXRjaE1vdmVzID0gcHJlb3JkZXIobWF0Y2hUcmVlLCBwYXRoWzBdKTtcbiAgICBpZiAobWF0Y2hNb3Zlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiBwcmludE1vdmVzKHBhdGgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEZvdW5kIG1hdGNoLCBjb250aW51ZSB0byBzZWFyY2ggZm9yIG1hdGNoJ3MgcGFyZW50IHN0ZXBcbiAgaWYgKHN0YXJ0TW92ZXNbMF1bMF0gPT09IGVuZFswXSAmJiBzdGFydE1vdmVzWzBdWzFdID09PSBlbmRbMV0pIHtcbiAgICBwYXRoLnNwbGljZSgxLCAwLCBzdGFydCk7XG5cbiAgICB0ZW1wID0gW107XG4gICAgY3VycmVudEx2bCA9IDA7XG4gICAgY3VycmVudERhdGEgPSAwO1xuXG4gICAgcmV0dXJuIGtuaWdodE1vdmVzKFxuICAgICAgcGF0aFswXSxcbiAgICAgIHBhdGhbMV0sXG4gICAgICBwYXRoLFxuICAgICAgbWVtb3J5LFxuICAgICAgdGVtcCxcbiAgICAgIGN1cnJlbnRMdmwsXG4gICAgICBjdXJyZW50RGF0YVxuICAgICk7XG4gIH1cblxuICAvLyBSZWNvcmQgbmV4dCBsZXZlbCBvZiB0ZW1wb3Jhcnkgc2VhcmNoIG1lbW9yeVxuICBpZiAoT2JqZWN0LmtleXMobWVtb3J5KS5sZW5ndGggPiAwKSB7XG4gICAgc3RhcnRNb3Zlcy5mb3JFYWNoKChjb29yZCkgPT4ge1xuICAgICAgdGVtcC5wdXNoKGNvb3JkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlY29yZCBmaXJzdCBsZXZlbCBvZiBzZWFyY2ggbWVtb3J5LCBvbmx5IHdvcmtzIGZvciBmaXJzdCBpbnZva2VcbiAgaWYgKE9iamVjdC5rZXlzKG1lbW9yeSkubGVuZ3RoID09PSAwKSB7XG4gICAgcGF0aC5wdXNoKHN0YXJ0LCBlbmQpO1xuICAgIG1lbW9yeS5sZXZlbDAgPSBzdGFydE1vdmVzO1xuICB9XG5cbiAgLy8gR28gdG8gbmV4dCBzdGVwIGluIG1lbW9yeVxuICBjb25zdCBzZWFyY2hMdmwgPSBgbGV2ZWwke2N1cnJlbnRMdmx9YDtcblxuICByZXR1cm4ga25pZ2h0TW92ZXMoXG4gICAgbWVtb3J5W3NlYXJjaEx2bF1bY3VycmVudERhdGFdLFxuICAgIGVuZCxcbiAgICBwYXRoLFxuICAgIG1lbW9yeSxcbiAgICB0ZW1wLFxuICAgIGN1cnJlbnRMdmwsXG4gICAgY3VycmVudERhdGEgKyAxXG4gICk7XG59O1xuXG5leHBvcnQgeyBrbmlnaHRNb3ZlcyB9O1xuIiwiaW1wb3J0IHsgZmluZFVwLCBmaW5kRG93biwgZmluZFJpZ2h0LCBmaW5kTGVmdCB9IGZyb20gJy4vZmluZC1tb3Zlcyc7XG5cbi8vIGNvbnN0IEtuaWdodCA9IChjb29yZCkgPT4ge1xuLy8gICBjb25zdCB2ID0gY29vcmRbMF07XG4vLyAgIGNvbnN0IGggPSBjb29yZFsxXTtcblxuLy8gICBjb25zdCB1cCA9IGZpbmRVcCh2LCBoKTtcbi8vICAgY29uc3QgZG93biA9IGZpbmREb3duKHYsIGgpO1xuLy8gICBjb25zdCBsZWZ0ID0gZmluZExlZnQodiwgaCk7XG4vLyAgIGNvbnN0IHJpZ2h0ID0gZmluZFJpZ2h0KHYsIGgpO1xuXG4vLyAgIHJldHVybiB7IGNvb3JkLCB1cCwgZG93biwgbGVmdCwgcmlnaHQgfTtcbi8vIH07XG5cbmNvbnN0IEtuaWdodCA9IChjb29yZCkgPT4ge1xuICBpZiAoY29vcmQgPT09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHYgPSBjb29yZFswXTtcbiAgY29uc3QgaCA9IGNvb3JkWzFdO1xuXG4gIGNvbnN0IHVwID0gZmluZFVwKHYsIGgpO1xuICBjb25zdCBkb3duID0gZmluZERvd24odiwgaCk7XG4gIGNvbnN0IGxlZnQgPSBmaW5kTGVmdCh2LCBoKTtcbiAgY29uc3QgcmlnaHQgPSBmaW5kUmlnaHQodiwgaCk7XG5cbiAgbGV0IHVwTCA9IG51bGw7XG4gIGxldCB1cFIgPSBudWxsO1xuICBsZXQgZG93bkwgPSBudWxsO1xuICBsZXQgZG93blIgPSBudWxsO1xuICBsZXQgbGVmdEwgPSBudWxsO1xuICBsZXQgbGVmdFIgPSBudWxsO1xuICBsZXQgcmlnaHRMID0gbnVsbDtcbiAgbGV0IHJpZ2h0UiA9IG51bGw7XG5cbiAgaWYgKHVwICE9PSBudWxsKSB7XG4gICAgaWYgKHVwLnR1cm5MZWZ0ICE9PSBudWxsKSB7XG4gICAgICB1cEwgPSB1cC50dXJuTGVmdC5jb29yZDtcbiAgICB9XG5cbiAgICBpZiAodXAudHVyblJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICB1cFIgPSB1cC50dXJuUmlnaHQuY29vcmQ7XG4gICAgfVxuICB9XG5cbiAgaWYgKGRvd24gIT09IG51bGwpIHtcbiAgICBpZiAoZG93bi50dXJuTGVmdCAhPT0gbnVsbCkge1xuICAgICAgZG93bkwgPSBkb3duLnR1cm5MZWZ0LmNvb3JkO1xuICAgIH1cblxuICAgIGlmIChkb3duLnR1cm5SaWdodCAhPT0gbnVsbCkge1xuICAgICAgZG93blIgPSBkb3duLnR1cm5SaWdodC5jb29yZDtcbiAgICB9XG4gIH1cblxuICBpZiAobGVmdCAhPT0gbnVsbCkge1xuICAgIGlmIChsZWZ0LnR1cm5MZWZ0ICE9PSBudWxsKSB7XG4gICAgICBsZWZ0TCA9IGxlZnQudHVybkxlZnQuY29vcmQ7XG4gICAgfVxuXG4gICAgaWYgKGxlZnQudHVyblJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICBsZWZ0UiA9IGxlZnQudHVyblJpZ2h0LmNvb3JkO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyaWdodCAhPT0gbnVsbCkge1xuICAgIGlmIChyaWdodC50dXJuTGVmdCAhPT0gbnVsbCkge1xuICAgICAgcmlnaHRMID0gcmlnaHQudHVybkxlZnQuY29vcmQ7XG4gICAgfVxuXG4gICAgaWYgKHJpZ2h0LnR1cm5SaWdodCAhPT0gbnVsbCkge1xuICAgICAgcmlnaHRSID0gcmlnaHQudHVyblJpZ2h0LmNvb3JkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IGNvb3JkLCB1cEwsIHVwUiwgZG93bkwsIGRvd25SLCBsZWZ0TCwgbGVmdFIsIHJpZ2h0TCwgcmlnaHRSIH07XG59O1xuXG5leHBvcnQgeyBLbmlnaHQgfTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1kZXN0cnVjdHVyaW5nICovXG5pbXBvcnQgeyBLbmlnaHQgfSBmcm9tICcuL2tuaWdodCc7XG5cbmNvbnN0IE5vZGUgPSAoZGF0YSwgbGVmdCwgcmlnaHQpID0+ICh7IGRhdGEsIGxlZnQsIHJpZ2h0IH0pO1xuXG5jb25zdCBtb3ZlTGlzdCA9IChub2RlKSA9PiB7XG4gIGNvbnN0IHJhd2xpc3QgPSBbXTtcbiAgY29uc3QgbGlzdCA9IFtdO1xuICByYXdsaXN0LnB1c2goXG4gICAgbm9kZS51cEwsXG4gICAgbm9kZS51cFIsXG4gICAgbm9kZS5kb3duTCxcbiAgICBub2RlLmRvd25SLFxuICAgIG5vZGUubGVmdEwsXG4gICAgbm9kZS5sZWZ0UixcbiAgICBub2RlLnJpZ2h0TCxcbiAgICBub2RlLnJpZ2h0UlxuICApO1xuICByYXdsaXN0LmZvckVhY2goKG51bSkgPT4ge1xuICAgIGlmIChudW0gIT09IG51bGwpIHtcbiAgICAgIGxpc3QucHVzaChudW0pO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBsaXN0O1xufTtcblxuY29uc3QgQnN0VHJlZSA9IChhcnJheSkgPT4ge1xuICBjb25zdCBzb3J0ZWQgPSBhcnJheS5zb3J0KCk7XG4gIGNvbnN0IHN0YXJ0ID0gMDtcbiAgY29uc3QgZW5kID0gc29ydGVkLmxlbmd0aCAtIDE7XG4gIGNvbnN0IG1pZCA9IE1hdGguZmxvb3IoKHN0YXJ0ICsgZW5kKSAvIDIpO1xuXG4gIGNvbnN0IGxlZnQgPSBbXTtcbiAgY29uc3QgcmlnaHQgPSBbXTtcblxuICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNvcnRlZC5mb3JFYWNoKChudW0pID0+IHtcbiAgICBpZiAobnVtIDwgc29ydGVkW21pZF0pIHtcbiAgICAgIGxlZnQucHVzaChudW0pO1xuICAgIH0gZWxzZSBpZiAobnVtID4gc29ydGVkW21pZF0pIHtcbiAgICAgIHJpZ2h0LnB1c2gobnVtKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHJvb3QgPSBOb2RlKHNvcnRlZFttaWRdLCBCc3RUcmVlKGxlZnQpLCBCc3RUcmVlKHJpZ2h0KSk7XG4gIHJldHVybiByb290O1xufTtcblxuY29uc3QgbWFrZVRyZWUgPSAoY29vcmQpID0+IHtcbiAgY29uc3Qga25pZ2h0ID0gS25pZ2h0KGNvb3JkKTtcbiAgY29uc3QgbW92ZXMgPSBtb3ZlTGlzdChrbmlnaHQpO1xuICByZXR1cm4gQnN0VHJlZShtb3Zlcyk7XG59O1xuZXhwb3J0IHsgbWFrZVRyZWUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsga25pZ2h0TW92ZXMgfSBmcm9tICcuL2tuaWdodC1tb3Zlcyc7XG5cbmtuaWdodE1vdmVzKFswLCAwXSwgWzQsIDRdKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==