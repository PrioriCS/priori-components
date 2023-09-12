import React from 'react';

export default function ApplicationLogo({ className = '', logo = '', size = 'sm:w-36 h-36' }) {
  const availableLogos = {
    primary: '/images/newlog-logo-white.png',
    secondary: '/images/newlog-logo.png',
  };
  return <img src={availableLogos[logo]} className={`${size} object-contain ${className}`} />;
}
