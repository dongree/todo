import React from 'react';
import styles from './header.module.css';
import { BsFillSunFill } from 'react-icons/bs';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.lightModeBtn}>
        <BsFillSunFill />
      </div>
      <ul className={styles.btns}>
        <li className={styles.all}>All</li>
        <li className={styles.active}>Active</li>
        <li className={styles.completed}>Completed</li>
      </ul>
    </div>
  );
};

export default Header;
