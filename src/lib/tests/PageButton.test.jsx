import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import PageButton from '../components/PageButton';

describe('PageButton', () => {
  it('renders with number if no icon provided', () => {
    const { getByText } = render(<PageButton number={1} />);
    expect(getByText('1')).toBeInTheDocument();
  });

  it('renders with icon if provided', () => {
    const { getByTestId } = render(<PageButton icon={() => <div data-testid='icon' />} />);
    expect(getByTestId('icon')).toBeInTheDocument();
  });

  it('is active and disabled when specified', () => {
    const { container } = render(<PageButton active disabled />);
    expect(container.firstChild).toHaveClass('bg-primary-100 text-primary-900 opacity-50');
  });

  it('calls the provided function when clicked', () => {
    const onClick = jest.fn();
    const { container } = render(<PageButton number={1} onClick={onClick} />);
    const button = container.firstChild;

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
