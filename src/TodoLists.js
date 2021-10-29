import React from "react";
import cross from "./cancel.png";

export const TodoLists = (props) => {
  return (
    <div className="todo_style">
      <img src={cross} alt="" onClick={() => props.selectItem(props.id)} />
      <li className="todo_style_text">{props.elmem}</li>
    </div>
  );
};
