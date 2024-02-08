"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = IconButton;
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["icon", "small", "base", "className", "bgColor", "borderColor", "radius"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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