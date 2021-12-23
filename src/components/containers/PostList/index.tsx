import React from 'react';
import styles from './PostList.module.sass'
import PostItem from '../PostItem';
import { PostListProps } from './PostList.types';


const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <ul className={styles.list}>
      { posts.map((post) => {
        return <PostItem post={ post } key={ post.id } />
      })}
    </ul>
  );
}

export default PostList;
