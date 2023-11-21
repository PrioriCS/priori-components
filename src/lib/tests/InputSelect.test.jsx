import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import InputSelect from '../components/Input/InputSelect';

test('renders InputSelect component', () => {
  const options = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
  ];

  const { getByText } = render(
    <InputSelect value={1} onChange={() => {}} options={options} />
  );

  options.forEach((option) => {
    expect(getByText(option.name)).toBeInTheDocument();
  });

  expect(getByText('Selecionar')).toBeInTheDocument();
});

test('calls onChange when an option is selected', () => {
  const options = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
  ];

  const onChangeMock = jest.fn();

  const { getByText } = render(
    <InputSelect value={1} onChange={onChangeMock} options={options} />
  );

  fireEvent.change(getByText('Option 2'));

});