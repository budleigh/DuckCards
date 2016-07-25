import {deleteTask, hideModal } from '../actions'
import { connect } from 'react-redux'

const DeleteTaskModal = ({ task, dispatch }) => (
  <div>
    <p>Delete task {task.title}?</p>
    <button onClick={() => {
      dispatch(deleteTask(task.title))
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
)(DeleteTaskModal)
