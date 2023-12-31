"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NavLink;
var _react = _interopRequireDefault(require("react"));
var _inertiaReact = require("@inertiajs/inertia-react");
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["href", "active", "children", "autoAling", "className", "padding", "fontSize", "rounded", "hover", "disabled", "textColor", "hoverColor", "clientSide", "bgColor"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function NavLink(_ref) {
  var {
      href,
      active,
      children,
      autoAling = true,
      className = '',
      padding = '',
      fontSize = 'base',
      rounded = true,
      hover = true,
      disabled,
      textColor = 'primaryStrong',
      hoverColor = 'primaryStrong',
      clientSide = false,
      bgColor = 'default'
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  var availableSizes = {
    base: 'text-base',
    md: 'text-lg',
    lg: 'text-xl xl:text-2xl',
    exl: 'text-2xl xl:text-3xl'
  };
  var availableBackgroundColors = {
    default: 'bg-[#e4ebff]',
    white: 'bg-white'
  };
  var activeClassName = "\n    transition duration-150 ease-in-out ".concat(availableBackgroundColors[bgColor], " text-primary-900\n    ").concat(rounded ? clientSide ? 'rounded-l-2xl' : 'rounded-xl' : 'rounded-none', "\n  ");
  var availableHoverColors = {
    primaryWeak: 'hover:text-primary-400',
    primaryStrong: 'hover:text-primary-700'
  };
  var inactiveClassName = "\n    ".concat(hover ? "".concat(availableHoverColors[hoverColor], " cursor-pointer") : 'hover:text-primary-900 cursor-default', "\n  ");
  var availableTextColors = {
    primaryWeak: 'text-primary-400',
    primaryStrong: 'text-primary-900'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_inertiaReact.Link, _objectSpread(_objectSpread({
    href: disabled ? undefined : href,
    disabled: disabled,
    as: disabled ? 'span' : 'a',
    className: (0, _tailwindMerge.twMerge)('flex', autoAling ? 'items-center' : '', 'font-medium', availableSizes[fontSize], padding, disabled ? 'text-gray-400' : '', availableTextColors[textColor], active ? activeClassName : inactiveClassName, className)
  }, rest), {}, {
    children: children
  }));
}