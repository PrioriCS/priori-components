"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RequiredAlert;
var _react = _interopRequireDefault(require("react"));
var _md = require("react-icons/md");
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function RequiredAlert(_ref) {
  var {
    alert,
    setAlert,
    message,
    error = false
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "absolute right-5 cursor-help",
    children: alert ? /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _tailwindMerge.twMerge)('flex items-center bg-white py-2.5 px-4 rounded-xl text-xs border', error ? 'border-red-500' : 'border-yellow-400'),
      onMouseLeave: () => setAlert(previousState => !previousState),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          className: "font-medium text-gray-700",
          children: error ? 'Erro:' : 'Aviso:'
        }), " ", message]
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: (0, _tailwindMerge.twMerge)(error ? 'text-red-500' : 'text-yellow-400', 'text-2xl flex items-center'),
      onMouseEnter: () => setAlert(previousState => !previousState),
      children: error ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdError, {}) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdAnnouncement, {})
    })
  });
}