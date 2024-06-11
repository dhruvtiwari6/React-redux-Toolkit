import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "./todoSlice";  

export default function TodoList() {
    const todos = useSelector(state => state.tony.todos);  // using in  store
    const dispatch = useDispatch();

    return (
        <div>
            <h3>Todos</h3>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.text}  
                        <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
