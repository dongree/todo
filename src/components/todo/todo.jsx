import React, { useState } from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import List from '../list/list';
import styles from './todo.module.css';

const Todo = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: '강의보기',
      isChecked: false,
    },
    {
      id: 2,
      title: '카페가기',
      isChecked: true,
    },
    {
      id: 3,
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

  const handleDelete = id => {
    setData(data => {
      return data.filter(item => {
        return item.id !== id;
      });
    });
  };

  return (
    <div className={styles.todo}>
      <Header />
      <List data={data} onDelete={handleDelete} />
      <Footer onAdd={handleAdd} />
    </div>
  );
};

export default Todo;
