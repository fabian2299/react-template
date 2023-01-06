import { createSlice } from '@reduxjs/toolkit'
import { Post } from '../../../types/post'

export interface PostsState {
  data: Post[]
}

const initialState: PostsState = {
  data: [],
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const {} = postsSlice.actions

export const postsReducer = postsSlice.reducer
