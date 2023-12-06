"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ApplicationLogo;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ApplicationLogo(_ref) {
  var {
    className = '',
    logo = '',
    size = 'sm:w-36 h-36'
  } = _ref;
  var availableLogos = {
    primary: '/images/newlog-logo-white.png',
    secondary: '/images/newlog-logo.png'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
    src: availableLogos[logo],
    className: "".concat(size, " object-contain ").concat(className)
  });
}