import React from 'react';
import { render, screen } from '@testing-library/react';
import  Row  from '../components/Row';


describe('Row Test', () => {
  test('Render Row Empty', () => {
    render(<Row />);
    const statusElement = screen.queryByText(/.+/);
    expect(statusElement).toBeNull();
  });
});