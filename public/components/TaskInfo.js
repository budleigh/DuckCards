import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { each } from 'lodash';
import { setVisibility, changeField } from '../actions/taskModal';

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
      <button onClick={() => loadTaskIntoModal(task)}>edit</button>
    </div>
  </div>
);

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return Object.assign(
    {
      loadTaskIntoModal: (task) => {
        each(task, (value, field) => dispatch(changeField(field, value)));
        dispatch(setVisibility(true));
      }
    },
    bindActionCreators({ setVisibility }, dispatch)
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskInfo);
