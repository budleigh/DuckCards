import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../actions/projects';
import ProjectCreator from './ProjectCreator';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchProjects());
  }

  render () {
    return (
      <div>
        {this.props.projects.map((project) => {
          <div>{ project }</div>
        })}
        <ProjectCreator />
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboard: React.PropTypes.object
};

const mapStateToProps = state => state.dashboard;

export default connect(mapStateToProps)(Dashboard);
