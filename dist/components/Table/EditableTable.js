"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditableTable;
var _lodash = require("lodash");
var _react = _interopRequireDefault(require("react"));
var _EditableTableBody = _interopRequireDefault(require("./EditableTableBody"));
var _EditableTableHead = _interopRequireDefault(require("./EditableTableHead"));
var _TableToolbar = _interopRequireDefault(require("./TableToolbar"));
var _Pagination = _interopRequireDefault(require("./Pagination"));
var _jsxRuntime = require("react/jsx-runtime");
var _excluded = ["Component"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function EditableTable(_ref) {
  var {
    columns = [],
    data = [],
    setData = _lodash.noop,
    className,
    pagination,
    table = '',
    editing = false,
    setEditing = _lodash.noop,
    sortDesc = false,
    setSortDesc = _lodash.noop,
    sortColumn = '',
    setSortColumn = _lodash.noop,
    onSearchChange = _lodash.noop,
    searchKey = 'query',
    withoutScroll = false,
    onToolbarRight = {},
    withoutPagination = false,
    withoutSearch = false,
    height = 'default',
    route = _lodash.noop
  } = _ref;
  function _onSave() {
    var payload = {
      data: []
    };
    data.forEach(d => {
      var installation = {
        id: d.id
      };
      d.data.forEach(obj => {
        installation[obj.key] = obj.value;
      });
      payload.data.push(installation);
    });
    route(payload);
    setEditing(false);
  }
  var availableHeights = {
    default: 'max-h-[60vh]',
    md: '2xl:max-h-[55vh] max-h-[38vh]',
    lg: 'max-h-[60vh] 2xl:max-h-[65vh]',
    xl: 'max-h-[65vh] 2xl:max-h-[75vh]'
  };
  var {
      Component
    } = onToolbarRight,
    options = _objectWithoutProperties(onToolbarRight, _excluded);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "shadow-md sm:rounded-lg w-full absolute ".concat(className),
    children: [!withoutSearch && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TableToolbar.default, {
      editable: true,
      onSave: () => _onSave(),
      editing: editing,
      radius: "lg",
      onSearchChange: onSearchChange,
      searchKey: searchKey,
      children: !(0, _lodash.isEmpty)(onToolbarRight) && /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
        options: options
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "max-w-full overflow-auto ".concat(availableHeights[height]),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("table", {
        className: "overflow-auto ".concat(withoutScroll ? 'w-full' : 'w-screen'),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_EditableTableHead.default, {
          columns: columns,
          sortDesc: sortDesc,
          setSortDesc: setSortDesc,
          sortColumn: sortColumn,
          setSortColumn: setSortColumn
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_EditableTableBody.default, {
          columns: columns,
          data: data,
          setData: setData,
          setEditing: setEditing
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        className: "bg-slate-50 p-5 hidden sm:block rounded-b-lg",
        children: !withoutPagination && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pagination.default, {
          currentPage: pagination === null || pagination === void 0 ? void 0 : pagination.current_page,
          pages: pagination === null || pagination === void 0 ? void 0 : pagination.last_page,
          table: table,
          canChangePage: !editing
        })
      })
    })]
  });
}