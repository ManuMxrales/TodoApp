import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  const onAdd = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onAdd} >
      <label>Agrega un TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Agrega una Tareaaa"
      />
      <div className="form_btn_container">
        <button type="button" onClick={onCancel} className='btn'>
          Cancelar
        </button>
        <button type="submit" onClick={onAdd} className='btn add_btn'>
          Add
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
