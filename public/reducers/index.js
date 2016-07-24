import { combineReducers } from 'redux'
import {
  REQUEST_TASKS, RECEIVE_TASKS,
  POST_TASK, postTask,
  fetchTasks
 } from '../actions'


function tasks(state = {
  isFetching: false
}, action) {

  switch (action.type) {
    case REQUEST_TASKS:
      return Object.assign({}, state, {
        isFetching: true
      })
    case RECEIVE_TASKS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        lastUpdated: Date.now()
      })
    default:
      return state
  }
}

const rootReducer = tasks

export default rootReducer


