import styles from './SearchField.module.css';
import { IconClose } from '../Icons/IconClose';
import { ChangeEvent, useState } from 'react';

interface ISearchFieldProps {
  searchValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onReset: () => void;
}

export const SearchField = ({ searchValue, onChange, onReset }: ISearchFieldProps) => {
  const [isEmpty, setIsEmpty] = useState(true);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.value ? setIsEmpty(false) : setIsEmpty(true);
    onChange(event);
  };

  const handleReset = () => {
    setIsEmpty(true);
    onReset();
  };

  return (
    <div className={styles.searchField}>
      <input
        className={styles.field}
        placeholder={'Поиск по имени'}
        type="text"
        value={searchValue}
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
