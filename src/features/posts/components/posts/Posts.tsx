import { useState } from 'react'
import { Post } from '../../../../types/post'
import { useCreatePostMutation } from '../../services/posts/index'
import PostList from '../post-list/PostList'

export default function Posts() {
  const [createPost] = useCreatePostMutation()
  const [postBody, setPostBody] = useState<Partial<Post>>({
    title: '',
    body: '',
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createPost(postBody)
      .unwrap()
      .then(() => {
        setPostBody({ title: '', body: '' })
      })
      .then(() => {
        alert('Post created!')
      })
      .catch(() => {
        alert('Error creating post')
      })
  }

  return (
    <section>
      <h1 className="heading-primary heading-primary--main u-center-text">
        Posts
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={postBody.title}
            onChange={(e) =>
              setPostBody({ ...postBody, title: e.target.value })
            }
          />
        </div>

        <div>
          <label htmlFor="body">Body</label>
          <textarea
            name="body"
            id="body"
            cols={30}
            rows={10}
            value={postBody.body}
            onChange={(e) => setPostBody({ ...postBody, body: e.target.value })}
          />
        </div>

        <button type="submit">Create Post</button>
      </form>
      <PostList />
    </section>
  )
}
