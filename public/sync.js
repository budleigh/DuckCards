import io from 'socket.io-client';
import { fetchProject } from './actions/projects';
import { store } from './index';

let socket = io();

socket.on('remote update', function (projectId) {
  if (store.getState().project.project._id === projectId) {
    // if we are working on the project that updates, force
    // a refresh to load the edits
    // thought must be applied to how this is handled client side
    // in the case of someone actively editing something that
    // changes....?
    store.dispatch(fetchProject(projectId));
  }
});

export function ping (projectId) {
  socket.emit('update', projectId);
}

export default socket;