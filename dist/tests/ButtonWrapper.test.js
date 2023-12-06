"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _ButtonWrapper = _interopRequireDefault(require("../components/ButtonWrapper"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('ButtonWrapper', () => {
  it('renders with additional props', () => {
    var {
      container
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonWrapper.default, {
      className: "custom-button"
    }));
    var button = container.querySelector('.custom-button');
    expect(button).toBeInTheDocument();
  });
});