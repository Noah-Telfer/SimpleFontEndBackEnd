import React from 'react';
import { Container, Card, CardContent, CardActions, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchProjects } from '../services/projectService';
import { ProjectSummary } from '../types/ProjectSummary';
import Grid from'@mui/material/Grid';
import Item from '@mui/material/Grid';
export default function Projects() {

  const [projects, setProjects] = useState<ProjectSummary[]>([]);

  useEffect(() => {
    fetchProjects().then(setProjects).catch(console.error);
  }, []);
    return (
        <Grid container direction="column" spacing={4}>
        {projects.map(project => (
            <Grid   key={project.id}  >
                <Item>
                    <Card sx={{ minHeight: 200, padding: 2 }}>
                        <CardContent>
                            <Typography
                                component={RouterLink}
                                to={`/projects/${project.id}`}
                                variant="h5"
                                gutterBottom
                                sx={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                {project.title}
                            </Typography>
                            <Typography variant="body1">{project.description}</Typography>
                        </CardContent>
                    </Card>
                </Item>
            </Grid>
        ))}
        </Grid>
    );

}