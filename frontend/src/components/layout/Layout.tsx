// src/components/Layout.tsx
import { Container } from '@mui/material';
import Header from '../common/Header';
import Footer from '../common/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
        <Container sx={{ mt: 4, minHeight: '80vh' }}>
          <Outlet />    
        </Container>
      <Footer />
    </>
  );
}
