import {create} from 'zustand';

const useTodoStore = create((set) => ({
    todos: [],
    addTodo: (todo) => set((state) => ({todos: [...state.todos, todo]})),
    removeTodo: (todoID) => set((state) => ({
        todos: state.todos.filter(todo => todo.id !== todoID)
    })),
}));

export default useTodoStore;