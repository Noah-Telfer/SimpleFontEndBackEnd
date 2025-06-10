import React from 'react';
import { Container, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import Grid from '@mui/material/Grid';

const projects = [
  { id: 1, title: 'Project One', description: 'A brief description of Project One.', link: '#' },
  { id: 2, title: 'Project Two', description: 'A brief description of Project Two.', link: '#' },
  { id: 3, title: 'Project Three', description: 'A brief description of Project Three.', link: '#' },
  { id: 4, title: 'Project Four', description: 'A brief description of Project Four.', link: '#' },
  { id: 5, title: 'Project Five', description: 'A brief description of Project Five.', link: '#' },
  { id: 6, title: 'Project Six', description: 'A brief description of Project Six.', link: '#' },
  { id: 7, title: 'Project Seven', description: 'A brief description of Project Seven.', link: '#' },
  { id: 8, title: 'Project Eight', description: 'A brief description of Project Eight.', link: '#' },
  { id: 9, title: 'Project Nine', description: 'A brief description of Project Nine.', link: '#' },
  { id: 10, title: 'Project Ten', description: 'A brief description of Project Ten.', link: '#' },
];

export default function Projects() {
    return (
        <Container sx={{ marginTop: 4 }}>
            <Typography variant="h4" gutterBottom>
                Projects
            </Typography>
            <Grid container direction="column" spacing={4}>
                {projects.map(project => (
                    <Grid key={project.id} >
                        <Card sx={{ minHeight: 200, padding: 2 }}>
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    {project.title}
                                </Typography>
                                <Typography variant="body1">{project.description}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );

}