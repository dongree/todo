import React, { useContext, useRef } from 'react';
import styles from './footer.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';

const Footer = ({ onAdd }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const todo = useRef(null);

  return (
    <div
      className={styles.footer}
      style={
        darkMode
          ? { backgroundColor: 'navy' }
          : { backgroundColor: 'yellowgreen' }
      }
    >
      <div className={styles.container}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add to do"
          ref={todo}
        />
        <div
          className={styles.addBtn}
          onClick={() => {
            const date = new Date();
            onAdd({
              title: todo.current.value,
              isChecked: false,
              id: date.getTime(),
            });
            todo.current.value = '';
          }}
        >
          Add
        </div>
      </div>
    </div>
  );
};

export default Footer;
