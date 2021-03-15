import styles from './CardList.module.css';
import { IRequestData } from '../../interfaces/IRequestData';
import { CardItem } from './CardItem';
import { useDispatch } from 'react-redux';
import { addToFavorites } from '../../store/cardList/actions/addToFavorites';
import { removeFromFavorites } from '../../store/cardList/actions/removeFromFavorites';

export const CardList = ({ data }: {data: IRequestData[]}) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = (id: number) => {
    dispatch(addToFavorites(id));
  };

  const handleRemoveFromFavorites = (id: number) => {
    dispatch(removeFromFavorites(id));
  };

  const handleToggleFavorite = (isFavorite: boolean, id: number) => {
    isFavorite
      ? handleRemoveFromFavorites(id)
      : handleAddToFavorites(id);
  };

  return (
    <ul className={styles.cardList}>
      {data.map(card => (
        <CardItem
          age={card.age}
          favourite={card.favourite}
          key={card.id}
          image={card.image}
          name={card.name}
          onLike={() => handleToggleFavorite(card.favourite, card.id)}
          phone={card.phone}
          phrase={card.phrase}
          video={card.video}
        />
      ))}
    </ul>
  );
};
