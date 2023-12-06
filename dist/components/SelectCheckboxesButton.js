"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SelectCheckboxesButton;
var _react = _interopRequireDefault(require("react"));
var _md = require("react-icons/md");
var _tailwindMerge = require("tailwind-merge");
var _ = require("..");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SelectCheckboxesButton(_ref) {
  var {
    allSelected,
    onClick
  } = _ref;
  var Icon = allSelected ? _md.MdCheckBoxOutlineBlank : _md.MdCheckBox;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_.Button, {
    style: "outlined",
    color: "strong",
    shadow: "bottom",
    onClick: onClick,
    children: [allSelected ? 'Desmarcar todos' : 'Selecionar todos', /*#__PURE__*/(0, _jsxRuntime.jsx)(Icon, {
      "data-testid": "checkbox-icon",
      className: (0, _tailwindMerge.twMerge)('text-base ml-2')
    })]
  });
}