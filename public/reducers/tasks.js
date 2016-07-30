import { REQUEST_TASKS, RECEIVE_TASKS } from '../actions';

const tasks = (state = {
  isFetching: false,
  data: []
}, action) => {
  switch (action.type) {
    case REQUEST_TASKS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_TASKS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.data,
        lastUpdated: Date.now()
      });

    default:
      return state;
  }
};

export default tasks;
