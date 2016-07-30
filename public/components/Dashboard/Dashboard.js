import React, { Component } from 'react';
import { connect } from 'react-redux';

class Dashboard extends Component {
  constructor() {
    super(props);
  }
}

Dashboard.propTypes = {
  dashboard: React.PropTypes.object
};

const mapStateToProps = state => state.dashboard;

export default connect(mapStateToProps)(Project);
