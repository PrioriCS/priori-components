"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProgressBar;
var _react = _interopRequireDefault(require("react"));
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ProgressBar(_ref) {
  var {
    percentage = '',
    complement = '',
    small = false,
    wide = false
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _tailwindMerge.twMerge)(small ? 'p-1' : 'p-2', 'bg-white my-3 mr-5 rounded-full border border-primary-100', wide ? 'w-full' : ''),
    "data-testid": "progress-bar",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _tailwindMerge.twMerge)(small ? 'py-3.5' : 'py-4', 'bg-primary-100 rounded-full relative flex justify-center'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: (0, _tailwindMerge.twMerge)(small ? 'py-3.5' : 'py-4', 'top-0 left-0 bg-primary-900 rounded-full text-white absolute transition-all duration-700'),
        style: {
          width: percentage + '%'
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "text-primary-400 z-10 absolute top-1/2 translate-y-[-50%] text-sm",
        children: [percentage, "% ", complement]
      })]
    })
  });
}