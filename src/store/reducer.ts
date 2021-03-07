import { Reducer } from 'redux';
import { initialState } from './store';
import { IRootState } from '../interfaces/IRootState';
import { TActions } from './actions/TActions';
import { EActions } from './actions/EActions';

export const rootReducer: Reducer<IRootState, TActions> = (state = initialState, action) => {
  switch (action.type) {
    case EActions.LIST_REQUEST_ACTION:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
