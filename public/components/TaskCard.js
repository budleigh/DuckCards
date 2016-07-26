import React from 'react';
import TaskInfo from './TaskInfo';

class TaskCard extends React.Component {
  render() {
    const { task } = this.props;
    return (
      <div className="task-card-container">
        <TaskInfo
          title={ task.title }
          status={ task.status }
          dueDate={ task.dueDate }
          category={ task.category }
          owner={ task.owner } />
      </div>
    );
  }
}

export default TaskCard;
