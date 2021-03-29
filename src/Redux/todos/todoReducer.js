import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETE_TODO,
  ACTIVE_TODO,
  SEARCH_TODO,
  RESET_SEARCH_TODO,
} from "./todoConstants";
import {
  searchUserTodos,
  setCompleteTodos,
  setActiveTodos,
} from "../../utility/filterTodos";

const initialState = {
  todos: [],
  searchTodos: [],
};

const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, payload.todo] };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== payload.id),
      };
    case COMPLETE_TODO:
      return { ...state, todos: setCompleteTodos(state.todos, payload.id) };
    case ACTIVE_TODO:
      return { ...state, todos: setActiveTodos(state.todos, payload.id) };
    case SEARCH_TODO:
      return {
        ...state,
        searchTodos: searchUserTodos(state.todos, payload.searchValue),
      };
    case RESET_SEARCH_TODO:
      return {
        ...state,
        searchTodos: [],
      };
    default:
      return state;
  }
};

export default todoReducer;

// case TOGGLE_TODO:
//     return [...state.map(todo => {
//         if(todo.id === payload.id){
//             return {
//                 ...todo,
//                 completed:!todo.completed //yahan jb mien completed ko !todo.completed kr rahi tou completed ko consider nahi kr rha new object pass krna hai taky state fresh jaye islye hard coded true||false dngy aur done aur redo ka alg alg case bnayengy
//             }
//         }else{
//             return {...todo}
//         }
// })]
