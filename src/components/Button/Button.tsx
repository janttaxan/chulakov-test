import styles from './Button.module.css';
import classNames from 'classnames';
import { ReactNode } from 'react';

interface IButtonProps {
  icon?: ReactNode;
  text?: string;
  onClick: () => void;
  primary?: boolean;
  outlined?: boolean;
}

export const Button = (props: IButtonProps) => {
  const { text, onClick, primary = false, outlined = false, icon } = props;
  const buttonClasses = classNames(
    styles.button,
    { [styles.primary]: primary },
    { [styles.outlined]: outlined },
    { [styles.withoutText]: !text },
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {text}
    </button>
  );
};
