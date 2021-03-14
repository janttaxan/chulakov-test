import React from 'react';
import { shallow } from 'enzyme';
import { Age, yearTitles } from '../Age';
import { declOfNum } from '../../../../../utils/declOfNum';

const setUp = (age: number) => shallow(<Age age={age}/>);
const AGE = 25;

describe('Age', () => {
  test('should render', () => {
    const component = setUp(AGE);
    expect(component.find('.age').isEmptyRender()).toBeFalsy();
  });

  test('should render valid age', () => {
    const component = setUp(AGE);
    expect(component.text()).toBe(`${AGE} ${declOfNum(AGE, yearTitles)}`);
  });
});
