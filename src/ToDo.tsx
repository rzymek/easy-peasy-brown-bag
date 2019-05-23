import {FormEvent, useState} from "react";
import * as React from "react";
import {useStore} from "./store";

export function ToDoList() {
    const items = useStore(state => state.todos.items);
    return <div>
        <h2>Todo List</h2>
        <ul>
            {items.map((todo, idx) => (
                <li key={idx}>{todo}</li>
            ))}
        </ul>
    </div>;
}

export function ToDoAdd() {
    const [text, setText] = useState('');

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return <form onSubmit={handleSubmit}>
        <input
            type="text"
            onChange={e => setText(e.target.value)}
            value={text}
        />
        <button>Add</button>
    </form>
}