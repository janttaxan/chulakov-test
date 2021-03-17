import { ButtonGroup } from '../ButtonGroup';
import { Button } from '../Button';
import { IconCards, IconTable } from '../Icons';

interface IViewTogglerProps {
  isTableView: boolean;
  onCards: () => void;
  onTable: () => void;
}

export const ViewToggler = ({ onCards, onTable, isTableView }: IViewTogglerProps) => {
  return (
    <ButtonGroup>
      <Button
        onClick={onCards}
        icon={<IconCards/>}
        primary={!isTableView}
        outlined={isTableView}
      />
      <Button
        onClick={onTable}
        icon={<IconTable/>}
        primary={isTableView}
        outlined={!isTableView}
      />
    </ButtonGroup>
  );
};
