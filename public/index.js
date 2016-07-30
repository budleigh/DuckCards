// import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Project from './containers/project';
import Signup from './components/Auth/Signup';
import Signin from './components/Auth/Signin';
import configureStore from './store/configureStore';
import { hashHistory, Router, Route } from 'react-router';
import { signedIn, getToken } from './auth';
import axios from 'axios';

// ???
axios.interceptors.request.use(function (config) {
  config.headers['x-request-access'] = getToken();
  return config;
});

const store = configureStore();

function requireAuth (nextState, replace) {
  if (!signedIn()) {
    replace({
      pathname: '/signup',
      state: { nextPathName: nextState.location.pathname }
    });
  }
}

render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/project" component={ Project } onEnter={ requireAuth } />
      <Route path="/signup" component={ Signup } />
      <Route path="/signin" component={ Signin } />
    </Router>
  </Provider>,
  document.getElementById('app')
);
