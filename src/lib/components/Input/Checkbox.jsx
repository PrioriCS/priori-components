import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Checkbox({
  cursor = 'cursor-normal',
  color = 'primary900',
  border = 'rounded',
  size = '',
  borderColor = 'default',
  className = '',
  ...rest
}) {
  const textColors = {
    primary600: 'text-primary-600',
    primary900: 'text-primary-900',
    teal600: 'text-teal-600',
  };

  const avaliableBorderColors = {
    default: 'border-gray-300 focus:border-primary-200',
    white: 'border-gray-300 border-2 checked:border-white focus:border-teal-200',
  };

  return (
    <input
      type='checkbox'
      className={twMerge(
        'shadow-sm focus:ring focus:ring-primary-200 focus:ring-opacity-50',
        border,
        textColors[color],
        cursor,
        size,
        avaliableBorderColors[borderColor],
        className
      )}
      {...rest}
    />
  );
}
