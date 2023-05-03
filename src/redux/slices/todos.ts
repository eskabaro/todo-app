import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { TodoList, NewTodo } from "../../types/data";

type TodosState = {
     list: TodoList[]
}

type RemoveTodoPayload = {
     id: string,
     idList: string
}

const initialState: TodosState = {
     list: []
}

export const Todo = createSlice({
     name: 'Todo',
     initialState,
     reducers: {
          setLists: (state, action: PayloadAction<TodoList[]>) => {
               state.list = action.payload
          },
          addNewList: (state, action: PayloadAction<TodoList>) => {
               state.list.push(action.payload)
               localStorage.setItem('lists', JSON.stringify(state.list))
          },
          deleteList: (state, action: PayloadAction<string>) => {
               const lists = JSON.parse(localStorage.getItem('lists') || '[]')
               const index = lists.findIndex((e: TodoList) => e.id === action.payload)
               if (index !== -1) lists.splice(index, 1)
               localStorage.setItem('lists', JSON.stringify(lists))
               state.list = lists
          },
          addNewTodo: (state, action: PayloadAction<NewTodo>) => {
               const data = JSON.parse(localStorage.getItem('lists') || '[]')
               const itemIndex = data.findIndex((e: TodoList) => e.id === action.payload.idList)
               data[itemIndex].todos.push(action.payload)
               localStorage.setItem('lists', JSON.stringify(data))
               state.list = data
          },
          removeTodo: (state, action: PayloadAction<RemoveTodoPayload>) => {
               const data = JSON.parse(localStorage.getItem('lists') || '[]')
               const itemIndex = data.findIndex((e: TodoList) => e.id === action.payload.idList)
               const todoIndex = data[itemIndex].todos.findIndex((e: NewTodo) => e.id === action.payload.id)
               data[itemIndex].todos.splice(todoIndex, 1)
               localStorage.setItem('lists', JSON.stringify(data))
               state.list = data
          },
          changeCompleted: (state, action: PayloadAction<RemoveTodoPayload>) => {
               const data = JSON.parse(localStorage.getItem('lists') || '[]')
               const itemIndex = data.findIndex((e: TodoList) => e.id === action.payload.idList)
               const todoIndex = data[itemIndex].todos.findIndex((e: NewTodo) => e.idList === action.payload.id)
               data[itemIndex].todos[todoIndex].completed = !data[itemIndex].todos[todoIndex].completed
               localStorage.setItem('lists', JSON.stringify(data))
               state.list = data
          }
     }
})

export const { 
     addNewList, 
     setLists, 
     deleteList, 
     addNewTodo, 
     removeTodo, 
     changeCompleted } = Todo.actions
export default Todo.reducer
