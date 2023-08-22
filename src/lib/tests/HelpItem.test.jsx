import React from 'react';
import { render } from '@testing-library/react';
import HelpItem from '../components/HelpItem';

test('Renders HelpItem components correctly', () => {
  const { getByTestId, getByText } = render(<HelpItem icon={() => <div data-testid='icon' />}>Conteúdo de exemplo</HelpItem>);

  const icon = getByTestId('icon');
  expect(icon).toBeInTheDocument();

  const content = getByText('Conteúdo de exemplo');
  expect(content).toBeInTheDocument();
});
