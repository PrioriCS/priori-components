"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditableTableHead;
var _sort = require("../../../utilities/sort");
var _md = require("react-icons/md");
var _Dropdown = _interopRequireDefault(require("../Dropdown"));
var _prioricomponents = require("prioricomponents");
var _Checkbox = _interopRequireDefault(require("../Input/Checkbox"));
var _immutability = require("../../../utilities/immutability");
var _lodash = require("lodash");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_prioricomponents.Label, {
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
    return (0, _immutability.update)(array, {
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