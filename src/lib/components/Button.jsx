import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Button({
  type = 'button',
  className = '',
  loading,
  shadow = '',
  color = '',
  size = 'md',
  disabled,
  wide = false,
  border = 'standard',
  icon: Icon,
  children,
  responsive,
  onlyIcon = false,
  ...rest
}) {
  const shadowsAvailable = {
    bottom: 'drop-shadow-[0_5px_6px_rgba(37,99,235,0.3)] shadow-primary-900',
    all: 'drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] shadow-primary-900',
  };

  const borders = {
    square: 'rounded-lg',
    standard: 'rounded-xl',
    circle: 'rounded-full',
  };

  const scale = {
    xs: 'py-1.5',
    sm: 'py-2.5',
    md: 'py-3',
    lg: 'py-3.5',
  };

  return (
    <button
      type={type}
      className={twMerge(
        'border flex items-center justify-center transition ease-in-out duration-150 font-medium',
        responsive ? 'text-sm sm:text-base' : 'text-base',
        onlyIcon ? 'px-3' : 'px-5',
        scale[size],
        color,
        borders[border],
        wide ? 'w-full justify-center' : '',
        className,
        !disabled && !loading ? shadowsAvailable[shadow] : ''
      )}
      disabled={disabled || loading}
      {...rest}>
      {children} {Icon && <Icon className={`${onlyIcon ? 'mx-1' : 'ml-3'} text-base`} />}
    </button>
  );
}
