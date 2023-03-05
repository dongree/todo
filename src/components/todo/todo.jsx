import React, { useState } from 'react';
import { DarkModeProvider } from '../../context/DarkModeContext';
import Footer from '../footer/footer';
import Header from '../header/header';
import List from '../list/list';
import styles from './todo.module.css';

const Todo = () => {
  const [filterId, setFilterId] = useState(1);
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

  const handleIsChecked = info => {
    setData(data => {
      return data.map(item => {
        if (item.id === info.id) return { ...item, isChecked: !info.isChecked };
        return item;
      });
    });
  };

  const handleShowedData = () => {
    switch (filterId) {
      case 1:
        return data;
      case 2:
        return data.filter(item => {
          return item.isChecked === true;
        });
      case 3:
        return data.filter(item => {
          return item.isChecked === false;
        });
      default:
        console.log('잘못된 접근입니다.');
        break;
    }
  };

  return (
    <DarkModeProvider>
      <div className={styles.todo}>
        <Header
          filterId={id => {
            setFilterId(id);
          }}
        />
        <List
          data={handleShowedData()}
          onDelete={handleDelete}
          onUpdate={handleIsChecked}
        />
        <Footer onAdd={handleAdd} />
      </div>
    </DarkModeProvider>
  );
};

export default Todo;
