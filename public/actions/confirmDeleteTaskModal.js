export const OPEN_DELETE_TASK_MODAL = 'OPEN_DELETE_TASK_MODAL';
export const CLOSE_DELETE_TASK_MODAL = 'CLOSE_DELETE_TASK_MODAL';

export function openDeleteTaskModal (task, projectId) {
  return {
    type: OPEN_DELETE_TASK_MODAL,
    task,
    projectId
  };
}

export function closeDeleteTaskModal () {
  return {
    type: CLOSE_DELETE_TASK_MODAL
  };
}
