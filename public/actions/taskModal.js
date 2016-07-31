export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CLEAR_ALL_FIELDS = 'CLEAR_ALL_FIELDS';
export const CHANGE_STATUS = 'CHANGE_STATUS';
export const SET_MODE = 'SET_MODE';
export const SET_VISIBILITY = 'SET_VISIBILITY';

export function changeStatus (value) {
  return {
    type: CHANGE_STATUS,
    value
  };
}

export function setVisibility (value) {
  return {
    type: SET_VISIBILITY,
    value
  };
}

export function changeField (field, value) {
  return {
    type: CHANGE_FIELD,
    field,
    value
  };
}

export function setMode (value) {
  return {
    type: SET_MODE,
    value
  };
}

export function clearAllFields () {
  return {
    type: CLEAR_ALL_FIELDS
  };
}
