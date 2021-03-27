import React from 'react';
import {connect} from 'react-redux'
import Todo from '../Todo/Todo';
import './TodosContainer.css';

const TodosContainer = (props) => {
    // console.log(props)
    var filteredTodos=[];
    if(props.filter === "all"){
        filteredTodos=props.todos
    }
    else if (props.filter === "completed"){
        filteredTodos=props.todos.filter(todo => todo.completed === true)
    }
    else if(props.filter === "active"){
        filteredTodos=props.todos.filter(todo => todo.completed === false)
    }
    return (
        <div className="todosContainer">
            {
                filteredTodos.map((todo) => ( <Todo key={todo.id} todo={todo}/>) )
            }
        </div>
    );
};

const mapState=(state)=>({
    todos: state.todos,
    filter:state.filters.status
})

export default connect(mapState)(TodosContainer);