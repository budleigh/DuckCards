import {
  CHANGE_STATUS,
  CHANGE_FIELD,
  SET_MODE,
  SET_VISIBILITY,
  CLEAR_ALL_FIELDS,
  CHANGE_DATE
} from '../actions/collabModal';

const defaultState = {
  open: false,
  username: ''
};

const collabModal = (state = defaultState, action) => {
  switch (action.type) {

    case CHANGE_FIELD:
      return Object.assign({}, state, {
        [action.field]: action.value
      });

    case SET_VISIBILITY:
      return Object.assign({}, state, {
        open: action.value
      });

    case CLEAR_ALL_FIELDS:
      return defaultState;

    default:
      return state;
  }
};

export default collabModal;
