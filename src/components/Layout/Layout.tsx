import { ReactNode } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import styles from './styles';
import { Header } from '../Header/Header.tsx';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box sx={styles.container}>
      <CssBaseline />
      <Header />
      <Container component="main" sx={styles.pageContainer}>
        {children}
      </Container>
    </Box>
  );
}
