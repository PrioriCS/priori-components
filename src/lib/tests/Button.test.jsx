import React from 'react';
import Button from '../components/Button';
import { expect, test } from '@jest/globals';
import { create } from 'react-test-renderer';
import { MdRadar } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { render, fireEvent } from '@testing-library/react';

const colors = {
  contained: {
    strong: 'bg-primary-900 text-white active:bg-primary-1000 border-none',
    normal: 'bg-primary-700 text-white active:bg-primary-800 border-none',
    weak: 'bg-primary-400 text-white active:bg-primary-500 border-none',
    disabled: 'bg-gray-100 text-gray-300 border-none',
    danger: 'bg-red-600 text-white active:bg-red-700 border-none',
    teal: 'bg-teal-600 text-white active:bg-teal-700  border-none',
    cyan: 'bg-cyan-600 text-white active:bg-cyan-600 border-none',
    indigo: 'bg-indigo-600 text-white active:bg-indigo-700 border-none',
    purple: 'bg-purple-600 text-white active:bg-purple-800 border-none',
    orange: 'bg-orange-600 text-white active:bg-orange-800 border-none',
  },
  outlined: {
    strong: 'bg-primary-100 text-primary-700 active:bg-primary-200 border border-primary-700',
    normal: 'bg-gray-100 text-primary-900 active:bg-gray-200 border border-primary-900',
    weak: 'bg-white text-primary-900 active:bg-gray-50 border border-primary-900',
    transparent: 'bg-transparent text-primary-700 active:bg-primary-100 border border-primary-700',
    disabled: 'bg-white text-gray-300',
    danger: 'bg-white text-red-600 active:bg-gray-50 border border-red-600',
    teal: 'bg-orange-50 text-orange-500 active:bg-orange-100 border border-orange-500',
    purple: 'bg-purple-50 text-purple-600 active:bg-purple-100 border border-purple-600',
    slate: 'bg-slate-100 text-slate-400 active:bg-slate-200 border border-slate-400',
    red: 'bg-red-50 text-red-600 active:bg-red-100 border border-red-600',
    green: 'bg-green-50 text-green-600 active:bg-green-100 border border-green-600',
    gray: 'bg-white text-gray-700 border border-gray-300',
  },
  plain: {
    strongest: 'bg-primary-700 text-white active:bg-primary-800 border-none',
    strong: 'bg-primary-100 text-primary-700 active:bg-primary-200 border-none',
    normal: 'bg-gray-200 text-primary-800 active:bg-gray-300 border-none',
    weak: 'bg-white text-primary-900 active:bg-gray-50 border-none',
    danger: 'bg-white text-red-600 active:bg-gray-50 border-none',
    disabled: 'bg-gray-100 text-gray-300 border-none',
    alternative: 'border-none',
  },
};

const shadowsAvailable = {
  bottom: 'drop-shadow-[0_5px_6px_rgba(37,99,235,0.3)] shadow-primary-900',
  all: 'drop-shadow-[0_0_8px_rgba(37,99,235,0.5)] shadow-primary-900',
};

const borders = {
  square: 'rounded-lg',
  standard: 'rounded-xl',
  circle: 'rounded-full',
};

const scale = {
  xs: 'py-1.5',
  sm: 'py-2.5',
  md: 'py-3',
  lg: 'py-3.5',
};

let disabled = false;
let loading = false;
let className = '';
let wide = false;
let responsive = false;
let onlyIcon = false;
let size = 'md';
let style = 'contained';
let color = 'strong';
let border = 'standard';
let shadow = false;

describe('Button ClassNames test', () => {
  const component = create(
    <Button
      style={style}
      size={size}
      color={color}
      shadow={shadow}
      border={border}
      disabled={disabled}
      loading={loading}
      className={className}
      wide={wide}
      responsive={responsive}
      onlyIcon={onlyIcon}
      onClick={() => console.log('.')}
    />
  ).toTree();

  test('Test Button classNames enabled', () => {
    expect(component.rendered.type).toBe('button');
    expect(component.rendered.props.className).toBe(
      twMerge(
        'border flex items-center justify-center transition ease-in-out duration-150 font-medium',
        responsive ? 'text-sm sm:text-base' : 'text-base',
        onlyIcon ? 'px-3' : 'px-5',
        scale[size],
        colors[style][disabled || loading ? 'disabled' : color],
        borders[border],
        wide ? 'w-full justify-center' : '',
        className,
        !disabled && !loading ? shadowsAvailable[shadow] : ''
      )
    );
  });
});

describe('Button render', () => {
  const component = create(<Button icon={MdRadar}>teste</Button>).toTree();

  test('Button render', () => {
    expect(component.type).toBe(Button);
  });
  test('nest 1 Button', () => {
    expect(component.rendered.type).toBe('button');
  });
  test('nest 2 Button', () => {
    expect(component.rendered.rendered[0]).toBe('teste');
    expect(component.rendered.rendered[1]).toBe(' ');
    expect(component.rendered.rendered[2].type).toBe(MdRadar);
  });
});

test('Test button click event', () => {
  const onClick = jest.fn();
  const { getByText } = render(<Button onClick={onClick}>Click Me</Button>);

  const button = getByText('Click Me');
  fireEvent.click(button);

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('Test Button wide', () => {
  const { getByText } = render(<Button wide={true}>Wide</Button>);

  const button = getByText('Wide');
  expect(button.getAttribute('class')).toContain('w-full');
});

