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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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