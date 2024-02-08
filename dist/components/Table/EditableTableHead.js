"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditableTableHead;
var _md = require("react-icons/md");
var _Dropdown = _interopRequireDefault(require("../Dropdown"));
var _Checkbox = _interopRequireDefault(require("../Input/Checkbox"));
var _lodash = require("lodash");
var _Label = _interopRequireDefault(require("../Label"));
var _react = _interopRequireDefault(require("react"));
var _sort = require("../../utilities/sort");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function DropdownItemTableHeader(_ref) {
  var {
    array,
    onItemChange,
    defineBgColor,
    width = 'w-44',
    display = _lodash.noop
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Dropdown.default, {
    className: "-my-2",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default.Trigger, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "inline-flex rounded-md",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          type: "button",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdKeyboardArrowDown, {
            className: "text-xl mt-1.5 ml-2 bg-gray-200 rounded active:bg-gray-300"
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Dropdown.default.Content, {
      position: "fixed",
      width: width,
      shadow: "drop-shadow-[0_0_8px_rgba(30,64,175,0.15)] shadow-gray-200",
      className: "overflow-x-auto h-32",
      children: array === null || array === void 0 ? void 0 : array.map((item, key) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "border-b border-gray-300 p-2 font-normal text-gray-500 flex items-center text-start justify-between",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Label.default, {
          forInput: item.label,
          value: display(item.label),
          className: defineBgColor(key),
          noTextColor: true
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "mr-2",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Checkbox.default, {
            checked: item.active,
            id: item.label,
            name: item.label,
            "data-id": item.id,
            color: "primary600",
            border: "rounded-full",
            onChange: () => onItemChange(key, array)
          })
        })]
      }, key))
    })]
  });
}
function SortButton(_ref2) {
  var {
    sortDesc,
    onClick,
    isSorted,
    icon
  } = _ref2;
  var Icon = icon;
  if (isSorted) {
    Icon = sortDesc ? _md.MdArrowDownward : _md.MdArrowUpward;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    onClick: onClick,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
      className: "text-base ml-2 text-primary-600 rounded"
    })
  });
}
function EditableTableHead(_ref3) {
  var {
    columns = [],
    sortColumn,
    setSortColumn,
    setSortDesc,
    sortDesc
  } = _ref3;
  var BoundSortButton = _ref4 => {
    var {
      columnKey,
      type
    } = _ref4;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(SortButton, {
      sortDesc: sortDesc,
      onClick: () => (0, _sort.toggleSort)(columnKey, setSortDesc, setSortColumn, sortColumn, sortDesc),
      isSorted: sortColumn === columnKey,
      icon: type === 'date' || type === 'number' ? _md.MdSwapVert : _md.MdOutlineSortByAlpha
    });
  };
  var _defineBgColor = (key, color, rowStyle) => {
    return rowStyle ? "".concat(rowStyle(color[key]), " px-2 rounded-full") : 'bg-white';
  };
  var edit = (key, array) => {
    return (0, _lodash.update)(array, {
      [key]: {
        $set: _objectSpread(_objectSpread({}, array[key]), {}, {
          active: !array[key].active
        })
      }
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("thead", {
    className: "text-base border-b border-gray-300 text-gray-700 w-full divide-x sticky top-0 z-10",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
      className: "w-full divide-x bg-slate-50 ",
      children: columns.map((column, i) => {
        return column.visible && !column.disabled && /*#__PURE__*/(0, _jsxRuntime.jsx)("th", {
          className: "py-3.5 font-normal hover:bg-primary-50 ".concat(column.style),
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
            className: "flex items-center justify-center",
            children: [column.icon && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              className: "mr-2",
              children: column.icon
            }), column.title, column.sort && /*#__PURE__*/(0, _jsxRuntime.jsx)(BoundSortButton, {
              columnKey: column.key,
              type: column.type
            }), column.dropdown && /*#__PURE__*/(0, _jsxRuntime.jsx)(DropdownItemTableHeader, {
              array: column.dropdown.data,
              defineBgColor: key => _defineBgColor(key, column.dropdown.data, column.rowStyle),
              width: column.dropdown.width,
              onItemChange: key => column.dropdown.onChange(edit(key, column.dropdown.data), column.dropdown.changer, column.dropdown.key, column.dropdown.only)
            })]
          })
        }, i);
      })
    })
  });
}