"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconButton;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["icon", "small", "base", "className", "bgColor", "borderColor", "radius"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function IconButton(_ref) {
  var {
      icon: Icon,
      small,
      base,
      className = '',
      bgColor = 'grayWeak',
      borderColor = 'primaryStrong',
      radius = 'full'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  var availableBackgroundColors = {
    grayWeak: 'bg-gray-200 text-gray-500',
    white: 'bg-white text-primary-700 hover:bg-primary-700 hover:text-white transition-all hover:transition-all delay-100'
  };
  var avaliableBordersColors = {
    primaryStrong: 'border border-primary-700',
    none: 'border-none'
  };
  var availableBordersRadius = {
    rounded: 'rounded',
    full: 'rounded-full'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", _objectSpread(_objectSpread({
    type: "button",
    className: "".concat(availableBackgroundColors[bgColor], " ").concat(avaliableBordersColors[borderColor], " ").concat(className, " ").concat(availableBordersRadius[radius], " p-1 h-fit")
  }, rest), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
      className: "".concat(small ? 'text-sm' : base ? 'text-base' : 'text-lg'),
      "data-testid": "icon"
    })
  }));
}