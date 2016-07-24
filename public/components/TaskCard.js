import React from 'react';
import Paper from 'material-ui/Paper';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TaskInfo from './TaskInfo';
import {grey800, grey400, blueGrey500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: grey800,
    borderColor: grey400,
  }
});


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