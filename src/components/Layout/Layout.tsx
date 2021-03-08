import React from 'react';
import styles from './Layout.module.css';

export const Layout = ({ children }: {children: React.ReactNode}) => (
  <div className={styles.layout}>{children}</div>
);
