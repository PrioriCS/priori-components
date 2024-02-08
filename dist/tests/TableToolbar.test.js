"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _TableToolbar = _interopRequireDefault(require("../components/Table/TableToolbar"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
jest.mock('@inertiajs/inertia-react', () => ({
  usePage: () => ({
    url: 'https://example.com'
  })
}));
test('renders TableToolbar component', () => {
  var props = {
    searchKey: 'query',
    onSearchChange: jest.fn(),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: "Children component"
    }),
    background: 'slate',
    radius: 'none',
    iconColor: 'primary',
    placeholder: 'Pesquisar...',
    width: 'sm',
    justifyContent: 'start',
    editing: false,
    editable: false,
    onSave: jest.fn(),
    onSaveFilters: jest.fn(),
    saveFilters: true,
    paddingX: 'default',
    paddingY: 'default',
    paddingBottom: 'none'
  };
  var {
    getByPlaceholderText,
    getByText
  } = (0, _react2.render)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableToolbar.default, _objectSpread({}, props)));
  expect(getByPlaceholderText('Pesquisar...')).toBeInTheDocument();
  expect(getByText((content, element) => content.includes('Salvar') && element.tagName === 'BUTTON')).toBeInTheDocument();
  expect(getByText('Salvar Filtros')).toBeInTheDocument();
  expect(getByText('Children component')).toBeInTheDocument();
  _react2.fireEvent.change(getByPlaceholderText('Pesquisar...'), {
    target: {
      value: 'search term'
    }
  });
  expect(props.onSearchChange).toHaveBeenCalledWith('search term');
  _react2.fireEvent.click(getByText((content, element) => content.includes('Salvar') && element.tagName === 'BUTTON'));
  _react2.fireEvent.click(getByText('Salvar Filtros'));
  expect(props.onSaveFilters).toHaveBeenCalled();
});