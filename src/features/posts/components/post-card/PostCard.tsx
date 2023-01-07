import { Link } from 'react-router-dom'
import { Post } from '../../../../types/post'
import DeletePost from '../delete-post/DeletePost'
import UpdatePost from '../update-post/UpdatePost'
import styles from './PostCard.module.css'

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className={styles['c-card']}>
      <Link to={`/posts/${post.id}`} className={styles['c-card__link']}>
        Post Details
      </Link>
      <h2 className={styles['c-card__title']}>{post.title}</h2>
      <p className={styles['c-card__body']}>{post.body}</p>

      <DeletePost id={post.id} />
    </div>
  )
}
