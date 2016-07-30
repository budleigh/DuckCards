import React from 'react';
import TaskCard from './TaskCard';
import AddTask from './AddTask';

// es6 shorthand for giving corresponding variable names to props
const TaskStatusColumn = ({tasks = [], columnName}) => {
  return (
    <div className="task-column">
      <div className="column-title">
        <p>{columnName}</p>
      </div>
      {tasks.map((task, index) =>
        <TaskCard task={task} key={index} />
      )}
    </div>
  );
};

export default TaskStatusColumn;
