import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';
import { connect } from 'react-redux';
import { changeAuthField } from '../../actions';
import { signup } from '../../auth';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, RaisedButton } from 'material-ui';

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
      <MuiThemeProvider>
        <div className="auth">
          <h2>Sign Up</h2><Link to="/signin">Sign in</Link>
          <form onSubmit={
            this.postSignup.bind(this)
          }>
            <TextField
              type="email"
              name="username"
              floatingLabelText="To Sign Up Enter Your Email"
              value={this.props.username}
              onChange={this.onFieldChange.bind(this)}
            /> <br />
            <TextField
              type="password"
              name="password"
              floatingLabelText="Enter Your New Password"
              value={this.props.password}
              onChange={this.onFieldChange.bind(this)}
            /> <br />
            <RaisedButton
              className="auth-button"
              type="submit"
              value="sign up"
              primary={true}
              label="Sign Up"
            />
          </form>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => state.authForm;

export default connect(
  mapStateToProps
)(withRouter(Signup));
