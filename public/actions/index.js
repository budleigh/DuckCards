import axios from 'axios'

export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_TASKS = 'RECIEVE_TASKS'
export const POST_TASK = 'POST_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'


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

export function postTask(task) {
  return dispatch => {
    return axios.post('http://localhost:3000/tasks', task)
      .then( response => dispatch(fetchTasks()) )
      .catch( error => console.log(error) )
  }
}

export function fetchTasks() {
  return dispatch => {
    return axios.get('http://localhost:3000/tasks')
      .then( response => dispatch(receiveTasks(response)) )
      .catch( error => console.log(error) )
  }
}

function shouldFetchTasks(state) {
  const tasks = state.data
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
    return axios.post('http://localhost:3000/update', { title: title, body: update })
      .then( response => dispatch(fetchTasks() ))
      .catch( error => console.log(error) )
  }
}




