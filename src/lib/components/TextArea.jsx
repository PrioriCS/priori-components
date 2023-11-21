import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function TextArea({ className = '', wide = false, cols = '30', readOnly, disabled, ...rest }) {
  return (
    <textarea
      data-testid='textarea-test'
      cols={cols}
      rows='7'
      className={twMerge(
        'rounded-lg border-gray-300 resize-none focus:border-primary-900',
        readOnly || disabled ? 'bg-gray-50 text-gray-400' : '',
        wide ? 'w-full' : 'w-auto',
        className
      )}
      readOnly={readOnly}
      disabled={disabled || readOnly}
      {...rest}
    />
  );
}
