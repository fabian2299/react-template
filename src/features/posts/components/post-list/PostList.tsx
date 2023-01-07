import { useGetAllPostsQuery } from '../../services/posts'
import PostCard from '../post-card/PostCard'

export default function PostList() {
  const { isError, isLoading, data } = useGetAllPostsQuery()

  if (isLoading) return <div>Loading...</div>

  if (isError) return <div>Error</div>

  return (
    <section>
      <div>
        {data?.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </section>
  )
}
