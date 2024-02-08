"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditableTableBody;
var _lodash = require("lodash");
var _Input = _interopRequireDefault(require("../Input/Input"));
var _InputSelect = _interopRequireDefault(require("../Input/InputSelect"));
var _masks = require("../../utilities/masks");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function EditableTableBody(_ref) {
  var {
    columns = [],
    data = [],
    setData = _lodash.noop,
    setEditing = _lodash.noop,
    setChangedData = _lodash.noop,
    primaryKey = 'id'
  } = _ref;
  var rowToObj = row => {
    var obj = {};
    row.data.forEach(cell => {
      obj[cell.key] = cell.value;
    });
    return obj;
  };
  var handleEdit = (row, rowIndex, newData, key, dataTretement) => {
    if ((0, _lodash.isFunction)(dataTretement)) newData = dataTretement(newData);
    setEditing(true);
    var newRow = row;
    var newDataArray = [...data];
    newRow.data.find(cell => cell.key === key).value = newData;
    newDataArray[rowIndex] = newRow;
    var newRowObj = rowToObj(newRow);
    setChangedData(changedData => [...changedData.filter(row => row[primaryKey] !== newRowObj[primaryKey]), newRowObj]);
    setData(newDataArray);
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("tbody", {
    className: "font-normal text-base border-b border-gray-300 text-gray-500 w-full divide-y",
    children: data.map((row, rowIndex) => {
      var _row$data;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)("tr", {
        className: "w-full divide-x text-sm",
        children: row === null || row === void 0 || (_row$data = row.data) === null || _row$data === void 0 ? void 0 : _row$data.map((cell, cellIndex) => {
          var {
            component: Componet,
            type,
            key,
            editable,
            personalized,
            extra,
            options,
            center,
            mask,
            maskChar,
            dataTretement
          } = columns.find(column => column.key === cell.key && column.visible);
          if (!type) return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
            className: "p-2"
          }, cellIndex);
          if (personalized) return /*#__PURE__*/(0, _jsxRuntime.jsx)(Componet, {
            value: cell.value,
            id: cell.key == primaryKey ? cell.value : '',
            extra: extra,
            adicioalInfo: cell.link
          });
          if (type === 'select') {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
              className: "p-2",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputSelect.default, {
                value: cell.value,
                center: center,
                disabled: !editable,
                options: options,
                onChange: e => {
                  handleEdit(row, rowIndex, e.target.value, key, dataTretement);
                }
              }, cellIndex + ' ' + rowIndex)
            }, cellIndex + ' ' + rowIndex);
          }
          return /*#__PURE__*/(0, _jsxRuntime.jsx)("td", {
            className: "p-2",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Input.default, {
              round: "none",
              className: "py-4 w-full border-none text-sm ".concat(center ? 'text-center' : ''),
              type: (0, _lodash.isEmpty)(type) ? 'text' : type,
              value: (0, _lodash.isNil)(cell.value) ? '' : cell.value,
              readOnly: !editable,
              mask: (0, _masks.generateInputMask)(type, cell.value) || mask,
              maskchar: maskChar ? maskChar : ' ',
              onChange: e => {
                handleEdit(row, rowIndex, e.target.value, key, dataTretement);
              }
            }, cellIndex + ' ' + rowIndex)
          }, cellIndex + ' ' + rowIndex);
        })
      }, rowIndex);
    })
  });
}