import { combineReducers } from 'redux'
import {
  REQUEST_TASKS, RECEIVE_TASKS,
  POST_TASK, postTask,
  fetchTasks
 } from '../actions'


// const initialState = {
//   isFetching: false,
//   modalType: null,
//   modalProps: {}
// }

function tasks(state = {
  isFetching: false,
  modalType: null,
  modalProps: {}
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

function modal(state = {
  isFetching: false,
  modalType: null,
  modalProps: {}
}, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        modalType: action.modalType,
        modalProps: action.modalProps
      })
    case 'HIDE_MODAL':
      return state
    default:
      return state
  }
}

const rootReducer = combineReducers({tasks, modal})

export default rootReducer