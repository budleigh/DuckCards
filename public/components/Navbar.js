import React from 'react';
import { connect, hashHistory } from 'react-redux';
import { AppBar, RaisedButton, Avatar, FlatButton, IconButton } from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentAdd from 'material-ui/svg-icons/content/add';
import SocialPersonAdd from 'material-ui/svg-icons/social/person-add';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { setVisibility, setMode, clearAllFields } from '../actions/taskModal';
import { setCollabVisibility, clearAllCollabFields } from '../actions/collabModal';
import { Link } from 'react-router';

//this allows an onTouchTap event on some of material-UI's components

injectTapEventPlugin();

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { openCreateTaskModal, openCollabModal } = this.props;

    return (
      <AppBar
        title={this.props.project.project.name}
        className="navBar"
        iconElementLeft={<IconButton containerElement={<Link to="/" />}><ActionHome /></IconButton>}
        iconElementRight={
          <div>
            <IconButton onTouchTap={openCollabModal}><SocialPersonAdd /></IconButton>
            <IconButton onTouchTap={openCreateTaskModal}><ContentAdd /></IconButton>
          </div>
        }
      />
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => ({
  openCreateTaskModal: () => {
    console.log('opening create')
    dispatch(clearAllFields());
    dispatch(setVisibility(true));
    dispatch(setMode('create'));
  },
  openCollabModal: () => {
    console.log('opening collab')
    dispatch(clearAllCollabFields());
    dispatch(setCollabVisibility(true));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
