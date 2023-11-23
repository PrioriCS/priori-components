import { forEach, pickBy, isString, isObject, mapValues, isArray, map, isNil } from 'lodash';
import queryString from 'query-string';
import { sprintf } from 'sprintf-js';
import currency from 'currency.js';
import moment from 'moment';

export const asInt = (value) => parseInt(value, 10);
export const asBoolean = (value) => value === 'true';

export function capitalizeFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function onlyDigits(str) {
  if (!str) {
    return '';
  }

  return str.replace(/\D/g, '');
}

export function isBoolean(value) {
  if (value === true || value === false) {
    return true;
  }

  return false;
}

export function validPhone(phone) {
  var regex = new RegExp('^(\\+?\\d{0,3}\\s?)?(\\(\\d{1,4}\\)|\\d{1,4})\\s?\\d{4,9}$');

  return regex.test(onlyDigits(phone)) && onlyDigits(phone).length >= 10;
}

export function isCpf(str) {
  const cpf = onlyDigits(str);

  if (cpf.length !== 11) {
    return false;
  }

  let isRepeated = true;
  for (let index = 1; index < cpf.length; index++) {
    if (cpf.charAt(0) !== cpf.charAt(index)) {
      isRepeated = false;
    }
  }

  if (isRepeated) {
    return false;
  }

  const getVerifier = (length) => {
    let sum = 0;
    forEach(cpf.slice(0, length), (digit, index) => {
      sum += asInt(digit) * (1 + length - index);
    });

    const verifier = (sum * 10) % 11;

    return verifier < 10 ? verifier : 0;
  };

  const first = getVerifier(9);

  if (first !== asInt(cpf[9])) {
    return false;
  }

  const second = getVerifier(10);

  if (second !== asInt(cpf[10])) {
    return false;
  }

  return true;
}

export function isCnpj(str) {
  const cnpj = onlyDigits(str);

  if (cnpj.length !== 14) {
    return false;
  }

  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  // Cáculo de validação
  const t = cnpj.length - 2;
  const d = cnpj.substring(t);
  const d1 = asInt(d[0]);
  const d2 = asInt(d[1]);

  const calc = (x) => {
    const n = cnpj.substring(0, x);
    let y = x - 7;
    let s = 0;
    let r = 0;

    for (let i = x; i >= 1; i -= 1) {
      s += n.charAt(x - i) * y;
      y -= 1;
      if (y < 2) {
        y = 9;
      }
    }

    r = 11 - (s % 11);
    return r > 9 ? 0 : r;
  };

  return calc(t) === d1 && calc(t + 1) === d2;
}

export function pluralize(number, singular, plural) {
  return sprintf(asInt(number) === 1 ? singular : plural, number);
}

export function deepen(obj) {
  const base = pickBy(obj, (value, key) => !key.includes('.'));

  const nested = {};
  Object.keys(obj).forEach((key) => {
    const [left, right] = key.split('.');

    if (!right) return;

    if (!(left in nested)) {
      nested[left] = {};
    }

    nested[left][right] = obj[key];
  });

  return { ...base, ...nested };
}

export const objectifyString = (item, name) => (isString(item) ? { [name]: item } : item);

// TODO can't handle arrays of objects
export function mapRecursively(obj, callback) {
  return mapValues(obj, (value, key) => {
    if (isObject(value)) {
      return mapRecursively(value, callback);
    }

    return callback(value, key);
  });
}

// Returns a function that returns its first argument,
// but runs the callback before.
export const returning = (callback) => (value) => {
  callback(value);
  return value;
};

// Returns a function that throws its first argument,
// but runs the callback before.
export const throwing = (callback) => (value) => {
  callback(value);
  throw value;
};

export function mergeQuery(params) {
  const { location } = window;
  const query = queryString.parse(location.search);

  return queryString.stringifyUrl({
    url: location.pathname,
    query: {
      ...query,
      ...params,
    },
  });
}

export const htmlString = (tag, content) => `<${tag}>${content}</${tag}>`;

export const mapToProperty = (arr = [], property) => arr.map((item) => item[property]);

export const applyAdaptively = (itemOrArray, func) => (isArray(itemOrArray) ? map(itemOrArray, func) : func(itemOrArray));

export const money = (value = 0) =>
  currency(parseFloat(value), {
    precision: 2,
    symbol: 'R$ ',
    separator: '.',
    decimal: ',',
  }).format();

export const date = (value, valueFormat) => (valueFormat ? moment(value).format(valueFormat) : moment(value).fromNow());


export function getFirstItem(array) {
  const arr = [...array];
  return arr.shift();
}

export function validEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export function generateFileLink(file, setFileLink) {
  if (!isNil(file)) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = function (e) {
      let fileBlob = new Blob([e.target.result], { type: file.type });
      let documentURL = window.URL.createObjectURL(fileBlob);
      setFileLink(documentURL);
    };
  }
}

export function verifyInputValue(type, value) {
  if (type === 'document') {
    const document = onlyDigits(value);

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
