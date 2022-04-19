import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch(){

    const {searchValue, setSearchValue} = React.useContext(TodoContext)

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <div className="input_container">
            <input 
            className="input_tarea" 
            placeholder="Busca una Tarea aqui"
            value={searchValue}
            onChange={onSearchValueChange}
            />
        </div>  
    )
   
};

export {TodoSearch};