import { IRootState } from '../interfaces/IRootState';
import { ESortingType } from '../enums/ESortingType';

export const initialState: IRootState = {
  cardList: {
    cards: [],
    sortGroup: {
      age: false,
      id: true,
      name: false,
    },
    sortingType: ESortingType.increase,
    isLoading: false,
    errorValue: '',
  },
};
