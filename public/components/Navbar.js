import React from 'react'
import { AppBar } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'

injectTapEventPlugin();

class Nav extends React.Component {
  render(){
    return (
  <AppBar
    title="Duck Cards"
    className="navBar"
    style={{position: 'fixed'}}
    iconElementRight={
      <div>
        <RaisedButton label="New Task"  />
        <Dialog
            title="Add new task!"
            modal={false}
          />
      </div>
    }
  />
  )}
}


export default Nav