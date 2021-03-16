import { IRequestData } from '../interfaces/IRequestData';
import { ESortingType } from '../enums/ESortingType';

export const sortAlphabetically = (arr: IRequestData[], type: ESortingType): IRequestData[] => {
  const sortingArr = arr.sort((a, b) => {
    const fullnameA = a.name.trim().toLowerCase();
    const fullnameB = b.name.trim().toLowerCase();
    if (fullnameA < fullnameB) return -1;
    if (fullnameA > fullnameB) return 1;
    return 0;
  });
  switch (type) {
    case ESortingType.decrease: // по убыванию
      return sortingArr.reverse();
    case ESortingType.increase: // по возрастанию
      return sortingArr;
  }
};
