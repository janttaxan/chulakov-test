import styles from './SortPanel.module.css';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { ISortGroup } from '../../interfaces/ISortGroup';
import { ESortingType } from '../../enums/ESortingType';
import { IconTable } from '../Icons';

interface ISortPanelProps {
  onSortByAge: () => void;
  onSortById: () => void;
  onSortByName: () => void;
  onSortByDecrease: () => void;
  onSortByIncrease: () => void;
  isActiveGroup: ISortGroup;
  isActiveType: ESortingType;
}

export const SortPanel = (props: ISortPanelProps) => {
  const {
    onSortByAge,
    onSortById,
    onSortByName,
    onSortByDecrease,
    onSortByIncrease,
    isActiveGroup,
    isActiveType,
  } = props;

  return (
    <div className={styles.sortPanel}>
      <div className={styles.sortGroup}>
        <ButtonGroup>
          <Button
            text={'ID'}
            onClick={onSortById}
            primary={isActiveGroup.id}
            outlined={!isActiveGroup.id}
          />
          <Button
            text={'Имя'}
            onClick={onSortByName}
            primary={isActiveGroup.name}
            outlined={!isActiveGroup.name}
          />
          <Button
            text={'Возраст'}
            onClick={onSortByAge}
            primary={isActiveGroup.age}
            outlined={!isActiveGroup.age}
          />
        </ButtonGroup>
      </div>
      <div className={styles.sortingType}>
        <ButtonGroup>
          <Button
            text={'По возрастанию'}
            onClick={onSortByIncrease}
            primary={isActiveType === ESortingType.increase}
            outlined={isActiveType !== ESortingType.increase}
          />
          <Button
            text={'По убыванию'}
            onClick={onSortByDecrease}
            primary={isActiveType === ESortingType.decrease}
            outlined={isActiveType !== ESortingType.decrease}
          />
        </ButtonGroup>
      </div>
    </div>
  );
};
