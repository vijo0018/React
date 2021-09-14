import { useEffect } from 'react';
import './App.css';
import { getPostsThunk } from './store/features/postsSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';
import Posts from './components/Posts';

function App() {
  const dispatch = useAppDispatch()
  const { posts, status } = useAppSelector((state) => state.posts)

  useEffect(() => {
    dispatch(getPostsThunk())
  }, [dispatch])

  return (
    <>
      {posts.length > 0 ? <Posts posts={posts} /> : status}
    </>
  )
}

export default App;
