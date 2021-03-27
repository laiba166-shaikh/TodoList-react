import React from 'react';
import {addTodo} from "../../Redux/todos/todoActions";
import {connect} from 'react-redux';
import {v4 as uuidv4} from 'uuid';
import './Form.css';

class Form extends React.Component {
    state={
        todoInput:''
    }

    changeInput=(e)=>{
        this.setState({
            todoInput:e.target.value
        })
    }

    onTodoSubmit=(e)=>{
        e.preventDefault();
        var todoObj={
            description:this.state.todoInput,
            completed:false,
            id: uuidv4() //return random string
        }
        this.props.addTodo(todoObj);
        this.setState({
            todoInput:''
        })
    }

    render = () => {
        return (
            <div className="form">
                <form  onSubmit={this.onTodoSubmit}>
                    <input className="form__input"
                    type="text"
                    value={this.state.todoInput}
                    placeholder="Enter your todo here"
                    onChange={(e)=>{this.changeInput(e)}}
                    />
                    <button className="add__btn">ADD</button>
                    <button className="add__btn">Search</button>
                </form>
            </div>
        )

    }
}

const actions={
    addTodo
}

export default connect(null,actions)(Form);