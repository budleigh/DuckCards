import React from 'react';
import { connect } from 'react-redux'
import AddComment from './AddComment';

const Comments = () => (
  <div>
    Comments hahaha
    <AddComment />
  </div>
);

const mapStateToProps = state => state.project;

export default connect()(Comments);