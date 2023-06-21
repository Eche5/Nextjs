(() => {
var exports = {};
exports.id = 999;
exports.ids = [999];
exports.modules = {

/***/ 7849:
/***/ ((module) => {

// Exports
module.exports = {
	"detail": "stateName_detail__U_ttf",
	"content": "stateName_content__cbvX_"
};


/***/ }),

/***/ 7842:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Bauchi)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_stateName_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7849);
/* harmony import */ var _styles_stateName_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_stateName_module_css__WEBPACK_IMPORTED_MODULE_2__);



const bauchi = [
    {
        id: "p1",
        title: "Tunga Dutse",
        image: "http://2.bp.blogspot.com/-5gEcT4QRTXw/UxOaPMtsQ2I/AAAAAAAADt8/C-0swMDRKDc/s1600/DSC04327.JPG",
        description: "Dutse is popular for the ancient engraving on the rocks. If you don?t believe me, look at the writing on the wall. The writings are large and cover a huge area on the sandstone embankment. The meaning and age of the inscriptions are yet to be determined but they are one of the most significant wall writings to be found in Bauchi and Nigeria in general."
    },
    {
        id: "p2",
        title: "Yankari",
        image: "https://gazettengr.com/wp-content/uploads/images-2-largejpg2.jpg",
        description: "Everyone knows about Yankari games reserve or you must have at least heard about it once in your lifetime. If not, then under what rock have you been living under? The park is home to the largest collection of elephants in Nigeria and one of the largest in West Africa. ?So yes, a large number of large mammals."
    }, 
];
function Bauchi() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_stateName_module_css__WEBPACK_IMPORTED_MODULE_2___default().detail),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: bauchi.map((ab, i)=>{
                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: ab.image
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            children: ab.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            children: ab.description
                        })
                    ]
                }, ab.id);
            })
        })
    });
}


/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7842));
module.exports = __webpack_exports__;

})();