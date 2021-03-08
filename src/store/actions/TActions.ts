import { TCardListRequest } from './cardListRequest';
import { TCardListRequestSuccess } from './cardListRequestSuccess';
import { TCardListRequestError } from './cardListRequestError';

export type TActions =
  TCardListRequest |
  TCardListRequestSuccess |
  TCardListRequestError
