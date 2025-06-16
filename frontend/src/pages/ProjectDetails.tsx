import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const dummyProjects = [
  { id: '1', title: 'Project One', description: 'Description for project 1', link: '#' },
  { id: '2', title: 'Project Two', description: 'Description for project 2', link: '#' },
  { id: '3', title: 'Project Three', description: 'Description for project 3', link: '#' },
  // add more if needed
];

export default function ProjectDetails() {
  const { id } = useParams();
  const project = dummyProjects.find(p => p.id === id);

  if (!project) {
    return <Typography>Project not found</Typography>;
  }

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4">{project.title}</Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>{project.description}</Typography>
      <Link component={RouterLink} to="/projects" underline="hover">
            Back to Projects
    </Link>

    </Container>
  );
}
