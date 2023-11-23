"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asInt = exports.asBoolean = exports.applyAdaptively = void 0;
exports.capitalizeFirst = capitalizeFirst;
exports.date = void 0;
exports.deepen = deepen;
exports.generateFileLink = generateFileLink;
exports.getFirstItem = getFirstItem;
exports.htmlString = void 0;
exports.isBoolean = isBoolean;
exports.isCnpj = isCnpj;
exports.isCpf = isCpf;
exports.mapRecursively = mapRecursively;
exports.mapToProperty = void 0;
exports.mergeQuery = mergeQuery;
exports.objectifyString = exports.money = void 0;
exports.onlyDigits = onlyDigits;
exports.pluralize = pluralize;
exports.throwing = exports.returning = void 0;
exports.validEmail = validEmail;
exports.validPhone = validPhone;
exports.verifyInputValue = verifyInputValue;
var _lodash = require("lodash");
var _queryString = _interopRequireDefault(require("query-string"));
var _sprintfJs = require("sprintf-js");
var _currency = _interopRequireDefault(require("currency.js"));
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var asInt = value => parseInt(value, 10);
exports.asInt = asInt;
var asBoolean = value => value === 'true';
exports.asBoolean = asBoolean;
function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function onlyDigits(str) {
  if (!str) {
    return '';
  }
  return str.replace(/\D/g, '');
}
function isBoolean(value) {
  if (value === true || value === false) {
    return true;
  }
  return false;
}
function validPhone(phone) {
  var regex = new RegExp('^(\\+?\\d{0,3}\\s?)?(\\(\\d{1,4}\\)|\\d{1,4})\\s?\\d{4,9}$');
  return regex.test(onlyDigits(phone)) && onlyDigits(phone).length >= 10;
}
function isCpf(str) {
  var cpf = onlyDigits(str);
  if (cpf.length !== 11) {
    return false;
  }
  var isRepeated = true;
  for (var index = 1; index < cpf.length; index++) {
    if (cpf.charAt(0) !== cpf.charAt(index)) {
      isRepeated = false;
    }
  }
  if (isRepeated) {
    return false;
  }
  var getVerifier = length => {
    var sum = 0;
    (0, _lodash.forEach)(cpf.slice(0, length), (digit, index) => {
      sum += asInt(digit) * (1 + length - index);
    });
    var verifier = sum * 10 % 11;
    return verifier < 10 ? verifier : 0;
  };
  var first = getVerifier(9);
  if (first !== asInt(cpf[9])) {
    return false;
  }
  var second = getVerifier(10);
  if (second !== asInt(cpf[10])) {
    return false;
  }
  return true;
}
function isCnpj(str) {
  var cnpj = onlyDigits(str);
  if (cnpj.length !== 14) {
    return false;
  }
  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  // Cáculo de validação
  var t = cnpj.length - 2;
  var d = cnpj.substring(t);
  var d1 = asInt(d[0]);
  var d2 = asInt(d[1]);
  var calc = x => {
    var n = cnpj.substring(0, x);
    var y = x - 7;
    var s = 0;
    var r = 0;
    for (var i = x; i >= 1; i -= 1) {
      s += n.charAt(x - i) * y;
      y -= 1;
      if (y < 2) {
        y = 9;
      }
    }
    r = 11 - s % 11;
    return r > 9 ? 0 : r;
  };
  return calc(t) === d1 && calc(t + 1) === d2;
}
function pluralize(number, singular, plural) {
  return (0, _sprintfJs.sprintf)(asInt(number) === 1 ? singular : plural, number);
}
function deepen(obj) {
  var base = (0, _lodash.pickBy)(obj, (value, key) => !key.includes('.'));
  var nested = {};
  Object.keys(obj).forEach(key => {
    var [left, right] = key.split('.');
    if (!right) return;
    if (!(left in nested)) {
      nested[left] = {};
    }
    nested[left][right] = obj[key];
  });
  return _objectSpread(_objectSpread({}, base), nested);
}
var objectifyString = (item, name) => (0, _lodash.isString)(item) ? {
  [name]: item
} : item;

// TODO can't handle arrays of objects
exports.objectifyString = objectifyString;
function mapRecursively(obj, callback) {
  return (0, _lodash.mapValues)(obj, (value, key) => {
    if ((0, _lodash.isObject)(value)) {
      return mapRecursively(value, callback);
    }
    return callback(value, key);
  });
}

// Returns a function that returns its first argument,
// but runs the callback before.
var returning = callback => value => {
  callback(value);
  return value;
};

// Returns a function that throws its first argument,
// but runs the callback before.
exports.returning = returning;
var throwing = callback => value => {
  callback(value);
  throw value;
};
exports.throwing = throwing;
function mergeQuery(params) {
  var {
    location
  } = window;
  var query = _queryString.default.parse(location.search);
  return _queryString.default.stringifyUrl({
    url: location.pathname,
    query: _objectSpread(_objectSpread({}, query), params)
  });
}
var htmlString = (tag, content) => "<".concat(tag, ">").concat(content, "</").concat(tag, ">");
exports.htmlString = htmlString;
var mapToProperty = function mapToProperty() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var property = arguments.length > 1 ? arguments[1] : undefined;
  return arr.map(item => item[property]);
};
exports.mapToProperty = mapToProperty;
var applyAdaptively = (itemOrArray, func) => (0, _lodash.isArray)(itemOrArray) ? (0, _lodash.map)(itemOrArray, func) : func(itemOrArray);
exports.applyAdaptively = applyAdaptively;
var money = function money() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return (0, _currency.default)(parseFloat(value), {
    precision: 2,
    symbol: 'R$ ',
    separator: '.',
    decimal: ','
  }).format();
};
exports.money = money;
var date = (value, valueFormat) => valueFormat ? (0, _moment.default)(value).format(valueFormat) : (0, _moment.default)(value).fromNow();
exports.date = date;
function getFirstItem(array) {
  var arr = [...array];
  return arr.shift();
}
function validEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function generateFileLink(file, setFileLink) {
  if (!(0, _lodash.isNil)(file)) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function (e) {
      var fileBlob = new Blob([e.target.result], {
        type: file.type
      });
      var documentURL = window.URL.createObjectURL(fileBlob);
      setFileLink(documentURL);
    };
  }
}
function verifyInputValue(type, value) {
  if (type === 'document') {
    var document = onlyDigits(value);
    if (document.length > 11) {
      return isCnpj(value) ? '' : 'CNPJ inválido!';
    } else {
      return isCpf(value) ? '' : 'CPF inválido!';
    }
  } else if (type === 'phone') {
    return validPhone(value) ? '' : 'Telefone inválido!';
  } else if (type === 'email') {
    return validEmail(value) ? '' : 'Email inválido!';
  } else {
    return '';
  }
}