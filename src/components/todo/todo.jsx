import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import List from '../list/list';
import styles from './todo.module.css';

const todo = () => {
  return (
    <div className={styles.todo}>
      <Header />
      <List />
      <Footer />
    </div>
  );
};

export default todo;
