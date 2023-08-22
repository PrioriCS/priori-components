import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function Anchor({ className = '', ...rest }) {
  return <Link className={twMerge('hover:underline hover:text-primary-900', className)} {...rest} />;
}
