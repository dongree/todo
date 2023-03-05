import React from 'react';
import styles from './header.module.css';
import { BsFillSunFill } from 'react-icons/bs';

const Header = ({ filterId }) => {
  return (
    <div className={styles.header}>
      <div className={styles.lightModeBtn}>
        <BsFillSunFill />
      </div>
      <ul className={styles.btns}>
        <li className={styles.all} onClick={() => filterId(1)}>
          All
        </li>
        <li className={styles.active} onClick={() => filterId(2)}>
          Active
        </li>
        <li className={styles.completed} onClick={() => filterId(3)}>
          Completed
        </li>
      </ul>
    </div>
  );
};

export default Header;
