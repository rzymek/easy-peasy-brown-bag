    create-react-app easy-peasy-brown-bag --typescript
    
    yarn add easy-peasy  

Typings included.
  
## Use state

store.ts
```
import {createStore, createTypedHooks} from "easy-peasy";

const initial = {
    todos: {
        items: ['a', 'b', 'c']
    }
};

export const store = createStore(initial);
export const {useActions, useStore} = createTypedHooks<typeof initial>();
```

App.tsx:
```
import { store } from './store';

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
```


ToDo.tsx

    import {useStore} from "./store";

    export function ToDoList() {
        const items = useStore(state => state.todos.items);


## Modify state
store.ts
```
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
```
ToDo.tsx
```
export function ToDoAdd() {
    const [text, setText] = useState('');
    const add = useActions(actions => actions.todos.add);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        add(text);
        setText('');
    }
```