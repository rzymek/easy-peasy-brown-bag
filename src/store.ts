import {createStore, createTypedHooks, action, Action} from "easy-peasy";

interface Model {
    todos: ToDoModel;
}

interface ToDoModel {
    items: string[];
    add: Action<ToDoModel, string>;
}

const initial:Model = {
    todos: {
        items: ['a', 'b', 'c'],
        add: action((state, payload)=>{
            state.items.push(payload);
        })
    }
};

export const store = createStore(initial);
export const {useActions, useStore} = createTypedHooks<Model>();
