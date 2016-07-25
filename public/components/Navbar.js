import React from 'react'
import { AppBar } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import showCreateTaskModal from '../actions'
import ModalRoot from './ModalRoot'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import { Field, reduxForm } from 'redux-form'
import DatePicker from 'material-ui/DatePicker'
import DropDownMenu from 'material-ui/DropDownMenu'
import TextField from 'material-ui/TextField'
import MenuItem from 'material-ui/MenuItem'

injectTapEventPlugin();

const styles = {
  width: '40%',
  maxWidth: 'none',
};

class Nav extends React.Component {

  constructor() {
    super();
    this.state = {open: false, value: 1, taskName: '', datePicker:'', CategoryChange: '', nameChange: '', status: "To Do"}
  };

  render(){
    const handleChange = (e,i,v) => {
      if(v == 1){
        this.setState({status: 'To Do'});
      }
      else if(v == 2){
        this.setState({status: 'In Progress'});
      } else {
        this.setState({status: 'Completed'});
      }
    this.setState({value: v})

    }

    const handleSubmit = () => {
      this.props.actions.createTask({title: this.state.taskName, dueDate: this.state.datePicker, category: this.state.CategoryChange, owner: this.state.nameChange, status: this.state.status})
      handleClose()
    };

    const handleOpen = () => {
      console.log("open")
      this.setState({open: true});
    };

    const handleClose = () => {
      console.log("close")
      this.setState({open: false});
    };

    const handleTaskNameChange = (e) => {
      this.setState({taskName: e.target.value})
    }

    const handleDatePickerChange = (e) => {
      this.setState({datePicker: e.target.value})
    }

    const handleCategoryChange = (e, i, v) => {
      this.setState({CategoryChange: e.target.value})
    }

    const nameChange = (e) => {
      this.setState({nameChange: e.target.value})
    }

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
               <TextField onChange={nameChange} hintText="Name" />
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




export default Nav