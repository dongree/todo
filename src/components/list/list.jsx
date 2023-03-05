import React, { useState } from 'react';
import Item from '../item/item';
import styles from './list.module.css';

const List = ({ data, onDelete, onUpdate }) => {
  return (
    <ul className={styles.list}>
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
