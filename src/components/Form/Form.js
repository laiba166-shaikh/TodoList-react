import React from "react";
import { addTodo, searchTodo } from "../../Redux/todos/todoActions";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import "./Form.css";
import { setFilterStatus } from "./../../Redux/filter/filterActions";

class Form extends React.Component {
  state = {
    todoInput: "",
    searchValue: "",
  };

  changeInput = (e) => {
    this.setState({
      todoInput: e.target.value,
    });
  };

  changeSearchValue = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
    // console.log(this.state.searchValue);
    this.props.searchTodo(e.target.value);
  };

  onTodoSubmit = (e) => {
    e.preventDefault();
    var todoObj = {
      description: this.state.todoInput,
      completed: false,
      id: uuidv4(), //return random string
    };
    this.props.addTodo(todoObj);
    this.setState({
      todoInput: "",
    });
  };

  render = () => {
    return (
      <form className="form" onSubmit={this.onTodoSubmit}>
        {this.props.filter !== "search" ? (
          <input
            color={this.props.color}
            className="form__input"
            type="text"
            value={this.state.todoInput}
            placeholder={"Enter your todo here"}
            onChange={(e) => {
              this.changeInput(e);
            }}
          />
        ) : (
          <input
            color={this.props.color}
            className="form__input"
            type="text"
            value={this.state.searchValue}
            placeholder={"Search Your Todo here"}
            onChange={(e) => {
              this.changeSearchValue(e);
            }}
          />
        )}

        {this.props.filter === "search" ? (
          <h1
            style={{
              color: this.props.color,
              // background: this.props.buttonBackground,
            }}
            className="cancel"
            onClick={() => this.props.setFilterStatus("all")}
          >
            X
          </h1>
        ) : (
          <button
            style={{
              color: this.props.buttonColor,
              background: this.props.buttonBackground,
            }}
            type="submit"
            className="option_button"
          >
            Add
          </button>
        )}
      </form>
    );
  };
}

const actions = {
  addTodo,
  setFilterStatus,
  searchTodo,
};

const mapState = (state) => ({
  filter: state.filters.status,
});
export default connect(mapState, actions)(Form);
