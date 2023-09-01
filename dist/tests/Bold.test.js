"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Bold = _interopRequireDefault(require("../components/Bold"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Bold', () => {
  it('renders children with font-bold class', () => {
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Bold.default, {
      children: "Hello, world!"
    }));
    var boldElement = getByText('Hello, world!');
    expect(boldElement).toBeInTheDocument();
    expect(boldElement).toHaveClass('font-bold');
  });
});