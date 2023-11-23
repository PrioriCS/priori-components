"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = InputSelect;
var _lodash = require("lodash");
var _react = _interopRequireDefault(require("react"));
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function InputSelect(_ref) {
  var {
    value,
    key,
    disabled,
    center,
    onChange,
    options
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("select", {
    value: (0, _lodash.isNil)(value) ? '' : value,
    disabled: disabled,
    className: (0, _tailwindMerge.twMerge)('py-4 w-full border-none text-sm', center ? 'text-center' : '', disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : ''),
    onChange: onChange,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
      value: "",
      disabled: true,
      children: "Selecionar"
    }), options.map(option => /*#__PURE__*/(0, _jsxRuntime.jsx)("option", {
      value: option.id,
      children: option.name
    }, option.id))]
  }, key);
}