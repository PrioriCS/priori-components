import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ProgressBarValue from '../components/ProgressBarValue';
describe('ProgressBarValue Component', () => {
  it('should render the ProgressBarValue component without any errors', () => {
    const percentage = 50;
    const complement = '100';
    const value = '50';
    const small = true;
    const wide = false;

    const { getByText, getByTestId } = render(
      <ProgressBarValue percentage={percentage} complement={complement} value={value} small={small} wide={wide} />
    );

    const progressBarValue = getByTestId('progress-bar-value');
    const progressBarFill = getByTestId('progress-bar-fill');
    const progressBarText = getByText(`vendido ${value} de ${complement}`);

    expect(progressBarValue).toHaveClass(small ? 'p-1' : 'p-2 bg-white my-3 mr-5 rounded-full border border-primary-100');
    expect(progressBarFill).toHaveStyle({ width: `${percentage}%` });
    expect(progressBarText).toBeInTheDocument();
  });
});
