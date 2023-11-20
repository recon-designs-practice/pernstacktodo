import { createWithEqualityFn } from "zustand/traditional"

const useTodoStore = createWithEqualityFn((set) => ({
  todos: [
    {
      todo_id: '1',
      todo_title: 'Title 1',
      todo_description: 'Description 1',
      todo_is_complete: false,
      todo_created_on: '10-22-1971'
    },
    {
      todo_id: '2',
      todo_title: 'Title 2',
      todo_description: 'Description 2',
      todo_is_complete: true,
      todo_created_on: '10-22-1981'
    }
  ],
  addTodo: (newTodo) => set((state) => ({
    todos: [...state.todos, newTodo]
  })),
  newTitleInputValue: '',
  setNewTitle: (newTitle) => set({ newTitleInputValue: newTitle }),
  newDescriptionInputValue: '',
  setNewDescription: (newDescription) => set({ newDescriptionInputValue: newDescription })
}))

export default useTodoStore