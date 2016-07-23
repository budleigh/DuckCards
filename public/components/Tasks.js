import React from 'react';
import TaskStatusColumn from './TaskStatusColumn';


class Tasks extends React.Component {
  render() {

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

    console.log(this.props)
    const filteredTasks = filterTasks(this.props.data);

    console.log(tasks);

    const filteredTasks = filterTasks(tasks);

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

