import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField, MenuItem, Dialog, DropDownMenu, FlatButton } from 'material-ui';
import { changeStatus, changeField, setVisibility } from '../actions/taskModal';
import { createTask, updateTask } from '../actions';

const styles = {
  width: '40%',
  maxWidth: 'none'
};

const CreateTaskModal = ({
  taskModal,
  projectId,
  getActionButtons,
  changeStatus,
  changeField,
  setVisibility,
  createTask
}) => (
  <Dialog
    title="New Task"
    actions={getActionButtons(taskModal, projectId)}
    modal={false}
    open={taskModal.open}
    onRequestClose={() => setVisibility(false)}
    contentStyle={styles}
  >
    <form id="myForm" className='form' onSubmit={() => createTask(taskModal)}>
      <TextField
        value={taskModal.title}
        onChange={changeField('title')}
        hintText="Task name"
      /><br />
      <TextField
        value={taskModal.dueDate}
        onChange={changeField('dueDate')}
        hintText="Due date"
      /><br />
      <TextField
        value={taskModal.category}
        onChange={changeField('category')}
        hintText="Category"/>
      <br />
      <TextField
        value={taskModal.owner}
        onChange={changeField('owner')}
        hintText="Owner"
      />
      <div>
        <DropDownMenu
          value={taskModal.dropdownValue}
          onChange={(e, k, value) => changeStatus(value)}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="To Do" />
          <MenuItem value={2} primaryText="In Progress" />
          <MenuItem value={3} primaryText="Completed" />
        </DropDownMenu>
      </div>
    </form>
  </Dialog>
);

const mapStateToProps = ({ taskModal, project }) => ({
  taskModal,
  projectId: project.project._id
});

const mapDispatchToProps = (dispatch, ownProps) => (
  Object.assign(
    {
      changeField: field => e => dispatch(changeField(field, e.target.value)),

      getActionButtons: (taskModal, projectId) => {
        // depending on the modal mode, generate a button to either
        // create a new task or update an existing task. the same
        // data will be sent to the server in either case; whatever's
        // in the modal input boxes
        const submitTask = taskModal.mode === 'create' ?
          createTask :
          updateTask;

        return [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={() => dispatch(setVisibility(false))}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            onTouchTap={() => {
              dispatch(submitTask(projectId, taskModal));
              dispatch(setVisibility(false));
            }}
          />
        ];
      }
    },
    bindActionCreators({
      changeStatus,
      setVisibility,
      createTask
    }, dispatch)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskModal)
