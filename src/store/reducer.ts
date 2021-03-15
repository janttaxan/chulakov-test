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
      return {
        ...state,
        cardList: cardListReducer(state.cardList, action),
      };
    default:
      return state;
  }
};
