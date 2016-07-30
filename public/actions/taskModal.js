export const CHANGE_STATUS = 'CHANGE_STATUS';

export function changeStatus (value) {
  return {
    type: CHANGE_STATUS,
    value
  };
}
