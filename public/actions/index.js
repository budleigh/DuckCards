import axios from 'axios';
import { fetchProject } from './projects';

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECIEVE_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export const CHANGE_AUTH_FIELD = 'CHANGE_AUTH_FIELD';
export const SIGN_USER_IN = 'SIGN_USER_IN';
export const CHANGE_COMMENT_FIELD = 'CHANGE_COMMENT_FIELD';

export function signUserIn (username) {
  return {
    type: SIGN_USER_IN,
    username
  };
}

export function changeAuthField(field, value) {
  return {
    type: CHANGE_AUTH_FIELD,
    field,
    value
  };
}

export function requestTasks() {
  return {
    type: REQUEST_TASKS
  }
}

export function receiveTasks(tasks) {
  return {
    type: RECEIVE_TASKS,
    data: tasks.data,
    receivedAt: Date.now()
  }
}

export function createTask(project, task) {
  return dispatch => {
    return axios.post('/projects/' + project + '/tasks', task)
      .then(response => dispatch(fetchProject(project)))
      .catch(error => console.log(error));
  }
}

export function updateTask(project, task) {
  return dispatch => {
    return axios.put('/projects/' + project + '/tasks', task)
      .then(response => dispatch(fetchProject(project)))
      .catch(error => console.log(error));
  };
}

export function deleteTask(project, taskId) {
  const config = {
    data: { _id: taskId }
  };

  return dispatch => {
    return axios.delete('/projects/' + project + '/tasks', config)
      .then(response => dispatch(fetchProject(project)))
      .catch(error => console.log(error));
  };
}

export function changeCommentField(task, text) {
  return {
    type: CHANGE_COMMENT_FIELD,
    text: text,
    task: task
  };
}
