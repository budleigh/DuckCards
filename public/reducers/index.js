import { combineReducers } from 'redux'
import {
  REQUEST_TASKS, RECEIVE_TASKS,
  POST_TASK, postTask, fetchTasks,
  SHOW_MODAL, HIDE_MODAL
} from '../actions'

export default function reducer(state = {
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
    case SHOW_MODAL:
      return Object.assign({}, state, {
        modalType: action.modalType,
        modalProps: action.modalProps
      })
    case HIDE_MODAL:
      return state

    default:
      return state
  }
}

