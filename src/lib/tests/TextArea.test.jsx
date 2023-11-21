import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextArea from '../components/TextArea';

describe('TextArea', () => {
  it('renders a textarea element', () => {
    const { getByTestId } = render(<TextArea />);
    const textarea = getByTestId('textarea-test');
    expect(textarea).toBeInTheDocument();
  });

  it('applies the wide class when wide prop is true', () => {
    const { getByTestId } = render(<TextArea wide />);
    const textarea = getByTestId('textarea-test');
    expect(textarea).toHaveClass('w-full');
  });

  it('applies the readonly and disabled attributes when readOnly or disabled props are true', () => {
    const { getByTestId } = render(<TextArea readOnly disabled />);
    const textarea = getByTestId('textarea-test');
    expect(textarea).toHaveAttribute('readonly');
    expect(textarea).toHaveAttribute('disabled');
  });

  it('applies the appropriate CSS classes when readOnly or disabled props are true', () => {
    const { getByTestId } = render(<TextArea readOnly disabled />);
    const textarea = getByTestId('textarea-test');
    expect(textarea).toHaveClass('bg-gray-50 text-gray-400');
  });

  it('calls the provided function when changed', () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<TextArea onChange={onChange} />);
    const textarea = getByTestId('textarea-test');

    fireEvent.change(textarea, { target: { value: 'Test text' } });

    expect(onChange).toHaveBeenCalled();
  });
});
