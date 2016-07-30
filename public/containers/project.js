import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { render } from 'react-dom';
import { fetchProject } from '../actions/projects';
import {
  fetchTasks, receiveTasks,
  fetchTasksIfNeeded, createTask
} from '../actions'

import * as Actions from '../actions'

import '../store/configureStore'

import { bluegrey500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Spacing from 'material-ui/styles/spacing';

import Tasks from '../components/Tasks.js';
import Navbar from '../components/Navbar.js';

class Project extends Component {
  constructor(props) {
    super(props)
    this.requestTasks = this.requestTasks.bind(this)
  }

  componentWillMount() {
    this.loadProject();
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchTasksIfNeeded())
    this.requestTasks();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data){
      const { dispatch, data } = nextProps
      dispatch(fetchTasksIfNeeded())
    }
  }

  loadProject() {
    const { dispatch } = this.props;
    dispatch(fetchProject(this.props.params.projectId));
  }

  requestTasks() {
    const { dispatch, data } = this.props
    dispatch(fetchTasks(this.props.project._id))
  }

  addTask(task) {
    dispatch(createTask(task))
  }

  modifyTask() {
  }

  render() {
    const muiTheme = getMuiTheme({
      palette: { primary1Color:"blueGrey500" },
      position: {}
    });
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <Navbar data={ this.props.data } actions={ this.props.actions } />
          <Tasks data={ this.props.project.tasks } actions={ this.props.actions } />
        </div>
      </MuiThemeProvider>
    )
  }
}

Project.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  project: PropTypes.object.isRequired
}


const mapStateToProps = state => state.project

//pass actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project)
