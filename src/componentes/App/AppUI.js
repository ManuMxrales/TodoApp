import React from "react";
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { CreateTodoButton } from "../CreateTodoButton";
import { TodoItem } from "../TodoItem";
import { TodoContext } from "../TodoContext";

function AppUI() {
  const { error, loading, searchedTodos, completeTodo, deleteTodo } =
    React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Corre! Va a explotar</p>}
        {loading && <p>Cargandooo</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer ToDo!</p>}
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
