import React from "react";
import { connect } from "react-redux";
import Button from "../Button/Button";
import {
  deleteTodo,
  completeTodo,
  activeTodo,
} from "../../Redux/todos/todoActions";
import "./Todo.css";
import { useContext } from "react";
import { ThemeContext } from "./../../Context/ThemeContext";

const Todo = (props) => {
  var { theme } = useContext(ThemeContext);
  // return (
  //     <div className="todo">
  //         <h2 className='todoText'>{props.todo.description}</h2>
  //         <div className="options">
  //             <button className="btn" onClick>Redo</button>
  //             <button className="btn">Delete</button>
  //         </div>
  //     </div>
  // )
  return (
    <div className="todo" style={{ background: theme.backgroundColor }}>
      <h2
        className={props.todo.completed ? "done" : "todoText"}
        style={{ color: theme.textColor }}
      >
        {props.todo.description}
      </h2>
      <div className="options">
        {props.todo.completed === true ? (
          <Button
            buttonText="Active"
            click={() => props.activeTodo(props.todo.id)}
          />
        ) : (
          <Button
            buttonText="Complete"
            click={() => props.completeTodo(props.todo.id)}
          />
        )}
        <Button
          buttonText="Delete"
          click={() => props.deleteTodo(props.todo.id)}
        />
      </div>
    </div>
  );
};

const actions = {
  deleteTodo,
  completeTodo,
  activeTodo,
};

export default connect(null, actions)(Todo);

// <button id={props.todo.description} onClick={()=>{props.fav(props.todo)}}>Add to Fvaorites</button>
// <button onClick={()=>props.fav(props.todo)}>Add to Fvaorites</button>
