import { IRequestData } from './IRequestData';

export interface IRootState {
  cardList: IRequestData[];
  loading: boolean;
  errorValue: string;
}
