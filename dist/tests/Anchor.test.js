"use strict";

var _react = _interopRequireDefault(require("react"));
var _globals = require("@jest/globals");
var _reactTestRenderer = require("react-test-renderer");
var _Anchor = _interopRequireDefault(require("../components/Anchor"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Create a AccordionMenu Component', () => {
  (0, _globals.test)('check anchor children', () => {
    const component = (0, _reactTestRenderer.create)( /*#__PURE__*/_react.default.createElement(_Anchor.default, null));
    (0, _globals.expect)(component.toTree().rendered.type).toBe('a');
  });
});