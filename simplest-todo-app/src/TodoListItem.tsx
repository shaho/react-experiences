import React from "react";
import "./TodoListItem.css";

interface TodoListItemProps {
  todo: Todo;
}

export const TodoListItem: React.FC<TodoListItemProps> = (props) => {
  return (
    <li>
      <label className={props.todo.complete ? "complete" : undefined}>
        <input type="checkbox" checked={props.todo.complete} />
        {props.todo.text}
      </label>
    </li>
  );
};
