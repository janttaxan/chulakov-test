import data from './data.json';
import { IRequestData } from '../interfaces/IRequestData';

/** True = 65%, False = 35% */
const rejectByChance = (): boolean => {
  return Math.random() <= 0.35;
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
      resolve(data);
    }, delay);
  })
);
