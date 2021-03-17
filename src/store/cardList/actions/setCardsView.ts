import { EActions } from '../../../enums/EActions';
import { ActionCreator } from 'redux';

export type TSetCardsView = {
  type: EActions.SET_CARDS_VIEW;
}

export const setCardsView: ActionCreator<TSetCardsView> = () => ({
  type: EActions.SET_CARDS_VIEW,
});
