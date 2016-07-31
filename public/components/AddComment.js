import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class AddComment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Add comment"
          multiLine={true}
          rows={2}
          rowsMax={6}
        />
        <RaisedButton label="Comment" primary={true} />
      </div>
    );
  }
}

export default AddComment;
