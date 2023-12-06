"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.append = append;
exports.edit = edit;
exports.exclude = exclude;
exports.include = include;
exports.insert = insert;
exports.remove = remove;
exports.unset = unset;
var _immutabilityHelper = _interopRequireDefault(require("immutability-helper"));
var _lodash = require("lodash");
var _randomstring = _interopRequireDefault(require("randomstring"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function randomStringGenerator() {
  return _randomstring.default.generate(10);
}
function append(arr, itemOrItems) {
  return (0, _immutabilityHelper.default)(arr, {
    $push: (0, _lodash.castArray)(itemOrItems)
  });
}
function edit(collection, key, item) {
  return (0, _immutabilityHelper.default)(collection, {
    [key]: {
      $set: item
    }
  });
}
function remove(arr, index) {
  return (0, _immutabilityHelper.default)(arr, {
    $splice: [[index, 1]]
  });
}
function insert(obj, item) {
  var keyGenerator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : randomStringGenerator;
  var key = keyGenerator(item);
  return edit(obj, key, item);
}
function unset(obj, key) {
  return (0, _immutabilityHelper.default)(obj, {
    $unset: [key]
  });
}
function include(set, itemOrItems) {
  return (0, _immutabilityHelper.default)(set, {
    $add: (0, _lodash.castArray)(itemOrItems)
  });
}
function exclude(set, itemOrItems) {
  return (0, _immutabilityHelper.default)(set, {
    $remove: (0, _lodash.castArray)(itemOrItems)
  });
}