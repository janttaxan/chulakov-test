import styles from './CardList.module.css';
import { IRequestData } from '../../interfaces/IRequestData';
import { CardItem } from './CardItem';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../interfaces/IRootState';
import React, { useEffect } from 'react';
import { cardListRequestFetch } from '../../store/actions/cardListRequestFetch';

export const CardList = ({ data }: {data: IRequestData[]}) => {
    const loading = useSelector<IRootState, boolean>(state => state.loading);
    const errorValue = useSelector<IRootState, string>(state => state.errorValue);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(cardListRequestFetch());
    }, []);

    const handleReload = () => {
      dispatch(cardListRequestFetch());
    };

    const handleLike = (id: number) => {
      console.log(`like by ${id}`);
    };
    return (
      <>
        <ul className={styles.cardList}>
          {data.map(card => (
            <CardItem
              key={card.id}
              favourite={card.favourite}
              name={card.name}
              age={card.age}
              phone={card.phone}
              image={card.image}
              phrase={card.phrase}
              video={card.video}
              onLike={() => handleLike(card.id)}
            />
          ))}
        </ul>
        {loading && !errorValue && <p>Загрузка...</p>}
        {errorValue && (
          <>
            <p>{errorValue}</p>
            <button onClick={handleReload}>Загрузить еще раз</button>
          </>
        )}
      </>
    );
  }
;
