export function login () {

}

export function getToken () {
  return localStorage.token;
}

export function logout () {
  return Promise.resolve(3)
    .then(() => {
      delete localStorage.token;
    });
}

export function signup (username, password) {
  return Promise.resolve(3)
    .then(() => {
      localStorage.token = 'hi';
    });
}

export function loggedIn () {
  return !!localStorage.token;
}
