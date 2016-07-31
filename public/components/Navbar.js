import React from 'react';
import { connect } from 'react-redux';
import { AppBar, RaisedButton, Avatar, FlatButton } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TaskModal from './TaskModal';
import { setVisibility, setMode } from '../actions/taskModal';

//this allows an onTouchTap event on some of material-UI's components

injectTapEventPlugin();

const style = {
  marginRight: 20
}

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { openCreateTaskModal } = this.props;

    return (
      <AppBar
        title={"Falafel.io"}
        className="navBar"
        style={{position: 'fixed'}}
        iconElementRight={
          <div style={style} >
            <TaskModal />
            <RaisedButton label="Add New Task" onTouchTap={openCreateTaskModal} />
          </div>
        }
      />
    );
  }
}

const mapStateToProps = state => state;
const mapDispatchToProps = (dispatch) => ({
  openCreateTaskModal: () => {
    dispatch(setVisibility(true));
    dispatch(setMode('create'));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
