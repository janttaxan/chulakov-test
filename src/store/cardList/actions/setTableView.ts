import { EActions } from '../../../enums/EActions';
import { ActionCreator } from 'redux';

export type TSetTableView = {
  type: EActions.SET_TABLE_VIEW;
}

export const setTableView: ActionCreator<TSetTableView> = () => ({
  type: EActions.SET_TABLE_VIEW,
});
