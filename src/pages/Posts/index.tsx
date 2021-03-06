import React, { useEffect, useState } from 'react'
import styles from './Posts.module.sass'
import PostsApi from 'api/PostsApi'
import { TPosts } from './Posts.types'
import PostList from 'components/containers/PostList'
import Loader from 'components/ui/Loader'

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<TPosts>({
    list: [],
    loading: true,
  })

  useEffect(() => {
    PostsApi.loadList(20).then(list => {
      setPosts({
        list,
        loading: false,
      })
    })
  }, [setPosts])

  return (
    <section>
      <h1 className={styles.title}>Post List</h1>
      {posts.loading ? <Loader /> : posts.list.length ? <PostList posts={posts.list} /> : <h3>No Posts!</h3>}
    </section>
  )
}

export default Posts
