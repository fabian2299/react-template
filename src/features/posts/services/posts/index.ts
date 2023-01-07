// Need to use the React-specific entry point to import createApi
import { nanoid } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../../../../types/post'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/posts/',
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPostByID: builder.query<Post, string>({
      query: (id) => id,
    }),
    getAllPosts: builder.query<Post[], void>({
      query: () => '',
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: 'Post' as const, id })), 'Post']
          : ['Post'],
    }),
    // create mutation
    createPost: builder.mutation<Post, Partial<Post>>({
      query: (obj: Partial<Post>) => ({
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
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetPostByIDQuery,
  useGetAllPostsQuery,
  useCreatePostMutation,
} = postApi
