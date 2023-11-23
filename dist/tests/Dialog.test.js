"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Dialog = _interopRequireDefault(require("../components/Dialog"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Dialog', () => {
  it('renders correctly', () => {
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dialog.default, {
      visible: true,
      title: "Test Dialog",
      onClose: () => {},
      onConfirm: () => {}
    }));
    var titleElement = getByText('Test Dialog');
    expect(titleElement).toBeInTheDocument();
  });
  it('calls onClose when close button is clicked', () => {
    var onClose = jest.fn();
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dialog.default, {
      visible: true,
      title: "Test Dialog",
      onClose: onClose,
      onConfirm: () => {}
    }));
    var closeButton = getByTestId('closeButton');
    _react2.fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
  it('calls onConfirm when confirm button is clicked', () => {
    var onConfirm = jest.fn();
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dialog.default, {
      visible: true,
      title: "Test Dialog",
      onClose: () => {},
      onConfirm: onConfirm
    }));
    var confirmButton = getByTestId('confirmButton');
    _react2.fireEvent.click(confirmButton);
    expect(onConfirm).toHaveBeenCalled();
  });
});