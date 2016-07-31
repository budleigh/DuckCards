import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { changeCommentField } from '../actions';
import { connect } from 'react-redux';

class AddComment extends React.Component {
  constructor(props) {
    super(props);
  }

  onCommentChange(e) {
    const action = changeCommentField(this.props.task, e.target.value);
    this.props.dispatch(action);
  }

  render() {
    return (
      <div>
        <TextField
          hintText="Add comment"
          multiLine={true}
          rows={2}
          rowsMax={6}
          onChange={this.onCommentChange.bind(this)}
        />
        <RaisedButton label="Comment" primary={true} />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps
)(AddComment);
