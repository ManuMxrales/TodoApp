// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import {TodoCounter} from './componentes/TodoCounter'; 
import {TodoSearch} from './componentes/TodoSearch';
import {TodoList} from './componentes/TodoList';
import {CreateTodoButton} from './componentes/CreateTodoButton';
import { TodoItem } from './componentes/TodoItem';

const todos = [
  {text: 'Cortar Manzana', completed: false},
  {text: 'Comerse Al Perro', completed: false},
  {text: 'Tomar Agua', completed: false},
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
    
      <TodoList>
      {todos.map(tarea => (
        <TodoItem key={tarea.text} text={tarea.text}/>
      ))}  
      </TodoList>
      <CreateTodoButton/>
      
      </React.Fragment>
  );
}

export default App;
