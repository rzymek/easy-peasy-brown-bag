import React from 'react';
import './App.css';
import { ToDoAdd, ToDoList } from "./ToDo";
import { StoreProvider } from 'easy-peasy';
import { store } from './store';

const App: React.FC = () => {
  return (
    <StoreProvider store={store}>
      <div className="App">
        <ToDoList />
        <ToDoAdd />
      </div>
    </StoreProvider>
  );
}

export default App;
