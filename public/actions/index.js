import axios from 'axios'

export const REQUEST_TASKS = 'REQUEST_TASKS'
export const RECEIVE_TASKS = 'RECIEVE_TASKS'
export const POST_TASK = 'POST_TASK'


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

export function postTask() {
  return {
    type: POST_TASK
  }
}

export function fetchTasks() {
  return dispatch => {
    return axios.get('http://localhost:3000/tasks')
      .then( response => dispatch(receiveTasks(response)))
      .catch( error => console.log(error))
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
  return tasks.didInvalidate
}

export function fetchTasksIfNeeded() {
  return (dispatch, getState) => {
    if(shouldFetchTasks(getState())) {
      return dispatch(fetchTasks())
    }
  }
}




