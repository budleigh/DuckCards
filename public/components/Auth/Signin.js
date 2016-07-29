import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { changeAuthField, signUserIn } from '../../actions';
import { signin } from '../../auth';

class Signin extends Component {
  constructor(props) {
    super(props);
  }

  postSignin (e) {
    e.preventDefault();

    const { username, password, router, dispatch } = this.props;

    signin(username, password)
      .then(() => {
        dispatch(signUserIn(username));
        router.replace('/project');
      });
  }

  onFieldChange(e) {
    const action = changeAuthField(e.target.name, e.target.value);
    this.props.dispatch(action);
  }

  render() {
    return (
      <form onSubmit={
        this.postSignin.bind(this)
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
          value="sign in"
        />
      </form>
    );
  }
}

const mapStateToProps = state => state.authForm;

export default connect(
  mapStateToProps
)(withRouter(Signin));
