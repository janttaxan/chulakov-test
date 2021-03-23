import styles from './Header.module.css';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {

    function fixedHeader() {
      const headerHeigth = headerRef.current?.clientHeight;
      if (!headerHeigth) return;

      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      if (scrollTop === 0) {
        setIsFixed(false);
        setIsHidden(false);
      } else if (scrollTop > prevScroll && scrollTop > headerHeigth) {
        setIsHidden(true);
      } else if (scrollTop < prevScroll && scrollTop > headerHeigth) {
        setIsFixed(true);
        setIsHidden(false);
      }

      setPrevScroll(scrollTop);
    }

    fixedHeader();
    window.addEventListener('scroll', fixedHeader);

    return () => {
      window.removeEventListener('scroll', fixedHeader);
    };
  }, [prevScroll]);

  const headerClasses = classNames(
    styles.header,
    { [styles.fixed]: isFixed },
    { [styles.hidden]: isHidden },
  );


  return (
    <header className={headerClasses} ref={headerRef}>
      <h2 className={styles.logo}>CHULAKOV TEST WORK</h2>
      <a
        className={styles.headerLink}
        href="https://github.com/janttaxan/chulakov-test"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
        <svg
          className={styles.icon}
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          width="15" height="15"
        >
          <path
            fill="currentColor"
            d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
          />
          <polygon
            fill="currentColor"
            points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
          />
        </svg>
      </a>
    </header>
  );
};
