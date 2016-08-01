import React from 'react';
import { ItemTypes } from '../constants';
import { DropTarget } from 'react-dnd';
import { find } from 'lodash';
import TaskCard from './TaskCard';
import AddTask from './AddTask';
import { updateTask } from '../actions';
import { store } from '../index';

const columnTarget = {
  drop(props, monitor) {
    const state = store.getState();
    const projectId = state.project.project._id;
    const tasks = state.project.project.tasks;
    const task = find(tasks, { _id: monitor.getItem().id });
    const newTask = Object.assign({}, task, { status: props.columnName });

    store.dispatch(updateTask(projectId, newTask));

    return {
      name: 'Column'
    };
  },

  hover(props, monitor) {
    const item = monitor.getItem();
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    canDrop: monitor.canDrop(),
    isOver: monitor.isOver(),
    itemType: monitor.getItemType()
  };
}

const TaskStatusColumn = ({
  tasks = [],
  columnName,
  connectDropTarget,
  canDrop,
  isOver
}) => {
  const isActive = canDrop && isOver;

  const columnTitleClassName = isActive ?
    'column-title-active' :
    'column-title';

  return connectDropTarget(
    <div className="task-column">
      <div className={columnTitleClassName}>
        <p>{columnName}</p>
      </div>
      {tasks.map((task, index) =>
        <TaskCard task={task} key={index} />
      )}
    </div>
  );
};

export default DropTarget(
  ItemTypes.TASK,
  columnTarget,
  collect
)(TaskStatusColumn);
