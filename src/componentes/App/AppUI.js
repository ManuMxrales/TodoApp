import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";

function AppUI({
  totalTodos,
  completedTodos,
  searchValue,
  setSearchValue,
  searchedTodos,
  completeTodo,
  deleteTodo,
  loading,
  error,
}) {
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
          {error && <p>Corre! Va a explotar</p>}
          {loading && <p>Cargandooo</p>}
          {(!loading && !searchedTodos.length )&& <p>Crea tu primer ToDo!</p>}
        {searchedTodos.map((tarea) => (
          <TodoItem
            key={tarea.text}
            text={tarea.text}
            completed={tarea.completed}
            onComplete={() => completeTodo(tarea.text)}
            onDelete={() => deleteTodo(tarea.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };
