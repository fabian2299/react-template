import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { postApi } from '../features/posts/services/posts/index'
import { postsReducer } from '../features/posts/slice/postsSlice'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [postApi.reducerPath]: postApi.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(postApi.middleware)
  },
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
