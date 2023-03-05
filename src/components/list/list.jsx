import React, { useState } from 'react';
import Item from '../item/item';
import styles from './list.module.css';

const List = ({ data, onDelete }) => {
  return (
    <ul className={styles.list}>
      {data.map((info, idx) => (
        <Item
          info={info}
          key={idx}
          onDelete={id => {
            onDelete(id);
          }}
        />
      ))}
    </ul>
  );
};

export default List;
