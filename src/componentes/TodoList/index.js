import React from "react";
import s from './TodoList.module.css';

function TodoList(props){
    return (
        <div className={s._real_list_container}>
        <section className={s.list_container}>
            <ul>
                {props.children}
            </ul>
        </section>
        </div>
    );
}

export {TodoList};