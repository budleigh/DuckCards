import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchProjects, createProject } from '../../actions/projects';
import ProjectCreator from './ProjectCreator';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  onCreate(name) {
    this.props.dispatch(createProject(name));
  }

  render () {
    return (
      <MuiThemeProvider>
        <div className="projects">
          <List>
            {this.props.projects.map((project) => {
              return (<ListItem className="project-list"><Link to={ '/project/' + project._id }>{ project.name }</Link></ListItem>);
            })}
            <ProjectCreator onCreate={this.onCreate.bind(this)} />
          </List>
        </div>
      </MuiThemeProvider>
    );
  }
}

Dashboard.propTypes = {
  dashboard: React.PropTypes.object
};

const mapStateToProps = state => state.dashboard;

export default connect(mapStateToProps)(Dashboard);
