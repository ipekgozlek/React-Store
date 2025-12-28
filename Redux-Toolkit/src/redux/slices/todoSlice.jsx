import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    todos: [
        {id: 0, title: '30 dakika kitap okumak', completed: false},
        {id: 1, title: '1 saat spor yapmak', completed: false},
        {id: 2, title: 'Günlük yazmak', completed: false}
    ],

    
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: { 
        addTodo: (state, action) => {
            state.todos= [...state.todos, action.payload];
        },
        deletetodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    },
});
export const {addTodo, deletetodo} = todoSlice.actions;
export default todoSlice.reducer;