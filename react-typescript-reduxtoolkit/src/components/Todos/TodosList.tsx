
import TodoItem from './TodoItem';

interface TodosListProps {
  todos: string[]
}

const TodosList = ({todos}: TodosListProps) => {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}
      </ul>
    </div>
  )
}

export default TodosList
