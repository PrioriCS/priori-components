"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Row = _interopRequireDefault(require("../components/Row"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Row Test', () => {
  test('Render Row Empty', () => {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Row.default, {}));
    var statusElement = _react2.screen.queryByText(/.+/);
    expect(statusElement).toBeNull();
  });
});