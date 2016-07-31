import { combineReducers } from 'redux'
import authForm from './authForm';
import confirmDeleteTaskModal from './confirmDeleteTaskModal';
import dashboard from './dashboard';
import taskModal from './taskModal';
import tasks from './tasks';
import user from './user';
import project from './project';
import comment from './comment';

export default combineReducers({
  authForm,
  confirmDeleteTaskModal,
  dashboard,
  taskModal,
  tasks,
  project,
  user,
  comment
});
