"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Label;
var _react = _interopRequireDefault(require("react"));
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Label(_ref) {
  var {
    forInput,
    value,
    className = '',
    children,
    noTextColor,
    fontSize = 'sm'
  } = _ref;
  var availableFontSizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    responsiveBase: 'text-sm sm:text-base',
    responsiveXL: 'text-base sm:text-xl'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("label", {
    htmlFor: forInput,
    className: (0, _tailwindMerge.twMerge)('block', availableFontSizes[fontSize], noTextColor ? '' : 'text-gray-600', className),
    "data-testid": "label",
    children: value ? value : children
  });
}