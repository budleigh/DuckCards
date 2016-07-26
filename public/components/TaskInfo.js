import React from 'react';

// es6 shorthand for giving corresponding variable names to props
// this component contains the title, status, dueDate, category, and owner
const TaskInfo = ({title, status, dueDate, category, owner}) => {
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
