import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TextField, MenuItem, Dialog, DropDownMenu, FlatButton } from 'material-ui';
import { changeCollabField, setCollabVisibility } from '../actions/collabModal';
import { addCollab } from '../actions';

const styles = {
  width: '40%',
  maxWidth: 'none'
};

const AddCollabModal = ({
  collabModal,
  projectId,
  getActionButtons,
  changeCollabField,
  setCollabVisibility,
  addCollab
}) => (
  <Dialog
    title='Add Collaborators'
    actions={getActionButtons(collabModal, projectId)}
    modal={false}
    open={collabModal.open}
    onRequestClose={() => setCollabVisibility(false)}
    contentStyle={styles}
  >
    <form id="myForm" className='form' onSubmit={() => createTask(taskModal)}>
      <TextField
        value={collabModal.username}
        onChange={changeCollabField('username')}
        hintText="Email Address"
      />
    </form>
  </Dialog>
);

const mapStateToProps = ({ collabModal, project }) => ({
  collabModal,
  projectId: project.project._id
});

const mapDispatchToProps = (dispatch, ownProps) => (
  Object.assign(
    {
      changeCollabField: field => (e, d) => dispatch(
        changeCollabField(field, e.target.value)
      ),

      getActionButtons: (collabModal, projectId) => {
        return [
          <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={() => dispatch(setCollabVisibility(false))}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            onTouchTap={() => {
              dispatch(addCollab(projectId, collabModal));
              dispatch(setCollabVisibility(false));
            }}
          />
        ];
      }
    },
    bindActionCreators({
      setCollabVisibility,
      addCollab
    }, dispatch)
  )
);

export default connect(mapStateToProps, mapDispatchToProps)(AddCollabModal)
