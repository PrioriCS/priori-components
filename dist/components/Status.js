"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Status;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Status(_ref) {
  var {
    data,
    className = ''
  } = _ref;
  return data ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "".concat(className, " font-medium text-sm text-green-600"),
    children: data
  }) : null;
}