"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var _ProgressBarValue = _interopRequireDefault(require("../components/ProgressBarValue"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('ProgressBarValue Component', () => {
  it('should render the ProgressBarValue component without any errors', () => {
    var percentage = 50;
    var complement = '100';
    var value = '50';
    var small = true;
    var wide = false;
    var {
      getByText,
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProgressBarValue.default, {
      percentage: percentage,
      complement: complement,
      value: value,
      small: small,
      wide: wide
    }));
    var progressBarValue = getByTestId('progress-bar-value');
    var progressBarFill = getByTestId('progress-bar-fill');
    var progressBarText = getByText("vendido ".concat(value, " de ").concat(complement));
    expect(progressBarValue).toHaveClass(small ? 'p-1' : 'p-2 bg-white my-3 mr-5 rounded-full border border-primary-100');
    expect(progressBarFill).toHaveStyle({
      width: "".concat(percentage, "%")
    });
    expect(progressBarText).toBeInTheDocument();
  });
});