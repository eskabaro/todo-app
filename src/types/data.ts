export interface TodoList {
     id: string,
     name: string,
     todos: NewTodo[]
}

export interface NewTodo {
     idList: string,
     id: string,
     text: string,
     completed: boolean
}