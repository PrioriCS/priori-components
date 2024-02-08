import { isEmpty, noop } from 'lodash';
import { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

export default function InputSelection({ options, selected, disabled, handleSelection = noop, text = '', Skey = 'name' }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={twMerge(
        'flex items-center border border-gray-300 rounded bg-white py-1.5 px-4  relative justify-center',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      )}
      onClick={() => setOpen((previsousState) => !previsousState)}>
      <p className={`flex justify-center w-full truncate ${isEmpty(selected) ? 'text-gray-500' : ''}`}>
        {isEmpty(selected) ? `Selecionar ${text}` : selected[Skey]}
      </p>
      <MdArrowForwardIos className={`transition-all delay-75 ${open && !disabled ? '-rotate-90' : 'rotate-90'}`} />
      {open && !disabled && (
        <div className='absolute max-h-48 overflow-y-scroll top-8 left-0 bg-white w-full rounded p-2 z-10 border  divide-y  drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] shadow-gray-600'>
          {options?.map((option) => (
            <div key={option.id} className='py-1.5' onClick={() => handleSelection(option)}>
              {option[Skey]}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
