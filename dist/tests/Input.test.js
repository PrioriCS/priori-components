"use strict";

var _react = _interopRequireDefault(require("react"));
var _Input = _interopRequireDefault(require("../components/Input/Input"));
var _globals = require("@jest/globals");
var _reactTestRenderer = require("react-test-renderer");
var _md = require("react-icons/md");
var _prioricomponents = require("prioricomponents");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Input Component', () => {
  var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {
    type: "text",
    error: false,
    className: "",
    isFocused: false,
    value: "teste Input",
    mask: "",
    icon: _md.MdTerrain,
    iconColor: "gray",
    onIconClick: true,
    round: "xs",
    size: "default",
    readOnly: true,
    disabled: true,
    alignLeft: true
  })).toTree();
  (0, _globals.test)('nest 1 Input Component', () => {
    (0, _globals.expect)(component.rendered.type).toBe('div');
  });
  (0, _globals.test)('nest 2 Input Component', () => {
    (0, _globals.expect)(component.rendered.rendered[0].type).toBe('input');
    (0, _globals.expect)(component.rendered.rendered[1].type).toBe('div');
    (0, _globals.expect)(component.rendered.rendered[1].props.className).toBe('absolute top-0 bottom-0 right-0 pr-4 flex items-center');
  });
  (0, _globals.test)('nest 3 Input Component', () => {
    (0, _globals.expect)(component.rendered.rendered[1].rendered[0].type).toBe(_prioricomponents.ButtonWrapper);
  });
  (0, _globals.test)('nest 4 / 5 Input Component', () => {
    (0, _globals.expect)(component.rendered.rendered[1].rendered[0].rendered.type).toBe('button');
    (0, _globals.expect)(component.rendered.rendered[1].rendered[0].rendered.rendered[0].type).toBe(_md.MdTerrain);
  });
});