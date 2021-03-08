import styles from './CardList.module.css';
import { IRequestData } from '../../interfaces/IRequestData';
import { CardItem } from './CardItem';

export const CardList = ({ data }: {data: IRequestData[]}) => (
  <ul className={styles.cardList}>
    {data.map(card => (
      <CardItem
        key={card.id}
        id={card.id}
        favourite={card.favourite}
        name={card.name}
        age={card.age}
        phone={card.phone}
        image={card.image}
        phrase={card.phrase}
        video={card.video}
      />
    ))}
  </ul>
);
