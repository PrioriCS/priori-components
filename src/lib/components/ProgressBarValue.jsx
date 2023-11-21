import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function ProgressBarValue({ percentage = '', complement = '', value = '', small = false, wide = false }) {
  return (
    <div
      className={twMerge(small ? 'p-1' : 'p-2 bg-white my-3 mr-5 rounded-full border border-primary-100', wide ? 'w-full' : '')}
      data-testid='progress-bar-value'>
      <div className={twMerge(small ? 'py-3.5' : 'py-4', 'bg-primary-100 rounded-full relative flex justify-center')}>
        <div
          className={twMerge(
            small ? 'py-3.5' : 'py-4',
            percentage > 100 ? 'bg-red-600' : 'bg-primary-900',
            'top-0 left-0  rounded-full text-white absolute transition-all duration-700'
          )}
          style={{ width: percentage + '%' }}
          data-testid='progress-bar-fill' //
        ></div>
        <div className='text-primary-400 z-10 absolute top-1/2 translate-y-[-50%] text-sm'>
          vendido {value} de {complement}
        </div>
      </div>
    </div>
  );
}
