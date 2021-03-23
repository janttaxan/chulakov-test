import styles from './ButtonUp.module.css';
import classNames from 'classnames';
import { useEffect, useState } from 'react';

export const ButtonUp = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    function hiddenButton() {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (scrollTop === 0) {
        setIsHidden(true);
      } else if (scrollTop < prevScroll) {
        setIsHidden(false);
      } else if (scrollTop > prevScroll) {
        setIsHidden(true);
      }

      setPrevScroll(scrollTop);
    }

    hiddenButton();
    window.addEventListener('scroll', hiddenButton);

    return () => {
      window.removeEventListener('scroll', hiddenButton);
    };
  });

  const handleClick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const buttonUpClasses = classNames(
    styles.buttonUp,
    { [styles.isHidden]: isHidden },
  );

  return (
    <button
      className={buttonUpClasses}
      onClick={handleClick}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12L5.41 13.41L11 7.83V20H13V7.83L18.58 13.42L20 12L12 4L4 12Z" fill="#011C37"/>
      </svg>
    </button>
  );
};
