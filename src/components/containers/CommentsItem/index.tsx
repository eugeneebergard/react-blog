import React from 'react';
import styles from './CommentsItem.module.scss';
import { CommentsItemProps } from './CommentsItem.types';

const CommentsItem: React.FC<CommentsItemProps> = ({ comment }) => {
  return (
    <li className={styles.item}>
      <div className={styles.heading}>
        <h4>{comment.name}</h4>
        <span>{comment.email}</span>
      </div>
      <p className={styles.text}>{ comment.body }</p>
    </li>
  );
}

export default CommentsItem;
