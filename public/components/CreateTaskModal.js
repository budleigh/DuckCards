import React from 'react';
import { partial } from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Dialog from 'material-ui/Dialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import { changeStatus, changeField, setVisibility } from '../actions/taskModal';
import { createTask } from '../actions';

const styles = {
  width: '40%',
  maxWidth: 'none'
};

const CreateTaskModal = ({
  taskModal,
  changeStatus,
  changeField,
  setVisibility,
  createTask
}) => {
  const actions = [
    <FlatButton
      label="Cancel"
      primary={true}
      onTouchTap={() => setVisibility(false)}
    />,
    <FlatButton
      label="Submit"
      primary={true}
      onTouchTap={() => createTask(taskModal)}
    />,
  ];

  return (
    <Dialog
      title="New Task"
      actions={actions}
      modal={false}
      open={taskModal.open}
      onRequestClose={() => setVisibility(false)}
      contentStyle={styles}
    >
      <form id="myForm" className='form' onSubmit={() => createTask(taskModal)}>
        <TextField onChange={partial(changeField, 'taskName')}  hintText="Task name" /><br />
        <TextField onChange={partial(changeField, 'datePicker')} hintText="Due date" /><br />
        <TextField onChange={partial(changeField, 'CategoryChange')} hintText="Category"/><br />
        <TextField onChange={partial(changeField, 'nameChange')} hintText="Name" />
        <div>
          <DropDownMenu
            value={taskModal.value}
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
};

const mapStateToProps = ({ taskModal }) => ({ taskModal });

const mapDispatchToProps = (dispatch, ownProps) => {
  return bindActionCreators({
    changeField,
    changeStatus,
    setVisibility,
    createTask
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateTaskModal)
