import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchProjects, createProject } from '../../actions/projects';
import ProjectCreator from './ProjectCreator';

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
      <div>
        Hi
        {this.props.projects.map((project) => {
          return (<div><Link to={ '/project/' + project._id }>{ project.name }</Link></div>);
        })}
        <ProjectCreator onCreate={this.onCreate.bind(this)} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboard: React.PropTypes.object
};

const mapStateToProps = state => state.dashboard;

export default connect(mapStateToProps)(Dashboard);
