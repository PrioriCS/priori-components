"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _ProgressBarPercentage = _interopRequireDefault(require("../components/ProgressBarPercentage"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('ProgressBarPercentage Test', () => {
  test('Render Empty ProgressBarPercentage', () => {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressBarPercentage.default, {}));
    var progressBar = _react2.screen.getByTestId('progress-bar');
    expect(progressBar).toBeInTheDocument();
  });
  test('Render ProgressBarPercentage with Components', () => {
    var percentage = 60;
    var complement = 'Complete';
    var small = true;
    var wide = false;
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressBarPercentage.default, {
      percentage: percentage,
      complement: complement,
      small: small,
      wide: wide
    }));
  });
  test('ProgressBar Percentage Receiving CSS classes', () => {
    (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressBarPercentage.default, {}));
    var progressBar = _react2.screen.getByTestId('progress-bar');
    expect(progressBar).toHaveClass('p-2 bg-white my-3 mr-5 rounded-full border border-primary-100');
    expect(progressBar).not.toHaveClass('p-1');
  });
});