import React, { Component } from 'react';
import { withRouter, Link } from 'react-router';
import { connect } from 'react-redux';
import { changeAuthField, signUserIn } from '../../actions';
import { signin } from '../../auth';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, RaisedButton } from 'material-ui';

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
        router.replace('/');
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
          <h2>Sign In</h2><Link to="/signup">Sign up</Link>
          <form onSubmit={
            this.postSignin.bind(this)
          }>
            <TextField
              type="email"
              name="username"
              floatingLabelText="Enter Your Email"
              value={this.props.username}
              onChange={this.onFieldChange.bind(this)}
            /> <br />
            <TextField
              type="password"
              name="password"
              floatingLabelText="Enter Your Password"
              value={this.props.password}
              onChange={this.onFieldChange.bind(this)}
            /> <br />
            <RaisedButton
              className="auth-button"
              type="submit"
              value="sign in"
              primary={true}
              label="Sign In"
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
)(withRouter(Signin));
