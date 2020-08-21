import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

class ReduxApp01 extends React.PureComponent {
  //createStore(reducer, /* intial state */, /* enhancer */)
  store = createStore(
    (state) => state,
    { loading: false, name: '두잇 리액트' },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  render() {
    //to provide store data to child component.
    return <Provider store={this.store}>리덕스 예제</Provider>;
  }
}

export default ReduxApp01;
