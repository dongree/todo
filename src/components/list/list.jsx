import React, { useContext, useState } from 'react';
import Item from '../item/item';
import styles from './list.module.css';
import { DarkModeContext } from '../../context/DarkModeContext';

const List = ({ data, onDelete, onUpdate }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  return (
    <ul
      className={styles.list}
      style={
        darkMode ? { backgroundColor: 'violet' } : { backgroundColor: 'bisque' }
      }
    >
      {data.map((info, idx) => (
        <Item
          info={info}
          key={idx}
          onDelete={id => {
            onDelete(id);
          }}
          onUpdate={info => {
            onUpdate(info);
          }}
        />
      ))}
    </ul>
  );
};

export default List;
