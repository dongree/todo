import React, { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import List from '../list/list';
import styles from './todo.module.css';

const Todo = () => {
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

  const handleAdd = item => {
    setData(data => {
      const updated = [...data];
      updated.push(item);
      return updated;
    });
  };

  return (
    <div className={styles.todo}>
      <Header />
      <List data={data} />
      <Footer onAdd={handleAdd} />
    </div>
  );
};

export default Todo;
