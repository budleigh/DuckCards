import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { changeAuthField } from '../../actions';
import { signup } from '../../auth';

class Signup extends Component {
  constructor(props) {
    super(props);
  }

  postSignup (e) {
    e.preventDefault();

    const { username, password, router } = this.props;

    signup(username, password)
      .then(() => {
        router.replace('/signin');
      });
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
        <input
          type="submit"
          value="sign up"
        />
      </form>
    );
  }
}

const mapStateToProps = state => state.authForm;

export default connect(
  mapStateToProps
)(withRouter(Signup));
