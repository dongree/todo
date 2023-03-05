import React, { useContext, useRef, useState } from 'react';
import styles from './footer.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';
import { v4 as uuidv4 } from 'uuid';

const Footer = ({ onAdd }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [text, setText] = useState('');
  // const todo = useRef(null);
  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (text.trim().length === 0) {
      return;
    }
    // const date = new Date();
    onAdd({
      title: text,
      isChecked: false,
      id: uuidv4(),
    });
    setText('');
  };

  return (
    <div
      className={styles.footer}
      style={
        darkMode
          ? { backgroundColor: 'navy' }
          : { backgroundColor: 'yellowgreen' }
      }
    >
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Add to do"
          value={text}
          onChange={handleChange}
        />
        <button className={styles.addBtn}>Add</button>
      </form>
    </div>
  );
};

export default Footer;
