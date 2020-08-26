//스토어 설정 파일을 추가한다.
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';

export default (initStates) =>
  createStore(combineReducers(reducers), initStates, composeWithDevTools());
