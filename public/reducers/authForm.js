import { CHANGE_AUTH_FIELD } from '../actions';

const authForm = (state = {}, action) => {
  switch (action.type) {
    case CHANGE_AUTH_FIELD:
      return Object.assign({}, state, {
        [action.field]: action.value
      });

    default:
      return state;
  }
};

export default authForm;
