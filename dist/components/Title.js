"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Title;
var _react = _interopRequireDefault(require("react"));
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Title(_ref) {
  var {
    color = 'primary',
    size = 'xl',
    weight = 'light',
    className = '',
    children
  } = _ref;
  var availableSizes = {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-3xl'
  };
  var availableWeights = {
    thin: 'font-thin',
    extraLight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semiBold: 'font-semibold',
    bold: 'font-bold',
    extraBold: 'font-extrabold',
    black: 'font-black'
  };
  var colors = {
    primary: 'text-primary-900',
    red: 'text-red-600'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
    className: (0, _tailwindMerge.twMerge)(colors[color], availableSizes[size], availableWeights[weight], className),
    children: children
  });
}