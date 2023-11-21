import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressBarPercentage from '../components/ProgressBarPercentage';

describe('ProgressBarPercentage Test', () => {
  test('Render Empty ProgressBarPercentage', () => {
    render(<ProgressBarPercentage />);
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toBeInTheDocument();
  });

  test('Render ProgressBarPercentage with Components', () => {
    const percentage = 60;
    const complement = 'Complete';
    const small = true;
    const wide = false;
    render(<ProgressBarPercentage percentage={percentage} complement={complement} small={small} wide={wide} />);
  });
  test('ProgressBar Percentage Receiving CSS classes', () => {
    render(<ProgressBarPercentage />);
    const progressBar = screen.getByTestId('progress-bar');
    expect(progressBar).toHaveClass('p-2 bg-white my-3 mr-5 rounded-full border border-primary-100');
    expect(progressBar).not.toHaveClass('p-1');
  });
});
