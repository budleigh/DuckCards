// These are regular React components we will write soon
import CreateTaskModal from './CreateTaskModal'
import EditTaskModal from './EditTaskModal'
import DeleteTaskModal from './DeleteTaskModal'
import { connect } from 'react-redux'
import React from 'react';

const MODAL_COMPONENTS = {
  'CREATE_TASK': CreateTaskModal,
  'EDIT_TASK': EditTaskModal,
  'DELETE_TASK': DeleteTaskModal
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return <span /> // after React v15 you can return null here
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal {...modalProps} />
}

export default connect(
  state => state.modal
)(ModalRoot)