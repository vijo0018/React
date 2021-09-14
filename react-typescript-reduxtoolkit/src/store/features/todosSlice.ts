import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  todos: string[]
}
const initialState: initialStateType = {
  todos: []
}

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    //action sen action.payload eller { payload }
    addTodo: (state, { payload }: PayloadAction<string>) => {
      state.todos.push(payload)
    }
  } 
})

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;