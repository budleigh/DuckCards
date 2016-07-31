import React, { PropTypes } from 'react';
import { DragSource } from 'react-dnd';
import { ItemTypes } from '../constants';
import TaskInfo from './TaskInfo';

const taskSource = {
  beginDrag(props) {
    return {
      id: props.task._id
    };
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

class TaskCard extends React.Component {
  render() {
    const { task, connectDragSource } = this.props;
    return connectDragSource(
      <div className="task-card-container">
        <TaskInfo task={task} />
      </div>
    );
  }
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

export default DragSource(ItemTypes.TASK, taskSource, collect)(TaskCard);
