import axios from 'axios';

export const REQUEST_PROJECTS = 'REQUEST_PROJECTS';
export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';

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

export function fetchProjects() {
  return dispatch => {
    return axios.get('/users/projects')
      .then( response => dispatch(receiveProjects(response)) )
      .catch( error => console.log(error) )
  }
}
