import React from 'react'
import AppBar from 'material-ui'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import showCreateTaskModal from '../actions'
import ModalRoot from './ModalRoot'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import DropDownMenu from 'material-ui/DropDownMenu'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'

//this allows an onTouchTap event on some of material-UI's compnents

injectTapEventPlugin();

const styles = {
  width: '40%',
  maxWidth: 'none',
};

class Nav extends React.Component {

  constructor() {
    super();
    this.state = {open: false, value: 1, taskName: '', datePicker: '', CategoryChange: '', nameChange: '', status: "To Do"}
  };

  render(){

    //function that sets the state status based on the value given by the dropdown menu

    const handleChange = (event, key, value) => {
      if(value == 1){
        this.setState({status: 'To Do'});
      }
      else if(value == 2){
        this.setState({status: 'In Progress'});
      } else {
        this.setState({status: 'Completed'});
      }
    this.setState({value: value});
    };

    //this function handles submitting the properties in our state via createTask

    const handleSubmit = () => {
      this.props.actions.createTask({
        title: this.state.taskName,
        dueDate: this.state.datePicker,
        category: this.state.CategoryChange,
        owner: this.state.nameChange,
        status: this.state.status
      });
      handleClose();
    };

    //These two functions manage the dialog popup based on the open prop in state

    const handleOpen = () => {
      this.setState({open: true});
    };

    const handleClose = () => {
      this.setState({open: false});
    };

    //These functions set the state of the forms with the value of the forms

    const handleTaskNameChange = (event) => {
      this.setState({taskName: event.target.value});
    };

    const handleDatePickerChange = (event) => {
      this.setState({datePicker: event.target.value});
    };

    const handleCategoryChange = (event) => {
      this.setState({CategoryChange: event.target.value});
    };

    const handleNameChange = (event) => {
      this.setState({nameChange: event.target.value});
    };

    //these actions are buttons that either close the dialog box or submit the form inside

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={handleSubmit}
      />,
    ];

    //this the the rendered nav bar

    return (
      <AppBar
        title="Duck Cards"
        className="navBar"
        style={{position: 'fixed'}}
        iconElementRight={
          <div>
            <RaisedButton label="New Task" onTouchTap={handleOpen} />
            <Dialog
             title="New Task"
             actions={actions}
             modal={false}
             open={this.state.open}
             onRequestClose={handleClose}
             contentStyle={styles}
            >
             <form id="myForm" className='form' onSubmit={handleSubmit}>
               <TextField onChange={handleTaskNameChange}  hintText="Task name" /><br />
               <TextField onChange={handleDatePickerChange} hintText="Due date" /><br />
               <TextField onChange={handleCategoryChange} hintText="Category"/><br />
               <TextField onChange={handleNameChange} hintText="Name" />
                 <div>
                   <DropDownMenu
                    value={this.state.value}
                    onChange={handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                  >
                     <MenuItem value={1} primaryText="To Do" />
                     <MenuItem value={2} primaryText="In Progress" />
                     <MenuItem value={3} primaryText="Completed" />
                   </DropDownMenu>
                </div>
             </form>
            </Dialog>
          </div>
        }
      />
    )
  }
}

export default Nav;
