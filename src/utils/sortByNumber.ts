import { IRequestData } from '../interfaces/IRequestData';
import { ESortingType } from '../enums/ESortingType';

export const sortByNumber = (arr: IRequestData[], type: ESortingType, sortGroup: 'age' | 'id'): IRequestData[] => {
  const sortingArr = arr.sort((a, b) => a[sortGroup] - b[sortGroup]);
  switch (type) {
    case ESortingType.decrease: // по убыванию
      return sortingArr.reverse();
    case ESortingType.increase: // по возрастанию
      return sortingArr;
  }
};
