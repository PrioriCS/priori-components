import React from 'react';

export default function IconButton({
  icon: Icon,
  small,
  base,
  className = '',
  bgColor = 'grayWeak',
  borderColor = 'primaryStrong',
  radius = 'full',
  ...rest
}) {
  const availableBackgroundColors = {
    grayWeak: 'bg-gray-200 text-gray-500',
    white: 'bg-white text-primary-700 hover:bg-primary-700 hover:text-white transition-all hover:transition-all delay-100',
  };

  const avaliableBordersColors = {
    primaryStrong: 'border border-primary-700',
    none: 'border-none',
  };

  const availableBordersRadius = {
    rounded: 'rounded',
    full: 'rounded-full',
  };

  return (
    <button
      type='button'
      className={`${availableBackgroundColors[bgColor]} ${avaliableBordersColors[borderColor]} ${className} ${availableBordersRadius[radius]} p-1 h-fit`}
      {...rest}>
      <Icon className={`${small ? 'text-sm' : base ? 'text-base' : 'text-lg'}`} data-testid='icon' />
    </button>
  );
}
