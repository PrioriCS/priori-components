import React from 'react';
export default function SelectSection({ children, title, description = '' }) {
  return (
    <div className='w-full space-y-5 relative'>
      <div className='flex items-center space-x-2'>
        <p className='font-medium text-base'>{title}</p>
        {description && <span>-</span>}
        <p className='text-sm'>{description.toLowerCase()}</p>
      </div>

      {children}
    </div>
  );
}
