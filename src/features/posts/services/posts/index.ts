// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from '../../../../types/post'

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: 'postAPi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/posts/',
  }),
  endpoints: (builder) => ({
    getPostByID: builder.query<Post, string>({
      query: (id) => id,
    }),
    getAllPosts: builder.query<Post[], void>({
      query: () => '',
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostByIDQuery, useGetAllPostsQuery } = postApi
