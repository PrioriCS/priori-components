import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dialog from '../components/Dialog';

describe('Dialog', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Dialog visible={true} title="Test Dialog" onClose={() => {}} onConfirm={() => {}} />);
    
    const titleElement = getByText('Test Dialog');
    expect(titleElement).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onClose = jest.fn();
    const { getByTestId } = render(<Dialog visible={true} title="Test Dialog" onClose={onClose} onConfirm={() => {}} />);
    
    const closeButton = getByTestId('closeButton');
    fireEvent.click(closeButton);

    expect(onClose).toHaveBeenCalled();
  });

  it('calls onConfirm when confirm button is clicked', () => {
    const onConfirm = jest.fn();
    const { getByTestId } = render(<Dialog visible={true} title="Test Dialog" onClose={() => {}} onConfirm={onConfirm} />);
    
    const confirmButton = getByTestId('confirmButton');
    fireEvent.click(confirmButton);

    expect(onConfirm).toHaveBeenCalled();
  });
});