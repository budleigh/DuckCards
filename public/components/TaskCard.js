import React from 'react';
import TaskInfo from './TaskInfo';

class TaskCard extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <div className="task-card-container">
        <TaskInfo task={task} />
      </div>
    );
  }
}

export default TaskCard;
