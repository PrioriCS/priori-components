"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Label = _interopRequireDefault(require("../components/Label"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Label', () => {
  test('renders with correct props and children', () => {
    var forInput = 'input-id';
    var value = 'Label Value';
    var className = 'custom-class';
    var noTextColor = true;
    var fontSize = 'lg';
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Label.default, {
      forInput: forInput,
      value: value,
      className: className,
      noTextColor: noTextColor,
      fontSize: fontSize
    }));
    var labelElement = getByTestId('label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', forInput);
    expect(labelElement).toHaveClass('text-lg', 'block', 'custom-class');
  });
  test('renders children when value is not provided', () => {
    var forInput = 'input-id';
    var children = 'Label Children';
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Label.default, {
      forInput: forInput,
      noTextColor: true,
      fontSize: "responsiveBase",
      children: children
    }));
    var labelElement = getByTestId('label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', forInput);
    expect(labelElement).toHaveClass('text-sm', 'sm:text-base', 'block');
  });
  test('renders with default text color when noTextColor is false', () => {
    var forInput = 'input-id';
    var value = 'Label Value';
    var noTextColor = true;
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Label.default, {
      forInput: forInput,
      value: value,
      noTextColor: noTextColor
    }));
    var labelElement = getByTestId('label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).not.toHaveClass('text-gray-600');
  });
});