import { useRef } from "react"

interface AddTodoProps {
  onAddTodo: (todo:string) => void
}

const AddTodo = ({onAddTodo}: AddTodoProps) => {
  const inputRef = useRef<any>();

  const addTodoHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    onAddTodo(inputRef.current.value)
    inputRef.current.value = ""
  }

  return (
    <form>
      <input type='text' ref={inputRef}/>
      <button onClick={addTodoHandler} type='submit'>Add todo</button>
    </form>
  )
}

export default AddTodo
