import React from "react";
import './CreateTodoButton.css'
function CreateTodoButton(props){

    const onClickButton = (msg) => {
        alert(msg);
    };

    return (
        <div className="button_container">
        <button className="add_button"
        onClick={() => onClickButton('oc')}
        >
            ADD
        </button>
        </div>
    );
}

export {CreateTodoButton};