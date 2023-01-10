import { useGetAllPostsQuery } from '../../services/posts'
import { PostCard } from '../post-card/PostCard'
import { PostListSkeleton } from '../post-list-skeleton/PostListSkeleton'
import styles from './PostList.module.css'

export function PostList() {
	const { isError, isFetching, data } = useGetAllPostsQuery()

	if (isFetching) return <PostListSkeleton />

	if (isError) return <div>Error</div>

	return (
		<section>
			<div className={styles['l-grid']}>
				{data?.map((post) => (
					<PostCard post={post} key={post.id} />
				))}
			</div>
		</section>
	)
}
