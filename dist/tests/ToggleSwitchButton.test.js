"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
require("@testing-library/jest-dom/extend-expect");
var _ToggleSwitchButton = _interopRequireDefault(require("../components/ToggleSwitchButton"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('ToggleSwitchButton', () => {
  test('should render the component with default props', () => {
    var {
      container
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToggleSwitchButton.default, {}));
    expect(container).toBeInTheDocument();
  });
  test('should have the inactive state when "active" prop is false', () => {
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToggleSwitchButton.default, {
      active: false
    }));
    var switchButton = getByTestId('toggle-switch');
    expect(switchButton).toHaveClass('w-8 h-4 flex items-center p-1 relative rounded-full');
  });
  test('should have the active state when "active" prop is true', () => {
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToggleSwitchButton.default, {
      active: true
    }));
    var switchButton = getByTestId('toggle-switch');
    expect(switchButton).toHaveClass('w-8 h-4 flex items-center p-1 relative rounded-full');
  });
  test('should call the onClick event handler when clicked', () => {
    var onClickMock = jest.fn();
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToggleSwitchButton.default, {
      active: false,
      onClick: onClickMock
    }));
    var switchButton = getByTestId('toggle-switch');
    _react2.fireEvent.click(switchButton);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});