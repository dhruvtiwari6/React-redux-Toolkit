import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "./todoSlice";  // Updated import path

export default function AddTodo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleAddTodo = (e) => {
        setInput(e.target.value);
    }

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));  // Pass object with 'text' property
        setInput('');
    }

    return (
        <div>
            <h1>Add your todo</h1>
            <form onSubmit={addTodoHandler}>
                <input
                    type="text"
                    value={input}
                    onChange={handleAddTodo}
                />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}
