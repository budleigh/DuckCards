import { combineReducers } from 'redux'
import authForm from './authForm';
import dashboard from './dashboard';
import tasks from './tasks';
import user from './user';

export default combineReducers({
  authForm,
  dashboard,
  tasks,
  user
});
