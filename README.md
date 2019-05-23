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


