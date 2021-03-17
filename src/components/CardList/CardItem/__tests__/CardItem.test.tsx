import React from 'react';
import { shallow } from 'enzyme';
import { CardItem } from '../CardItem';
import { NOOP } from '../../../../utils/NOOP';
import { EAvatar } from '../../../../enums/EAvatar';
import { EVideos } from '../../../../enums/EVideos';

const setUp = (video: EVideos | undefined = undefined) => shallow(
  <CardItem
    onLike={NOOP}
    favourite={false}
    name='John Doe'
    age={24}
    phone='222-21-21'
    image={EAvatar.fox}
    phrase='Hello!'
    video={video}
  />,
);

describe('CardItem', () => {

  test('should render', () => {
    const component = setUp();
    expect(component.find('.content').isEmptyRender()).toBeFalsy();
  });

  test('should render with video', () => {
    const component = setUp(EVideos.shoe);
    expect(component.hasClass('hasVideo')).toBeTruthy();
    expect(component.find('.videoWrapper').isEmptyRender()).toBeFalsy();
  });

  test('should render without video', () => {
    const component = setUp();
    expect(component.hasClass('hasVideo')).toBeFalsy();
    expect(component.find('.videoWrapper').isEmptyRender()).toBeTruthy();
  });

  test('should render in table view', () => {
    const component = shallow(
      <CardItem
        onLike={NOOP}
        favourite={false}
        name={'Troy Hard'}
        age={54}
        phone={'221-21-12'}
        image={EAvatar.sheep}
        phrase={'Hello!'}
        tableView
      />,
    );
    expect(component.hasClass('tableView')).toBeTruthy();
    expect(component.find('.phrase').isEmptyRender()).toBeTruthy();
  });
});
