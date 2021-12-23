import React from "react";
import styles from './PostItem.module.sass'
import { Link } from 'react-router-dom';
import { PostItemProps } from './PostItem.types';

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <li className={styles.item}>
      <Link className={styles.link} to={`${post.id}`}>
        <span>{ post.title }</span>
      </Link>
    </li>
  );
}

export default PostItem;
