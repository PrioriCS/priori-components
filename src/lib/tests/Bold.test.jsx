import React from 'react';
import { render } from '@testing-library/react';
import Bold from '../components/Bold';

describe('Bold', () => {
  it('renders children with font-bold class', () => {
    const { getByText } = render(<Bold>Hello, world!</Bold>);
    const boldElement = getByText('Hello, world!');

    expect(boldElement).toBeInTheDocument();
    expect(boldElement).toHaveClass('font-bold');
  });
});
