import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { each } from 'lodash';
import { setVisibility, changeField, setMode } from '../actions/taskModal';
import { openDeleteTaskModal } from '../actions/confirmDeleteTaskModal';
import Comments from './Comments';

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
    </div>
    <p className="task-title">{task.title}</p>
    <div className="cat-pts-container">
      <p>{task.owner}</p>
      <button onClick={() => loadTaskIntoModal(task)}>Edit</button>
      <button onClick={() => openDeleteTaskModal(task, projectId)}>
        Delete
      </button>
    </div>
    <Comments task={task} />
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
