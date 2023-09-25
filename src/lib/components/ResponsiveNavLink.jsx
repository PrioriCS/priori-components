import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { twMerge } from 'tailwind-merge';

export default function ResponsiveNavLink({ method = 'get', as = 'a', href, active = false, children }) {
  return (
    <Link
      method={method}
      as={as}
      href={href}
      className={twMerge(
        'w-full flex items-start pr-4 py-3 w-60',
        active ? 'bg-[#e4ebff] text-primary-900' : 'text-gray-700',
        'rounded-xl text-base font-medium focus:outline-none transition duration-150 ease-in-out'
      )}>
      {children}
    </Link>
  );
}
