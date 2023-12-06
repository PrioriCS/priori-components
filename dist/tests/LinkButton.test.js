"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _LinkButton = _interopRequireDefault(require("../components/LinkButton"));
var _inertia = require("@inertiajs/inertia");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
jest.mock('@inertiajs/inertia', () => ({
  Inertia: {
    visit: jest.fn()
  },
  shouldIntercept: jest.fn()
}));
describe('LinkButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  test('renders with correct props', () => {
    var href = '/some-page';
    var onClick = jest.fn();
    var preserveScroll = false;
    var preserveState = false;
    var replace = false;
    var only = [];
    var component = 'button';
    var className = 'custom-class';
    var disabled = false;
    _inertia.shouldIntercept.mockReturnValue(false);
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkButton.default, {
      href: href,
      onClick: onClick,
      preserveScroll: preserveScroll,
      preserveState: preserveState,
      replace: replace,
      only: only,
      component: component,
      className: className,
      disabled: disabled,
      children: "Link Button"
    }));
    var buttonElement = getByText('Link Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe(component.toUpperCase());
    expect(buttonElement).toHaveClass('cursor-pointer', className);
    expect(buttonElement).not.toHaveAttribute('disabled');
    _react2.fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(_inertia.Inertia.visit).toHaveBeenCalledTimes(0);
  });
  test('calls Inertia.visit when shouldIntercept returns true', () => {
    var href = '/some-page';
    var onClick = jest.fn();
    var preserveScroll = false;
    var preserveState = false;
    var replace = false;
    var only = [];
    var component = 'button';
    var className = 'custom-class';
    var disabled = false;
    _inertia.shouldIntercept.mockReturnValue(true);
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkButton.default, {
      href: href,
      onClick: onClick,
      preserveScroll: preserveScroll,
      preserveState: preserveState,
      replace: replace,
      only: only,
      component: component,
      className: className,
      disabled: disabled,
      children: "Link Button"
    }));
    var buttonElement = getByText('Link Button');
    expect(buttonElement).toBeInTheDocument();
    _react2.fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(_inertia.Inertia.visit).toHaveBeenCalledTimes(1);
    expect(_inertia.Inertia.visit).toHaveBeenCalledWith(href, {
      preserveScroll,
      preserveState,
      replace,
      only
    });
  });
  test('does not call Inertia.visit when shouldIntercept returns false', () => {
    var href = '/some-page';
    var onClick = jest.fn();
    var preserveScroll = false;
    var preserveState = false;
    var replace = false;
    var only = [];
    var component = 'button';
    var className = 'custom-class';
    var disabled = false;
    _inertia.shouldIntercept.mockReturnValue(false);
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkButton.default, {
      href: href,
      onClick: onClick,
      preserveScroll: preserveScroll,
      preserveState: preserveState,
      replace: replace,
      only: only,
      component: component,
      className: className,
      disabled: disabled,
      children: "Link Button"
    }));
    var buttonElement = getByText('Link Button');
    expect(buttonElement).toBeInTheDocument();
    _react2.fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(_inertia.Inertia.visit).toHaveBeenCalledTimes(0);
  });
  test('calls onClick when the button is clicked', () => {
    var href = '/some-page';
    var onClick = jest.fn();
    var preserveScroll = false;
    var preserveState = false;
    var replace = false;
    var only = [];
    var component = 'button';
    var className = 'custom-class';
    var disabled = false;
    _inertia.shouldIntercept.mockReturnValue(false);
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkButton.default, {
      href: href,
      onClick: onClick,
      preserveScroll: preserveScroll,
      preserveState: preserveState,
      replace: replace,
      only: only,
      component: component,
      className: className,
      disabled: disabled,
      children: "Link Button"
    }));
    var buttonElement = getByText('Link Button');
    _react2.fireEvent.click(buttonElement);
    expect(_inertia.Inertia.visit).toHaveBeenCalledTimes(0);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  test('disables the button when disabled prop is true', () => {
    var href = '/some-page';
    var onClick = jest.fn();
    var preserveScroll = false;
    var preserveState = false;
    var replace = false;
    var only = [];
    var component = 'button';
    var className = 'custom-class';
    var disabled = true;
    _inertia.shouldIntercept.mockReturnValue(false);
    var {
      getByText
    } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_LinkButton.default, {
      href: href,
      onClick: onClick,
      preserveScroll: preserveScroll,
      preserveState: preserveState,
      replace: replace,
      only: only,
      component: component,
      className: className,
      disabled: disabled,
      children: "Link Button"
    }));
    var buttonElement = getByText('Link Button');
    expect(buttonElement).toBeDisabled();
    _react2.fireEvent.click(buttonElement);
    expect(_inertia.Inertia.visit).toHaveBeenCalledTimes(0);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});