"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _globals = require("@jest/globals");
var _reactTestRenderer = require("react-test-renderer");
var _Panel = _interopRequireDefault(require("../components/Panel"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
describe('Create Panel Test', () => {
  var availableBorderColors = {
    none: 'border-none',
    sm: 'border-gray-200',
    md: 'border-gray-300',
    xl: 'border-primary-200'
  };
  var availableBorderRadius = {
    sm: 'rounded-xl',
    rightXl: 'rounded-r-xl'
  };
  var availableBackgroundColors = {
    white: 'bg-white',
    primary: 'bg-primary-50'
  };
  Object.keys(availableBackgroundColors).forEach(bgkey => {
    Object.keys(availableBorderColors).forEach(bckey => {
      Object.keys(availableBorderRadius).forEach(brkey => {
        var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.default, {
          backgroundColor: bgkey,
          borderColor: bckey,
          radius: brkey
        })).toTree();
        (0, _globals.test)('Panel', () => {
          (0, _globals.expect)(component.type).toBe(_Panel.default);
        });
        (0, _globals.test)('Panel Props', () => {
          var props = {
            radius: brkey,
            backgroundColor: bgkey,
            borderColor: bckey
          };
          (0, _globals.expect)(component.props).toEqual(props);
        });
        (0, _globals.test)('Nested 1', () => {
          (0, _globals.expect)(component.rendered.type).toBe('div');
        });
      });
    });
  });
  var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.default, {
    noPadding: true,
    noShadow: true
  })).toTree();
  (0, _globals.test)('Panel', () => {
    (0, _globals.expect)(component.type).toBe(_Panel.default);
  });
  (0, _globals.test)('Panel Props', () => {
    var props = {
      noPadding: true,
      noShadow: true
    };
    (0, _globals.expect)(component.props).toEqual(props);
  });
  (0, _globals.test)('Default className Values', () => {
    var {
      container
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.default, {}));
    (0, _globals.expect)(container.firstChild).toHaveClass('p-8', 'bg-white', 'rounded-xl', 'xl:border', 'border-gray-200', 'xl:shadow-[0_0_50px_-22px_rgba(30,64,175,0.15)] shadow-gray-400');
  });
  (0, _globals.test)('Adding No Padding and No Shadow', () => {
    var {
      container
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Panel.default, {
      noPadding: true,
      noShadow: true
    }));
    (0, _globals.expect)(container.firstChild).not.toHaveClass('p-8', 'xl:shadow-[0_0_50px_-22px_rgba(30,64,175,0.15)] shadow-gray-400');
    (0, _globals.expect)(container.firstChild).toHaveClass('bg-white', 'rounded-xl', 'xl:border', 'border-gray-200');
  });
});