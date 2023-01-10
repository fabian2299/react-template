import { Button } from '@ui/button/Button'
import { toast } from 'react-hot-toast'
import { useDeletePostMutation } from '../../services/posts'

export function DeletePost({ id }: { id: number }) {
	const [deletePost, { isLoading }] = useDeletePostMutation()

	const handleDelete = async () => {
		try {
			await deletePost(id).unwrap()
			toast.success('Post deleted')
		} catch (error) {
			console.log('Error deleting post')
		}
	}

	return (
		<div>
			<Button onClick={handleDelete} disabled={isLoading} intent="danger">
				Delete Post
			</Button>
		</div>
	)
}
