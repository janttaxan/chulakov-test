import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../interfaces/IRootState';
import { IRequestData } from '../../interfaces/IRequestData';
import { CardList } from '../CardList';
import React, { useEffect } from 'react';
import { cardListRequestFetch } from '../../store/actions/cardListRequestFetch';

export const CardListContainer = () => {
  const cardList = useSelector<IRootState, IRequestData[]>(state => state.cardList);
  const loading = useSelector<IRootState, boolean>(state => state.loading);
  const errorValue = useSelector<IRootState, string>(state => state.errorValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardListRequestFetch());
  }, []);

  const handleReload = () => {
    dispatch(cardListRequestFetch());
  };

  return (
    <>
      <CardList data={cardList}/>
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
