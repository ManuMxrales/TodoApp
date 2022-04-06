import React from "react";
import s from '../styles/TodoList.module.css';

function TodoList(props){
    return (
        <section className={s.bg}>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export {TodoList};