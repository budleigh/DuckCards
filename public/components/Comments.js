import React from 'react';
import { connect } from 'react-redux';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import { darkBlack } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import AddComment from './AddComment';

const Comments = ({ task }) => (
  <div>
    <List>
      {task.comments.map((comment) => {
        return (
          <div>
            <ListItem
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>Brendan Lim</span> --
                  I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
          </div>
        )
      })}
    </List>
    <AddComment />
  </div>
);

export default Comments;