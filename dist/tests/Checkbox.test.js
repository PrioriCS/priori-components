"use strict";

var _react = require("@testing-library/react");
var _Checkbox = _interopRequireDefault(require("../components/Input/Checkbox"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Checkbox', () => {
  it('should pass additional props to the checkbox element', () => {
    var checkbox = (0, _react.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
      id: "my-checkbox",
      name: "my-checkbox"
    }));
    expect(checkbox.container.querySelector('input')).toHaveAttribute('id', 'my-checkbox');
    expect(checkbox.container.querySelector('input')).toHaveAttribute('name', 'my-checkbox');
  });
});