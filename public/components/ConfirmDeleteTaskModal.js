import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dialog, FlatButton } from 'material-ui';
import { deleteTask } from '../actions';
import { closeDeleteTaskModal } from '../actions/confirmDeleteTaskModal';

const ConfirmDeleteTaskModal = ({ modal, deleteTask, closeDeleteTaskModal }) => (
  <Dialog
    title={`Deleting task: ${modal.task.title}`}
    onRequestClose={closeDeleteTaskModal}
    open={modal.open}
  >
    <FlatButton
      label="DELETE"
      primary={true}
      onTouchTap={() => {
        deleteTask(modal.projectId, modal.task._id);
        closeDeleteTaskModal();
      }}
    />
  </Dialog>
)

const mapStateToProps = ({ confirmDeleteTaskModal }) => (
  { modal: confirmDeleteTaskModal }
);

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    deleteTask,
    closeDeleteTaskModal
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmDeleteTaskModal);
