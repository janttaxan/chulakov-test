import styles from './Age.module.css';
import { declOfNum } from '../../../../utils/declOfNum';

export const yearTitles = ['год', 'года', 'лет']

export const Age = ({ age }: {age: number}) => (
  <div className={styles.age}>
    {`${age} ${declOfNum(age, yearTitles)}`}
  </div>
);
