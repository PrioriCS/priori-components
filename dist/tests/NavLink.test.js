"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var _NavLink = _interopRequireDefault(require("../components/NavLink"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
// NavLink.test.js

describe('NavLink', () => {
  test('should render the children correctly', () => {
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_NavLink.default, {
      href: "/page",
      children: "Click Me!"
    }));
    var linkElement = getByText('Click Me!');
    expect(linkElement).toBeInTheDocument();
  });
  test('should have the correct href attribute', () => {
    var {
      getByRole
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_NavLink.default, {
      href: "/page",
      children: "Link"
    }));
    var linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/page');
  });
  test('should have the "disabled" attribute and be a span when disabled is true', () => {
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_NavLink.default, {
      disabled: true,
      children: "Disabled Link"
    }));
    var linkElement = getByText('Disabled Link');
    expect(linkElement).toHaveClass(' flex items-center font-medium text-base text-primary-900 hover:text-primary-700 cursor-pointer');
    expect(linkElement.tagName.toLowerCase()).toBe('span');
  });
  test('should have the "a" tag when disabled is false', () => {
    var {
      getByRole
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_NavLink.default, {
      href: "/page",
      children: "Clickable Link"
    }));
    var linkElement = getByRole('link');
    expect(linkElement).not.toHaveAttribute('disabled');
    expect(linkElement.tagName.toLowerCase()).toBe('a');
  });
  test('should have the correct class when active is true', () => {
    var {
      getByRole
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_NavLink.default, {
      href: "/page",
      active: true,
      children: "Active Link"
    }));
    var linkElement = getByRole('link');
    expect(linkElement).toHaveClass('rounded-xl');
  });
  test('should have the correct class when hover is false', () => {
    var {
      getByRole
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_NavLink.default, {
      href: "/page",
      hover: false,
      children: "Non-hoverable Link"
    }));
    var linkElement = getByRole('link');
    expect(linkElement).not.toHaveClass('hover:text-primary-700');
  });
});