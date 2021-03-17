import React from 'react';
import { shallow } from 'enzyme';
import { ImageCat } from '../ImageCat';
import { EAvatar } from '../../../enums/EAvatar';
import { ImageDog } from '../ImageDog';
import { ImageFox } from '../ImageFox';
import { ImageKoala } from '../ImageKoala';
import { ImageLion } from '../ImageLion';
import { ImageOwl } from '../ImageOwl';
import { ImagePenguin } from '../ImagePenguin';
import { ImagePig } from '../ImagePig';
import { ImageRaccoon } from '../ImageRaccoon';
import { ImageSheep } from '../ImageSheep';
import { IconCards } from '../IconCards';
import { IconTable } from '../IconTable';

const setUp = (iconName: EAvatar) => {
  switch (iconName) {
    case EAvatar.cat:
      return shallow(<ImageCat/>);
    case EAvatar.dog:
      return shallow(<ImageDog/>);
    case EAvatar.fox:
      return shallow(<ImageFox/>);
    case EAvatar.koala:
      return shallow(<ImageKoala/>);
    case EAvatar.lion:
      return shallow(<ImageLion/>);
    case EAvatar.owl:
      return shallow(<ImageOwl/>);
    case EAvatar.penguin:
      return shallow(<ImagePenguin/>);
    case EAvatar.pig:
      return shallow(<ImagePig/>);
    case EAvatar.raccoon:
      return shallow(<ImageRaccoon/>);
    case EAvatar.sheep:
      return shallow(<ImageSheep/>);
  }
};

describe('Icons', () => {

  describe('avatars', () => {
    test('should render "Cat" icon', () => {
      const component = setUp(EAvatar.cat);
      expect(component).toMatchSnapshot();
    });

    test('should render "Dog" icon', () => {
      const component = setUp(EAvatar.dog);
      expect(component).toMatchSnapshot();
    });

    test('should render "Fox" icon', () => {
      const component = setUp(EAvatar.fox);
      expect(component).toMatchSnapshot();
    });

    test('should render "Koala" icon', () => {
      const component = setUp(EAvatar.koala);
      expect(component).toMatchSnapshot();
    });

    test('should render "Lion" icon', () => {
      const component = setUp(EAvatar.lion);
      expect(component).toMatchSnapshot();
    });

    test('should render "Owl" icon', () => {
      const component = setUp(EAvatar.owl);
      expect(component).toMatchSnapshot();
    });

    test('should render "Penguin" icon', () => {
      const component = setUp(EAvatar.penguin);
      expect(component).toMatchSnapshot();
    });

    test('should render "Pig" icon', () => {
      const component = setUp(EAvatar.pig);
      expect(component).toMatchSnapshot();
    });

    test('should render "Raccoon" icon', () => {
      const component = setUp(EAvatar.raccoon);
      expect(component).toMatchSnapshot();
    });

    test('should render "Sheep" icon', () => {
      const component = setUp(EAvatar.sheep);
      expect(component).toMatchSnapshot();
    });
  });

  describe('interface icons', () => {
    test('should render IconCards', () => {
      const component = shallow(<IconCards/>);
      expect(component).toMatchSnapshot();
    });

    test('should render IconTable', () => {
      const component = shallow(<IconTable/>);
      expect(component).toMatchSnapshot();
    });
  });
});
