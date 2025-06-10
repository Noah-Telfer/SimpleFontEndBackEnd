import React from 'react';
import { List, ListItem, ListItemText, Divider, Typography } from '@mui/material';

const sampleProjects = [
  { id: 1, name: "Project A", description: "Description A" },
  { id: 2, name: "Project B", description: "Description B" },
];

export default function ProjectList() {
  return (
    <List>
      {sampleProjects.map(({ id, name, description }) => (
        <React.Fragment key={id}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={<Typography variant="h6">{name}</Typography>}
              secondary={<Typography variant="body2" color="textSecondary">{description}</Typography>}
            />
          </ListItem>
          <Divider component="li" />
        </React.Fragment>
      ))}
    </List>
  );
}