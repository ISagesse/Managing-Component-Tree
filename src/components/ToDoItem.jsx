import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.onChecked(props.Id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
