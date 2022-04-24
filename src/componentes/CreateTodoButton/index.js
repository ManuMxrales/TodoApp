import React from "react";
import './CreateTodoButton.css'
function CreateTodoButton(props){

    const onClickButton = () => {
        // props.setOpenModal(true);
        //tambien podemos enviar una arrow function
        //para usar el estado anterior
        // prevState => !prevState
        props.setOpenModal(!props.openModal);
    };

    return (
        <div className="button_container">
        <button className="add_button"
        onClick={onClickButton}
        >
            ADD
        </button>
        </div>
    );
}

export {CreateTodoButton};