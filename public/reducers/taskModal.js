import {
  CHANGE_STATUS,
  CHANGE_FIELD,
  SET_VISIBILTY
} from '../actions/taskModal';

const defaultState = {
  open: false,
  value: 1,
  taskName: '',
  datePicker: '',
  CategoryChange: '',
  nameChange: '',
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
        value: action.value,
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

    default:
      return state;
  }
};

export default taskModal;
