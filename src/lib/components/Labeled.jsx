import React from 'react';
import { twMerge } from 'tailwind-merge';
import Label  from '../components/Label';

export default function Labeled({ component: Component, name, label, className = '', ...rest }) {
  return (
    <div className={twMerge('flex items-center', className)} data-testid='labeled-component'>
      <Component name={name} id={name} {...rest} />

      <Label forInput={name} value={label} className='ml-3' />
    </div>
  );
}


  