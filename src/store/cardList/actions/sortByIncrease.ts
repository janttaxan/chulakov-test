import { EActions } from '../../../enums/EActions';
import { ActionCreator } from 'redux';

export type TSortByIncrease = {
  type: EActions.SORT_BY_INCREASE
}

export const sortByIncrease: ActionCreator<TSortByIncrease> = () => ({
  type: EActions.SORT_BY_INCREASE,
});
