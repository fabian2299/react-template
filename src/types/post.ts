export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export type PostDTO = Omit<Post, 'id'>
