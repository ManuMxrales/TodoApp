import React from "react";
import "./TodoItem.css";
function TodoItem(props) {
  
  return (
      <div className="todo_item_container">
    <li>
      <span
      className={`icon_container ${props.completed && 'Icon_check--active'}`}
      onClick={props.onComplete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-check"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12l2 2l4 -4" />
        </svg>
      </span>
      {/* && “y” o también “entonces”. */}
      <p className= {`item ${props.completed && "itemCompleted"}`} >{props.text}</p>

      <span onClick={props.onDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-trash"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          strokeWidth="2.5"
          stroke="#ffffff"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="10" y1="11" x2="10" y2="17" />
          <line x1="14" y1="11" x2="14" y2="17" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      </span>
    </li>
      </div>
  );
}

export { TodoItem };
