"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _HelpItem = _interopRequireDefault(require("../components/HelpItem"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
test('Renders HelpItem components correctly', () => {
  var {
    getByTestId,
    getByText
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_HelpItem.default, {
    icon: () => /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "icon"
    }),
    children: "Conte\xFAdo de exemplo"
  }));
  var icon = getByTestId('icon');
  expect(icon).toBeInTheDocument();
  var content = getByText('Conteúdo de exemplo');
  expect(content).toBeInTheDocument();
});