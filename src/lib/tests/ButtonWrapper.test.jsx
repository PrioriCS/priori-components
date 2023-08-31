import React from 'react';
import { render } from '@testing-library/react';
import ButtonWrapper from '../components/ButtonWrapper';

describe('ButtonWrapper', () => {
  it('renders with additional props', () => {
    const { container } = render(<ButtonWrapper className="custom-button" />);
    const button = container.querySelector('.custom-button');

    expect(button).toBeInTheDocument();
  });
});
