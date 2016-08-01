import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { TextField, RaisedButton } from 'material-ui';

const ProjectCreator = ({ onCreate }) => {
  let input;

  return (
    <MuiThemeProvider>
      <div>
          <form>
            <input ref={node => { input = node; }} type="text" name="name" placeholder="Project Name" className="project-input" />
          </form>
          <RaisedButton className="new-project-button" onClick={() => {
            onCreate(input.value);
            input.value = '';
          }}
            type="submit"
            primary={true}
            label="Create"
          />
      </div>
    </MuiThemeProvider>
  );
};

export default ProjectCreator;
