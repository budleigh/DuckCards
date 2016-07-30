import { REQUEST_PROJECTS, RECEIVE_PROJECTS } from '../actions/projects';

const dashboard = (state = {
  projects: [],
  isFetching: false
}, action) => {
  switch (action.type) {
    case REQUEST_PROJECTS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_PROJECTS:
      return Object.assign({}, state, {
        isFetching: false,
        projects: action.projects,
        lastUpdated: Date.now()
      });

    default:
      return state;
  }
};

export default dashboard;
