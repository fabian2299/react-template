import { useParams } from 'react-router-dom'
import { useGetPostByIDQuery } from '../../services/posts'
import UpdatePost from '../update-post/UpdatePost'

export function PostDetails() {
	const { id } = useParams()
	const { data, isLoading, isError } = useGetPostByIDQuery(id as string)

	if (isLoading) return <div>Loading...</div>

	if (isError) return <div>Error</div>

	if (!data) return null

	return (
		<div>
			<h2 className="heading-secondary">{data?.title}</h2>
			<p className="paragraph">{data?.body}</p>
			<p>{data.id}</p>

			<UpdatePost id={data.id} />
		</div>
	)
}
