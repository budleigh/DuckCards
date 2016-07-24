import React from 'react';
import Chip from 'material-ui/Chip';
import Checkbox from 'material-ui/Checkbox';

const TaskInfo = ({ title, status, dueDate, category, points, owner }) => {
  return (
    <div>
      <div className="date-status-container">
        <p className="due-date">Due: {dueDate}</p>
        <p className="category">{category}</p>
      </div>
      <p className="task-title">{title}</p>
      <div className="cat-pts-container">
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default TaskInfo;