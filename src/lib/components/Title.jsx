import React from 'react';
import { twMerge } from 'tailwind-merge';
export default function Title({ color = 'primary', size = 'xl', weight = 'light', className = '', children }) {
  const availableSizes = { xs: 'text-xs', sm: 'text-sm', md: 'text-lg', lg: 'text-xl', xl: 'text-3xl' };
  const availableWeights = {
    thin: 'font-thin',
    extraLight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semiBold: 'font-semibold',
    bold: 'font-bold',
    extraBold: 'font-extrabold',
    black: 'font-black',
  };
  const colors = { primary: 'text-primary-900', red: 'text-red-600' };
  return <h1 className={twMerge(colors[color], availableSizes[size], availableWeights[weight], className)}>{children}</h1>;
}
