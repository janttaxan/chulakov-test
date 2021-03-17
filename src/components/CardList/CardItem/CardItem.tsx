import styles from './CardItem.module.css';
import classNames from 'classnames';
import { IRequestData } from '../../../interfaces/IRequestData';
import { AvatarName } from './AvatarName';
import { Age } from './Age';
import { FavoriteButton } from './FavoriteButton';
import { Video } from '../../Video';

interface ICardItemProps extends Omit<IRequestData, 'id'> {
  onLike: () => void;
  tableView?: boolean;
}

export const CardItem = (props: ICardItemProps) => {
  const { name, age, favourite, image, phone, phrase, video, onLike, tableView = false } = props;

  const cardItemClasses = classNames(
    styles.cardItem,
    { [styles.hasVideo]: video },
    { [styles.tableView]: tableView },
  );

  return (
    <li className={cardItemClasses}>
      <div className={styles.content}>
        <div className={styles.avatarName}>
          <AvatarName image={image} name={name}/>
        </div>
        <div className={styles.age}>
          <Age age={age}/>
        </div>
        <a className={styles.phone} href={`tel:${phone}`}>{phone}</a>
        {!tableView && (
          <p className={styles.phrase}>{phrase}</p>
        )}
        <div className={styles.favoriteBtn}>
          <FavoriteButton isFavorite={favourite} onClick={onLike}/>
        </div>
      </div>
      {video && !tableView && (
        <div className={styles.videoWrapper}>
          <Video video={video}/>
        </div>
      )}
    </li>
  );
};
