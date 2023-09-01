"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Status = _interopRequireDefault(require("../components/Status"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Status Test', () => {
  test('Render empty status', () => {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Status.default, {}));
    var statusElement = _react2.screen.queryByText(/.+/);
    expect(statusElement).toBeNull();
  });
  test('Render status with data', () => {
    var data = 'Active';
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Status.default, {
      data: data
    }));
    var statusElement = _react2.screen.getByText(data);
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveClass('font-medium');
    expect(statusElement).toHaveClass('text-sm');
    expect(statusElement).toHaveClass('text-green-600');
  });
});