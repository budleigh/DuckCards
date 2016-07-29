// import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Project from './containers/project';
import configureStore from './store/configureStore';
import { hashHistory, Router, Route } from 'react-router';

const store = configureStore();

render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ Project } />
    </Router>
  </Provider>,
  document.getElementById('app')
);
