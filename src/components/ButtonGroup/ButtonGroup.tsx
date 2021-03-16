import styles from './ButtonGroup.module.css';
import { ReactNode } from 'react';
import classNames from 'classnames';

interface IButtonGroupProps {
  children: ReactNode;
  block?: boolean;
}

export const ButtonGroup = ({ children, block = false }: IButtonGroupProps) => {
  const buttonGroupClasses = classNames(
    styles.buttonGroup,
    { [styles.block]: block },
  );

  return (
    <div className={buttonGroupClasses}>{children}</div>
  );
};
