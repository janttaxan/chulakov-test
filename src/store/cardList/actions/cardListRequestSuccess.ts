import { EActions } from '../../../enums/EActions';
import { IRequestData } from '../../../interfaces/IRequestData';
import { ActionCreator } from 'redux';

export type TCardListRequestSuccess = {
  type: typeof EActions.CARD_LIST_REQUEST_SUCCESS,
  cardList: IRequestData[],
}

export const cardListRequestSuccess: ActionCreator<TCardListRequestSuccess> = (cardList: IRequestData[]) => ({
  type: EActions.CARD_LIST_REQUEST_SUCCESS,
  cardList,
});
