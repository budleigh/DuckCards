import { combineReducers } from 'redux'
import authForm from './authForm';
import dashboard from './dashboard';
import taskModal from './taskModal';
import tasks from './tasks';
import user from './user';
import project from './project';

export default combineReducers({
  authForm,
  dashboard,
  taskModal,
  tasks,
  project,
  user
});
