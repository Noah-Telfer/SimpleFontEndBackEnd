// src/components/Footer.tsx
import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ mt: 5, py: 2, textAlign: 'center', bgcolor: '#f5f5f5' }}>
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </Typography>
    </Box>
  );
}
