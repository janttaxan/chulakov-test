import React from 'react';
import styles from './Layout.module.css';

export const Layout = ({ children }: {children: React.ReactNode}) => (
  <main className={styles.layout}>{children}</main>
);
