import styles from './Age.module.css';
import { declOfNum } from '../../../../utils/declOfNum';

export const Age = ({ age }: {age: number}) => (
  <div className={styles.age}>
    {`${age} ${declOfNum(age, ['год', 'года', 'лет'])}`}
  </div>
);
