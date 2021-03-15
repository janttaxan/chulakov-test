import { EActions } from '../../../enums/EActions';
import { ActionCreator } from 'redux';

export type TRemoveFromFavorites = {
  type: typeof EActions.REMOVE_FROM_FAVORITES;
  id: number;
}

export const removeFromFavorites: ActionCreator<TRemoveFromFavorites> = (id: number) => ({
  type: EActions.REMOVE_FROM_FAVORITES,
  id,
});
