import React from 'react';

export default function HelpItem({ icon: Icon, children }) {
  return (
    <li className='flex items-center'>
      <div className='border-2 border-primary-900 rounded-full flex items-center p-2'>
        <Icon className='text-lg' />
      </div>
      <div className='ml-4 text-sm'>{children}</div>
    </li>
  );
}
