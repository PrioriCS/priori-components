"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LoadingSpinner;
var _react = _interopRequireDefault(require("react"));
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function LoadingSpinner(_ref) {
  var {
    message,
    row = false,
    size = 'default',
    fontSize = 'base'
  } = _ref;
  var availableSizes = {
    sm: 'w-5 h-5',
    default: 'w-10 h-10'
  };
  var availableFontSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    role: "status",
    className: (0, _tailwindMerge.twMerge)('flex items-center justify-center', row ? 'flex-row space-x-2' : 'flex-col space-y-2'),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      "aria-hidden": "true",
      className: (0, _tailwindMerge.twMerge)('mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-primary-500', availableSizes[size]),
      viewBox: "0 0 100 101",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
        fill: "currentFill"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: (0, _tailwindMerge.twMerge)('text-gray-600 font-medium', availableFontSizes[fontSize]),
      children: message
    })]
  });
}