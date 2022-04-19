import React, { useState } from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from '../TodoContext'
// const defaultTodos = [
//   { text: "Cortar Manzana", completed: false },
//   { text: "Comerse Al Perro", completed: false },
//   { text: "Tomar Agua", completed: false },
// ];


function App() {


  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
