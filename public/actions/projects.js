import axios from 'axios';

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const LOAD_PROJECT = 'LOAD_PROJECT';

export function requestProjects() {
  return {
    type: REQUEST_PROJECTS
  };
}

export function receiveProjects(response) {
  return {
    type: RECEIVE_PROJECTS,
    projects: response.data,
    receivedAt: Date.now()
  };
}

export function loadProject(response) {
  return {
    type: LOAD_PROJECT,
    data: response.data
  };
}

export function fetchProjects() {
  return dispatch => {
    return axios.get('/users/projects')
      .then( response => dispatch(receiveProjects(response)) )
      .catch( error => console.log(error) );
  };
}

export function fetchProject(projectId) {
  return dispatch => {
    return axios.get('/projects/' + projectId)
      .then( response => dispatch(loadProject(response)) )
      .catch( error => console.log(error) );
  }
}

export function createProject(name) {
  return dispatch => {
    return axios.post('/projects', { projectName: name })
      .then( response => dispatch(fetchProjects()) )
      .catch( error => console.log(error) );
  }
}
