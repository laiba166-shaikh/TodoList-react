import React from "react";
import { connect } from "react-redux";
import Todo from "../Todo/Todo";
import "./TodosContainer.css";

const TodosContainer = (props) => {
  var filteredTodos = [];
  if (props.filter === "all") {
    filteredTodos = props.todos;
  } else if (props.filter === "completed") {
    filteredTodos = props.todos.filter((todo) => todo.completed === true);
  } else if (props.filter === "active") {
    filteredTodos = props.todos.filter((todo) => todo.completed === false);
  } else if (props.filter === "search") {
    filteredTodos = props.searchTodos;
  }

  return (
    <div className="todosContainer">
      {filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapState = (state) => ({
  todos: state.todos.todos,
  filter: state.filters.status,
  searchTodos: state.todos.searchTodos,
});

export default connect(mapState)(TodosContainer);
