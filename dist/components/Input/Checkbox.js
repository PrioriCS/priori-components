"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Checkbox;
var _react = _interopRequireDefault(require("react"));
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["cursor", "color", "border", "size", "borderColor", "className"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Checkbox(_ref) {
  var {
      cursor = 'cursor-normal',
      color = 'primary900',
      border = 'rounded',
      size = '',
      borderColor = 'default',
      className = ''
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  var textColors = {
    primary600: 'text-primary-600',
    primary900: 'text-primary-900',
    teal600: 'text-teal-600'
  };
  var avaliableBorderColors = {
    default: 'border-gray-300 focus:border-primary-200',
    white: 'border-gray-300 border-2 checked:border-white focus:border-teal-200'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", _objectSpread({
    type: "checkbox",
    className: (0, _tailwindMerge.twMerge)('shadow-sm focus:ring focus:ring-primary-200 focus:ring-opacity-50', border, textColors[color], cursor, size, avaliableBorderColors[borderColor], className)
  }, rest));
}