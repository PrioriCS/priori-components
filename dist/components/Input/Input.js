"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _lodash = require("lodash");
var _prioricomponents = require("prioricomponents");
var _react = _interopRequireDefault(require("react"));
var _reactInputMask = _interopRequireDefault(require("react-input-mask"));
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["type", "error", "className", "isFocused", "value", "mask", "maskchar", "icon", "iconColor", "onIconClick", "round", "size", "readOnly", "disabled", "alignLeft", "forwardedRef", "uppercase"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function Input(_ref) {
  var {
      type = 'text',
      error = false,
      className = '',
      isFocused = false,
      value = '',
      mask = '',
      maskchar = '_',
      icon: Icon,
      iconColor = 'gray',
      onIconClick,
      round = 'xs',
      size = 'default',
      readOnly,
      disabled,
      alignLeft,
      forwardedRef,
      uppercase = false
    } = _ref,
    rest = _objectWithoutProperties(_ref, _excluded);
  var InputComponent = (0, _lodash.isEmpty)(mask) ? 'input' : _reactInputMask.default;
  var IconWrapper = onIconClick ? _prioricomponents.ButtonWrapper : 'div';
  var inputRef = _react.default.useRef(null);
  var availableIconColors = {
    gray: 'text-gray-300',
    primary: 'text-primary-600'
  };
  var radius = {
    none: 'rounded-none',
    xs: 'rounded',
    sm: 'rounded-md',
    md: 'rounded-xl',
    lg: 'rounded-full'
  };
  var sizes = {
    xs: 'px-3 py-0.5',
    sm: 'px-3 py-1.5',
    md: 'px-3 py-2',
    default: 'p-3'
  };
  var inputProps = _objectSpread({
    disabled: readOnly || disabled,
    readOnly: readOnly,
    type: type,
    value: uppercase ? value.toUpperCase() : value,
    autoFocus: isFocused,
    className: "\n      ".concat(Icon ? 'pr-10 truncate' : '', "\n      ").concat(sizes[size], " border-gray-300 ").concat(radius[round], " shadow-sm \n      ").concat(error ? 'border-red-600 ring ring-red-400 ring-opacity-50 focus:border-red-600 focus:ring focus:ring-red-400 focus:ring-opacity-50' : 'focus:border-primary-700 focus:ring focus:ring-primary-300 focus:ring-opacity-50 ', "\n      ").concat(readOnly || disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : '', "\n      ").concat(className, "\n    "),
    ref: inputRef
  }, rest);
  if (InputComponent === _reactInputMask.default) {
    inputProps.mask = (0, _lodash.isEmpty)(value) ? '' : mask;
    inputProps.maskChar = maskchar;
  }
  _react.default.useImperativeHandle(forwardedRef, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _tailwindMerge.twMerge)('flex flex-1 flex-col relative', disabled ? 'cursor-not-allowed' : '', alignLeft ? 'items-start' : 'items-center'),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(InputComponent, _objectSpread({}, inputProps)), Icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "absolute top-0 bottom-0 right-0 pr-4 flex items-center",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(IconWrapper, {
        onClick: onIconClick,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
          className: (0, _tailwindMerge.twMerge)('sm:w-6 h-6', onIconClick ? 'text-primary-500' : availableIconColors[iconColor])
        })
      })
    })]
  });
}
var _default = /*#__PURE__*/_react.default.forwardRef((props, ref) => /*#__PURE__*/(0, _jsxRuntime.jsx)(Input, _objectSpread(_objectSpread({}, props), {}, {
  forwardedRef: ref
})));
exports.default = _default;