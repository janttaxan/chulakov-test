import styles from './CardListContainer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../../interfaces/IRootState';
import { IRequestData } from '../../interfaces/IRequestData';
import { CardList } from '../CardList';
import { ChangeEvent, useEffect } from 'react';
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
import { SearchField } from '../SearchField';
import { setSearchValue } from '../../store/cardList/actions/setSearchValue';
import { resetSearchValue } from '../../store/cardList/actions/resetSearchValue';
import { Loader } from '../Loader';
import { Button } from '../Button';

export const CardListContainer = () => {
  const cards = useSelector<IRootState, IRequestData[]>(state => state.cardList.cards);
  const loading = useSelector<IRootState, boolean>(state => state.cardList.isLoading);
  const errorValue = useSelector<IRootState, string>(state => state.cardList.errorValue);
  const sortingType = useSelector<IRootState, ESortingType>(state => state.cardList.sortingType);
  const sortGroup = useSelector<IRootState, ISortGroup>(state => state.cardList.sortGroup);
  const tableView = useSelector<IRootState, boolean>(state => state.cardList.tableView);
  const searchValue = useSelector<IRootState, string>(state => state.cardList.searchValue);
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

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(
      event.target.value),
    );
  };

  const filterCards = (cards: IRequestData[]) => {
    return cards.filter((card) =>
      card.name.trim().toLowerCase().includes(searchValue.toLowerCase()),
    );
  };

  return (
    <>
      {!errorValue && (
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
          <div className={styles.wrapper}>
            <div className={styles.searchField}>
              <SearchField
                searchValue={searchValue}
                onChange={handleChangeSearch}
                onReset={() => dispatch(resetSearchValue())}
              />
            </div>
            <ViewToggler
              isTableView={tableView}
              onCards={() => dispatch(setCardsView())}
              onTable={() => dispatch(setTableView())}
            />
          </div>
        </div>
      )}
      <CardList
        data={filterCards(cards)}
        table={tableView}
      />
      {filterCards(cards).length === 0 && !loading && !errorValue && (
        <span>Ничего не найдено...</span>
      )}
      {loading && !errorValue && <Loader/>}
      {errorValue && !loading && (
        <>
          <span className={styles.errorMessage}>{errorValue}</span>
          <Button onClick={handleReload} text={'Перезагрузить'} primary/>
        </>
      )}
    </>
  );
};
