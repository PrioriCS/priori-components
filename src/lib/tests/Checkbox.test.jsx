import { render } from '@testing-library/react';
import Checkbox from '../components/Input/Checkbox';

describe('Checkbox', () => {
  it('should pass additional props to the checkbox element', () => {
    const checkbox = render(<Checkbox id='my-checkbox' name='my-checkbox' />);

    expect(checkbox.container.querySelector('input')).toHaveAttribute('id', 'my-checkbox');
    expect(checkbox.container.querySelector('input')).toHaveAttribute('name', 'my-checkbox');
  });
});
