import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeAuthField } from '../../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  postSignup() {

  }

  onFieldChange(e) {
    const action = changeAuthField(e.target.name, e.target.value);
    this.props.dispatch(action);
  }

  render() {
    return (
      <form onSubmit={
        this.postSignup.bind(this)
      }>
        <input
          type="email"
          name="username"
          placeholder="email"
          value={this.props.username}
          onChange={this.onFieldChange.bind(this)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={this.props.password}
          onChange={this.onFieldChange.bind(this)}
        />
      </form>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps
)(Signup);
