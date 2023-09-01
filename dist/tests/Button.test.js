"use strict";

var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("../components/Button"));
var _globals = require("@jest/globals");
var _reactTestRenderer = require("react-test-renderer");
var _md = require("react-icons/md");
var _tailwindMerge = require("tailwind-merge");
var _react2 = require("@testing-library/react");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var colors = {
  contained: {
    strong: 'bg-primary-900 text-white active:bg-primary-1000 border-none',
    normal: 'bg-primary-700 text-white active:bg-primary-800 border-none',
    weak: 'bg-primary-400 text-white active:bg-primary-500 border-none',
    disabled: 'bg-gray-100 text-gray-300 border-none',
    danger: 'bg-red-600 text-white active:bg-red-700 border-none',
    teal: 'bg-teal-600 text-white active:bg-teal-700  border-none',
    cyan: 'bg-cyan-600 text-white active:bg-cyan-600 border-none',
    indigo: 'bg-indigo-600 text-white active:bg-indigo-700 border-none',
    purple: 'bg-purple-600 text-white active:bg-purple-800 border-none',
    orange: 'bg-orange-600 text-white active:bg-orange-800 border-none'
  },
  outlined: {
    strong: 'bg-primary-100 text-primary-700 active:bg-primary-200 border border-primary-700',
    normal: 'bg-gray-100 text-primary-900 active:bg-gray-200 border border-primary-900',
    weak: 'bg-white text-primary-900 active:bg-gray-50 border border-primary-900',
    transparent: 'bg-transparent text-primary-700 active:bg-primary-100 border border-primary-700',
    disabled: 'bg-white text-gray-300',
    danger: 'bg-white text-red-600 active:bg-gray-50 border border-red-600',
    teal: 'bg-orange-50 text-orange-500 active:bg-orange-100 border border-orange-500',
    purple: 'bg-purple-50 text-purple-600 active:bg-purple-100 border border-purple-600',
    slate: 'bg-slate-100 text-slate-400 active:bg-slate-200 border border-slate-400',
    red: 'bg-red-50 text-red-600 active:bg-red-100 border border-red-600',
    green: 'bg-green-50 text-green-600 active:bg-green-100 border border-green-600',
    gray: 'bg-white text-gray-700 border border-gray-300'
  },
  plain: {
    strongest: 'bg-primary-700 text-white active:bg-primary-800 border-none',
    strong: 'bg-primary-100 text-primary-700 active:bg-primary-200 border-none',
    normal: 'bg-gray-200 text-primary-800 active:bg-gray-300 border-none',
    weak: 'bg-white text-primary-900 active:bg-gray-50 border-none',
    danger: 'bg-white text-red-600 active:bg-gray-50 border-none',
    disabled: 'bg-gray-100 text-gray-300 border-none',
    alternative: 'border-none'
  }
};
var shadowsAvailable = {
  bottom: 'drop-shadow-[0_5px_6px_rgba(37,99,235,0.3)] shadow-primary-900',
  all: 'drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] shadow-primary-900'
};
var borders = {
  square: 'rounded-lg',
  standard: 'rounded-xl',
  circle: 'rounded-full'
};
var scale = {
  xs: 'py-1.5',
  sm: 'py-2.5',
  md: 'py-3',
  lg: 'py-3.5'
};
var disabled = false;
var loading = false;
var className = '';
var wide = false;
var responsive = false;
var onlyIcon = false;
var size = 'md';
var style = 'contained';
var color = 'strong';
var border = 'standard';
var shadow = false;
describe('Button ClassNames test', () => {
  var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
    style: style,
    size: size,
    color: color,
    shadow: shadow,
    border: border,
    disabled: disabled,
    loading: loading,
    className: className,
    wide: wide,
    responsive: responsive,
    onlyIcon: onlyIcon,
    onClick: () => console.log('.')
  })).toTree();
  (0, _globals.test)('Test Button classNames enabled', () => {
    (0, _globals.expect)(component.rendered.type).toBe('button');
    (0, _globals.expect)(component.rendered.props.className).toBe((0, _tailwindMerge.twMerge)('border flex items-center justify-center transition ease-in-out duration-150 font-medium', responsive ? 'text-sm sm:text-base' : 'text-base', onlyIcon ? 'px-3' : 'px-5', scale[size], colors[style][disabled || loading ? 'disabled' : color], borders[border], wide ? 'w-full justify-center' : '', className, !disabled && !loading ? shadowsAvailable[shadow] : ''));
  });
});
describe('Button render', () => {
  var component = (0, _reactTestRenderer.create)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
    icon: _md.MdRadar,
    children: "teste"
  })).toTree();
  (0, _globals.test)('Button render', () => {
    (0, _globals.expect)(component.type).toBe(_Button.default);
  });
  (0, _globals.test)('nest 1 Button', () => {
    (0, _globals.expect)(component.rendered.type).toBe('button');
  });
  (0, _globals.test)('nest 2 Button', () => {
    (0, _globals.expect)(component.rendered.rendered[0]).toBe('teste');
    (0, _globals.expect)(component.rendered.rendered[1]).toBe(' ');
    (0, _globals.expect)(component.rendered.rendered[2].type).toBe(_md.MdRadar);
  });
});
(0, _globals.test)('Test button click event', () => {
  var onClick = jest.fn();
  var {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
    onClick: onClick,
    children: "Click Me"
  }));
  var button = getByText('Click Me');
  _react2.fireEvent.click(button);
  (0, _globals.expect)(onClick).toHaveBeenCalledTimes(1);
});
(0, _globals.test)('Test Button wide', () => {
  var {
    getByText
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
    wide: true,
    children: "Wide"
  }));
  var button = getByText('Wide');
  (0, _globals.expect)(button.getAttribute('class')).toContain('w-full');
});