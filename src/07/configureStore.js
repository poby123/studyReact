import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //window.__REDUX_DEVTOOLS_EXTENSION()
import reducers from './reducers'; //a webpack is going to get 'index.js' file in 'reducers' folder automatically.

//리듀서가 여러개인 경우 combineReducers() 로 묶어서 createStore() 에 전달하면 된다.

export default (initStates) =>
  createStore(combineReducers(reducers), initStates, composeWithDevTools()); //insert composeWithDevTools into middleware as argument.
