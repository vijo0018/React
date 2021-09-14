
import TodoItem from './TodoItem';

interface TodosListProps {
  todos: string[]
}

const TodosList = ({todos}: TodosListProps) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => <TodoItem todo={todo} />)}
      </ul>
    </div>
  )
}

export default TodosList
