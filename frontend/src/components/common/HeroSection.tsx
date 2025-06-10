// src/components/HeroSection.tsx
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function HeroSection() {
  return (
    <Box
      sx={{
        py: 10,
        background: 'linear-gradient(135deg, #F0FAFC 0%, #E0F7FA 100%)',
        textAlign: 'center',
      }}
    >
      <Container>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Explore my projects, background, and get in touch.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={RouterLink}
          to="/projects"
        >
          View Projects
        </Button>
      </Container>
    </Box>
  );
}
