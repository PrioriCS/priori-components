import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectCheckboxesButton from '../components/SelectCheckboxesButton';

describe('SelectCheckboxesButton', () => {
  it('renders a button with the correct text and icon when allSelected is true', () => {
    const { getByText, getByTestId } = render(<SelectCheckboxesButton allSelected={true} onClick={() => {}} />);

    const button = getByText('Desmarcar todos');
    const icon = getByTestId('checkbox-icon');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('renders a button with the correct text and icon when allSelected is false', () => {
    const { getByText, getByTestId } = render(<SelectCheckboxesButton allSelected={false} onClick={() => {}} />);

    const button = getByText('Selecionar todos');
    const icon = getByTestId('checkbox-icon');

    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('calls the provided onClick function when clicked', () => {
    const onClick = jest.fn();
    const { getByText } = render(<SelectCheckboxesButton allSelected={true} onClick={onClick} />);

    const button = getByText('Desmarcar todos');
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
