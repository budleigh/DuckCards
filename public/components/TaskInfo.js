import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { each } from 'lodash';
import { setVisibility, changeField, setMode } from '../actions/taskModal';

const TaskInfo = ({
  task,
  loadTaskIntoModal
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
    </div>
  </div>
);

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return Object.assign(
    {
      loadTaskIntoModal: (task) => {
        each(task, (value, field) => dispatch(changeField(field, value)));
        dispatch(setMode('update'));
        dispatch(setVisibility(true));
      }
    },
    bindActionCreators({ setVisibility }, dispatch)
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskInfo);
