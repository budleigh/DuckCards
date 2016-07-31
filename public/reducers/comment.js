import { CHANGE_COMMENT_FIELD } from '../actions';

const project = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_COMMENT_FIELD:
      return Object.assign({}, state, {
        task: action.task,
        comment: action.text
      });

    default:
      return state;
  }
};

export default project;
