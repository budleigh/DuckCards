import React from 'react';
import { connect } from 'react-redux';
import { AppBar, RaisedButton, Avatar, FlatButton } from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import showCreateTaskModal from '../actions';
import ModalRoot from './ModalRoot';
import CreateTaskModal from './CreateTaskModal';
import { bindActionCreators } from 'redux';
import { setVisibility } from '../actions/taskModal';
import { createTask } from '../actions';

//this allows an onTouchTap event on some of material-UI's components

injectTapEventPlugin();

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  getModalActions() {
    return {
      closeModal: <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={() => this.props.setVisibility(false)}
      />,

      createTask: <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={() => this.props.createTask(this.props.project.project._id, this.props.taskModal)}
      />
    };
  }

  render() {
    const { closeModal, createTask } = this.getModalActions();

    return (
      <AppBar
        title="Duck Cards"
        className="navBar"
        style={{position: 'fixed'}}
        iconElementRight={
          <div>
            <CreateTaskModal actions={[closeModal, createTask]}/>
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
    setVisibility,
    createTask
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
