import {createTask, hideModal } from '../actions'
import { connect } from 'react-redux'

const CreateTaskModal = ({ task, dispatch }) => (
  <div>
    <p>Create task {task.title}?</p>
    <button onClick={() => {
      dispatch(createTask(task))
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
)(CreateTaskModal)
