import styles from './SearchField.module.css';
import { IconClose } from '../Icons/IconClose';
import { ChangeEvent, useState } from 'react';

export const SearchField = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setIsEmpty(false) : setIsEmpty(true);
    setValue(event.target.value);
  };

  const handleReset = () => {
    setValue('');
    setIsEmpty(true);
  };

  return (
    <div className={styles.searchField}>
      <input
        className={styles.field}
        placeholder={'Поиск по имени'}
        type="text"
        value={value}
        onChange={handleChange}
      />
      {!isEmpty && (
        <button className={styles.resetBtnWrapper} onClick={handleReset}>
          <IconClose/>
        </button>
      )}
    </div>
  );
};
