// import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Project from './containers/project';
import Signup from './components/Auth/Signup';
import configureStore from './store/configureStore';
import { hashHistory, Router, Route } from 'react-router';
import { loggedIn } from './auth';

const store = configureStore();

function requireAuth (nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: '/signup',
      state: { nextPathName: nextState.location.pathname }
    });
  }
}

render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ Project } onEnter={ requireAuth } />
      <Route path="/signup" component={ Signup } />
    </Router>
  </Provider>,
  document.getElementById('app')
);
