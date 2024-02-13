import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function ProgressBarPercentage({ percentage = '', complement = '', small = false, wide = false }) {
  return (
    <div
      className={twMerge(
        small ? 'p-1' : 'p-2',
        'bg-white my-3 mr-5 rounded-full border border-primary-100',
        wide ? 'w-full' : ''
      )}
      data-testid='progress-bar'>
      <div className={twMerge(small ? 'py-3.5' : 'py-4', 'bg-primary-100 rounded-full relative flex justify-center')}>
        <div
          className={twMerge(
            small ? 'py-3.5' : 'py-4',
            'top-0 left-0 bg-primary-900 rounded-full text-white absolute transition-all duration-700'
          )}
          style={{ width: percentage + '%' }}></div>
        <div className='text-primary-400 z-10 absolute top-1/2 translate-y-[-50%] text-sm'>
          {percentage}% {complement}
        </div>
      </div>
    </div>
  );
}
