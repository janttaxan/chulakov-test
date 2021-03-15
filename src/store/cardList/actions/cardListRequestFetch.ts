import { ThunkAction } from 'redux-thunk';
import { IRootState } from '../../../interfaces/IRootState';
import { Action } from 'redux';
import { cardListRequest } from './cardListRequest';
import { getData } from '../../../api/request';
import { cardListRequestSuccess } from './cardListRequestSuccess';
import { cardListRequestError } from './cardListRequestError';

export const cardListRequestFetch = (): ThunkAction<void, IRootState, unknown, Action<string>> =>
  (dispatch) => {
    dispatch(cardListRequest());
    const getListData = async (): Promise<void> => {
      try {
        const cardList = await getData();
        dispatch(cardListRequestSuccess(cardList));
      } catch (e) {
        dispatch(cardListRequestError(e.error));
      }
    };
    getListData().then();
  };
