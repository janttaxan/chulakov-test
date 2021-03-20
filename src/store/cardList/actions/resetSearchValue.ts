import { EActions } from '../../../enums/EActions';
import { ActionCreator } from 'redux';

export type TResetSearchValue = {
  type: EActions.RESET_SEARCH_VALUE,
}

export const resetSearchValue: ActionCreator<TResetSearchValue> = () => ({
  type: EActions.RESET_SEARCH_VALUE,
});
