import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Panel({
  noPadding,
  className = '',
  noShadow,
  borderColor = 'sm',
  backgroundColor = 'white',
  radius = 'sm',
  ...rest
}) {
  const availableBorderColors = {
    none: 'border-none',
    sm: 'border-gray-200',
    md: 'border-gray-300',
    xl: 'border-primary-200',
    amber: 'border-amber-600',
    green: 'border-green-800',
    red: 'border-red-700',
    black: 'border-black',
  };

  const availableBorderRadius = {
    sm: 'rounded-xl',
    rightXl: 'rounded-r-xl',
  };

  const availableBackgroundColors = {
    white: 'bg-white',
    primary: 'bg-primary-50',
  };

  return (
    <div
      className={twMerge(
        noPadding ? '' : 'p-8',
        availableBackgroundColors[backgroundColor],
        availableBorderRadius[radius],
        'xl:border',
        availableBorderColors[borderColor],
        noShadow ? '' : 'xl:shadow-[0_0_50px_-22px_rgba(30,64,175,0.15)] shadow-gray-400',
        className
      )}
      {...rest}
    />
  );
}
//fix