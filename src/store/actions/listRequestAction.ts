import { ActionCreator } from 'redux';
import { EActions } from './EActions';

export type TListRequestAction = {
  type: typeof EActions.LIST_REQUEST_ACTION;
}

export const listRequestAction: ActionCreator<TListRequestAction> = () => ({
  type: EActions.LIST_REQUEST_ACTION,
});
