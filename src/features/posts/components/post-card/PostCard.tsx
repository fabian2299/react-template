import { Post } from '../../../../types/post'

export default function PostCard({ post }: { post: Post }) {
  return (
    <div>
      <h2 className="heading-secondary">{post.title}</h2>
      <p className="paragraph">{post.body}</p>
    </div>
  )
}
