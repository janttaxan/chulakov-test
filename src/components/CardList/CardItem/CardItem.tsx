import styles from './CardItem.module.css';
import { IRequestData } from '../../../interfaces/IRequestData';
import { AvatarName } from './AvatarName';
import { Age } from './Age';

export const CardItem = (props: IRequestData) => {
  const { id, name, age, favourite, image, phone, phrase, video } = props;

  return (
    <li className={styles.cardItem}>
      <div className={styles.avatarName}>
        <AvatarName image={image} name={name}/>
      </div>
      <Age age={age}/>
      <a className={styles.phone} href={`tel:${phone}`}>{phone}</a>
      <p className={styles.phrase}>{phrase}</p>
      {/*<div className={styles.video}>{video}</div>*/}
    </li>
  );
};
