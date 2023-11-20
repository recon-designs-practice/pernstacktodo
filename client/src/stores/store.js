import { createWithEqualityFn } from "zustand/traditional"

const useTodoStore = createWithEqualityFn((set) => ({
  todos: [],
  setTodos: (stuffToAdd) => set(() => ({ todos: [...stuffToAdd] })),
  newTitleInputValue: '',
  setNewTitle: (newTitle) => set({ newTitleInputValue: newTitle }),
  newDescriptionInputValue: '',
  setNewDescription: (newDescription) => set({ newDescriptionInputValue: newDescription })
}))

export default useTodoStore