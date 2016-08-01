import { combineReducers } from 'redux'
import authForm from './authForm';
import confirmDeleteTaskModal from './confirmDeleteTaskModal';
import dashboard from './dashboard';
import taskModal from './taskModal';
import collabModal from './collabModal';
import tasks from './tasks';
import user from './user';
import project from './project';
import comment from './comment';

export default combineReducers({
  authForm,
  confirmDeleteTaskModal,
  dashboard,
  taskModal,
  collabModal,
  tasks,
  project,
  user,
  comment
});
