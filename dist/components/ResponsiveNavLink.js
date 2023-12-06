"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ResponsiveNavLink;
var _react = _interopRequireDefault(require("react"));
var _inertiaReact = require("@inertiajs/inertia-react");
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ResponsiveNavLink(_ref) {
  var {
    method = 'get',
    as = 'a',
    href,
    active = false,
    children
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_inertiaReact.Link, {
    method: method,
    as: as,
    href: href,
    className: (0, _tailwindMerge.twMerge)('w-full flex items-start pr-4 py-3 w-60', active ? 'bg-[#e4ebff] text-primary-900' : 'text-gray-700', 'rounded-xl text-base font-medium focus:outline-none transition duration-150 ease-in-out'),
    children: children
  });
}