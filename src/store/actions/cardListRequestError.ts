import { EActions } from '../../enums/EActions';
import { ActionCreator } from 'redux';

export type TCardListRequestError = {
  type: typeof EActions.CARD_LIST_REQUEST_ERROR,
  errorValue: string
}

export const cardListRequestError: ActionCreator<TCardListRequestError> = (errorValue: string) => ({
  type: EActions.CARD_LIST_REQUEST_ERROR,
  errorValue,
});
