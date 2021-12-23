import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Post.module.sass';
import PostsApi from 'api/PostsApi';
import CommentsApi from 'api/CommentsApi';
import { TPost, TComments } from "./Post.types";
import Loader from 'components/ui/Loader';
import CommentsList from 'components/containers/CommentsList';

const Post: React.FC  = () => {
  const { id } = useParams();

  const [ post, setPost ] = useState<TPost>({
    item: {
      title: '',
      body: '',
      id: 0,
      userId: 0,
    },
    loading: true
  });

  const [ comments, setComments ] = useState<TComments>({
    list: [],
    loading: true
  });

  useEffect(() => {
    id && PostsApi.loadItem(id)
      .then((item) => {
        setPost({
          item,
          loading: false
        });
      });

    id && CommentsApi.loadList(id)
        .then((list) => {
          setComments({
            list,
            loading: false
          });
        });
  }, [id]);

  return (
    <div>
      {(post.loading || comments.loading) ? <Loader /> : (
        post.item && (
          <div>
            <div className={styles.text}>
              <h3>{post.item.title}</h3>
              <p>{post.item.body}</p>
            </div>
            { comments.list.length && <CommentsList comments={ comments.list } /> }
          </div>
        )
      )}
    </div>
  );
}
export default Post;
