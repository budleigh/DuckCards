import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { each } from 'lodash';
import { setVisibility, changeField } from '../actions/taskModal';

const TaskInfo = ({
  title,
  status,
  dueDate,
  category,
  owner,
  handleEditTask
}) => (
  <div>
    <div className="date-status-container">
      <p className="due-date">Due: {dueDate}</p>
      <p className="category">{category}</p>
    </div>
    <p className="task-title">{title}</p>
    <div className="cat-pts-container">
      <p>{owner}</p>
      <button onClick={handleEditTask}>edit</button>
    </div>
  </div>
);

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
  return Object.assign(
    {
      loadTaskIntoModal: (task) => {
        each(task, (value, field) => changeField(field, value))
      }
    },
    bindActionCreators({ setVisibility }, dispatch)
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskInfo);
