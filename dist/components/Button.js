"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;
var _react = _interopRequireDefault(require("react"));
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["type", "className", "loading", "shadow", "color", "size", "disabled", "wide", "border", "icon", "children", "responsive", "onlyIcon"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Button(_ref) {
  var {
      type = 'button',
      className = '',
      loading,
      shadow = '',
      color = '',
      size = 'md',
      disabled,
      wide = false,
      border = 'standard',
      icon: Icon,
      children,
      responsive,
      onlyIcon = false
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  var shadowsAvailable = {
    bottom: 'drop-shadow-[0_5px_6px_rgba(37,99,235,0.3)] shadow-primary-900',
    all: 'drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] shadow-primary-900'
  };
  var borders = {
    square: 'rounded-lg',
    standard: 'rounded-xl',
    circle: 'rounded-full'
  };
  var scale = {
    xs: 'py-1.5',
    sm: 'py-2.5',
    md: 'py-3',
    lg: 'py-3.5'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("button", _objectSpread(_objectSpread({
    type: type,
    className: (0, _tailwindMerge.twMerge)('border flex items-center justify-center transition ease-in-out duration-150 font-medium', responsive ? 'text-sm sm:text-base' : 'text-base', onlyIcon ? 'px-3' : 'px-5', scale[size], color, borders[border], wide ? 'w-full justify-center' : '', className, !disabled && !loading ? shadowsAvailable[shadow] : ''),
    disabled: disabled || loading
  }, rest), {}, {
    children: [children, " ", Icon && /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
      className: "".concat(onlyIcon ? 'mx-1' : 'ml-3', " text-base")
    })]
  }));
}