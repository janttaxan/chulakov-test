import { TCardListRequest } from './cardListRequest';
import { TCardListRequestSuccess } from './cardListRequestSuccess';
import { TCardListRequestError } from './cardListRequestError';
import { TAddToFavorites } from './addToFavorites';
import { TRemoveFromFavorites } from './removeFromFavorites';
import { TSortByAge } from './sortByAge';
import { TSortById } from './sortById';
import { TSortByName } from './sortByName';
import { TSortByDecrease } from './sortByDecrease';
import { TSortByIncrease } from './sortByIncrease';
import { TSetTableView } from './setTableView';
import { TSetCardsView } from './setCardsView';
import { TSetSearchValue } from './setSearchValue';
import { TResetSearchValue } from './resetSearchValue';

export type TCardListActions =
  TCardListRequest |
  TCardListRequestSuccess |
  TCardListRequestError |
  TAddToFavorites |
  TRemoveFromFavorites |
  TSortByAge |
  TSortById |
  TSortByName |
  TSortByDecrease |
  TSortByIncrease |
  TSetTableView |
  TSetCardsView |
  TSetSearchValue |
  TResetSearchValue
