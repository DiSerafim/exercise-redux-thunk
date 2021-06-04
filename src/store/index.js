// Importe o método applyMiddleware
import { applyMiddleware, createStore } from 'redux';
// Importe o redux-thunk
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// Aplique o middleware
const store = createStore(
  rootReducer, applyMiddleware(thunk),
);


export default store;
