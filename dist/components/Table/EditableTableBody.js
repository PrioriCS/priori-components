"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditableTableBody;
var _immutability = require("@/lib/utilities/immutability");
var _masks = require("@/lib/utilities/masks");
var _lodash = require("lodash");
var _react = _interopRequireDefault(require("react"));
var _Input = _interopRequireDefault(require("../Input/Input"));
var _InputSelect = _interopRequireDefault(require("../Input/InputSelect"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function handleChange(e, setData, setEditing, data, i, index, key, id, isMoney) {
  var especificCalc = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : _lodash.noop;
  var constrainedId = arguments.length > 10 ? arguments[10] : undefined;
  var uppercase = arguments.length > 11 && arguments[11] !== undefined ? arguments[11] : false;
  setData(currentData => {
    return (0, _immutability.edit)(data, i, {
      id: id,
      data: (0, _immutability.edit)(currentData[i].data, index, {
        value: isMoney ? (0, _masks.normalizeMoney)(e.target.value) : constrainedId ? parseInt(e.target.value) : uppercase ? e.target.value.toUpperCase() : e.target.value,
        key: key
      })
    });
  });
  especificCalc(data, setData, key, i, id, e.target.value);
  setEditing(true);
}
function EditableTableBody(_ref) {
  var {
    columns,
    data,
    setData,
    setEditing
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
    className: "font-normal text-base border-b border-gray-300 text-gray-500 w-full divide-y",
    children: data.map((row, i) => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
        className: "w-full divide-x text-sm",
        children: row.data.map((cell, index) => {
          return columns.map((_ref2, column) => {
            var {
              component: Component
            } = _ref2;
            return cell.key === columns[column].key && columns[column].visible && !columns[column].disabled && /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
              className: "bg-white",
              children: columns[column].personalized ? /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
                value: cell.value,
                id: row.id,
                extra: columns[column].extra,
                addicioalInfo: cell.link
              }) : columns[column].type === 'select' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect.default, {
                value: cell.value,
                center: columns[column].center,
                disabled: !columns[column].editable,
                onChange: e => {
                  handleChange(e, setData, setEditing, data, i, index, cell.key, row.id, columns[column].money, columns[column].especificCalc, columns[column].constrainedId);
                },
                options: columns[column].options
              }, row.id) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {
                round: "none",
                className: "py-4 w-full border-none text-sm ".concat(columns[column].center ? 'text-center' : ''),
                type: columns[column].type,
                value: (0, _lodash.isNil)(cell.value) ? '' : cell.value,
                readOnly: !columns[column].editable,
                mask: (0, _masks.generateInputMask)(columns[column].type, cell.value) || columns[column].mask,
                maskchar: " ",
                onChange: e => {
                  handleChange(e, setData, setEditing, data, i, index, cell.key, row.id, columns[column].money, columns[column].especificCalc, false, columns[column].uppercase);
                }
              }, row.id)
            }, columns[column].key);
          });
        })
      }, i);
    })
  });
}