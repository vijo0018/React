import { useRef } from "react"
import Button from './../UI/Button';

interface AddTodoProps {
  onAddTodo: (todo:string) => void
}

const AddTodo = ({onAddTodo}: AddTodoProps) => {
  const inputRef = useRef<any>();

  const addTodoHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (inputRef.current.value.trim().length !== 0) {
      onAddTodo(inputRef.current.value)
      inputRef.current.value = ""
    }
  }

  return (
    <form>
      <input type='text' ref={inputRef}/>
      <Button onClick={addTodoHandler} type='submit'>Add todo</Button>
    </form>
  )
}

export default AddTodo
