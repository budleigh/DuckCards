import {
  OPEN_DELETE_TASK_MODAL,
  CLOSE_DELETE_TASK_MODAL
} from '../actions/confirmDeleteTaskModal';

const defaultState = {
  open: false,
  projectId: null,
  task: {
    title: ''
  }
};

const confirmDeleteTaskModal = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_DELETE_TASK_MODAL:
      return Object.assign({}, state, {
        open: true,
        task: action.task,
        projectId: action.projectId
      });

    case CLOSE_DELETE_TASK_MODAL:
      return defaultState;

    default:
      return state;
  }
}

export default confirmDeleteTaskModal;
