import { CreatePost } from '../create-post/CreatePost'
import PostList from '../post-list/PostList'

export function Posts() {
	return (
		<div>
			<CreatePost />
			<PostList />
		</div>
	)
}
