import React from 'react';
import { Button, IconButton } from 'prioricomponents';
import { MdArrowForwardIos, MdOutlineClose } from 'react-icons/md';
import { noop } from 'lodash';
import { twMerge } from 'tailwind-merge';

export default function Dialog({
  visible,
  title,
  closeButton = true,
  onClose = noop,
  onConfirm = noop,
  children,
  buttons = true,
  width = 'md',
  seeingOnly,
  buttonSize = 'md',
  customWidth,
  height,
  center = false,
  withoutTitle = false,
  withouCloseButton = false,
}) {
  function handleSubmit(e) {
    e.preventDefault();

    onConfirm();

    return false;
  }

  const availableWidths = {
    custom: customWidth,
    xs: 'sm:w-auto w-11/12',
    sm: 'xl:w-2/6 sm:w-2/3 w-11/12',
    md: 'sm:w-1/2 w-11/12',
    lg: 'w-2/3',
    full: 'w-11/12',
    responsive: 'w-2/5 2xl:w-2/6',
    responsiveMd: 'w-full sm:w-4/5 xl:w-2/4 2xl:w-2/5',
    responsiveFull: 'w-11/12 xl:w-1/2',
  };

  return (
    <div
      className={twMerge(
        'fixed top-0 z-[100] left-0 bottom:0 right:0 justify-center w-full bg-white-900 backdrop-blur-[3px] min-h-screen drop-shadow-[0_0_8px_rgba(0,0,0,0.3)] shadow-black-900',
        visible ? 'flex' : 'hidden',
        height
      )}>
      <div
        className={twMerge(
          'absolute bg-white xl:p-8 p-3 flex flex-col',
          availableWidths[width],
          height,
          center ? 'top-[50%] -translate-y-[50%] rounded-2xl ' : 'rounded-b-2xl '
        )}>
        <div className={twMerge(' justify-between border-b', withoutTitle ? 'hidden' : 'flex')}>
          <span className='sm:text-3xl text-xl font-medium text-primary-900 xl:pb-7 pb-2'>{title}</span>
          {closeButton && !withouCloseButton && <IconButton bgColor='white' icon={MdOutlineClose} onClick={onClose} />}
        </div>
        {seeingOnly ? (
          <form className='block' data-testid='form' onSubmit={handleSubmit}>
            {children}
          </form>
        ) : (
          <div className='block h-full' data-testid='form' onSubmit={handleSubmit}>
            {children}
          </div>
        )}

        {buttons && (
          <div className='flex mt-10 justify-end'>
            <Button
              size={buttonSize}
              className='mr-6'
              data-testid='closeButton'
              style='outlined'
              color='weak'
              responsive
              onClick={() => onClose()}>
              Fechar
            </Button>
            <Button
              className='drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] shadow-primary-900'
              data-testid='confirmButton'
              onClick={() => onConfirm()}
              responsive
              size={buttonSize}>
              Confirmar <MdArrowForwardIos className='ml-2' />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
