"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _PageButton = _interopRequireDefault(require("../components/PageButton"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('PageButton', () => {
  it('renders with number if no icon provided', () => {
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageButton.default, {
      number: 1
    }));
    expect(getByText('1')).toBeInTheDocument();
  });
  it('renders with icon if provided', () => {
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageButton.default, {
      icon: () => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        "data-testid": "icon"
      })
    }));
    expect(getByTestId('icon')).toBeInTheDocument();
  });
  it('is active and disabled when specified', () => {
    var {
      container
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageButton.default, {
      active: true,
      disabled: true
    }));
    expect(container.firstChild).toHaveClass('bg-primary-100 text-primary-900 opacity-50');
  });
  it('calls the provided function when clicked', () => {
    var onClick = jest.fn();
    var {
      container
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageButton.default, {
      number: 1,
      onClick: onClick
    }));
    var button = container.firstChild;
    _react2.fireEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});