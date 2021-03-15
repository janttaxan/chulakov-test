import { IRequestData } from './IRequestData';

export interface ICardListState {
  cards: IRequestData[];
  isLoading: boolean;
  errorValue: string;
}
