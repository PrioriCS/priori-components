"use strict";

var _react = _interopRequireDefault(require("react"));
var _react2 = require("@testing-library/react");
var _TableToolbar = _interopRequireDefault(require("../components/Table/TableToolbar"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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