import React, { Component } from 'react';
import { connect } from 'react-redux';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  postSignup() {

  }

  onFieldChange(e) {
    console.log(this.props.dispatch)
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
