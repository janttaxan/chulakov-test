import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../interfaces/IRootState';
import { IRequestData } from '../../interfaces/IRequestData';
import { CardList } from '../CardList';
import React, { useEffect } from 'react';
import { cardListRequestFetch } from '../../store/cardList/actions/cardListRequestFetch';

export const CardListContainer = () => {
  const cards = useSelector<IRootState, IRequestData[]>(state => state.cardList.cards);
  const loading = useSelector<IRootState, boolean>(state => state.cardList.isLoading);
  const errorValue = useSelector<IRootState, string>(state => state.cardList.errorValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardListRequestFetch());
  }, []);

  const handleReload = () => {
    dispatch(cardListRequestFetch());
  };

  return (
    <>
      <CardList data={cards}/>
      {loading && !errorValue && <p>Загрузка...</p>}
      {errorValue && (
        <>
          <p>{errorValue}</p>
          <button onClick={handleReload}>Загрузить еще раз</button>
        </>
      )}
    </>
  );
};
