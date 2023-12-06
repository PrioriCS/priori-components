"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateInputMask = generateInputMask;
exports.normalizeMoney = void 0;
var _utils = require("./utils");
var normalizeMoney = money => {
  var moneyString = money.toString();
  var moneyFormatted = moneyString === null || moneyString === void 0 ? void 0 : moneyString.replace(/\D/g, '');
  return moneyFormatted === null || moneyFormatted === void 0 ? void 0 : moneyFormatted.split('').reverse().join('').replace('.', '').replace(/(\d{2})/, '$1,').replace(/(\d{3}(?!$))/g, '$1.').split('').reverse().join('');
};
exports.normalizeMoney = normalizeMoney;
function generateInputMask(type, value) {
  var mask = '';
  if (type === 'phone' || type === 'tel') {
    if ((0, _utils.onlyDigits)(value).length > 12) {
      mask = '99(99)99999-9999';
    } else if ((0, _utils.onlyDigits)(value).length > 11) {
      mask = '99(99)9999-99999';
    } else if ((0, _utils.onlyDigits)(value).length > 10) {
      mask = '(99)99999-99999';
    } else {
      mask = '(99)9999-99999';
    }
  } else if (type === 'document') {
    if ((0, _utils.onlyDigits)(value).length > 11) {
      mask = '99.999.999/9999-99';
    } else {
      mask = '999.999.999-999';
    }
  } else if (type === 'postal_code') {
    mask = '99999-999';
  } else {
    mask = '';
  }
  return mask;
}