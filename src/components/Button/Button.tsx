import styles from './Button.module.css';
import classNames from 'classnames';

interface IButtonProps {
  text: string;
  onClick: () => void;
  primary?: boolean;
  outlined?: boolean;
}

export const Button = (props: IButtonProps) => {
  const { text, onClick, primary = false, outlined = false } = props;
  const buttonClasses = classNames(
    styles.button,
    { [styles.primary]: primary },
    { [styles.outlined]: outlined },
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};
