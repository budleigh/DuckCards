import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { changeCommentField, postComment } from '../actions';
import { connect } from 'react-redux';

class AddComment extends React.Component {
  constructor(props) {
    super(props);
  }

  commentOnTask() {
    let { comment } = this.props;
    let { project } = this.props;
    let { dispatch } = this.props;
    let taskId = comment.task._id;
    let projectId = project.project._id;
    dispatch(postComment(projectId, taskId, comment.comment));
  }

  onCommentChange(e) {
    const action = changeCommentField(this.props.task, e.target.value);
    this.props.dispatch(action);
  }

  render() {
    var commentField;

    return (
      <div>
        <TextField
          ref={field => { commentField = field; }}
          hintText="Add comment"
          multiLine={true}
          rows={2}
          rowsMax={6}
          onChange={this.onCommentChange.bind(this)}
        />
        <RaisedButton label="Comment" primary={true} onClick={(e) => {
          this.commentOnTask();
          commentField.input.refs.input.value = '';  // what the hell
        }}
        />
      </div>
    );
  }
}

const mapStateToProps = state => state;

export default connect(
  mapStateToProps
)(AddComment);
