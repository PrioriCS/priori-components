"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = HelpItem;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function HelpItem(_ref) {
  var {
    icon: Icon,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("li", {
    className: "flex items-center",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border-2 border-primary-900 rounded-full flex items-center p-2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
        className: "text-lg"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "ml-4 text-sm",
      children: children
    })]
  });
}