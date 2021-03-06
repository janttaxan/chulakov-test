import { ActionCreator } from 'redux';
import { EActions } from '../../../enums/EActions';

export type TCardListRequest = {
  type: typeof EActions.CARD_LIST_REQUEST;
}

export const cardListRequest: ActionCreator<TCardListRequest> = () => ({
  type: EActions.CARD_LIST_REQUEST,
});
