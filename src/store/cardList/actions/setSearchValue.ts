import { EActions } from '../../../enums/EActions';
import { ActionCreator } from 'redux';

export type TSetSearchValue = {
  type: EActions.SET_SEARCH_VALUE,
  value: string,
}

export const setSearchValue: ActionCreator<TSetSearchValue> = (value: string) => ({
  type: EActions.SET_SEARCH_VALUE,
  value,
});
