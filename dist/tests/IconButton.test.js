"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _md = require("react-icons/md");
var _ = require("..");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('IconButton', () => {
  test('renders the button with correct styles and icon', () => {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_.IconButton, {
      icon: _md.MdArrowForwardIos
    }));
    var button = _react2.screen.getByRole('button');
    var icon = _react2.screen.getByTestId('icon');
    expect(button).toHaveClass('bg-gray-200');
    expect(button).toHaveClass('border');
    expect(button).toHaveClass('border-primary-700');
    expect(button).toHaveClass('rounded-full');
    expect(button).toHaveClass('p-1');
    expect(icon).toHaveClass('text-lg');
  });
  test('invokes the onClick handler when clicked', () => {
    var handleClick = jest.fn();
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_.IconButton, {
      icon: _md.MdArrowForwardIos,
      onClick: handleClick
    }));
    var button = _react2.screen.getByRole('button');
    _react2.fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});