export const CHANGE_FIELD = 'CHANGE_FIELD';
export const CHANGE_STATUS = 'CHANGE_STATUS';
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

export function changeField (field, event) {
  return {
    type: CHANGE_FIELD,
    field,
    value: event.target.value
  };
}
