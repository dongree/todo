import React, { useCallback, useContext } from 'react';
import styles from './header.module.css';
import { BsFillSunFill } from 'react-icons/bs';
import { DarkModeContext } from '../../context/DarkModeContext';

const Header = ({ filterId }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className={styles.header}
      style={
        darkMode
          ? { backgroundColor: 'navy' }
          : { backgroundColor: 'yellowgreen' }
      }
    >
      <div
        className={styles.lightModeBtn}
        onClick={() => {
          toggleDarkMode();
        }}
      >
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
