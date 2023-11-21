// NavLink.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavLink from '../components/NavLink';

describe('NavLink', () => {
  test('should render the children correctly', () => {
    const { getByText } = render(<NavLink href='/page'>Click Me!</NavLink>);
    const linkElement = getByText('Click Me!');
    expect(linkElement).toBeInTheDocument();
  });

  test('should have the correct href attribute', () => {
    const { getByRole } = render(<NavLink href='/page'>Link</NavLink>);
    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/page');
  });

  test('should have the "disabled" attribute and be a span when disabled is true', () => {
    const { getByText } = render(<NavLink disabled={true}>Disabled Link</NavLink>);
    const linkElement = getByText('Disabled Link');
    expect(linkElement).toHaveClass(
      ' flex items-center font-medium text-base text-primary-900 hover:text-primary-700 cursor-pointer'
    );
    expect(linkElement.tagName.toLowerCase()).toBe('span');
  });

  test('should have the "a" tag when disabled is false', () => {
    const { getByRole } = render(<NavLink href='/page'>Clickable Link</NavLink>);
    const linkElement = getByRole('link');
    expect(linkElement).not.toHaveAttribute('disabled');
    expect(linkElement.tagName.toLowerCase()).toBe('a');
  });

  test('should have the correct class when active is true', () => {
    const { getByRole } = render(
      <NavLink href='/page' active={true}>
        Active Link
      </NavLink>
    );
    const linkElement = getByRole('link');
    expect(linkElement).toHaveClass('rounded-xl');
  });

  test('should have the correct class when hover is false', () => {
    const { getByRole } = render(
      <NavLink href='/page' hover={false}>
        Non-hoverable Link
      </NavLink>
    );
    const linkElement = getByRole('link');
    expect(linkElement).not.toHaveClass('hover:text-primary-700');
  });
});
