import React from 'react';

const ProjectCreator = ({ onCreate }) => {
  let input;

  return (
    <div>
      Create project
        <form>
          <input ref={node => {
             input = node;
           }} />
        </form>
        <button onClick={() => {
          onCreate(input.value);
          input.value = '';
        }}>
          create
        </button>
    </div>
  );
};

export default ProjectCreator;
