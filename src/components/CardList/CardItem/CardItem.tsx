import styles from './CardItem.module.css';
import { IRequestData } from '../../../interfaces/IRequestData';
import { AvatarName } from './AvatarName';
import { Age } from './Age';
import { FavoriteButton } from './FavoriteButton';
import classNames from 'classnames';
import { Video } from '../../Video';

export const CardItem = (props: IRequestData) => {
  const { id, name, age, favourite, image, phone, phrase, video } = props;

  const cardItemClasses = classNames(
    styles.cardItem,
    { [styles.hasVideo]: video },
  );

  return (
    <li className={cardItemClasses}>
      <div className={styles.content}>
        <div className={styles.avatarName}>
          <AvatarName image={image} name={name}/>
        </div>
        <Age age={age}/>
        <a className={styles.phone} href={`tel:${phone}`}>{phone}</a>
        <p className={styles.phrase}>{phrase}</p>
        <div className={styles.favoriteBtn}>
          <FavoriteButton isFavorite={favourite} onClick={() => console.log('like')}/>
        </div>
      </div>
      {video && (
        <div className={styles.videoWrapper}>
          <Video video={video}/>
        </div>
      )}
    </li>
  );
};
