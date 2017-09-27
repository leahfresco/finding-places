import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { fetchTerm } from './actions/index';

import App from './components/app';
import reducers from './reducers';

let store = createStore(reducers);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
