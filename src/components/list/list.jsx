import React, { useState } from 'react';
import Item from '../item/item';
import styles from './list.module.css';

const List = () => {
  const [data, setData] = useState([
    {
      title: '강의보기',
      isChecked: false,
    },
    {
      title: '카페가기',
      isChecked: true,
    },
    {
      title: '청소하기',
      isChecked: false,
    },
  ]);

  return (
    <ul className={styles.list}>
      {data.map(info => (
        <Item info={info} />
      ))}
    </ul>
  );
};

export default List;
