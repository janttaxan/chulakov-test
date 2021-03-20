import { IRootState } from '../interfaces/IRootState';
import { ESortingType } from '../enums/ESortingType';

export const initialState: IRootState = {
  cardList: {
    cards: [],
    searchValue: '',
    sortGroup: {
      age: false,
      id: true,
      name: false,
    },
    sortingType: ESortingType.increase,
    tableView: false,
    isLoading: false,
    errorValue: '',
  },
};
