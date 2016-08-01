export const CHANGE_FIELD = 'CHANGE_COLLAB_FIELD';
export const CLEAR_ALL_FIELDS = 'CLEAR_ALL_COLLAB_FIELDS';
export const SET_VISIBILITY = 'SET_COLLAB_VISIBILITY';

export function setCollabVisibility (value) {
  return {
    type: SET_VISIBILITY,
    value
  };
}

export function changeCollabField (field, value) {
  return {
    type: CHANGE_FIELD,
    field,
    value
  };
}

export function clearAllCollabFields () {
  return {
    type: CLEAR_ALL_FIELDS
  };
}
