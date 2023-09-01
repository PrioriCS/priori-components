import React from 'react';

export default function Status({ data, className = '' }) {
  return data ? <div className={`${className} font-medium text-sm text-green-600`}>{data}</div> : null;
}
