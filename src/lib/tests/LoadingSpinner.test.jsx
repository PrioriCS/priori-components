import React from 'react';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';

describe('LoadingSpinner Component', () => {
  test('renders with default props', () => {
    render(<LoadingSpinner message='Loading...' />);
    const spinner = screen.getByRole('status');
    const message = screen.getByText('Loading...');

    expect(spinner).toBeInTheDocument();
    expect(message).toBeInTheDocument();

    expect(spinner).toHaveClass('flex');
    expect(spinner).toHaveClass('items-center');
    expect(spinner).toHaveClass('justify-center');
    expect(spinner).toHaveClass('flex-col');
    expect(spinner).toHaveClass('space-y-2');
    expect(message).toHaveClass('text-gray-600');
    expect(message).toHaveClass('font-medium');
    expect(message).toHaveClass('text-base');
  });

  test('renders with custom props', () => {
    render(<LoadingSpinner message='Custom Loading Message' row={true} size='sm' fontSize='sm' />);
    const spinner = screen.getByRole('status');
    const message = screen.getByText('Custom Loading Message');

    expect(spinner).toBeInTheDocument();
    expect(message).toBeInTheDocument();

    expect(spinner).toHaveClass('flex');
    expect(spinner).toHaveClass('items-center');
    expect(spinner).toHaveClass('justify-center');
    expect(spinner).toHaveClass('flex-row');
    expect(spinner).toHaveClass('space-x-2');
    expect(message).toHaveClass('text-gray-600');
    expect(message).toHaveClass('font-medium');
    expect(message).toHaveClass('text-sm');
  });
});
