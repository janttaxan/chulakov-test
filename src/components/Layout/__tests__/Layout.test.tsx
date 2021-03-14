import React from 'react';
import { shallow } from 'enzyme';
import { Layout } from '../Layout';

const setUp = () => shallow(<Layout children={<div className='child'/>}/>);

describe('Layout', () => {

  test('should render', () => {
    const component = setUp();
    const layoutEL = component.find('.layout');
    expect(layoutEL.isEmptyRender()).toBeFalsy();
  });

  test('should has children', () => {
    const component = setUp();
    const child = component.find('.child');
    expect(child.isEmptyRender()).toBeFalsy();
  });
});
