import axios from 'axios'

export function signin (username, password) {
  return axios.post('/users/signin', { username: username, password: password})
    .then((response) => {
      localStorage.token = response.data.token;
    });
}

export function getToken () {
  return localStorage.token;
}

export function signout () {
  return delete localStorage.token;
}

export function signup (username, password) {
  return axios.post('/users/signup', { username: username, password: password })
    .then((response) => {
      localStorage.token = response.data.token;
    });
}

export function signedIn () {
  return !!localStorage.token;
}
