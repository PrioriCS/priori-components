import React from 'react';
import { render } from '@testing-library/react';
import Label from '../components/Label';

describe('Label', () => {
  test('renders with correct props and children', () => {
    const forInput = 'input-id';
    const value = 'Label Value';
    const className = 'custom-class';
    const noTextColor = true;
    const fontSize = 'lg';

    const { getByTestId } = render(
      <Label forInput={forInput} value={value} className={className} noTextColor={noTextColor} fontSize={fontSize} />
    );

    const labelElement = getByTestId('label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', forInput);
    expect(labelElement).toHaveClass('text-lg', 'block', 'custom-class');
  });

  test('renders children when value is not provided', () => {
    const forInput = 'input-id';
    const children = 'Label Children';

    const { getByTestId } = render(
      <Label forInput={forInput} noTextColor fontSize='responsiveBase'>
        {children}
      </Label>
    );

    const labelElement = getByTestId('label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', forInput);
    expect(labelElement).toHaveClass('text-sm', 'sm:text-base', 'block');
  });

  test('renders with default text color when noTextColor is false', () => {
    const forInput = 'input-id';
    const value = 'Label Value';
    const noTextColor = true;

    const { getByTestId } = render(<Label forInput={forInput} value={value} noTextColor={noTextColor} />);

    const labelElement = getByTestId('label');
    expect(labelElement).toBeInTheDocument();
    expect(labelElement).not.toHaveClass('text-gray-600');
  });
});
