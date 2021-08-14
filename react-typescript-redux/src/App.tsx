import React, { useEffect } from 'react';
import './App.css';
import Posts from './components/Posts';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchPosts } from './store/actions/PostsAction';

function App() {
  const dispatch = useAppDispatch()
  const { posts, loading } = useAppSelector((state) => state.posts)

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div>
      {loading ? <p>Is loading...</p> : <Posts posts={posts}/>}
      
    </div>
  );
}

export default App;
