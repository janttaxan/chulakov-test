import data from './data.json';
import { IRequestData } from '../interfaces/IRequestData';

/** True = 75%, False = 25% */
const rejectByChance = (): boolean => {
  // return Math.random() <= 0.25;
  return false;
};

/** Emulate request */
export const getData = (): Promise<IRequestData[]> => (
  new Promise((resolve, reject) => {
    if (rejectByChance()) {
      return reject({
        error: 'Server error',
      });
    }
    const delay = Math.round(Math.random() * 1000);
    setTimeout(() => {
      resolve(data as IRequestData[]);
    }, delay);
  })
);
