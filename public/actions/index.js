import axios from 'axios'

export const REQUEST_TASKS = 'REQUEST_TASKS';
export const RECEIVE_TASKS = 'RECIEVE_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
export const CHANGE_AUTH_FIELD = "CHANGE_AUTH_FIELD";
export const SIGN_USER_IN = "SIGN_USER_IN";

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

export function createTask(task) {
  return dispatch => {
    return axios.post('/tasks', task)
      .then( response => dispatch(fetchTasks()) )
      .catch( error => console.log(error) )
  }
}

export function fetchTasks() {
  return dispatch => {
    return axios.get('/tasks')
      .then( response => dispatch(receiveTasks(response)) )
      .catch( error => console.log(error) )
  }
}

function shouldFetchTasks(state) {
  const tasks = state.tasks.data
  if (!tasks) {
    return true
  }
  if (tasks.isFetching) {
    return false
  }
}

export function fetchTasksIfNeeded() {
  return (dispatch, getState) => {
    if(shouldFetchTasks(getState())) {
      return dispatch(fetchTasks())
    }
  }
}

export function updateTask(title, update) {
  return dispatch => {
    return axios.post('/update', { title: title, body: update })
      .then( response => dispatch(fetchTasks() ))
      .catch( error => console.log(error) )
  }
}

export function deleteTask(title) {
  return dispatch => {

  }
}


export function hideModal() {
  return dispatch => dispatch({type:'HIDE_MODAL'})
}

export function showCreateTaskModal() {
  console.log('sup')
  return dispatch => dispatch(
    {
      type: 'SHOW_MODAL',
      modalType: 'CreateTaskModal'
    }
  )
}



