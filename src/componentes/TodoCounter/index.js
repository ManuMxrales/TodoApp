import React from "react";
import './TodoCounter.css';

function TodoCounter({total, completed}){
    

    return (
        <h2 className="titulo" >Haz Completado <br></br> {completed} TODOs de {total}</h2>
    );
}

export { TodoCounter };