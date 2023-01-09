import styles from './PostListSkeleton.module.css'

export default function PostListSkeleton() {
	return (
		<section>
			<div className={styles['l-grid']}>
				<div className={styles['c-card']} />
				<div className={styles['c-card']} />
				<div className={styles['c-card']} />
				<div className={styles['c-card']} />
			</div>
		</section>
	)
}
