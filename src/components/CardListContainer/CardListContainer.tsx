import styles from './CardListContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../interfaces/IRootState';
import { IRequestData } from '../../interfaces/IRequestData';
import { CardList } from '../CardList';
import { useEffect } from 'react';
import { cardListRequestFetch } from '../../store/cardList/actions/cardListRequestFetch';
import { SortPanel } from '../SortPanel';
import { sortByName } from '../../store/cardList/actions/sortByName';
import { ESortingType } from '../../enums/ESortingType';
import { sortByDecrease } from '../../store/cardList/actions/sortByDecrease';
import { sortByIncrease } from '../../store/cardList/actions/sortByIncrease';
import { sortCardList } from '../../store/cardList/actions/sortCardList';
import { sortByAge } from '../../store/cardList/actions/sortByAge';
import { sortById } from '../../store/cardList/actions/sortById';
import { ISortGroup } from '../../interfaces/ISortGroup';
import { ViewToggler } from '../ViewToggler';
import { setCardsView } from '../../store/cardList/actions/setCardsView';
import { setTableView } from '../../store/cardList/actions/setTableView';

export const CardListContainer = () => {
  const cards = useSelector<IRootState, IRequestData[]>(state => state.cardList.cards);
  const loading = useSelector<IRootState, boolean>(state => state.cardList.isLoading);
  const errorValue = useSelector<IRootState, string>(state => state.cardList.errorValue);
  const sortingType = useSelector<IRootState, ESortingType>(state => state.cardList.sortingType);
  const sortGroup = useSelector<IRootState, ISortGroup>(state => state.cardList.sortGroup);
  const tableView = useSelector<IRootState, boolean>(state => state.cardList.tableView);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cardListRequestFetch());
  }, [dispatch]);

  const handleReload = () => {
    dispatch(cardListRequestFetch());
  };

  const handleSortByDecrease = () => {
    dispatch(sortByDecrease());
    dispatch(sortCardList());
  };

  const handleSortByIncrease = () => {
    dispatch(sortByIncrease());
    dispatch(sortCardList());
  };

  return (
    <>
      <div className={styles.settingsPanel}>
        <SortPanel
          onSortByAge={() => dispatch(sortByAge(sortingType))}
          onSortById={() => dispatch(sortById(sortingType))}
          onSortByName={() => dispatch(sortByName(sortingType))}
          onSortByDecrease={handleSortByDecrease}
          onSortByIncrease={handleSortByIncrease}
          isActiveGroup={sortGroup}
          isActiveType={sortingType}
        />
        <ViewToggler
          isTableView={tableView}
          onCards={() => dispatch(setCardsView())}
          onTable={() => dispatch(setTableView())}
        />
      </div>
      <CardList data={cards} table={tableView}/>
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
