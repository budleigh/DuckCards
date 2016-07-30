import { SIGN_USER_IN } from '../actions';

const user = (state = {}, action) => {
  switch(action.type) {
    case SIGN_USER_IN:
      return Object.assign({}, state, {
        username: action.username
      });

    default:
      return state;
  }
};

export default user;
