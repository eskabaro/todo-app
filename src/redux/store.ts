import { configureStore } from '@reduxjs/toolkit'
import TodoReducer from './slices/todos'

export const store = configureStore({
  reducer: {
     todo: TodoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch