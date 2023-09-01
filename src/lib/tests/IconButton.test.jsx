import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MdArrowForwardIos } from 'react-icons/md';
import { IconButton } from '..';

describe('IconButton', () => {
  test('renders the button with correct styles and icon', () => {
    render(<IconButton icon={MdArrowForwardIos} />);

    const button = screen.getByRole('button');
    const icon = screen.getByTestId('icon');

    expect(button).toHaveClass('bg-gray-200');
    expect(button).toHaveClass('border');
    expect(button).toHaveClass('border-primary-700');
    expect(button).toHaveClass('rounded-full');
    expect(button).toHaveClass('p-1');

    expect(icon).toHaveClass('text-lg');
  });

  test('invokes the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<IconButton icon={MdArrowForwardIos} onClick={handleClick} />);

    const button = screen.getByRole('button');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
