import { Button } from '@ui/button/Button'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { PostDTO } from '../../../../types/post'
import { useCreatePostMutation } from '../../services/posts'
import styles from './CreatePost.module.css'

export function CreatePost() {
	const [createPost, { isLoading }] = useCreatePostMutation()
	const [showForm, setShowForm] = useState(false)
	const [postBody, setPostBody] = useState<PostDTO>({
		title: '',
		body: '',
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			await createPost(postBody).unwrap()
			setPostBody({ title: '', body: '' })
			setShowForm(false)
			toast.success('Post created')
		} catch (error) {
			console.log('Error creating post')
		}
	}

	return (
		<div>
			<Button onClick={() => setShowForm(!showForm)} intent="secondary">
				+ Create Post
			</Button>

			{showForm && (
				<form onSubmit={handleSubmit} className={styles['form']}>
					<div className={styles['l-wrapper']}>
						<label htmlFor="title" className={styles['label']}>
							Title
						</label>
						<input
							className={styles['input']}
							type="text"
							id="title"
							name="title"
							value={postBody.title}
							onChange={(e) =>
								setPostBody({ ...postBody, title: e.target.value })
							}
						/>
					</div>

					<div className={styles['l-wrapper']}>
						<label htmlFor="body" className={styles['label']}>
							Body
						</label>

						<textarea
							className={styles['input']}
							name="body"
							id="body"
							cols={30}
							rows={10}
							value={postBody.body}
							onChange={(e) =>
								setPostBody({ ...postBody, body: e.target.value })
							}
						/>
					</div>

					<Button disabled={isLoading} fullWidth>
						Create
					</Button>
				</form>
			)}
		</div>
	)
}
