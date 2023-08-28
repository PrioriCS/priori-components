import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Row({ space = 'sm', children, className }) {
  const spaces = {
    sm: 'space-x-5',
  };

  return <div className={twMerge('flex', spaces[space], className)}>{children}</div>;
}
