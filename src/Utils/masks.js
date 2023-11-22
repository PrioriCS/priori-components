import { onlyDigits } from './utils';

export const normalizeMoney = (money) => {
  const moneyString = money.toString();
  const moneyFormatted = moneyString?.replace(/\D/g, '');

  return moneyFormatted
    ?.split('')
    .reverse()
    .join('')
    .replace('.', '')
    .replace(/(\d{2})/, '$1,')
    .replace(/(\d{3}(?!$))/g, '$1.')
    .split('')
    .reverse()
    .join('');
};

export function generateInputMask(type, value) {
  let mask = '';

  if (type === 'phone' || type === 'tel') {
    if (onlyDigits(value).length > 12) {
      mask = '99(99)99999-9999';
    } else if (onlyDigits(value).length > 11) {
      mask = '99(99)9999-99999';
    } else if (onlyDigits(value).length > 10) {
      mask = '(99)99999-99999';
    } else {
      mask = '(99)9999-99999';
    }
  } else if (type === 'document') {
    if (onlyDigits(value).length > 11) {
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
