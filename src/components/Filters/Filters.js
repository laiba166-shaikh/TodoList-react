import React from "react";
import Button from "../Button/Button";
import { setFilterStatus } from "../../Redux/filter/filterActions";
import { connect } from "react-redux";
import "./Filters.css";
import SearchIcon from "@material-ui/icons/Search";
import { resetSearchTodos } from "../../Redux/todos/todoActions";

class Filters extends React.Component {
  render = () => {
    return (
      <div className="filters">
        <Button
          buttonText="All"
          click={() => this.props.setFilterStatus("all")}
        />
        <Button
          buttonText="Completed"
          click={() => this.props.setFilterStatus("completed")}
        />
        <Button
          buttonText="Active"
          click={() => this.props.setFilterStatus("active")}
        />
        <div
          className="search"
          onClick={() => {
            this.props.setFilterStatus("search");
            this.props.resetSearchTodos();
          }}
        >
          <SearchIcon
            fontSize="large"
            style={{
              // margin: ".3em",
              cursor: "pointer",
              // border: "1px solid black",
              color: this.props.color,
            }}
          />
        </div>
      </div>
    );
  };
}
// <input className="form__input"
//                 type="text"
//                 value={this.props.searchInput}
//                 placeholder="Search todo"
//                 />
const actions = {
  setFilterStatus,
  resetSearchTodos,
};

export default connect(null, actions)(Filters);
