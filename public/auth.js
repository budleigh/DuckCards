export function signin () {
  return Promise.resolve({ token: 'hi' })
    .then(({ token }) => {
      localStorage.token = token;
    });
}

export function getToken () {
  return localStorage.token;
}

export function signout () {
  return Promise.resolve(3)
    .then(() => {
      delete localStorage.token;
    });
}

export function signup (username, password) {
  return Promise.resolve(3)
    .then(() => {

    });
}

export function signedIn () {
  return !!localStorage.token;
}
