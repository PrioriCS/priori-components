import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { twMerge } from 'tailwind-merge';

export default function NavLink({
  href,
  active,
  children,
  autoAling = true,
  className = '',
  padding = '',
  fontSize = 'base',
  rounded = true,
  hover = true,
  disabled,
  textColor = 'primaryStrong',
  hoverColor = 'primaryStrong',
  clientSide = false,
  bgColor = 'default',
  ...rest
}) {
  const availableSizes = {
    base: 'text-base',
    md: 'text-lg',
    lg: 'text-xl xl:text-2xl',
    exl: 'text-2xl xl:text-3xl',
  };

  const availableBackgroundColors = {
    default: 'bg-[#e4ebff]',
    white: 'bg-white',
  };

  const activeClassName = `
    transition duration-150 ease-in-out ${availableBackgroundColors[bgColor]} text-primary-900
    ${rounded ? (clientSide ? 'rounded-l-2xl' : 'rounded-xl') : 'rounded-none'}
  `;

  const availableHoverColors = {
    primaryWeak: 'hover:text-primary-400',
    primaryStrong: 'hover:text-primary-700',
  };

  const inactiveClassName = `
    ${hover ? `${availableHoverColors[hoverColor]} cursor-pointer` : 'hover:text-primary-900 cursor-default'}
  `;

  const availableTextColors = {
    primaryWeak: 'text-primary-400',
    primaryStrong: 'text-primary-900',
  };

  return (
    <Link
      href={disabled ? undefined : href}
      disabled={disabled}
      as={disabled ? 'span' : 'a'}
      className={twMerge(
        'flex',
        autoAling ? 'items-center' : '',
        'font-medium',
        availableSizes[fontSize],
        padding,
        disabled ? 'text-gray-400' : '',
        availableTextColors[textColor],
        active ? activeClassName : inactiveClassName,
        className
      )}
      {...rest}>
      {children}
    </Link>
  );
}
