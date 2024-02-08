"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Panel;
var _react = _interopRequireDefault(require("react"));
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["noPadding", "className", "noShadow", "borderColor", "backgroundColor", "radius"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Panel(_ref) {
  var {
      noPadding,
      className = '',
      noShadow,
      borderColor = 'sm',
      backgroundColor = 'white',
      radius = 'sm'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  var availableBorderColors = {
    none: 'border-none',
    sm: 'border-gray-200',
    md: 'border-gray-300',
    xl: 'border-primary-200',
    amber: 'border-amber-600',
    green: 'border-green-800',
    red: 'border-red-700',
    black: 'border-black'
  };
  var availableBorderRadius = {
    sm: 'rounded-xl',
    rightXl: 'rounded-r-xl'
  };
  var availableBackgroundColors = {
    white: 'bg-white',
    primary: 'bg-primary-50'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", _objectSpread({
    className: (0, _tailwindMerge.twMerge)(noPadding ? '' : 'p-8', availableBackgroundColors[backgroundColor], availableBorderRadius[radius], 'xl:border', availableBorderColors[borderColor], noShadow ? '' : 'xl:shadow-[0_0_50px_-22px_rgba(30,64,175,0.15)] shadow-gray-400', className)
  }, rest));
}