"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _LoadingSpinner = _interopRequireDefault(require("../components/LoadingSpinner"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('LoadingSpinner Component', () => {
  test('renders with default props', () => {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingSpinner.default, {
      message: "Loading..."
    }));
    var spinner = _react2.screen.getByRole('status');
    var message = _react2.screen.getByText('Loading...');
    expect(spinner).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(spinner).toHaveClass('flex');
    expect(spinner).toHaveClass('items-center');
    expect(spinner).toHaveClass('justify-center');
    expect(spinner).toHaveClass('flex-col');
    expect(spinner).toHaveClass('space-y-2');
    expect(message).toHaveClass('text-gray-600');
    expect(message).toHaveClass('font-medium');
    expect(message).toHaveClass('text-base');
  });
  test('renders with custom props', () => {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LoadingSpinner.default, {
      message: "Custom Loading Message",
      row: true,
      size: "sm",
      fontSize: "sm"
    }));
    var spinner = _react2.screen.getByRole('status');
    var message = _react2.screen.getByText('Custom Loading Message');
    expect(spinner).toBeInTheDocument();
    expect(message).toBeInTheDocument();
    expect(spinner).toHaveClass('flex');
    expect(spinner).toHaveClass('items-center');
    expect(spinner).toHaveClass('justify-center');
    expect(spinner).toHaveClass('flex-row');
    expect(spinner).toHaveClass('space-x-2');
    expect(message).toHaveClass('text-gray-600');
    expect(message).toHaveClass('font-medium');
    expect(message).toHaveClass('text-sm');
  });
});