import { isEmpty } from 'lodash';
import { ButtonWrapper } from 'prioricomponents';
import React from 'react';
import InputMask from 'react-input-mask';
import { twMerge } from 'tailwind-merge';

function Input({
  type = 'text',
  error = false,
  className = '',
  isFocused = false,
  value = '',
  mask = '',
  maskchar = '_',
  icon: Icon,
  iconColor = 'gray',
  onIconClick,
  round = 'xs',
  size = 'default',
  readOnly,
  disabled,
  alignLeft,
  forwardedRef,
  uppercase = false,
  ...rest
}) {
  const InputComponent = isEmpty(mask) ? 'input' : InputMask;

  const IconWrapper = onIconClick ? ButtonWrapper : 'div';

  const inputRef = React.useRef(null);

  const availableIconColors = {
    gray: 'text-gray-300',
    primary: 'text-primary-600',
  };

  const radius = {
    none: 'rounded-none',
    xs: 'rounded',
    sm: 'rounded-md',
    md: 'rounded-xl',
    lg: 'rounded-full',
  };

  const sizes = {
    xs: 'px-3 py-0.5',
    sm: 'px-3 py-1.5',
    md: 'px-3 py-2',
    default: 'p-3',
  };

  const inputProps = {
    disabled: readOnly || disabled,
    readOnly: readOnly,
    type: type,
    value: uppercase ? value.toUpperCase() : value,
    autoFocus: isFocused,
    className: `
      ${Icon ? 'pr-10 truncate' : ''}
      ${sizes[size]} border-gray-300 ${radius[round]} shadow-sm 
      ${
        error
          ? 'border-red-600 ring ring-red-400 ring-opacity-50 focus:border-red-600 focus:ring focus:ring-red-400 focus:ring-opacity-50'
          : 'focus:border-primary-700 focus:ring focus:ring-primary-300 focus:ring-opacity-50 '
      }
      ${readOnly || disabled ? 'bg-gray-50 text-gray-400 cursor-not-allowed' : ''}
      ${className}
    `,
    ref: inputRef,
    ...rest,
  };

  if (InputComponent === InputMask) {
    inputProps.mask = isEmpty(value) ? '' : mask;
    inputProps.maskChar = maskchar;
  }

  React.useImperativeHandle(forwardedRef, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return (
    <div
      className={twMerge(
        'flex flex-1 flex-col',
        disabled ? 'cursor-not-allowed' : '',
        alignLeft ? 'items-start' : 'items-center',
        relative
      )}>
      <InputComponent {...inputProps} />

      {Icon && (
        <div className='absolute top-0 bottom-0 right-0 pr-4 flex items-center'>
          <IconWrapper onClick={onIconClick}>
            <Icon className={twMerge('sm:w-6 h-6', onIconClick ? 'text-primary-500' : availableIconColors[iconColor])} />
          </IconWrapper>
        </div>
      )}
    </div>
  );
}

export default React.forwardRef((props, ref) => <Input {...props} forwardedRef={ref} />);
