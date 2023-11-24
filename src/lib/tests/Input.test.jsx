import React from 'react';
import Input from '../components/Input/Input';
import { expect, test } from '@jest/globals';
import { create } from 'react-test-renderer';
import { MdTerrain } from 'react-icons/md';
import { ButtonWrapper } from '..';

describe('Input Component', () => {
  const component = create(
    <Input
      type='text'
      error={false}
      className=''
      isFocused={false}
      value='teste Input'
      mask=''
      icon={MdTerrain}
      iconColor='gray'
      onIconClick
      round='xs'
      size='default'
      readOnly
      disabled
      alignLeft
    />
  ).toTree();

  test('nest 1 Input Component', () => {
    expect(component.rendered.type).toBe('div');
  });

  test('nest 2 Input Component', () => {
    expect(component.rendered.rendered[0].type).toBe('input');

    expect(component.rendered.rendered[1].type).toBe('div');
    expect(component.rendered.rendered[1].props.className).toBe('absolute top-0 bottom-0 right-0 pr-4 flex items-center');
  });

  test('nest 3 Input Component', () => {
    expect(component.rendered.rendered[1].rendered[0].type).toBe(ButtonWrapper);
  });
  test('nest 4 / 5 Input Component', () => {
    expect(component.rendered.rendered[1].rendered[0].rendered.type).toBe('button');
    expect(component.rendered.rendered[1].rendered[0].rendered.rendered[0].type).toBe(MdTerrain);
  });
});
