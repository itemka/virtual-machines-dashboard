import { ReactNode } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import { Header } from '../Header/Header.tsx';
import styles from './styles';

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
