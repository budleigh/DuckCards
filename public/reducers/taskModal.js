import {
  CHANGE_STATUS,
  CHANGE_FIELD,
  SET_MODE,
  SET_VISIBILITY,
  CLEAR_ALL_FIELDS,
  CHANGE_DATE
} from '../actions/taskModal';

const defaultState = {
  // internal component state properties
  mode: 'create',
  open: false,
  dropdownValue: 1,
  dateDateObj: null,

  // document propreties
  // in retrospect, these two groups should not be in the same object
  title: '',
  dueDate: '',
  category: '',
  owner: '',
  status: "To Do"
};

const statusValueMap = {
  1: 'To Do',
  2: 'In Progress',
  3: 'Completed'
};

const getDateString = (date) => (
  `${date.getMonth()}/${date.getDay()}`
);

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

    case CLEAR_ALL_FIELDS:
      return defaultState;

    case CHANGE_DATE:
      return Object.assign({}, state, {
        dueDate: getDateString(action.value),
        dueDateObj: action.value
      });

    default:
      return state;
  }
};

export default taskModal;
