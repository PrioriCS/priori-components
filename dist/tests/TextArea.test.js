"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _TextArea = _interopRequireDefault(require("../components/TextArea"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('TextArea', () => {
  it('renders a textarea element', () => {
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextArea.default, {}));
    var textarea = getByTestId('textarea-test');
    expect(textarea).toBeInTheDocument();
  });
  it('applies the wide class when wide prop is true', () => {
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextArea.default, {
      wide: true
    }));
    var textarea = getByTestId('textarea-test');
    expect(textarea).toHaveClass('w-full');
  });
  it('applies the readonly and disabled attributes when readOnly or disabled props are true', () => {
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextArea.default, {
      readOnly: true,
      disabled: true
    }));
    var textarea = getByTestId('textarea-test');
    expect(textarea).toHaveAttribute('readonly');
    expect(textarea).toHaveAttribute('disabled');
  });
  it('applies the appropriate CSS classes when readOnly or disabled props are true', () => {
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextArea.default, {
      readOnly: true,
      disabled: true
    }));
    var textarea = getByTestId('textarea-test');
    expect(textarea).toHaveClass('bg-gray-50 text-gray-400');
  });
  it('calls the provided function when changed', () => {
    var onChange = jest.fn();
    var {
      getByTestId
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_TextArea.default, {
      onChange: onChange
    }));
    var textarea = getByTestId('textarea-test');
    _react2.fireEvent.change(textarea, {
      target: {
        value: 'Test text'
      }
    });
    expect(onChange).toHaveBeenCalled();
  });
});