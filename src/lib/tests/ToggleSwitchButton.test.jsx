import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ToggleSwitchButton from '../components/ToggleSwitchButton';


describe('ToggleSwitchButton', () => {
  test('should render the component with default props', () => {
    const { container } = render(<ToggleSwitchButton />);
    expect(container).toBeInTheDocument();
  });

  test('should have the inactive state when "active" prop is false', () => {
    const { getByTestId } = render(<ToggleSwitchButton active={false} />);
    const switchButton = getByTestId('toggle-switch');
    expect(switchButton).toHaveClass('w-8 h-4 flex items-center p-1 relative rounded-full');
  });

  test('should have the active state when "active" prop is true', () => {
    const { getByTestId } = render(<ToggleSwitchButton active={true} />);
    const switchButton = getByTestId('toggle-switch');
    expect(switchButton).toHaveClass('w-8 h-4 flex items-center p-1 relative rounded-full');
  });

  test('should call the onClick event handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByTestId } = render(<ToggleSwitchButton active={false} onClick={onClickMock} />);
    const switchButton = getByTestId('toggle-switch');

    fireEvent.click(switchButton);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
