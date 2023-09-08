import React from 'react';
import ApplicationLogo from '../components/ApplicationLogo';
import { expect, test } from '@jest/globals';
import { create } from 'react-test-renderer';

describe('Create a Logo Component', () => {
	test('check logo type', () => {
		const component = create(<ApplicationLogo />);
		expect(component.toTree().rendered.type).toBe('img');
	});
	test('check logos', () => {
		const component = create(<ApplicationLogo logo='primary' />).toTree();
		const component2 = create(<ApplicationLogo logo='secondary' />).toTree();
		const component3 = create(<ApplicationLogo logo='' />).toTree();

		expect(component.rendered.props.src).toBeDefined();
		expect(component2.rendered.props.src).toBeDefined();
		expect(component3.rendered.props.src).toBeUndefined();
	});
});
