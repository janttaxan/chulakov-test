import { IRootState } from '../interfaces/IRootState';

export const initialState: IRootState = {
  cardList: {
    cards: [],
    isLoading: false,
    errorValue: '',
  },
};
