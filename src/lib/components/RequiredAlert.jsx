import React from 'react';
import { MdAnnouncement, MdError } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

export default function RequiredAlert({ alert, setAlert, message, error = false }) {
  return (
    <div className='absolute right-5 cursor-help'>
      {alert ? (
        <div
          className={twMerge(
            'flex items-center bg-white py-2.5 px-4 rounded-xl text-xs border',
            error ? 'border-red-500' : 'border-yellow-400'
          )}
          onMouseLeave={() => setAlert((previousState) => !previousState)}>
          <span>
            <span className='font-medium text-gray-700'>{error ? 'Erro:' : 'Aviso:'}</span> {message}
          </span>
        </div>
      ) : (
        <div
          className={twMerge(error ? 'text-red-500' : 'text-yellow-400', 'text-2xl flex items-center')}
          onMouseEnter={() => setAlert((previousState) => !previousState)}>
          {error ? <MdError /> : <MdAnnouncement />}
        </div>
      )}
    </div>
  );
}
