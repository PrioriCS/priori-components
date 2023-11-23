"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Pagination;
var _sort = require("@/lib/utilities/sort");
var _react = _interopRequireDefault(require("react"));
var _md = require("react-icons/md");
var _PageButton = _interopRequireDefault(require("../PageButton"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Pagination(_ref) {
  var {
    currentPage = 1,
    pages,
    table,
    canChangePage = true
  } = _ref;
  var maxButtonPages = 5;
  var lastButton = currentPage < pages ? maxButtonPages - 1 : maxButtonPages;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex justify-end rounded-md",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
      className: "flex items-center text-sm font-medium text-gray-500",
      children: ["P\xE1gina ", currentPage, " de ", pages]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex ml-8 space-x-2",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_PageButton.default, {
        disabled: currentPage === 1 || !canChangePage,
        onClick: () => (0, _sort.setCurrentPage)(1, table),
        icon: _md.MdFirstPage
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageButton.default, {
        disabled: currentPage === 1 || !canChangePage,
        icon: _md.MdNavigateBefore,
        onClick: () => (0, _sort.setCurrentPage)(currentPage > 1 ? currentPage - 1 : currentPage, table)
      }), Array.from({
        length: Math.min(maxButtonPages, pages)
      }).map((_, index) => 1 + index + Math.max(currentPage - lastButton, 0)).map(itemPage => /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageButton.default, {
        active: itemPage === currentPage,
        onClick: () => (0, _sort.setCurrentPage)(itemPage, table),
        number: itemPage,
        disabled: !canChangePage
      }, itemPage)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageButton.default, {
        disabled: currentPage === pages || !canChangePage,
        icon: _md.MdNavigateNext,
        onClick: () => (0, _sort.setCurrentPage)(currentPage < pages ? currentPage + 1 : currentPage, table)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageButton.default, {
        disabled: currentPage === pages || !canChangePage,
        icon: _md.MdLastPage,
        onClick: () => (0, _sort.setCurrentPage)(pages, table)
      })]
    })]
  });
}