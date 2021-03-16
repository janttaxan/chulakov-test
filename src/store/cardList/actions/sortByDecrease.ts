import { EActions } from '../../../enums/EActions';
import { ActionCreator } from 'redux';

export type TSortByDecrease = {
  type: EActions.SORT_BY_DECREASE
}

export const sortByDecrease: ActionCreator<TSortByDecrease> = () => ({
  type: EActions.SORT_BY_DECREASE,
});
