"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TableToolbar;
var _Input = _interopRequireDefault(require("../Input/Input"));
var _inertiaReact = require("@inertiajs/inertia-react");
var _lodash = require("lodash");
var _react = _interopRequireDefault(require("react"));
var _md = require("react-icons/md");
var _queryString = _interopRequireDefault(require("query-string"));
var _prioricomponents = require("prioricomponents");
var _tailwindMerge = require("tailwind-merge");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function TableToolbar(_ref) {
  var {
    searchKey,
    onSearchChange = _lodash.noop,
    children,
    background = 'slate',
    radius = 'none',
    iconColor = 'primary',
    placeholder = 'Pesquisar...',
    width = 'sm',
    justifyContent = 'start',
    editing = false,
    editable = false,
    onSave = _lodash.noop,
    onSaveFilters = _lodash.noop,
    saveFilters,
    paddingX = 'default',
    paddingY = 'default',
    paddingBottom = 'none'
  } = _ref;
  var {
    url
  } = (0, _inertiaReact.usePage)();
  var {
    query = {}
  } = _queryString.default.parseUrl(url);
  var [search, setSearch] = _react.default.useState(query[searchKey] || '');
  function handleChange(event) {
    setSearch(event.target.value);
    onSearchChange(event.target.value);
  }
  var availableBackgrounds = {
    slate: 'bg-slate-50',
    white: 'bg-white'
  };
  var availableBorderRadius = {
    none: 'rounded-t-none',
    square: 'rounded-t-md',
    round: 'rounded-t-xl',
    nothing: 'border-none'
  };
  var availableJustifyContents = {
    start: 'justify-start',
    between: 'justify-between'
  };
  var availableWidths = {
    sm: 'lg:w-[36%] w-full',
    md: 'w-1/2'
  };
  var availablePaddingX = {
    default: 'px-6',
    none: 'px-0'
  };
  var availablePaddingY = {
    default: 'py-5',
    none: 'py-0'
  };
  var availablePaddingBottom = {
    md: 'pb-4',
    none: 'pb-0'
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: (0, _tailwindMerge.twMerge)('flex flex-row sm:border-b border-gray-300 sm:rounded-t-xl', availableBackgrounds[background], availablePaddingX[paddingX], availablePaddingY[paddingY], paddingY === 'none' ? availablePaddingBottom[paddingBottom] : '', availableJustifyContents[justifyContent], availableBorderRadius[radius]),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex w-full ".concat(editable ? 'justify-between items-center' : 'justify-start'),
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: availableWidths[width],
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {
          value: search,
          onChange: handleChange,
          name: "search",
          placeholder: placeholder,
          className: "w-full placeholder-gray-400 font-light",
          round: radius,
          size: "sm",
          icon: _md.MdSearch,
          iconColor: iconColor
        })
      }), editable && editing && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_prioricomponents.Button, {
          onClick: () => onSave(),
          size: "sm",
          children: ["Salvar ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdSave, {
            className: "text-xl ml-2"
          })]
        })
      })]
    }), saveFilters && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "xl:w-2/6 2xl:w-1/6 sm:ml-0 justify-end sm:flex hidden",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_prioricomponents.Button, {
        onClick: () => onSaveFilters(),
        size: "sm",
        responsive: true,
        children: "Salvar Filtros"
      })
    }), children]
  });
}