"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _Labeled = _interopRequireDefault(require("../components/Labeled"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Labeled', () => {
  test('renders with correct props', () => {
    var MockComponent = _ref => {
      var {
        name,
        id
      } = _ref;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "text",
        name: name,
        id: id
      });
    };
    var name = 'input-name';
    var label = 'Input Label';
    var className = 'custom-class';
    var testId = 'labeled-component';
    var {
      getByLabelText,
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Labeled.default, {
      component: MockComponent,
      name: name,
      label: label,
      className: className,
      "data-test": testId
    }));
    var labeledComponent = getByTestId(testId);
    expect(labeledComponent).toBeInTheDocument();
    expect(labeledComponent).toHaveClass('flex', 'items-center', className);
    var inputElement = getByLabelText('Input Label');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', name);
    expect(inputElement).toHaveAttribute('id', name);
  });
});