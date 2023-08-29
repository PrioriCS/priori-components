import React from 'react';
import { render } from '@testing-library/react';
import Labeled  from '../components/Labeled';

describe('Labeled', () => {
  test('renders with correct props', () => {
    const MockComponent = ({ name, id }) => <input type='text' name={name} id={id} />;

    const name = 'input-name';
    const label = 'Input Label';
    const className = 'custom-class';
    const testId = 'labeled-component';

    const { getByLabelText, getByTestId } = render(
      <Labeled component={MockComponent} name={name} label={label} className={className} data-test={testId} />
    );

    const labeledComponent = getByTestId(testId);
    expect(labeledComponent).toBeInTheDocument();
    expect(labeledComponent).toHaveClass('flex', 'items-center', className);

    const inputElement = getByLabelText('Input Label');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('name', name);
    expect(inputElement).toHaveAttribute('id', name);
  });
});
