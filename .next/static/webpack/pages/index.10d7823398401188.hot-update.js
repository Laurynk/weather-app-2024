"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/home.module.css */ \"./src/styles/home.module.css\");\n/* harmony import */ var _styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Header */ \"./src/components/Header/index.tsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"./src/components/Footer/index.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    var apiKey = \"c19903014af6285ffd52d7ad2def6ff3\";\n    var currentUrl = \"https://api.openweathermap.org/data/2.5/weather?q=London&appid=\".concat(apiKey);\n    var dayHourUrl = \"api.openweathermap.org/data/2.5/forecast?q={city}&appid=\".concat(apiKey);\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [city, setCity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    // function handleCitySearch(e) {\n    //   setCity(e.target.value);\n    // }\n    // function handleSubmit(e) {\n    //   e.preventDefault();\n    //   const searchCity = {\n    //     city: city\n    //   };\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),\n                                children: \"When You Don't Know The Weather, Ask HER!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().subtext),\n                                children: \"1. Enter a location\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().subtext),\n                                children: \"2. Find the city's current weather, Tommorrow's forecase, and 6 day forecast\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().searchFunction),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().searchBar)\n                                }, void 0, false, {\n                                    fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                'type=\"search\" placeholder=\"Enter location\" />',\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_styles_home_module_css__WEBPACK_IMPORTED_MODULE_4___default().submit),\n                                    type: \"submit\",\n                                    children: \"Submit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lauryn/Desktop/weather-app-2024/src/pages/index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"gDeP7WCKtlK0UKRsVo8y7Fm92ls=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ1k7QUFFSjtBQUNBO0FBRTFCLFNBQVNJOztJQUN0QixJQUFJQyxTQUFTO0lBQ2IsSUFBSUMsYUFBYSxrRUFBeUUsT0FBUEQ7SUFDbkYsSUFBSUUsYUFBYSwyREFBa0UsT0FBUEY7SUFFNUUsTUFBTSxDQUFDRyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFrQixFQUFFO0lBQ3BELE1BQU0sQ0FBQ1UsTUFBTUMsUUFBUSxHQUFHWCwrQ0FBUUEsQ0FBZSxFQUFFO0lBRWpELGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsSUFBSTtJQUVKLDZCQUE2QjtJQUM3Qix3QkFBd0I7SUFDeEIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixPQUFPO0lBQ1AsSUFBSTtJQUdKLHFCQUNFLDhEQUFDWTtRQUFLQyxXQUFZOzswQkFDaEIsOERBQUNDO2dCQUFJRCxXQUFXWiwwRUFBZ0I7O2tDQUM5Qiw4REFBQ0MsMERBQU1BOzs7OztrQ0FDUCw4REFBQ1k7d0JBQUlELFdBQVdaLHdFQUFjOzswQ0FDNUIsOERBQUNnQjtnQ0FBR0osV0FBV1osdUVBQWE7MENBQUU7Ozs7OzswQ0FDOUIsOERBQUNrQjtnQ0FBR04sV0FBV1osd0VBQWM7MENBQUU7Ozs7OzswQ0FDL0IsOERBQUNrQjtnQ0FBR04sV0FBV1osd0VBQWM7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FHakMsOERBQUNhO3dCQUFJRCxXQUFXWiwrRUFBcUI7a0NBQ25DLDRFQUFDcUI7OzhDQUNDLDhEQUFDQztvQ0FBTVYsV0FBV1osMEVBQWdCOzs7Ozs7Z0NBQUc7OENBSXJDLDhEQUFDd0I7b0NBQU9aLFdBQVdaLHVFQUFhO29DQUFFMEIsTUFBSzs4Q0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXRELDhEQUFDeEIsMERBQU1BOzs7Ozs7Ozs7OztBQUtiO0dBL0N3QkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvaG9tZS5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIHZhciBhcGlLZXkgPSBcImMxOTkwMzAxNGFmNjI4NWZmZDUyZDdhZDJkZWY2ZmYzXCJcbiAgdmFyIGN1cnJlbnRVcmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1Mb25kb24mYXBwaWQ9JHthcGlLZXl9YFxuICB2YXIgZGF5SG91clVybCA9IGBhcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9e2NpdHl9JmFwcGlkPSR7YXBpS2V5fWBcblxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZTxJQ3VycmVudFByb3BzW10+KFtdKTtcbiAgY29uc3QgW2NpdHksIHNldENpdHldID0gdXNlU3RhdGU8SUNpdHlWYWx1ZVtdPihbXSk7XG5cbiAgLy8gZnVuY3Rpb24gaGFuZGxlQ2l0eVNlYXJjaChlKSB7XG4gIC8vICAgc2V0Q2l0eShlLnRhcmdldC52YWx1ZSk7XG4gIC8vIH1cblxuICAvLyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgLy8gICBjb25zdCBzZWFyY2hDaXR5ID0ge1xuICAvLyAgICAgY2l0eTogY2l0eVxuICAvLyAgIH07XG4gIC8vIH1cblxuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtgZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwLTI0YH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5XaGVuIFlvdSBEb24ndCBLbm93IFRoZSBXZWF0aGVyLCBBc2sgSEVSITwvaDE+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLnN1YnRleHR9PjEuIEVudGVyIGEgbG9jYXRpb248L2gzPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5zdWJ0ZXh0fT4yLiBGaW5kIHRoZSBjaXR5J3MgY3VycmVudCB3ZWF0aGVyLCBUb21tb3Jyb3cncyBmb3JlY2FzZSwgYW5kIDYgZGF5IGZvcmVjYXN0PC9oMz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hGdW5jdGlvbn0+XG4gICAgICAgICAgPGZvcm0gPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEJhcn0vPlxuICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBsb2NhdGlvblwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5zdWJtaXR9IHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG5cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvb3RlciAvPlxuXG5cbiAgICA8L21haW4+XG4gICk7XG59XG5cblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiSGVhZGVyIiwiRm9vdGVyIiwiSG9tZSIsImFwaUtleSIsImN1cnJlbnRVcmwiLCJkYXlIb3VyVXJsIiwiZGF0YSIsInNldERhdGEiLCJjaXR5Iiwic2V0Q2l0eSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJjb250YWluZXIiLCJjb250ZW50IiwiaDEiLCJoZWFkZXIiLCJoMyIsInN1YnRleHQiLCJzZWFyY2hGdW5jdGlvbiIsImZvcm0iLCJpbnB1dCIsInNlYXJjaEJhciIsImJ1dHRvbiIsInN1Ym1pdCIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});