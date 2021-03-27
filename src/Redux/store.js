import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './rootReducer';

var middlewares = []

var store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middlewares))
)

export default store;