import { EActions } from '../../../enums/EActions';
import { ActionCreator } from 'redux';
import { ESortingType } from '../../../enums/ESortingType';

export type TSortByAge = {
  type: EActions.SORT_BY_AGE
  sortType: ESortingType
}

export const sortByAge: ActionCreator<TSortByAge> = (sortType: ESortingType) => ({
  type: EActions.SORT_BY_AGE,
  sortType,
});
