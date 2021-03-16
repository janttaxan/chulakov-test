import { ThunkAction } from 'redux-thunk';
import { IRootState } from '../../../interfaces/IRootState';
import { Action } from 'redux';
import { sortByAge } from './sortByAge';
import { sortById } from './sortById';
import { sortByName } from './sortByName';

export const sortCardList = (): ThunkAction<void, IRootState, unknown, Action<string>> =>
  (dispatch, getState) => {
    if (getState().cardList.sortGroup.age) {
      dispatch(sortByAge(getState().cardList.sortingType));
    }
    if (getState().cardList.sortGroup.id) {
      dispatch(sortById(getState().cardList.sortingType));
    }
    if (getState().cardList.sortGroup.name) {
      dispatch(sortByName(getState().cardList.sortingType));
    }
  };
