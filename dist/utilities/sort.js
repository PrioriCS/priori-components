"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initializeStatusFilter = initializeStatusFilter;
exports.initializeVendorFilter = initializeVendorFilter;
exports.setCurrentPage = setCurrentPage;
exports.toggleSort = toggleSort;
exports.updateSearch = updateSearch;
exports.updateStatusFilter = updateStatusFilter;
exports.updateVendorFilter = updateVendorFilter;
var _inertia = require("@inertiajs/inertia");
var _lodash = require("lodash");
var _utils = require("./utils");
function setCurrentPage(page, only) {
  _inertia.Inertia.reload({
    data: {
      page
    },
    only: [only]
  });
}
function updateSearch(x, searchKey, table) {
  _inertia.Inertia.reload({
    data: {
      [searchKey]: (0, _lodash.isEmpty)(x) ? undefined : x.toLowerCase()
    },
    only: [table]
  });
}
function toggleSort(column, setSortDesc, setSortColumn, sortColumn, sortDesc) {
  var newSortDesc = column === sortColumn ? !sortDesc : true;
  setSortDesc(newSortDesc);
  setSortColumn(column);
  _inertia.Inertia.reload({
    data: {
      sort_desc: newSortDesc,
      sort_column: column
    }
  });
}
function initializeStatusFilter(query, statuses, key) {
  var excluded = query[key] || '';
  var values = excluded.split(',');
  return statuses.map(status => ({
    label: status,
    active: !values.includes(status)
  }));
}
function initializeVendorFilter(query, salesmen, key) {
  var excluded = query[key] || '';
  var values = excluded.split(',').map(_utils.asInt);
  return salesmen.map(user => ({
    id: user.salesman.id,
    label: user === null ? user.salesman.initials : user.name,
    active: !values.includes(user.salesman.id)
  }));
}
function updateStatusFilter(newState, setCheckStatus, statusKey, only) {
  setCheckStatus(newState);
  var exclude = (0, _lodash.filter)(newState, el => !el.active).map(el => el.label);
  _inertia.Inertia.reload({
    data: {
      [statusKey]: (0, _lodash.isEmpty)(exclude) ? undefined : exclude.toString()
    },
    only: [only]
  });
}
function updateVendorFilter(newState, setCheckVendor, salesmenKey, only) {
  setCheckVendor(newState);
  var exclude = (0, _lodash.filter)(newState, el => !el.active).map(el => el.id);
  _inertia.Inertia.reload({
    data: {
      [salesmenKey]: (0, _lodash.isEmpty)(exclude) ? undefined : exclude.toString()
    },
    only: [only]
  });
}