import { Post } from '../../../../../../types/post'

export default function PostCard({ post }: { post: Post }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}
