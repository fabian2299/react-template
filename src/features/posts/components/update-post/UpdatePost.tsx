import { useState } from 'react'
import { PostDTO } from '../../../../types/post'
import { useUpdatePostMutation } from '../../services/posts'
import styles from './UpdatePost.module.css'

export default function UpdatePost({ id }: { id: number }) {
	const [updatePost, { isLoading }] = useUpdatePostMutation()
	const [showUpdate, setShowUpdate] = useState(false)

	const [postBody, setPostBody] = useState<PostDTO>({
		title: '',
		body: '',
	})

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			await updatePost({ id, ...postBody }).unwrap()
			setPostBody({ title: '', body: '' })
			setShowUpdate(false)
			console.log('Post updated')
		} catch (error) {
			console.log('Error updating post')
		}
	}

	return (
		<div>
			<button
				className={styles['button-show']}
				onClick={() => setShowUpdate(!showUpdate)}
			>
				Update Post
			</button>

			{showUpdate && (
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

					<button
						className={styles['button-submit']}
						type="submit"
						disabled={isLoading}
					>
						Update
					</button>
				</form>
			)}
		</div>
	)
}
