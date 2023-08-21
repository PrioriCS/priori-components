import React from 'react';

import { expect, test } from '@jest/globals';
import { create } from 'react-test-renderer';
import Anchor from '../components/Anchor';

//Melhorar teste
describe('Create a AccordionMenu Component', () => {
  test('check anchor children', () => {
    const component = create(<Anchor />);
    expect(component.toTree().rendered.type).toBe('a');
  });
});
