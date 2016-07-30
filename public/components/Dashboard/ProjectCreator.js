import React from 'react';

const ProjectCreator = ({ onCreate }) => {
  return (
    <div>
      Create project
    </div>
    <button onClick={ onCreate }>create</button>
  );
};

export default ProjectCreator;