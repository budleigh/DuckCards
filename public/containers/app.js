import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { render } from 'react-dom';

import {
  fetchTasks, receiveTasks,
  fetchTasksIfNeeded
} from '../actions'
import '../store/configureStore'

import { bluegrey500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import * as Spacing from 'material-ui/styles/spacing';

import Tasks from '../components/Tasks.js';
import Navbar from '../components/Navbar.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.requestTasks = this.requestTasks.bind(this)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchTasksIfNeeded())
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data){
      const { dispatch, data } = nextProps
      dispatch(fetchTasksIfNeeded())
    }
  }

  requestTasks() {
    const { dispatch, data } = this.props
    dispatch(fetchTasks())
  }

  addTask() {
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
          <Navbar />
          <Tasks data={ this.props.data } />
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => dispatch

export default connect(mapStateToProps)(App)