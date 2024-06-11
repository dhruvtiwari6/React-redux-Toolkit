import { createSlice, nanoid } from '@reduxjs/toolkit';

export const UserSlice = createSlice({
    name: 'tony',  // Changed slice name to 'tony'
    initialState: { 
        todos: []
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload  // Corrected payload access
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, removeTodo } = UserSlice.actions;
export default UserSlice.reducer;
