import {combineReducers} from 'redux';
import filterReducer from './filter/filterReducer';
import todoReducer from './todos/todoReducer'

var rootReducer = combineReducers({
    todos:todoReducer,
    filters:filterReducer
});

export default rootReducer;