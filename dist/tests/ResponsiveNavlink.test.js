"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _ResponsiveNavLink = _interopRequireDefault(require("../components/ResponsiveNavLink"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
test('renders a link with provided href', () => {
  var {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ResponsiveNavLink.default, {
    href: "/example",
    children: "Example Link"
  }));
  var linkElement = getByText('Example Link');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.tagName).toBe('A');
  expect(linkElement).toHaveAttribute('href', '/example');
});
test('applies active styles when active prop is true', () => {
  var {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ResponsiveNavLink.default, {
    href: "/example",
    active: true,
    children: "Active Link"
  }));
  var linkElement = getByText('Active Link');
  expect(linkElement).toHaveClass('bg-[#e4ebff] text-primary-900');
});
test('applies default styles when active prop is false', () => {
  var {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ResponsiveNavLink.default, {
    href: "/example",
    active: false,
    children: "Inactive Link"
  }));
  var linkElement = getByText('Inactive Link');
  expect(linkElement).toHaveClass('text-gray-700');
});