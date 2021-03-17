import React from 'react';
import { shallow } from 'enzyme';
import { Video } from '../Video';
import { EVideos } from '../../../enums/EVideos';

describe('Video', () => {
  test('shiuld render with "shoe"', () => {
    const component = shallow(<Video video={EVideos.shoe}/>);
    expect(component).toMatchSnapshot();
  });

  test('shiuld render with "boy"', () => {
    const component = shallow(<Video video={EVideos.boy}/>);
    expect(component).toMatchSnapshot();
  });
});
