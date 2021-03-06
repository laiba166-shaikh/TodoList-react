import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  ACTIVE_TODO,
  SEARCH_TODO,
  RESET_SEARCH_TODO,
} from "./todoConstants";

export var addTodo = (todo) => ({
  type: ADD_TODO,
  payload: {
    todo,
  },
});

export var deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export var completeTodo = (id) => ({
  type: COMPLETE_TODO,
  payload: {
    id,
  },
});

export var activeTodo = (id) => ({
  type: ACTIVE_TODO,
  payload: {
    id,
  },
});

export var searchTodo = (searchValue) => {
  return {
    type: SEARCH_TODO,
    payload: {
      searchValue,
    },
  };
};

export var resetSearchTodos = () => {
  return {
    type: RESET_SEARCH_TODO,
  };
};
