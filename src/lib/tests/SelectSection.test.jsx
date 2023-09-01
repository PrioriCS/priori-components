import React from 'react';
import { render } from '@testing-library/react';
import SelectSection from '../components/SelectSection';

describe('SelectSection', () => {
  it('renders with title only', () => {
    const { getByText, queryByText } = render(<SelectSection title="Section Title" />);
    const titleElement = getByText('Section Title');
    const descriptionElement = queryByText('-'); // Should not exist

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeNull();
  });

  it('renders with title and description', () => {
    const { getByText } = render(
      <SelectSection title="Section Title" description="Section Description" />
    );
    const titleElement = getByText('Section Title');
    const descriptionElement = getByText('section description');

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });

  it('renders children', () => {
    const { getByText } = render(
      <SelectSection title="Section Title">
        <p>Child content</p>
      </SelectSection>
    );
    const childElement = getByText('Child content');

    expect(childElement).toBeInTheDocument();
  });
});
