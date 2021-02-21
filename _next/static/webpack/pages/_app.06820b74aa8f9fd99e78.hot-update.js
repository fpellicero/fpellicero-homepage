webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Layout/LocaleSelector/LocaleSelector.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/Layout/LocaleSelector/LocaleSelector.tsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var i18n_LocaleProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! i18n/LocaleProvider */ "./src/i18n/LocaleProvider.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_circle_flags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-circle-flags */ "./node_modules/react-circle-flags/dist/index.modern.js");




var _jsxFileName = "/home/fpellicero/projects/fpellicero.github.io/src/components/Layout/LocaleSelector/LocaleSelector.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var LocaleSelector = function LocaleSelector() {
  _s();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_5__["useState"](false),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      showSelector = _React$useState2[0],
      setShowSelector = _React$useState2[1];

  var currentLocale = Object(i18n_LocaleProvider__WEBPACK_IMPORTED_MODULE_3__["useLocale"])();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

  var changeLocale = function changeLocale(locale) {
    router.push(router.asPath.replace("/".concat(currentLocale), "/".concat(locale)));
    setShowSelector(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      className: "locale-selector",
      onClick: function onClick() {
        return setShowSelector(!showSelector);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_6__["CircleFlag"], {
        countryCode: currentLocale === "es" ? "es" : "gb"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
      children: showSelector && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
          className: "locale-selector__dropdown",
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          transition: {
            delay: .3
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_6__["CircleFlag"], {
            countryCode: "es",
            onClick: function onClick() {
              return changeLocale("es");
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_circle_flags__WEBPACK_IMPORTED_MODULE_6__["CircleFlag"], {
            countryCode: "gb",
            onClick: function onClick() {
              return changeLocale("en");
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 29
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
          className: "locale-selector__background",
          onClick: function onClick() {
            return setShowSelector(false);
          },
          initial: {
            opacity: 0
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 25
        }, _this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(LocaleSelector, "RxNvNTW6JxMqw6p1dyCCDobH4iI=", false, function () {
  return [i18n_LocaleProvider__WEBPACK_IMPORTED_MODULE_3__["useLocale"], next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = LocaleSelector;
/* harmony default export */ __webpack_exports__["default"] = (LocaleSelector);

var _c;

$RefreshReg$(_c, "LocaleSelector");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGF5b3V0L0xvY2FsZVNlbGVjdG9yL0xvY2FsZVNlbGVjdG9yLnRzeCJdLCJuYW1lcyI6WyJMb2NhbGVTZWxlY3RvciIsIlJlYWN0Iiwic2hvd1NlbGVjdG9yIiwic2V0U2hvd1NlbGVjdG9yIiwiY3VycmVudExvY2FsZSIsInVzZUxvY2FsZSIsInJvdXRlciIsInVzZVJvdXRlciIsImNoYW5nZUxvY2FsZSIsImxvY2FsZSIsInB1c2giLCJhc1BhdGgiLCJyZXBsYWNlIiwib3BhY2l0eSIsImRlbGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsY0FBd0IsR0FBRyxTQUEzQkEsY0FBMkIsR0FBTTtBQUFBOztBQUFBLHdCQUNLQyw4Q0FBQSxDQUFlLEtBQWYsQ0FETDtBQUFBO0FBQUEsTUFDNUJDLFlBRDRCO0FBQUEsTUFDZEMsZUFEYzs7QUFFbkMsTUFBTUMsYUFBYSxHQUFHQyxxRUFBUyxFQUEvQjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFvQjtBQUNyQ0gsVUFBTSxDQUFDSSxJQUFQLENBQVlKLE1BQU0sQ0FBQ0ssTUFBUCxDQUFjQyxPQUFkLFlBQTBCUixhQUExQixjQUErQ0ssTUFBL0MsRUFBWjtBQUNBTixtQkFBZSxDQUFDLEtBQUQsQ0FBZjtBQUNILEdBSEQ7O0FBSUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFRLGVBQVMsRUFBQyxpQkFBbEI7QUFBb0MsYUFBTyxFQUFFO0FBQUEsZUFBTUEsZUFBZSxDQUFDLENBQUNELFlBQUYsQ0FBckI7QUFBQSxPQUE3QztBQUFBLDZCQUNJLHFFQUFDLDZEQUFEO0FBQVksbUJBQVcsRUFBRUUsYUFBYSxLQUFLLElBQWxCLEdBQXlCLElBQXpCLEdBQWdDO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSxxRUFBQyw2REFBRDtBQUFBLGdCQUNLRixZQUFZLGlCQUNUO0FBQUEsZ0NBQ0kscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0ksbUJBQVMsRUFBQywyQkFEZDtBQUVJLGlCQUFPLEVBQUU7QUFBQ1csbUJBQU8sRUFBRTtBQUFWLFdBRmI7QUFHSSxpQkFBTyxFQUFFO0FBQUNBLG1CQUFPLEVBQUU7QUFBVixXQUhiO0FBSUksY0FBSSxFQUFFO0FBQUNBLG1CQUFPLEVBQUU7QUFBVixXQUpWO0FBS0ksb0JBQVUsRUFBRTtBQUNSQyxpQkFBSyxFQUFFO0FBREMsV0FMaEI7QUFBQSxrQ0FTSSxxRUFBQyw2REFBRDtBQUFZLHVCQUFXLEVBQUUsSUFBekI7QUFBK0IsbUJBQU8sRUFBRTtBQUFBLHFCQUFNTixZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEosZUFVSSxxRUFBQyw2REFBRDtBQUFZLHVCQUFXLEVBQUUsSUFBekI7QUFBK0IsbUJBQU8sRUFBRTtBQUFBLHFCQUFNQSxZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBYUkscUVBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQ0ksbUJBQVMsRUFBQyw2QkFEZDtBQUVJLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUwsZUFBZSxDQUFDLEtBQUQsQ0FBckI7QUFBQSxXQUZiO0FBR0ksaUJBQU8sRUFBRTtBQUFDVSxtQkFBTyxFQUFFO0FBQVYsV0FIYjtBQUlJLGlCQUFPLEVBQUU7QUFBQ0EsbUJBQU8sRUFBRTtBQUFWLFdBSmI7QUFLSSxjQUFJLEVBQUU7QUFBQ0EsbUJBQU8sRUFBRTtBQUFWO0FBTFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFiSjtBQUFBO0FBRlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpKO0FBQUEsa0JBREo7QUFnQ0gsQ0F6Q0Q7O0dBQU1iLGM7VUFFb0JLLDZELEVBQ1BFLHFEOzs7S0FIYlAsYztBQTJDU0EsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNjgyMGI3NGFhOGY5ZmQ5OWU3OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSBcImkxOG4vTG9jYWxlUHJvdmlkZXJcIjtcbmltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJ1bG1hLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IENpcmNsZUZsYWcgfSBmcm9tIFwicmVhY3QtY2lyY2xlLWZsYWdzXCI7XG5cbmNvbnN0IExvY2FsZVNlbGVjdG9yOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgICBjb25zdCBbc2hvd1NlbGVjdG9yLCBzZXRTaG93U2VsZWN0b3JdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IGN1cnJlbnRMb2NhbGUgPSB1c2VMb2NhbGUoKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGNoYW5nZUxvY2FsZSA9IChsb2NhbGU6IHN0cmluZykgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaChyb3V0ZXIuYXNQYXRoLnJlcGxhY2UoYC8ke2N1cnJlbnRMb2NhbGV9YCwgYC8ke2xvY2FsZX1gKSk7XG4gICAgICAgIHNldFNob3dTZWxlY3RvcihmYWxzZSk7XG4gICAgfSBcbiAgICByZXR1cm4gKFxuICAgICAgICA8PiAgICAgICBcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibG9jYWxlLXNlbGVjdG9yXCIgb25DbGljaz17KCkgPT4gc2V0U2hvd1NlbGVjdG9yKCFzaG93U2VsZWN0b3IpfT5cbiAgICAgICAgICAgICAgICA8Q2lyY2xlRmxhZyBjb3VudHJ5Q29kZT17Y3VycmVudExvY2FsZSA9PT0gXCJlc1wiID8gXCJlc1wiIDogXCJnYlwifSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIHtzaG93U2VsZWN0b3IgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9jYWxlLXNlbGVjdG9yX19kcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OiAxfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0PXt7b3BhY2l0eTogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogLjNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjbGVGbGFnIGNvdW50cnlDb2RlPXtcImVzXCJ9IG9uQ2xpY2s9eygpID0+IGNoYW5nZUxvY2FsZShcImVzXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjbGVGbGFnIGNvdW50cnlDb2RlPXtcImdiXCJ9IG9uQ2xpY2s9eygpID0+IGNoYW5nZUxvY2FsZShcImVuXCIpfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2NhbGUtc2VsZWN0b3JfX2JhY2tncm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dTZWxlY3RvcihmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD17e29wYWNpdHk6IDB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGU9e3tvcGFjaXR5OiAxfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0PXt7b3BhY2l0eTogMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYWxlU2VsZWN0b3I7XG4iXSwic291cmNlUm9vdCI6IiJ9