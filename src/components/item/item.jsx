import React from 'react';
import styles from './item.module.css';
import { BsFillTrashFill } from 'react-icons/bs';
import { GrCheckboxSelected, GrCheckbox } from 'react-icons/gr';

const Item = ({ info, onDelete, onUpdate }) => {
  // const handleCheckbox = () => onDelete(info);

  return (
    <li className={styles.item}>
      <div className={styles.container}>
        {info.isChecked ? (
          <div className={styles.checked} onClick={() => onUpdate(info)}>
            <GrCheckboxSelected />
          </div>
        ) : (
          <div className={styles.unchecked} onClick={() => onUpdate(info)}>
            <GrCheckbox />
          </div>
        )}
        <div className={styles.title}>{info.title}</div>
      </div>
      <div
        className={styles.deleteBtn}
        onClick={() => {
          onDelete(info.id);
        }}
      >
        <BsFillTrashFill />
      </div>
    </li>
  );
};

export default Item;
