import { IRequestData } from './IRequestData';
import { ESortingType } from '../enums/ESortingType';
import { ISortGroup } from './ISortGroup';

export interface ICardListState {
  cards: IRequestData[];
  sortGroup: ISortGroup;
  sortingType: ESortingType;
  tableView: boolean;
  isLoading: boolean;
  errorValue: string;
}
