import React from 'react';
import logo from '../images/logo.svg'
import styles from '../styles/Header.module.scss';
export default function Header() {

  return (
    <div className={styles.container}>
      <div className={styles.topHeader}>
        <div className={styles.logo}>
          <img src={logo} alt="assistant" />
        </div>
      </div>
    </div>
  );
}