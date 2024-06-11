import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from '../components/todoSlice';  // Adjusted import path based on your project structure

export const store = configureStore({
    reducer: {
        tony: TodoReducer  // Updated slice name in reducer configuration
    }
});
