"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dialog;
var _react = _interopRequireDefault(require("react"));
var _md = require("react-icons/md");
var _lodash = require("lodash");
var _tailwindMerge = require("tailwind-merge");
var _ = require("..");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Dialog(_ref) {
  var {
    visible,
    title,
    closeButton = true,
    onClose = _lodash.noop,
    onConfirm = _lodash.noop,
    children,
    buttons = true,
    width = 'md',
    seeingOnly,
    buttonSize = 'md',
    customWidth,
    height,
    center = false,
    withoutTitle = false,
    withouCloseButton = false
  } = _ref;
  function handleSubmit(e) {
    e.preventDefault();
    onConfirm();
    return false;
  }
  var availableWidths = {
    custom: customWidth,
    xs: 'sm:w-auto w-11/12',
    sm: 'xl:w-2/6 sm:w-2/3 w-11/12',
    md: 'sm:w-1/2 w-11/12',
    lg: 'w-2/3',
    full: 'w-11/12',
    responsive: 'w-2/5 2xl:w-2/6',
    responsiveMd: 'w-full sm:w-4/5 xl:w-2/4 2xl:w-2/5',
    responsiveFull: 'w-11/12 xl:w-1/2'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: (0, _tailwindMerge.twMerge)('fixed top-0 z-[100] left-0 bottom:0 right:0 justify-center w-full bg-white-900 backdrop-blur-[3px] min-h-screen drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] shadow-black-900', visible ? 'flex' : 'hidden', height),
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: (0, _tailwindMerge.twMerge)('absolute bg-white xl:p-8 p-3 flex flex-col', availableWidths[width], height, center ? 'top-[50%] -translate-y-[50%] rounded-2xl ' : 'rounded-b-2xl '),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: (0, _tailwindMerge.twMerge)(' justify-between border-b', withoutTitle ? 'hidden' : 'flex'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "sm:text-3xl text-xl font-medium text-primary-900 xl:pb-7 pb-2",
          children: title
        }), closeButton && !withouCloseButton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_.IconButton, {
          bgColor: "white",
          icon: _md.MdOutlineClose,
          onClick: onClose
        })]
      }), seeingOnly ? /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
        className: "block",
        "data-testid": "form",
        onSubmit: handleSubmit,
        children: children
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "block h-full",
        "data-testid": "form",
        onSubmit: handleSubmit,
        children: children
      }), buttons && /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex mt-10 justify-end",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_.Button, {
          size: buttonSize,
          className: "mr-6",
          "data-testid": "closeButton",
          style: "outlined",
          color: "weak",
          responsive: true,
          onClick: () => onClose(),
          children: "Fechar"
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Button, {
          className: "drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] shadow-primary-900",
          "data-testid": "confirmButton",
          onClick: () => onConfirm(),
          responsive: true,
          size: buttonSize,
          children: ["Confirmar ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdArrowForwardIos, {
            className: "ml-2"
          })]
        })]
      })]
    })
  });
}