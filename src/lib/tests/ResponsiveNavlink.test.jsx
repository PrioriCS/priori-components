import React from 'react';
import { render } from '@testing-library/react';
import ResponsiveNavLink from '../components/ResponsiveNavLink';
test('renders a link with provided href', () => {
  const { getByText } = render(<ResponsiveNavLink href='/example'>Example Link</ResponsiveNavLink>);

  const linkElement = getByText('Example Link');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement.tagName).toBe('A');
  expect(linkElement).toHaveAttribute('href', '/example');
});

test('applies active styles when active prop is true', () => {
  const { getByText } = render(
    <ResponsiveNavLink href='/example' active={true}>
      Active Link
    </ResponsiveNavLink>
  );

  const linkElement = getByText('Active Link');
  expect(linkElement).toHaveClass('bg-[#e4ebff] text-primary-900');
});

test('applies default styles when active prop is false', () => {
  const { getByText } = render(
    <ResponsiveNavLink href='/example' active={false}>
      Inactive Link
    </ResponsiveNavLink>
  );

  const linkElement = getByText('Inactive Link');
  expect(linkElement).toHaveClass('text-gray-700');
});
