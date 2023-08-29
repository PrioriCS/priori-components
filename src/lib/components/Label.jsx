import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Label({ forInput, value, className = '', children, noTextColor, fontSize = 'sm' }) {
  const availableFontSizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    responsiveBase: 'text-sm sm:text-base',
    responsiveXL: 'text-base sm:text-xl',
  };

  return (
    <label
      htmlFor={forInput}
      className={twMerge('block', availableFontSizes[fontSize], noTextColor ? '' : 'text-gray-600', className)}
      data-testid='label'>
      {value ? value : children}
    </label>
  );
}
