import React from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import TaskStatusColumn from './TaskStatusColumn';

// container for all task columns and tasks
class Tasks extends React.Component {
  render() {
    const tasksByStatus = groupBy(this.props.data, 'status');

    return (
      <div className="task-container">
        <TaskStatusColumn tasks={tasksByStatus['To Do']} columnName="To-Dos" />
        <TaskStatusColumn tasks={tasksByStatus['In Progress']} columnName="In Progress" />
        <TaskStatusColumn tasks={tasksByStatus['Completed']} columnName="Completed" />
      </div>
    );
  }
}

export default Tasks;

