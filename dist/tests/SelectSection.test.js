"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _SelectSection = _interopRequireDefault(require("../components/SelectSection"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('SelectSection', () => {
  it('renders with title only', () => {
    var {
      getByText,
      queryByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectSection.default, {
      title: "Section Title"
    }));
    var titleElement = getByText('Section Title');
    var descriptionElement = queryByText('-'); // Should not exist

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeNull();
  });
  it('renders with title and description', () => {
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectSection.default, {
      title: "Section Title",
      description: "Section Description"
    }));
    var titleElement = getByText('Section Title');
    var descriptionElement = getByText('section description');
    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
  it('renders children', () => {
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_SelectSection.default, {
      title: "Section Title",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "Child content"
      })
    }));
    var childElement = getByText('Child content');
    expect(childElement).toBeInTheDocument();
  });
});