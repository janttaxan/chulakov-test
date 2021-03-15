import { EActions } from '../../../enums/EActions';
import { ActionCreator } from 'redux';

export type TAddToFavorites = {
  type: typeof EActions.ADD_TO_FAVORITES;
  id: number;
}

export const addToFavorites: ActionCreator<TAddToFavorites> = (id: number) => ({
  type: EActions.ADD_TO_FAVORITES,
  id,
});
