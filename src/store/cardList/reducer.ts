import { Reducer } from 'redux';
import { TCardListActions } from './actions/TCardListActions';
import { initialState } from '../store';
import { EActions } from '../../enums/EActions';
import { ICardListState } from '../../interfaces/ICardListState';
import { sortAlphabetically } from '../../utils/sortAlphabetically';
import { ESortingType } from '../../enums/ESortingType';
import { sortByNumber } from '../../utils/sortByNumber';

export const cardListReducer: Reducer<ICardListState, TCardListActions> = (
  state = initialState.cardList, action,
) => {
  switch (action.type) {
    case EActions.CARD_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        errorValue: '',
      };
    case EActions.CARD_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        cards: action.cardList,
        isLoading: false,
      };
    case EActions.CARD_LIST_REQUEST_ERROR:
      return {
        ...state,
        errorValue: action.errorValue,
        isLoading: false,
      };
    case EActions.ADD_TO_FAVORITES:
      return {
        ...state,
        cards: state.cards.map((item) =>
          item.id === action.id ? { ...item, favourite: true } : item,
        ),
      };
    case EActions.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        cards: state.cards.map((item) =>
          item.id === action.id ? { ...item, favourite: false } : item,
        ),
      };
    case EActions.SORT_BY_AGE:
      return {
        ...state,
        cards: sortByNumber(state.cards, action.sortType, 'age'),
        sortGroup: { age: true, id: false, name: false },
      };
    case EActions.SORT_BY_ID:
      return {
        ...state,
        cards: sortByNumber(state.cards, action.sortType, 'id'),
        sortGroup: { age: false, id: true, name: false },
      };
    case EActions.SORT_BY_NAME:
      return {
        ...state,
        cards: sortAlphabetically(state.cards, action.sortType),
        sortGroup: { age: false, id: false, name: true },
      };
    case EActions.SORT_BY_INCREASE:
      return {
        ...state,
        sortingType: ESortingType.increase,
      };
    case EActions.SORT_BY_DECREASE:
      return {
        ...state,
        sortingType: ESortingType.decrease,
      };
    case EActions.SET_CARDS_VIEW:
      return {
        ...state,
        tableView: false,
      };
    case EActions.SET_TABLE_VIEW:
      return {
        ...state,
        tableView: true,
      };
    default:
      return state;
  }
};
