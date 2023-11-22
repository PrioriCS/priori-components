"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _inertiaReact = require("@inertiajs/inertia-react");
var _react2 = require("@headlessui/react");
var _lodash = require("lodash");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var DropDownContext = /*#__PURE__*/_react.default.createContext();
var Dropdown = _ref => {
  var {
    className = '',
    children
  } = _ref;
  var [open, setOpen] = (0, _react.useState)(false);
  var toggleOpen = () => {
    setOpen(previousState => !previousState);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(DropDownContext.Provider, {
    value: {
      open,
      setOpen,
      toggleOpen
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "relative ".concat(className),
      children: children
    })
  });
};
var Trigger = _ref2 => {
  var {
    children,
    onClick
  } = _ref2;
  var {
    open,
    setOpen,
    toggleOpen
  } = (0, _react.useContext)(DropDownContext);
  var handleClick = () => {
    setOpen(false);
    if (!(0, _lodash.isUndefined)(onClick)) {
      onClick();
    }
  };
  var handleToggleOpen = () => {
    toggleOpen();
    if (!(0, _lodash.isUndefined)(onClick)) {
      onClick();
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      onClick: handleToggleOpen,
      children: children
    }), open && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "fixed inset-0 z-50",
      onClick: handleClick
    })]
  });
};

// TODO review: "9" is a magic number
var Content = _ref3 => {
  var {
    align = 'top',
    width = '48',
    radius = 'rounded-md',
    contentClasses = 'bg-white',
    position = 'absolute left-60',
    shadow = '',
    children
  } = _ref3;
  var {
    open
  } = (0, _react.useContext)(DropDownContext);
  var alignmentClasses = 'origin-top inset-auto';
  if (align === 'left') {
    alignmentClasses = 'origin-top-left left-0';
  } else if (align === 'right') {
    alignmentClasses = 'origin-top-right right-0';
  } else if (align === 'bottom') {
    alignmentClasses = 'origin-bottom bottom-9';
  } else if (align === 'side') {
    alignmentClasses = 'origin-bottom bottom-0';
  }
  var widthClasses = '';
  if (width === '48') {
    widthClasses = 'w-48';
  } else {
    widthClasses = width;
  }
  var positionClasses = '';
  if (position === 'absolute') {
    positionClasses = 'absolute';
  } else if (position === 'fixed') {
    positionClasses = 'fixed';
  } else {
    positionClasses = position;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Transition, {
      as: _react.Fragment,
      show: open,
      enter: "transition ease-out duration-200",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "".concat(positionClasses, " ").concat(open ? shadow : '', " z-50 rounded-md shadow-lg ").concat(alignmentClasses, " ").concat(widthClasses),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "".concat(radius, " max-h-56 overflow-x-auto ring-1 ring-black ring-opacity-5 ") + contentClasses,
          children: children
        })
      })
    })
  });
};
var DropdownLink = _ref4 => {
  var {
    href,
    method = 'post',
    as = 'a',
    children,
    noRadius = false
  } = _ref4;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_inertiaReact.Link, {
    href: href,
    method: method,
    as: as,
    className: "block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out ".concat(noRadius ? 'rounded-none' : 'rounded-md'),
    children: children
  });
};
Dropdown.Trigger = Trigger;
Dropdown.Content = Content;
Dropdown.Link = DropdownLink;
var _default = Dropdown;
exports.default = _default;