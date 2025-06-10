// src/components/Header.tsx
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
       {/* Left side - Title that stays on left */}
        <Typography variant="h6" component={RouterLink} to="/" sx={{ color: 'inherit', textDecoration: 'none' }}>
          My Portfolio
        </Typography>

        {/* This Box grows and pushes buttons to the right */}
        <Box sx={{ flexGrow: 1 }} />
        <Button color="inherit" component={RouterLink} to="/projects">Projects</Button>
        <Button color="inherit" component={RouterLink} to="/background">Background</Button>
        <Button color="inherit" component={RouterLink} to="/reachout">Contact</Button>
      </Toolbar>
    </AppBar>
  );
}
