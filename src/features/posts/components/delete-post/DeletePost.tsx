import { useDeletePostMutation } from '../../services/posts'
import styles from './DeletePost.module.css'

export default function DeletePost({ id }: { id: number }) {
  const [deletePost, { isLoading }] = useDeletePostMutation()

  const handleDelete = async () => {
    try {
      await deletePost(id.toString()).unwrap()
      console.log('Post deleted')
    } catch (error) {
      console.log('Error deleting post')
    }
  }

  return (
    <div>
      <button
        onClick={handleDelete}
        disabled={isLoading}
        className={styles['button']}
      >
        Delete Post
      </button>
    </div>
  )
}