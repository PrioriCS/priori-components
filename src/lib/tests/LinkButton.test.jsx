import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LinkButton from '../components/LinkButton';
import { Inertia, shouldIntercept } from '@inertiajs/inertia';

jest.mock('@inertiajs/inertia', () => ({
  Inertia: {
    visit: jest.fn(),
  },
  shouldIntercept: jest.fn(),
}));

describe('LinkButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders with correct props', () => {
    const href = '/some-page';
    const onClick = jest.fn();
    const preserveScroll = false;
    const preserveState = false;
    const replace = false;
    const only = [];
    const component = 'button';
    const className = 'custom-class';
    const disabled = false;

    shouldIntercept.mockReturnValue(false);

    const { getByText } = render(
      <LinkButton
        href={href}
        onClick={onClick}
        preserveScroll={preserveScroll}
        preserveState={preserveState}
        replace={replace}
        only={only}
        component={component}
        className={className}
        disabled={disabled}>
        Link Button
      </LinkButton>
    );

    const buttonElement = getByText('Link Button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.tagName).toBe(component.toUpperCase());
    expect(buttonElement).toHaveClass('cursor-pointer', className);
    expect(buttonElement).not.toHaveAttribute('disabled');
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);

    expect(Inertia.visit).toHaveBeenCalledTimes(0);
  });

  test('calls Inertia.visit when shouldIntercept returns true', () => {
    const href = '/some-page';
    const onClick = jest.fn();
    const preserveScroll = false;
    const preserveState = false;
    const replace = false;
    const only = [];
    const component = 'button';
    const className = 'custom-class';
    const disabled = false;

    shouldIntercept.mockReturnValue(true);

    const { getByText } = render(
      <LinkButton
        href={href}
        onClick={onClick}
        preserveScroll={preserveScroll}
        preserveState={preserveState}
        replace={replace}
        only={only}
        component={component}
        className={className}
        disabled={disabled}>
        Link Button
      </LinkButton>
    );

    const buttonElement = getByText('Link Button');
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);

    expect(Inertia.visit).toHaveBeenCalledTimes(1);
    expect(Inertia.visit).toHaveBeenCalledWith(href, {
      preserveScroll,
      preserveState,
      replace,
      only,
    });
  });

  test('does not call Inertia.visit when shouldIntercept returns false', () => {
    const href = '/some-page';
    const onClick = jest.fn();
    const preserveScroll = false;
    const preserveState = false;
    const replace = false;
    const only = [];
    const component = 'button';
    const className = 'custom-class';
    const disabled = false;

    shouldIntercept.mockReturnValue(false);

    const { getByText } = render(
      <LinkButton
        href={href}
        onClick={onClick}
        preserveScroll={preserveScroll}
        preserveState={preserveState}
        replace={replace}
        only={only}
        component={component}
        className={className}
        disabled={disabled}>
        Link Button
      </LinkButton>
    );

    const buttonElement = getByText('Link Button');
    expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);

    expect(Inertia.visit).toHaveBeenCalledTimes(0);
  });

  test('calls onClick when the button is clicked', () => {
    const href = '/some-page';
    const onClick = jest.fn();
    const preserveScroll = false;
    const preserveState = false;
    const replace = false;
    const only = [];
    const component = 'button';
    const className = 'custom-class';
    const disabled = false;

    shouldIntercept.mockReturnValue(false);

    const { getByText } = render(
      <LinkButton
        href={href}
        onClick={onClick}
        preserveScroll={preserveScroll}
        preserveState={preserveState}
        replace={replace}
        only={only}
        component={component}
        className={className}
        disabled={disabled}>
        Link Button
      </LinkButton>
    );

    const buttonElement = getByText('Link Button');
    fireEvent.click(buttonElement);

    expect(Inertia.visit).toHaveBeenCalledTimes(0);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('disables the button when disabled prop is true', () => {
    const href = '/some-page';
    const onClick = jest.fn();
    const preserveScroll = false;
    const preserveState = false;
    const replace = false;
    const only = [];
    const component = 'button';
    const className = 'custom-class';
    const disabled = true;

    shouldIntercept.mockReturnValue(false);

    const { getByText } = render(
      <LinkButton
        href={href}
        onClick={onClick}
        preserveScroll={preserveScroll}
        preserveState={preserveState}
        replace={replace}
        only={only}
        component={component}
        className={className}
        disabled={disabled}>
        Link Button
      </LinkButton>
    );

    const buttonElement = getByText('Link Button');

    expect(buttonElement).toBeDisabled();
    fireEvent.click(buttonElement);

    expect(Inertia.visit).toHaveBeenCalledTimes(0);
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
