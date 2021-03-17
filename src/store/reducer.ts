import { Reducer } from 'redux';
import { initialState } from './store';
import { IRootState } from '../interfaces/IRootState';
import { TActions } from './actions/TActions';
import { EActions } from '../enums/EActions';
import { cardListReducer } from './cardList/reducer';

export const rootReducer: Reducer<IRootState, TActions> = (
  state = initialState, action,
) => {
  switch (action.type) {
    case EActions.CARD_LIST_REQUEST:
    case EActions.CARD_LIST_REQUEST_SUCCESS:
    case EActions.CARD_LIST_REQUEST_ERROR:
    case EActions.ADD_TO_FAVORITES:
    case EActions.REMOVE_FROM_FAVORITES:
    case EActions.SORT_BY_AGE:
    case EActions.SORT_BY_ID:
    case EActions.SORT_BY_NAME:
    case EActions.SORT_BY_DECREASE:
    case EActions.SORT_BY_INCREASE:
    case EActions.SET_CARDS_VIEW:
    case EActions.SET_TABLE_VIEW:
      return {
        ...state,
        cardList: cardListReducer(state.cardList, action),
      };
    default:
      return state;
  }
};
