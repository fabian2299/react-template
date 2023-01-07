import { useGetAllPostsQuery } from '../../services/posts'
import PostCard from '../post-card/PostCard'
import styles from './PostList.module.css'

export default function PostList() {
  const { isError, isLoading, data } = useGetAllPostsQuery()

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error</div>

  return (
    <section>
      <div className={styles['l-grid']}>
        {data?.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </section>
  )
}
