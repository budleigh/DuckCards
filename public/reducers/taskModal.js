import {
  CHANGE_STATUS,
  CHANGE_FIELD,
  SET_MODE,
  SET_VISIBILITY
} from '../actions/taskModal';

const defaultState = {
  mode: 'create',
  open: false,
  title: '',
  dueDate: '',
  category: '',
  owner: '',
  dropdownValue: 1,
  status: "To Do"
};

const statusValueMap = {
  1: 'To Do',
  2: 'In Progress',
  3: 'Completed'
};

const taskModal = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return Object.assign({}, state, {
        dropdownValue: action.value,
        status: statusValueMap[action.value],
      });

    case CHANGE_FIELD:
      return Object.assign({}, state, {
        [action.field]: action.value
      });

    case SET_VISIBILITY:
      return Object.assign({}, state, {
        open: action.value
      });

    case SET_MODE:
      return Object.assign({}, state, {
        mode: action.value
      });

    default:
      return state;
  }
};

export default taskModal;
