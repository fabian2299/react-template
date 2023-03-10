// Need to use the React-specific entry point to import createApi
import { nanoid } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post, PostDTO } from '../../../../types/post'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
	reducerPath: 'postAPi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3000/api/posts/',
		// delay response by 2 second to simulate a slow server
		fetchFn: async (args, init) => {
			// eslint-disable-next-line no-promise-executor-return
			await new Promise((resolve) => setTimeout(resolve, 1000))
			return fetch(args, init)
		},
	}),
	tagTypes: ['Post'],
	endpoints: (builder) => ({
		// Queries
		getPostByID: builder.query<Post, string>({
			query: (id) => id,
			providesTags: (result, error, arg) =>
				result ? [{ type: 'Post' as const, id: arg }] : [],
		}),
		getAllPosts: builder.query<Post[], void>({
			query: () => '',
			providesTags: (result, _error, _arg) =>
				result
					? [
							...result.map(({ id }) => ({
								type: 'Post' as const,
								id,
							})),
							'Post',
					  ]
					: ['Post'],
		}),
		// Mutations
		createPost: builder.mutation<Post, PostDTO>({
			query: (obj: PostDTO) => ({
				url: '',
				method: 'POST',
				body: {
					title: obj.title,
					body: obj.body,
					id: nanoid(),
				},
			}),
			invalidatesTags: ['Post'],
		}),
		deletePost: builder.mutation<Post, number>({
			query: (id) => ({
				url: `${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['Post'],
		}),
		updatePost: builder.mutation<Post, PostDTO>({
			query: (obj: PostDTO) => ({
				url: `${obj.id}`,
				method: 'PATCH',
				body: {
					title: obj.title,
					body: obj.body,
					id: obj.id,
					userId: obj.userId,
				},
			}),
			invalidatesTags: ['Post'],
		}),
	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetPostByIDQuery,
	useGetAllPostsQuery,
	useCreatePostMutation,
	useDeletePostMutation,
	useUpdatePostMutation,
} = postApi
