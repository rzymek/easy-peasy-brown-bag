import React from 'react';
import './App.css';
import {ToDoAdd, ToDoList} from "./ToDo";

const App: React.FC = () => {
  return (
    <div className="App">
      <ToDoList/>
      <ToDoAdd/>
    </div>
  );
}

export default App;
