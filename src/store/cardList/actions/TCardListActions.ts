import { TCardListRequest } from './cardListRequest';
import { TCardListRequestSuccess } from './cardListRequestSuccess';
import { TCardListRequestError } from './cardListRequestError';
import { TAddToFavorites } from './addToFavorites';
import { TRemoveFromFavorites } from './removeFromFavorites';

export type TCardListActions =
  TCardListRequest |
  TCardListRequestSuccess |
  TCardListRequestError |
  TAddToFavorites |
  TRemoveFromFavorites
