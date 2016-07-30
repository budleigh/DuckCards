import { LOAD_PROJECT } from '../actions/projects';

const project = (state = {
  project: {}
}, action) => {
  switch (action.type) {
    case LOAD_PROJECT:
      return Object.assign({}, state, {
        project: action.data
      });

    default:
      return state;
  }
};

export default project;
