import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/main-layout/MainLayout'
import ErrorPage from './pages/error-page/ErrorPage'
import HomePage from './pages/home/HomePage'
import PostDetailsPage from './pages/post/PostDetailsPage'
import PostsPage from './pages/posts/PostsPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },

      {
        path: '/posts',
        element: <PostsPage />,
      },
      {
        path: 'posts/:id',
        element: <PostDetailsPage />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
