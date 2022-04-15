import React from "react";
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}){

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