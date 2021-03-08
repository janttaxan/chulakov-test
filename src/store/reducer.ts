import { Reducer } from 'redux';
import { initialState } from './store';
import { IRootState } from '../interfaces/IRootState';
import { TActions } from './actions/TActions';
import { EActions } from './actions/EActions';

export const rootReducer: Reducer<IRootState, TActions> = (state = initialState, action) => {
  switch (action.type) {
    case EActions.CARD_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        errorValue: '',
      };
    case EActions.CARD_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        cardList: action.cardList,
        loading: false,
      };
    case EActions.CARD_LIST_REQUEST_ERROR:
      return {
        ...state,
        errorValue: action.errorValue,
        loading: false,
      };
    default:
      return state;
  }
};
