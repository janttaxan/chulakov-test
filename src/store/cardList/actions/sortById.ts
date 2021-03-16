import { EActions } from '../../../enums/EActions';
import { ActionCreator } from 'redux';
import { ESortingType } from '../../../enums/ESortingType';

export type TSortById = {
  type: EActions.SORT_BY_ID
  sortType: ESortingType
}

export const sortById: ActionCreator<TSortById> = (sortType: ESortingType) => ({
  type: EActions.SORT_BY_ID,
  sortType,
});
