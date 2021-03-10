import styles from './AvatarName.module.css';
import { EAvatar } from '../../../../enums/EAvatar';
import {
  ImageSheep,
  ImageRaccoon,
  ImagePig,
  ImagePenguin,
  ImageOwl,
  ImageLion,
  ImageKoala,
  ImageFox,
  ImageDog,
  ImageCat,
} from '../../../Icons';

function getAvatar(avatar: EAvatar): JSX.Element {
  switch (avatar) {
    case EAvatar.sheep:
      return <ImageSheep/>;
    case EAvatar.raccoon:
      return <ImageRaccoon/>;
    case EAvatar.pig:
      return <ImagePig/>;
    case EAvatar.penguin:
      return <ImagePenguin/>;
    case EAvatar.owl:
      return <ImageOwl/>;
    case EAvatar.lion:
      return <ImageLion/>;
    case EAvatar.koala:
      return <ImageKoala/>;
    case EAvatar.fox:
      return <ImageFox/>;
    case EAvatar.dog:
      return <ImageDog/>;
    case EAvatar.cat:
      return <ImageCat/>;
  }
}

interface IAvatarNameProps {
  image: EAvatar;
  name: string;
}

export const AvatarName = ({ image, name }: IAvatarNameProps) => (
  <div className={styles.avatarName}>
    <div className={styles.image}>
      {getAvatar(image)}
    </div>
    <div className={styles.name}>{name}</div>
  </div>
);
