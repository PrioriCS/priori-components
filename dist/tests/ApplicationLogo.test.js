"use strict";

var _react = _interopRequireDefault(require("react"));
var _ApplicationLogo = _interopRequireDefault(require("../components/ApplicationLogo"));
var _globals = require("@jest/globals");
var _reactTestRenderer = require("react-test-renderer");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Create a Logo Component', () => {
  (0, _globals.test)('check logo type', () => {
    var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ApplicationLogo.default, {}));
    (0, _globals.expect)(component.toTree().rendered.type).toBe('img');
  });
  (0, _globals.test)('check logos', () => {
    var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ApplicationLogo.default, {
      logo: "primary"
    })).toTree();
    var component2 = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ApplicationLogo.default, {
      logo: "secondary"
    })).toTree();
    var component3 = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_ApplicationLogo.default, {
      logo: ""
    })).toTree();
    (0, _globals.expect)(component.rendered.props.src).toBeDefined();
    (0, _globals.expect)(component2.rendered.props.src).toBeDefined();
    (0, _globals.expect)(component3.rendered.props.src).toBeUndefined();
  });
});