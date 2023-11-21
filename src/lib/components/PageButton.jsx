import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function PageButton({ icon: Icon, number, active, disabled, className, ...rest }) {
  return (
    <button
      type='button'
      className={twMerge(
        'py-1 rounded-lg border border-gray-300 font-medium',
        Icon ? 'text-xl px-1.5' : 'text-sm px-2.5',
        active ? 'bg-primary-100 text-primary-900' : 'text-gray-500 bg-white',
        disabled ? 'opacity-50' : 'active:bg-primary-100 active:text-primary-900',
        className
      )}
      disabled={disabled}
      {...rest}>
      {Icon ? <Icon /> : number}
    </button>
  );
}
