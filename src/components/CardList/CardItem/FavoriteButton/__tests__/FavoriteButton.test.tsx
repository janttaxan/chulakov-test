import React from 'react';
import { shallow } from 'enzyme';
import { FavoriteButton } from '../FavoriteButton';
import { NOOP } from '../../../../../utils/NOOP';

const setUp = (isFavorite: boolean, fn: () => void = NOOP) => shallow(
  <FavoriteButton isFavorite={isFavorite} onClick={fn}/>,
);

describe('FavoriteButton', () => {
  test('should render', () => {
    const component = setUp(true);
    expect(component.find('.btn').isEmptyRender()).toBeFalsy();
    expect(component.find('.svg').isEmptyRender()).toBeFalsy();
  });

  test('should has class "active" when isFavorite=true', () => {
    const component = setUp(true);
    const btn = component.find('.btn');
    const svg = component.find('.svg');
    expect(btn.hasClass('active')).toBeTruthy();
    expect(svg.hasClass('active')).toBeTruthy();
  });

  test('should has class "active" when isFavorite=false', () => {
    const component = setUp(false);
    const btn = component.find('.btn');
    const svg = component.find('.svg');
    expect(btn.hasClass('active')).toBeFalsy();
    expect(svg.hasClass('active')).toBeFalsy();
  });

  test('should use default "onlike"', () => {
    const mockCallBack = jest.fn();
    const btn = setUp(false, mockCallBack).find('.btn');
    expect(mockCallBack.mock.calls.length).toBe(0);
    btn.simulate('click');
    expect(mockCallBack.mock.calls.length).toBe(1);
  });
});
