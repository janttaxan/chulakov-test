import { IRequestData } from './IRequestData';
import { ESortingType } from '../enums/ESortingType';
import { ISortGroup } from './ISortGroup';

export interface ICardListState {
  cards: IRequestData[];
  searchValue: string;
  sortGroup: ISortGroup;
  sortingType: ESortingType;
  tableView: boolean;
  isLoading: boolean;
  errorValue: string;
}
