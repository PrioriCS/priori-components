"use strict";

var _react = _interopRequireDefault(require("react"));
var _globals = require("@jest/globals");
var _reactTestRenderer = require("react-test-renderer");
var _Anchor = _interopRequireDefault(require("../components/Anchor"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//Melhorar teste
describe('Create a AccordionMenu Component', () => {
  (0, _globals.test)('check anchor children', () => {
    var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Anchor.default, {}));
    (0, _globals.expect)(component.toTree().rendered.type).toBe('a');
  });
});