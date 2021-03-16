import { EActions } from '../../../enums/EActions';
import { ActionCreator } from 'redux';
import { ESortingType } from '../../../enums/ESortingType';

export type TSortByName = {
  type: EActions.SORT_BY_NAME
  sortType: ESortingType
}

export const sortByName: ActionCreator<TSortByName> = (sortType: ESortingType) => ({
  type: EActions.SORT_BY_NAME,
  sortType,
});
