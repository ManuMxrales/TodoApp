import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";
import './App.css';


function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p className="msg">Corre! Va a explotar</p>}
        {loading && <p className="msg">Cargandooo</p>}
        {(!loading && !searchedTodos.length) && <p className="msg">Crea tu primer ToDo! &#128221;</p>}
        {searchedTodos.map(tarea => (
          <TodoItem
            key={tarea.text}
            text={tarea.text}
            completed={tarea.completed}
            onComplete={() => completeTodo(tarea.text)}
            onDelete={() => deleteTodo(tarea.text)}
          />
        ))}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton 
      setOpenModal = {setOpenModal}
      openModal = {openModal}
      />
    </React.Fragment>
  );
}

export { AppUI };
