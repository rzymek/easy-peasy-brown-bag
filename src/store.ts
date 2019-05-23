import {createStore, createTypedHooks} from "easy-peasy";

const initial = {
    todos: {
        items: ['a', 'b', 'c']
    }
};

export const store = createStore(initial);
export const {useActions, useStore} = createTypedHooks<typeof initial>();
