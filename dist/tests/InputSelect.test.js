"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _InputSelect = _interopRequireDefault(require("../components/Input/InputSelect"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
test('renders InputSelect component', () => {
  var options = [{
    id: 1,
    name: 'Option 1'
  }, {
    id: 2,
    name: 'Option 2'
  }];
  var {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect.default, {
    value: 1,
    onChange: () => {},
    options: options
  }));
  options.forEach(option => {
    expect(getByText(option.name)).toBeInTheDocument();
  });
  expect(getByText('Selecionar')).toBeInTheDocument();
});
test('calls onChange when an option is selected', () => {
  var options = [{
    id: 1,
    name: 'Option 1'
  }, {
    id: 2,
    name: 'Option 2'
  }];
  var onChangeMock = jest.fn();
  var {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect.default, {
    value: 1,
    onChange: onChangeMock,
    options: options
  }));
  _react2.fireEvent.change(getByText('Option 2'));
});