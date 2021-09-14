interface TodoItemProps {
  todo: string;
}

const TodoItem = ({todo}: TodoItemProps) => {
  return (
    <li>
      {todo}
    </li>
  )
}

export default TodoItem
