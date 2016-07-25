import {editTask, hideModal } from '../actions'
import { connect } from 'react-redux'

const EditTaskModal = ({ task, dispatch }) => (
  <div>
    <p>Delete task {task.title}?</p>
    <button onClick={() => {
      dispatch(editTask(task.title))
        .then(() => {
          dispatch(hideModal())
        })
    }}>
      Yes
    </button>
    <button onClick={() => (hideModal())}>
      Nope
    </button>
  </div>
)

export default connect(
  (state, ownProps) => ({
    data: state
  })
)(EditTaskModal)
