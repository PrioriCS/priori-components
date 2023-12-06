"use strict";

var _react = _interopRequireDefault(require("react"));
var _globals = require("@jest/globals");
var _reactTestRenderer = require("react-test-renderer");
var _RequiredAlert = _interopRequireDefault(require("../components/RequiredAlert"));
var _md = require("react-icons/md");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var message = 'Alert test';
describe('RequiredAlert Component with Alert', () => {
  var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredAlert.default, {
    alert: true,
    message: message
  })).toTree();
  (0, _globals.test)('render RequiredAlert', () => {
    (0, _globals.expect)(component.type).toBe(_RequiredAlert.default);
  });
  (0, _globals.test)('nest 1 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.type).toBe('div');
    (0, _globals.expect)(component.rendered.props.className).toBe('absolute right-5 cursor-help');
  });
  (0, _globals.test)('nest 2 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].type).toBe('div');
    (0, _globals.expect)(component.rendered.rendered[0].props.className).toBe('flex items-center bg-white py-2.5 px-4 rounded-xl text-xs border border-yellow-400');
    (0, _globals.expect)(component.rendered.rendered[0].props.onMouseLeave).toStrictEqual(_globals.expect.any(Function));
  });
  (0, _globals.test)('nest 3 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].type).toBe('span');
  });
  (0, _globals.test)('nest 4 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].rendered[0].type).toBe('span');
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].rendered[0].props.className).toBe('font-medium text-gray-700');
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].rendered[1]).toBe(' ');
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].rendered[2]).toBe('Alert test');
  });
  (0, _globals.test)('nest 5 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].rendered[0].rendered[0]).toBe('Aviso:');
  });
});
describe('RequiredAlert Component with Alert with Error', () => {
  var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredAlert.default, {
    error: true,
    alert: true,
    message: message
  })).toTree();
  (0, _globals.test)('render RequiredAlert', () => {
    (0, _globals.expect)(component.type).toBe(_RequiredAlert.default);
  });
  (0, _globals.test)('nest 1 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.type).toBe('div');
    (0, _globals.expect)(component.rendered.props.className).toBe('absolute right-5 cursor-help');
  });
  (0, _globals.test)('nest 2 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].type).toBe('div');
    (0, _globals.expect)(component.rendered.rendered[0].props.className).toBe('flex items-center bg-white py-2.5 px-4 rounded-xl text-xs border border-red-500');
    (0, _globals.expect)(component.rendered.rendered[0].props.onMouseLeave).toStrictEqual(_globals.expect.any(Function));
  });
  (0, _globals.test)('nest 3 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].type).toBe('span');
  });
  (0, _globals.test)('nest 4 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].rendered[0].type).toBe('span');
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].rendered[0].props.className).toBe('font-medium text-gray-700');
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].rendered[1]).toBe(' ');
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].rendered[2]).toBe('Alert test');
  });
  (0, _globals.test)('nest 5 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].rendered[0].rendered[0]).toBe('Erro:');
  });
});
describe('RequiredAlert Component without Alert', () => {
  var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredAlert.default, {
    message: message
  })).toTree();
  (0, _globals.test)('render RequiredAlert', () => {
    (0, _globals.expect)(component.type).toBe(_RequiredAlert.default);
  });
  (0, _globals.test)('nest 1 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.type).toBe('div');
    (0, _globals.expect)(component.rendered.props.className).toBe('absolute right-5 cursor-help');
  });
  (0, _globals.test)('nest 2 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].type).toBe('div');
    (0, _globals.expect)(component.rendered.rendered[0].props.className).toBe('text-yellow-400 text-2xl flex items-center');
    (0, _globals.expect)(component.rendered.rendered[0].props.onMouseEnter).toStrictEqual(_globals.expect.any(Function));
  });
  (0, _globals.test)('nest 3 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].type).toBe(_md.MdAnnouncement);
  });
});
describe('RequiredAlert Component without Alert with Error', () => {
  var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_RequiredAlert.default, {
    error: true,
    message: message
  })).toTree();
  (0, _globals.test)('render RequiredAlert', () => {
    (0, _globals.expect)(component.type).toBe(_RequiredAlert.default);
  });
  (0, _globals.test)('nest 1 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.type).toBe('div');
    (0, _globals.expect)(component.rendered.props.className).toBe('absolute right-5 cursor-help');
  });
  (0, _globals.test)('nest 2 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].type).toBe('div');
    (0, _globals.expect)(component.rendered.rendered[0].props.className).toBe('text-red-500 text-2xl flex items-center');
    (0, _globals.expect)(component.rendered.rendered[0].props.onMouseEnter).toStrictEqual(_globals.expect.any(Function));
  });
  (0, _globals.test)('nest 3 RequiredAlert', () => {
    (0, _globals.expect)(component.rendered.rendered[0].rendered[0].type).toBe(_md.MdError);
  });
});