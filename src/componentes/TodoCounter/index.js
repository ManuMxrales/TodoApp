import React from "react";
import './TodoCounter.css';
import { TodoContext } from '../TodoContext'
function TodoCounter(){
    
    const {totalTodos, completedTodos} = React.useContext(TodoContext)

    return (
        <h2 className="titulo" >Haz Completado <br></br> {completedTodos} TODOs de {totalTodos}</h2>
    );
}

export { TodoCounter };