// src/components/Layout.tsx
import { Container } from '@mui/material';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container sx={{ mt: 4, minHeight: '80vh' }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}
