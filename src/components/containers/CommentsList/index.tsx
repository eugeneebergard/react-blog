import React from 'react'
import styles from './CommentsList.module.sass'
import { CommentsListProps } from './CommentsList.types'
import CommentsItem from '../CommentsItem'

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <section className={styles.comments}>
      <h4 className={styles.title}>Comments</h4>
      <ul className={styles.list}>
        {comments.map(comment => {
          return <CommentsItem comment={comment} key={comment.id} />
        })}
      </ul>
    </section>
  )
}

export default CommentsList
