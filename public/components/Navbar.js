import React from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import showCreateTaskModal from '../actions';
import ModalRoot from './ModalRoot';
import Avatar from 'material-ui/Avatar';
import CreateTaskModal from './CreateTaskModal';
import { bindActionCreators } from 'redux';
import { setVisibility } from '../actions/taskModal';

//this allows an onTouchTap event on some of material-UI's components

injectTapEventPlugin();

class Nav extends React.Component {
  constructor() {
    super();
  }

  render(){

    return (
      <AppBar
        title="Duck Cards"
        className="navBar"
        style={{position: 'fixed'}}
        iconElementRight={
          <div>
            <CreateTaskModal />
            <RaisedButton label="New Task" onTouchTap={() => this.props.setVisibility(true)} />
          </div>
        }
      />
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    setVisibility
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
