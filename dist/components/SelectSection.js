"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectSection;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SelectSection(_ref) {
  var {
    children,
    title,
    description = ''
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "w-full space-y-5 relative",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex items-center space-x-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "font-medium text-base",
        children: title
      }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: "-"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-sm",
        children: description.toLowerCase()
      })]
    }), children]
  });
}