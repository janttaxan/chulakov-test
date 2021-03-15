import { Reducer } from 'redux';
import { TCardListActions } from './actions/TCardListActions';
import { initialState } from '../store';
import { EActions } from '../../enums/EActions';
import { ICardListState } from '../../interfaces/ICardListState';

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
    default:
      return state;
  }
};
