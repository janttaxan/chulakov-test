import React from 'react';
import { shallow } from 'enzyme';
import { AvatarName } from '../AvatarName';
import { EAvatar } from '../../../../../enums/EAvatar';

const setUp = (avatar: EAvatar, name: string = 'John Doe') => {
  switch (avatar) {
    case EAvatar.cat:
      return shallow(<AvatarName image={EAvatar.cat} name={name}/>);
    case EAvatar.dog:
      return shallow(<AvatarName image={EAvatar.dog} name={name}/>);
    case EAvatar.fox:
      return shallow(<AvatarName image={EAvatar.fox} name={name}/>);
    case EAvatar.koala:
      return shallow(<AvatarName image={EAvatar.koala} name={name}/>);
    case EAvatar.lion:
      return shallow(<AvatarName image={EAvatar.lion} name={name}/>);
    case EAvatar.owl:
      return shallow(<AvatarName image={EAvatar.owl} name={name}/>);
    case EAvatar.penguin:
      return shallow(<AvatarName image={EAvatar.penguin} name={name}/>);
    case EAvatar.pig:
      return shallow(<AvatarName image={EAvatar.pig} name={name}/>);
    case EAvatar.raccoon:
      return shallow(<AvatarName image={EAvatar.raccoon} name={name}/>);
    case EAvatar.sheep:
      return shallow(<AvatarName image={EAvatar.sheep} name={name}/>);
  }
};

describe('AvatarName', () => {
  test('should render with "Cat" avatar', () => {
    const component = setUp(EAvatar.cat);
    expect(component).toMatchSnapshot();
  });

  test('should render with "Dog" avatar', () => {
    const component = setUp(EAvatar.dog);
    expect(component).toMatchSnapshot();
  });

  test('should render with "Fox" avatar', () => {
    const component = setUp(EAvatar.fox);
    expect(component).toMatchSnapshot();
  });

  test('should render with "Koala" avatar', () => {
    const component = setUp(EAvatar.koala);
    expect(component).toMatchSnapshot();
  });

  test('should render with "Lion" avatar', () => {
    const component = setUp(EAvatar.lion);
    expect(component).toMatchSnapshot();
  });

  test('should render with "Owl" avatar', () => {
    const component = setUp(EAvatar.owl);
    expect(component).toMatchSnapshot();
  });

  test('should render with "Penguin" avatar', () => {
    const component = setUp(EAvatar.penguin);
    expect(component).toMatchSnapshot();
  });

  test('should render with "Pig" avatar', () => {
    const component = setUp(EAvatar.pig);
    expect(component).toMatchSnapshot();
  });

  test('should render with "Raccoon" avatar', () => {
    const component = setUp(EAvatar.raccoon);
    expect(component).toMatchSnapshot();
  });

  test('should render with "Sheep" avatar', () => {
    const component = setUp(EAvatar.sheep);
    expect(component).toMatchSnapshot();
  });
});
