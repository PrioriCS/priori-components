import React from 'react';
import { render } from '@testing-library/react';
import { expect, test } from '@jest/globals';
import { create } from 'react-test-renderer';
import Panel from '../components/Panel';

describe('Create Panel Test', () => {
  const availableBorderColors = {
    none: 'border-none',
    sm: 'border-gray-200',
    md: 'border-gray-300',
    xl: 'border-primary-200',
  };

  const availableBorderRadius = {
    sm: 'rounded-xl',
    rightXl: 'rounded-r-xl',
  };

  const availableBackgroundColors = {
    white: 'bg-white',
    primary: 'bg-primary-50',
  };
  Object.keys(availableBackgroundColors).forEach((bgkey) => {
    Object.keys(availableBorderColors).forEach((bckey) => {
      Object.keys(availableBorderRadius).forEach((brkey) => {
        const component = create(<Panel backgroundColor={bgkey} borderColor={bckey} radius={brkey} />).toTree();
        test('Panel', () => {
          expect(component.type).toBe(Panel);
        });
        test('Panel Props', () => {
          const props = {
            radius: brkey,
            backgroundColor: bgkey,
            borderColor: bckey,
          };
          expect(component.props).toEqual(props);
        });
        test('Nested 1', () => {
          expect(component.rendered.type).toBe('div');
        });
      });
    });
  });
  const component = create(<Panel noPadding noShadow />).toTree();
  test('Panel', () => {
    expect(component.type).toBe(Panel);
  });
  test('Panel Props', () => {
    const props = {
      noPadding: true,
      noShadow: true,
    };
    expect(component.props).toEqual(props);
  });

  test('Default className Values', () => {
    const { container } = render(<Panel></Panel>);
    expect(container.firstChild).toHaveClass(
      'p-8',
      'bg-white',
      'rounded-xl',
      'xl:border',
      'border-gray-200',
      'xl:shadow-[0_0_50px_-22px_rgba(30,64,175,0.15)] shadow-gray-400'
    );
  });
  test('Adding No Padding and No Shadow', () => {
    const { container } = render(<Panel noPadding noShadow></Panel>);
    expect(container.firstChild).not.toHaveClass('p-8', 'xl:shadow-[0_0_50px_-22px_rgba(30,64,175,0.15)] shadow-gray-400');
    expect(container.firstChild).toHaveClass('bg-white', 'rounded-xl', 'xl:border', 'border-gray-200');
  });
});
