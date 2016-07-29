// import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/app';
import configureStore from './store/configureStore';
import { hashHistory, Router, Route } from 'react-router';

const store = configureStore();

render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App } />
    </Router>
  </Provider>,
  document.getElementById('app')
);
