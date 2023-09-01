"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Row;
var _react = _interopRequireDefault(require("react"));
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Row(_ref) {
  var {
    space = 'sm',
    children,
    className
  } = _ref;
  var spaces = {
    sm: 'space-x-5'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _tailwindMerge.twMerge)('flex', spaces[space], className),
    children: children
  });
}