import React from 'react';
import Button from '../components/Button';
import { expect, test } from '@jest/globals';
import { create } from 'react-test-renderer';
import { MdRadar } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';
import { render, fireEvent } from '@testing-library/react';

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
let color = '';
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
        color,
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
