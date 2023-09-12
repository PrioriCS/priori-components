import React from 'react';
import { expect, test } from '@jest/globals';
import { create } from 'react-test-renderer';
import RequiredAlert from '../components/RequiredAlert';
import { MdAnnouncement, MdError } from 'react-icons/md';

const message = 'Alert test';

describe('RequiredAlert Component with Alert', () => {
  const component = create(<RequiredAlert alert={true} message={message} />).toTree();

  test('render RequiredAlert', () => {
    expect(component.type).toBe(RequiredAlert);
  });

  test('nest 1 RequiredAlert', () => {
    expect(component.rendered.type).toBe('div');
    expect(component.rendered.props.className).toBe('absolute right-5 cursor-help');
  });

  test('nest 2 RequiredAlert', () => {
    expect(component.rendered.rendered[0].type).toBe('div');
    expect(component.rendered.rendered[0].props.className).toBe(
      'flex items-center bg-white py-2.5 px-4 rounded-xl text-xs border border-yellow-400'
    );
    expect(component.rendered.rendered[0].props.onMouseLeave).toStrictEqual(expect.any(Function));
  });
  test('nest 3 RequiredAlert', () => {
    expect(component.rendered.rendered[0].rendered[0].type).toBe('span');
  });
  test('nest 4 RequiredAlert', () => {
    expect(component.rendered.rendered[0].rendered[0].rendered[0].type).toBe('span');
    expect(component.rendered.rendered[0].rendered[0].rendered[0].props.className).toBe('font-medium text-gray-700');

    expect(component.rendered.rendered[0].rendered[0].rendered[1]).toBe(' ');

    expect(component.rendered.rendered[0].rendered[0].rendered[2]).toBe('Alert test');
  });
  test('nest 5 RequiredAlert', () => {
    expect(component.rendered.rendered[0].rendered[0].rendered[0].rendered[0]).toBe('Aviso:');
  });
});
describe('RequiredAlert Component with Alert with Error', () => {
  const component = create(<RequiredAlert error={true} alert={true} message={message} />).toTree();

  test('render RequiredAlert', () => {
    expect(component.type).toBe(RequiredAlert);
  });

  test('nest 1 RequiredAlert', () => {
    expect(component.rendered.type).toBe('div');
    expect(component.rendered.props.className).toBe('absolute right-5 cursor-help');
  });

  test('nest 2 RequiredAlert', () => {
    expect(component.rendered.rendered[0].type).toBe('div');
    expect(component.rendered.rendered[0].props.className).toBe(
      'flex items-center bg-white py-2.5 px-4 rounded-xl text-xs border border-red-500'
    );
    expect(component.rendered.rendered[0].props.onMouseLeave).toStrictEqual(expect.any(Function));
  });
  test('nest 3 RequiredAlert', () => {
    expect(component.rendered.rendered[0].rendered[0].type).toBe('span');
  });
  test('nest 4 RequiredAlert', () => {
    expect(component.rendered.rendered[0].rendered[0].rendered[0].type).toBe('span');
    expect(component.rendered.rendered[0].rendered[0].rendered[0].props.className).toBe('font-medium text-gray-700');

    expect(component.rendered.rendered[0].rendered[0].rendered[1]).toBe(' ');

    expect(component.rendered.rendered[0].rendered[0].rendered[2]).toBe('Alert test');
  });
  test('nest 5 RequiredAlert', () => {
    expect(component.rendered.rendered[0].rendered[0].rendered[0].rendered[0]).toBe('Erro:');
  });
});
describe('RequiredAlert Component without Alert', () => {
  const component = create(<RequiredAlert message={message} />).toTree();

  test('render RequiredAlert', () => {
    expect(component.type).toBe(RequiredAlert);
  });

  test('nest 1 RequiredAlert', () => {
    expect(component.rendered.type).toBe('div');
    expect(component.rendered.props.className).toBe('absolute right-5 cursor-help');
  });

  test('nest 2 RequiredAlert', () => {
    expect(component.rendered.rendered[0].type).toBe('div');
    expect(component.rendered.rendered[0].props.className).toBe('text-yellow-400 text-2xl flex items-center');
    expect(component.rendered.rendered[0].props.onMouseEnter).toStrictEqual(expect.any(Function));
  });
  test('nest 3 RequiredAlert', () => {
    expect(component.rendered.rendered[0].rendered[0].type).toBe(MdAnnouncement);
  });
});
describe('RequiredAlert Component without Alert with Error', () => {
  const component = create(<RequiredAlert error message={message} />).toTree();

  test('render RequiredAlert', () => {
    expect(component.type).toBe(RequiredAlert);
  });

  test('nest 1 RequiredAlert', () => {
    expect(component.rendered.type).toBe('div');
    expect(component.rendered.props.className).toBe('absolute right-5 cursor-help');
  });

  test('nest 2 RequiredAlert', () => {
    expect(component.rendered.rendered[0].type).toBe('div');
    expect(component.rendered.rendered[0].props.className).toBe('text-red-500 text-2xl flex items-center');
    expect(component.rendered.rendered[0].props.onMouseEnter).toStrictEqual(expect.any(Function));
  });

  test('nest 3 RequiredAlert', () => {
    expect(component.rendered.rendered[0].rendered[0].type).toBe(MdError);
  });
});
