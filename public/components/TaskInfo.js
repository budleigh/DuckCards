import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { each } from 'lodash';
import { setVisibility, changeField, setMode } from '../actions/taskModal';
import { openDeleteTaskModal } from '../actions/confirmDeleteTaskModal';
import Comments from './Comments';
import Collapsible from 'react-collapsible';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete-forever';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';

const TaskInfo = ({
  task,
  projectId,
  loadTaskIntoModal,
  openDeleteTaskModal
}) => (
  <div>
    <div className="date-status-container">
      <p className="due-date">Due: {task.dueDate}</p>
      <p className="category">{task.category}</p>
      <IconButton onClick={() => loadTaskIntoModal(task)} tooltip="Edit Task" className="edit-icon">
        <EditIcon></EditIcon>
      </IconButton>
      <IconButton onClick={() => openDeleteTaskModal(task, projectId)} tooltip="Delete Task" className="delete-icon">
        <DeleteIcon></DeleteIcon>
      </IconButton>
    </div>
    <p className="task-title">{task.title}</p>
    <div className="task-bottom">
      <p className="task-owner">{task.owner}</p>
      <Collapsible triggerText="Comments">
        <Comments task={task} />
      </Collapsible>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  projectId: state.project.project._id
});

const mapDispatchToProps = (dispatch) => {
  return Object.assign(
    {
      loadTaskIntoModal: (task) => {
        each(task, (value, field) => dispatch(changeField(field, value)));
        dispatch(setMode('update'));
        dispatch(setVisibility(true));
      }
    },
    bindActionCreators({ setVisibility, openDeleteTaskModal }, dispatch)
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskInfo);
