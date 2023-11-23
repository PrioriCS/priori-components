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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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