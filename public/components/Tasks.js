import React from 'react';
import TaskStatusColumn from './TaskStatusColumn';

// container for all task columns and tasks
class Tasks extends React.Component {
  render() {
    // function to filter all tasks into appropriate categories
    function filterTasks(tasks = []) {
      return tasks.reduce(function(memo, task) {
        if (task.status === "To Do") {
          memo.todos.push(task);
        } else if (task.status === "In Progress") {
          memo.inProgress.push(task)
        } else {
          memo.completed.push(task)
        }
        return memo;
      }, {
        todos: [],
        inProgress: [],
        completed: []
      });
    };

    // tasks are passed as "data" on props
    const filteredTasks = filterTasks(this.props.data);
  
    // es6 shorthand for assigning variables to corresponding properties on filteredTasks object
    const {todos, inProgress, completed} = filteredTasks;

    return (
      <div className="task-container">
        <TaskStatusColumn tasks={todos} columnName="To-Dos" />
        <TaskStatusColumn tasks={inProgress} columnName="In Progress" />
        <TaskStatusColumn tasks={completed} columnName="Completed" />
      </div>
    );
  }
}

export default Tasks;

