import styles from './CardItem.module.css';
import { IRequestData } from '../../../interfaces/IRequestData';

export const CardItem = (props: IRequestData) => {
  const { id, name, age, favourite, image, phone, phrase, video } = props;

  return (
    <li className={styles.cardItem}>
      {name}<br/>
      {age}<br/>
      {image}<br/>
      {phone}<br/>
      {phrase}<br/>
      {video}
    </li>
  );
};
