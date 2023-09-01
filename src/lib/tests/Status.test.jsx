import React from 'react';
import { render, screen } from '@testing-library/react';
import Status from '../components/Status';

describe('Status Test', () => {
  test('Render empty status', () => {
    render(<Status />);
    const statusElement = screen.queryByText(/.+/);
    expect(statusElement).toBeNull();
  });

  test('Render status with data', () => {
    const data = 'Active';
    render(<Status data={data} />);
    const statusElement = screen.getByText(data);
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveClass('font-medium');
    expect(statusElement).toHaveClass('text-sm');
    expect(statusElement).toHaveClass('text-green-600');
  });
});
