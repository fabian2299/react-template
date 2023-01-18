import { Button } from '@ui/button/Button'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import { PostDTO } from '../../../../types/post'
import { useUpdatePostMutation } from '../../services/posts'
import styles from './UpdatePost.module.css'

export function UpdatePost({ id }: { id: number }) {
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
			toast.success('Post updated')
		} catch (error) {
			toast.error('Something went wrong')
		}
	}

	return (
		<div>
			<Button onClick={() => setShowUpdate(!showUpdate)}>
				Update Post
			</Button>

			{showUpdate && (
				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles['l-wrapper']}>
						<label htmlFor="title" className={styles.label}>
							Title
							<input
								className={styles.input}
								type="text"
								id="title"
								name="title"
								value={postBody.title}
								onChange={(e) =>
									setPostBody({
										...postBody,
										title: e.target.value,
									})
								}
							/>
						</label>
					</div>

					<div className={styles['l-wrapper']}>
						<label htmlFor="body" className={styles.label}>
							Body
							<textarea
								className={styles.input}
								name="body"
								id="body"
								cols={30}
								rows={10}
								value={postBody.body}
								onChange={(e) =>
									setPostBody({
										...postBody,
										body: e.target.value,
									})
								}
							/>
						</label>
					</div>

					<Button
						className={styles['button-submit']}
						disabled={isLoading}
					>
						Update
					</Button>
				</form>
			)}
		</div>
	)
}
