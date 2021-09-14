import { useEffect } from 'react';
import './App.css';
import { getPostsThunk } from './store/features/postsSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';
import Posts from './components/Posts/Posts';
import AddTodo from './components/Todos/AddTodo';
import { addTodo } from './store/features/todosSlice';
import TodosList from './components/Todos/TodosList';

function App() {
  const dispatch = useAppDispatch()
  const { posts, status } = useAppSelector((state) => state.posts)
  const { todos } = useAppSelector((state) => state.todos)

  useEffect(() => {
    dispatch(getPostsThunk())
  }, [dispatch])

  const addTodoHandler = (todo: string) => dispatch(addTodo(todo))

  return (
    <div>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodosList todos={todos}/>
      {posts.length > 0 ? <Posts posts={posts} /> : status}
    </div>
  )
}

export default App;
