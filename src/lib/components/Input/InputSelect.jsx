import { isNil } from 'lodash';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function InputSelect({ value, key, disabled, center, onChange, options }) {
  return (
    <select
      value={isNil(value) ? '' : value}
      key={key}
      disabled={disabled}
      className={twMerge(
        'py-4 w-full border-none text-sm',
        center ? 'text-center' : '',
        disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : ''
      )}
      onChange={onChange}>
      <option value='' disabled>
        Selecionar
      </option>
      {options.map((option) => (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
}
